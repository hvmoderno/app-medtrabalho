#!/usr/bin/env python3
"""Servidor local de desenvolvimento — envia Cache-Control: no-store para que o
navegador nunca sirva versão velha durante os testes.  Uso:
    python3 tools/servir.py [porta]
"""
import sys, os
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=RAIZ, **kw)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Accept-Ranges', 'bytes')
        super().end_headers()

    def send_head(self):
        """Atende requisições Range (206).

        O SimpleHTTPRequestHandler ignora o cabeçalho Range e devolve 200 com o
        arquivo inteiro. Isso torna o áudio não navegável: o player não consegue
        adiantar nem retomar de onde parou, e o teste local mostraria um defeito
        que não existe em produção — o GitHub Pages responde 206 corretamente.
        """
        faixa = self.headers.get('Range')
        if not faixa:
            return super().send_head()

        caminho = self.translate_path(self.path)
        if os.path.isdir(caminho) or not os.path.exists(caminho):
            return super().send_head()

        try:
            ini, fim = faixa.split('=')[1].split('-')
            tam = os.path.getsize(caminho)
            ini = int(ini) if ini else 0
            fim = int(fim) if fim else tam - 1
            fim = min(fim, tam - 1)
            if ini > fim:
                self.send_error(416, 'Faixa inválida')
                return None
        except (ValueError, IndexError):
            return super().send_head()

        f = open(caminho, 'rb')
        f.seek(ini)
        self.send_response(206)
        self.send_header('Content-Type', self.guess_type(caminho))
        self.send_header('Content-Range', f'bytes {ini}-{fim}/{tam}')
        self.send_header('Content-Length', str(fim - ini + 1))
        self.end_headers()
        # Entrega só o trecho pedido.
        restante = fim - ini + 1
        while restante > 0:
            bloco = f.read(min(65536, restante))
            if not bloco:
                break
            self.wfile.write(bloco)
            restante -= len(bloco)
        f.close()
        return None
    def log_message(self, fmt, *args):
        if '404' in (fmt % args):
            super().log_message(fmt, *args)

porta = int(sys.argv[1]) if len(sys.argv) > 1 else 8732
# '--rede' abre para a rede local (para abrir no iPad); sem ela, só nesta máquina
rede = '--rede' in sys.argv
host = '0.0.0.0' if rede else '127.0.0.1'
if rede:
    import socket
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 80)); ip = s.getsockname()[0]
    except Exception:
        ip = '127.0.0.1'
    finally:
        s.close()
    print(f'servindo {RAIZ}', flush=True)
    print(f'  neste Mac:  http://127.0.0.1:{porta}', flush=True)
    print(f'  no iPad:    http://{ip}:{porta}', flush=True)
else:
    print(f'servindo {RAIZ} em http://127.0.0.1:{porta}', flush=True)
ThreadingHTTPServer((host, porta), Handler).serve_forever()
