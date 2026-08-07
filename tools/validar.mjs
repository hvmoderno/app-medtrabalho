/* =============================================================================
   VALIDAR.MJS — auditoria do banco no terminal.   node tools/validar.mjs
   Usa a MESMA lógica de tools/validador.js (fonte única).
   Se não houver Node instalado, abra tools/validar.html no navegador — o
   resultado é idêntico.
   ========================================================================== */
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const ctx = { window: {}, console, module: undefined };
ctx.globalThis = ctx;
vm.createContext(ctx);

const carregar = (rel) =>
  vm.runInContext(readFileSync(join(raiz, rel), 'utf8'), ctx, { filename: rel });

carregar('core/edital.js');
readdirSync(join(raiz, 'banco'))
  .filter((f) => /^sec\d+\.js$/.test(f)).sort()
  .forEach((f) => carregar(join('banco', f)));
carregar('core/gabarito.js');
carregar('tools/validador.js');

const EDITAL = ctx.window.EDITAL;
const r = ctx.window.validarBanco(EDITAL, ctx.window.BANCO || []);

console.log('\n=== DISTRIBUIÇÃO POR TEMA DO EDITAL ===');
let total = 0, meta = 0, zerados = 0, abaixo = 0;
for (const sec of EDITAL.secoes) {
  console.log(`\n— Seção ${sec.id}: ${sec.nome}`);
  for (const t of EDITAL.daSecao(sec.id)) {
    const n = r.porTema[t.id] || 0;
    total += n; meta += t.meta;
    if (n === 0) zerados++;
    if (n < t.meta) abaixo++;
    const barra = '█'.repeat(Math.min(30, Math.round(n / t.meta * 30)));
    console.log(`  ${t.id.padEnd(5)} ${String(n).padStart(4)}/${String(t.meta).padEnd(4)} ${barra}  ${t.nome}`);
  }
}
console.log(`\nTOTAL: ${total} / meta ${meta} | zerados: ${zerados} | abaixo da meta: ${abaixo}`);
console.log(`Autorais: ${r.porTipo.autoral || 0} · Reais: ${r.porTipo.real || 0}`);

console.log('\n=== GABARITO (posição real exibida na tela) ===');
const somaL = 'ABCDE'.split('').reduce((a, l) => a + r.porLetra[l], 0) || 1;
for (const l of 'ABCDE') {
  console.log(`  ${l}: ${String(r.porLetra[l]).padStart(4)} (${(r.porLetra[l] / somaL * 100).toFixed(1)}%)`);
}
console.log(`  desvio máximo vs 20%: ${(r.desvioGabarito * 100).toFixed(1)} p.p.`);

console.log('\n=== VALIDAÇÃO ===');
if (!r.erros.length) {
  console.log(`OK — ${r.total} questões, 0 problemas.`);
  console.log('0 comentários citam alternativa por letra → 0 contradizem o gabarito.');
} else {
  console.log(`${r.erros.length} PROBLEMA(S):\n`);
  r.erros.forEach((e) => console.log('  ✗ ' + e));
  process.exit(1);
}
