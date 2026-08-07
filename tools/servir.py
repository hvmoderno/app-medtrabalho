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
        super().end_headers()
    def log_message(self, fmt, *args):
        if '404' in (fmt % args):
            super().log_message(fmt, *args)

porta = int(sys.argv[1]) if len(sys.argv) > 1 else 8732
print(f'servindo {RAIZ} em http://127.0.0.1:{porta}', flush=True)
ThreadingHTTPServer(('127.0.0.1', porta), Handler).serve_forever()
