# CONTENT-INVENTORY.md — LanDeng

Live ledger of every content asset in the Astro content collections
(`src/content/{blog,ingredients,concepts}`). One row per page, generated from
actual frontmatter (2026-09-19). Status `live` = built and served.

## Columns

| Field | Meaning |
|---|---|
| slug | content ID / URL segment |
| pillar | canonical pillar-cluster (blog: P1–P11 + Commercial) |
| cluster_role | role within the cluster — `hub` = the single pillar hub; others: `article · recipe · guide · glossary · authority_reference · data_asset · history · how_to · buyer_intelligence · reference` |
| status | `live` (all pages are built and served) |
| words | body word count (frontmatter excluded) |

## Cluster summary

| Pillar | Pages | Hub | Words |
|---|---|---|---|
| Commercial — B2B Buying & Supply | 8 | incense-for-business | 10802 |
| P1 — Chinese Incense 101 | 5 | what-is-chinese-incense | 8075 |
| P2 — Scent & Ingredient Guide | 11 | scent-guide | 20381 |
| P3 — Use Scenarios | 5 | scent-by-intention | 6770 |
| P4 — Product Formats & Tools | 13 | which-incense-format | 14694 |
| P5 — Buying & Selection | 5 | how-to-choose-incense | 7350 |
| P6 — Care & Safety | 6 | incense-safety-guide | 7059 |
| P7 — Incense vs Alternatives | 5 | incense-vs-candles-vs-diffusers | 7986 |
| P8 — Regional Incense Traditions | 5 | world-incense-traditions | 8502 |
| P9 — Incense Craft & Recipes | 16 | how-incense-is-made | P10 — Incense Craft & Materials|
| P10 — Aromatherapy & Botany | 4 | how-aromatherapy-works | P11 — Aromatherapy & Botany|
| P11 — Culture & Mindfulness | 5 | incense-in-daily-ritual | P12 — Culture & Mindfulness|
| Ingredient Encyclopedia | 22 | — | 25155 |
| Chinese Incense (concept) | 1 | — | 1395 |

**Totals:** 111 pages · 151,646 words.

## Full ledger

| slug | pillar | cluster_role | status | words |
|---|---|---|---|---|
| `custom-fragrance-development` | Commercial — B2B Buying & Supply | `guide` | live | 1379 |
| `factory-vetting-guide` | Commercial — B2B Buying & Supply | `guide` | live | 1357 |
| `incense-for-business` | Commercial — B2B Buying & Supply | `hub` | live | 1388 |
| `moq-pricing-guide` | Commercial — B2B Buying & Supply | `guide` | live | 1325 |
| `oem-private-label-guide` | Commercial — B2B Buying & Supply | `guide` | live | 1344 |
| `packaging-shipping-guide` | Commercial — B2B Buying & Supply | `guide` | live | 1406 |
| `samples-program` | Commercial — B2B Buying & Supply | `guide` | live | 1220 |
| `wholesale-guide` | Commercial — B2B Buying & Supply | `guide` | live | 1383 |
| `chinese-incense-vs-essential-oils-candles` | P1 — Chinese Incense 101 | `article` | live | 1102 |
| `history-of-chinese-incense` | P1 — Chinese Incense 101 | `article` | live | 1740 |
| `incense-terminology-glossary` | P1 — Chinese Incense 101 | `glossary` | live | 1234 |
| `what-is-chinese-incense` | P1 — Chinese Incense 101 | `hub` | live | 2940 |
| `xiangpu-incense-manuals` | P1 — Chinese Incense 101 | `authority_reference` | live | 1059 |
| `agarwood-grading-guide` | P2 — Scent & Ingredient Guide | `authority_reference` | live | 2425 |
| `agarwood-incense` | P2 — Scent & Ingredient Guide | `article` | live | 2663 |
| `citrus-incense` | P2 — Scent & Ingredient Guide | `article` | live | 1478 |
| `frankincense-incense` | P2 — Scent & Ingredient Guide | `article` | live | 1772 |
| `incense-material-comparison-matrix` | P2 — Scent & Ingredient Guide | `data_asset` | live | 1105 |
| `lavender-incense` | P2 — Scent & Ingredient Guide | `article` | live | 1716 |
| `lotus-incense` | P2 — Scent & Ingredient Guide | `article` | live | 1538 |
| `qinan-kyara` | P2 — Scent & Ingredient Guide | `authority_reference` | live | 970 |
| `sandalwood-incense` | P2 — Scent & Ingredient Guide | `article` | live | 2597 |
| `scent-guide` | P2 — Scent & Ingredient Guide | `hub` | live | 2353 |
| `scent-wheel` | P2 — Scent & Ingredient Guide | `data_asset` | live | 1764 |
| `evening-unwinding` | P3 — Use Scenarios | `article` | live | 1180 |
| `home-ambiance` | P3 — Use Scenarios | `article` | live | 1389 |
| `scent-by-intention` | P3 — Use Scenarios | `hub` | live | 1398 |
| `study-deep-work` | P3 — Use Scenarios | `article` | live | 1355 |
| `yoga-breathwork` | P3 — Use Scenarios | `article` | live | 1448 |
| `aromatherapy-beads` | P4 — Product Formats & Tools | `article` | live | 1491 |
| `backflow-cones` | P4 — Product Formats & Tools | `article` | live | 1273 |
| `boshan-censer` | P4 — Product Formats & Tools | `history` | live | 887 |
| `gehuo-fenxiang-setup` | P4 — Product Formats & Tools | `how_to` | live | 1021 |
| `incense-burn-time-format-matrix` | P4 — Product Formats & Tools | `data_asset` | live | 1395 |
| `incense-burners-tools` | P4 — Product Formats & Tools | `reference` | live | 919 |
| `incense-coils` | P4 — Product Formats & Tools | `article` | live | 1039 |
| `incense-powder-resin` | P4 — Product Formats & Tools | `article` | live | 1116 |
| `incense-seal-zhuanxiang` | P4 — Product Formats & Tools | `how_to` | live | 973 |
| `incense-sticks` | P4 — Product Formats & Tools | `article` | live | 1313 |
| `incense-tools-utensils` | P4 — Product Formats & Tools | `reference` | live | 906 |
| `which-incense-format` | P4 — Product Formats & Tools | `hub` | live | 1395 |
| `xuande-censer` | P4 — Product Formats & Tools | `history` | live | 966 |
| `how-to-choose-incense` | P5 — Buying & Selection | `hub` | live | 1369 |
| `incense-gift-guide` | P5 — Buying & Selection | `article` | live | 1221 |
| `incense-holder-burner-guide` | P5 — Buying & Selection | `article` | live | 1158 |
| `incense-substitution-cross-reference` | P5 — Buying & Selection | `reference` | live | 2347 |
| `natural-vs-synthetic-incense` | P5 — Buying & Selection | `article` | live | 1255 |
| `how-to-burn-incense-safely` | P6 — Care & Safety | `article` | live | 1077 |
| `incense-pets-sensitivities` | P6 — Care & Safety | `article` | live | 1112 |
| `incense-safety-guide` | P6 — Care & Safety | `hub` | live | 1216 |
| `incense-smoke-air-quality-evidence` | P6 — Care & Safety | `authority_reference` | live | 1478 |
| `incense-storage-longevity` | P6 — Care & Safety | `article` | live | 1033 |
| `incense-ventilation-indoor-air` | P6 — Care & Safety | `article` | live | 1143 |
| `best-incense-for-small-room` | P7 — Incense vs Alternatives | `article` | live | 1437 |
| `incense-sticks-vs-candles` | P7 — Incense vs Alternatives | `article` | live | 1328 |
| `incense-vs-candles-vs-diffusers` | P7 — Incense vs Alternatives | `hub` | live | 1645 |
| `incense-vs-essential-oil-diffuser` | P7 — Incense vs Alternatives | `article` | live | 2500 |
| `incense-vs-reed-diffuser-wax-melts` | P7 — Incense vs Alternatives | `article` | live | 1076 |
| `indian-incense-agarbatti` | P8 — Regional Incense Traditions | `article` | live | 1685 |
| `japanese-incense-kodo` | P8 — Regional Incense Traditions | `article` | live | 2413 |
| `middle-eastern-incense` | P8 — Regional Incense Traditions | `article` | live | 1553 |
| `tibetan-incense` | P8 — Regional Incense Traditions | `article` | live | 1638 |
| `world-incense-traditions` | P8 — Regional Incense Traditions | `hub` | live | 1213 |
| `baizi-incense-recipe` | P9 — Incense Craft & Recipes | `recipe` | live | 1132 |
| `chinese-incense-recipes` | P9 — Incense Craft & Recipes | `recipe` | live | 1298 |
| `ersu-jiuju-recipe` | P9 — Incense Craft & Recipes | `recipe` | live | 1093 |
| `hand-rolled-vs-machine-made` | P9 — Incense Craft & Recipes | `article` | live | 1043 |
| `hexiang-blending-system` | P9 — Incense Craft & Recipes | `authority_reference` | live | 2420 |
| `how-incense-is-made` | P9 — Incense Craft & Recipes | `hub` | live | 1250 |
| `huarui-furen-yamen-recipe` | P9 — Incense Craft & Recipes | `recipe` | live | 1097 |
| `incense-authentication-database` | P9 — Incense Craft & Recipes | `buyer_intelligence` | live | 1052 |
| `incense-ingredients-glossary` | P9 — Incense Craft & Recipes | `glossary` | live | 2417 |
| `jiangnan-lizhu-bedchamber-recipe` | P9 — Incense Craft & Recipes | `recipe` | live | 1176 |
| `lotus-incense-recipe` | P9 — Incense Craft & Recipes | `recipe` | live | 1048 |
| `makko-natural-binders` | P9 — Incense Craft & Recipes | `article` | live | 1027 |
| `qinan-buying-authentication` | P9 — Incense Craft & Recipes | `buyer_intelligence` | live | 1029 |
| `shouyang-princess-plum-recipe` | P9 — Incense Craft & Recipes | `recipe` | live | 1101 |
| `what-makes-incense-natural` | P9 — Incense Craft & Recipes | `article` | live | 1737 |
| `xuezhong-chunxin-recipe` | P9 — Incense Craft & Recipes | `recipe` | live | 1188 |
| `aroma-molecules-and-mood` | P10 — Aromatherapy & Botany | `article` | live | 1354 |
| `essential-oils-in-incense` | P10 — Aromatherapy & Botany | `article` | live | 1616 |
| `how-aromatherapy-works` | P10 — Aromatherapy & Botany | `hub` | live | 1452 |
| `plant-sources-of-incense-scents` | P10 — Aromatherapy & Botany | `article` | live | 1134 |
| `calming-evening-ritual` | P11 — Culture & Mindfulness | `article` | live | 1368 |
| `four-leisure-arts` | P11 — Culture & Mindfulness | `article` | live | 925 |
| `incense-and-breathwork` | P11 — Culture & Mindfulness | `article` | live | 1346 |
| `incense-for-meditation` | P11 — Culture & Mindfulness | `article` | live | 1805 |
| `incense-in-daily-ritual` | P11 — Culture & Mindfulness | `hub` | live | 1369 |
| `agarwood` | Ingredient Encyclopedia | `entity` | live | 1576 |
| `ambergris` | Ingredient Encyclopedia | `entity` | live | 962 |
| `angelica` | Ingredient Encyclopedia | `entity` | live | 824 |
| `benzoin` | Ingredient Encyclopedia | `entity` | live | 1334 |
| `borneol` | Ingredient Encyclopedia | `entity` | live | 962 |
| `calamus` | Ingredient Encyclopedia | `entity` | live | 910 |
| `cedar` | Ingredient Encyclopedia | `entity` | live | 1139 |
| `chrysanthemum` | Ingredient Encyclopedia | `entity` | live | 1179 |
| `cinnamon` | Ingredient Encyclopedia | `entity` | live | 1208 |
| `clove` | Ingredient Encyclopedia | `entity` | live | 1182 |
| `frankincense` | Ingredient Encyclopedia | `entity` | live | 1305 |
| `jasmine` | Ingredient Encyclopedia | `entity` | live | 1447 |
| `mugwort` | Ingredient Encyclopedia | `entity` | live | 1300 |
| `myrrh` | Ingredient Encyclopedia | `entity` | live | 1211 |
| `orange-peel` | Ingredient Encyclopedia | `entity` | live | 1246 |
| `osmanthus` | Ingredient Encyclopedia | `entity` | live | 1113 |
| `patchouli` | Ingredient Encyclopedia | `entity` | live | 1193 |
| `pine-resin` | Ingredient Encyclopedia | `entity` | live | 802 |
| `rose` | Ingredient Encyclopedia | `entity` | live | 1172 |
| `sandalwood` | Ingredient Encyclopedia | `entity` | live | 1188 |
| `sweetgum` | Ingredient Encyclopedia | `entity` | live | 780 |
| `vetiver` | Ingredient Encyclopedia | `entity` | live | 1122 |
| `chinese-incense` | Chinese Incense (concept) | `pillar` | live | 1395 |

## Notes

- **12 canonical clusters** = P1–P11 + Commercial (B2B Buying & Supply). Exactly one `hub` per cluster.
- **Ingredient entity pages** (22) and the **Chinese-incense concept page** (1) live in separate
  collections and are not part of the P1–P11 blog taxonomy; they carry `entity` / `pillar` roles.
- Ingredient/concept frontmatter still uses `status: draft`; they are nonetheless built and served
  (no draft filter in the collection routes), so this ledger records them as `live`.
- Word counts are body-only (frontmatter stripped) and include markdown link/anchor text.
