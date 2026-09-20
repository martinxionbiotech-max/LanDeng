// 自动更新 llms.txt 的 Machine-readable data 段（数据来自 data/*.json 权威源）
import { readFileSync, writeFileSync } from 'node:fs';

const llms = readFileSync('public/llms.txt', 'utf8');
const ingredients = JSON.parse(readFileSync('data/ingredients.json', 'utf8'));
const terminology = JSON.parse(readFileSync('data/terminology.json', 'utf8'));
const nIng = ingredients.mainEntity.length;
const nTerm = Array.isArray(terminology.mainEntity) ? terminology.mainEntity.length
  : (Array.isArray(terminology) ? terminology.length : 0);

const section = `## Machine-readable data

- [Ingredient dataset](https://data.incenseherbs.com/datasets/ingredients.json): ${nIng} ingredient entities (Schema.org Dataset / DefinedTerm).
- [Terminology dataset](https://data.incenseherbs.com/datasets/terminology.json): ${nTerm} Chinese–English incense terms (Schema.org Dataset / DefinedTerm).`;

const out = llms.replace(/## Machine-readable data[\s\S]*?(?=\n## |\n\n## |$)/, section.trim() + '\n');
if (out === llms) {
  console.error('未找到 Machine-readable data 段，跳过');
  process.exit(1);
}
writeFileSync('public/llms.txt', out);
console.log(`llms.txt 自动更新: ${nIng} ingredients / ${nTerm} terms`);
