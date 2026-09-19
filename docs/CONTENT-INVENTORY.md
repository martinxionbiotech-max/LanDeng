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
| Commercial — B2B Buying & Supply | 8 | incense-for-business | 10815 |
| P1 — Chinese Incense 101 | 5 | what-is-chinese-incense | 8114 |
| P2 — Scent & Ingredient Guide | 11 | scent-guide | 20431 |
| P3 — Use Scenarios | 5 | scent-by-intention | 6783 |
| P4 — Product Formats & Tools | 13 | which-incense-format | 14786 |
| P5 — Buying & Selection | 5 | how-to-choose-incense | 7371 |
| P6 — Care & Safety | 6 | incense-safety-guide | 7084 |
| P7 — Incense vs Alternatives | 5 | incense-vs-candles-vs-diffusers | 8002 |
| P8 — Regional Incense Traditions | 5 | world-incense-traditions | 8547 |
| P9 — Chinese Incense Recipes (香方) | 8 | chinese-incense-recipes | 9336 |
| P10 — Incense Craft & Materials | 8 | how-incense-is-made | 11989 |
| P11 — Aromatherapy & Botany | 4 | how-aromatherapy-works | 5569 |
| P12 — Culture & Mindfulness | 5 | incense-in-daily-ritual | 6894 |
| Ingredient Encyclopedia | 34 | — | 37886 |
| Chinese Incense (concept) | 1 | — | 1389 |

**Totals:** 123 pages · 164,996 words.

## Full ledger

| slug | pillar | cluster_role | status | words |
|---|---|---|---|---|
| `custom-fragrance-development` | Commercial — B2B Buying & Supply | `guide` | live | 1379 |
| `factory-vetting-guide` | Commercial — B2B Buying & Supply | `guide` | live | 1357 |
| `incense-for-business` | Commercial — B2B Buying & Supply | `hub` | live | 1386 |
| `moq-pricing-guide` | Commercial — B2B Buying & Supply | `guide` | live | 1325 |
| `oem-private-label-guide` | Commercial — B2B Buying & Supply | `guide` | live | 1344 |
| `packaging-shipping-guide` | Commercial — B2B Buying & Supply | `guide` | live | 1423 |
| `samples-program` | Commercial — B2B Buying & Supply | `guide` | live | 1219 |
| `wholesale-guide` | Commercial — B2B Buying & Supply | `guide` | live | 1382 |
| `chinese-incense-vs-essential-oils-candles` | P1 — Chinese Incense 101 | `article` | live | 1101 |
| `history-of-chinese-incense` | P1 — Chinese Incense 101 | `article` | live | 1760 |
| `incense-terminology-glossary` | P1 — Chinese Incense 101 | `glossary` | live | 1232 |
| `what-is-chinese-incense` | P1 — Chinese Incense 101 | `hub` | live | 2962 |
| `xiangpu-incense-manuals` | P1 — Chinese Incense 101 | `authority_reference` | live | 1059 |
| `agarwood-grading-guide` | P2 — Scent & Ingredient Guide | `authority_reference` | live | 2446 |
| `agarwood-incense` | P2 — Scent & Ingredient Guide | `article` | live | 2661 |
| `citrus-incense` | P2 — Scent & Ingredient Guide | `article` | live | 1478 |
| `frankincense-incense` | P2 — Scent & Ingredient Guide | `article` | live | 1773 |
| `incense-material-comparison-matrix` | P2 — Scent & Ingredient Guide | `data_asset` | live | 1106 |
| `lavender-incense` | P2 — Scent & Ingredient Guide | `article` | live | 1708 |
| `lotus-incense` | P2 — Scent & Ingredient Guide | `article` | live | 1538 |
| `qinan-kyara` | P2 — Scent & Ingredient Guide | `authority_reference` | live | 969 |
| `sandalwood-incense` | P2 — Scent & Ingredient Guide | `article` | live | 2614 |
| `scent-guide` | P2 — Scent & Ingredient Guide | `hub` | live | 2376 |
| `scent-wheel` | P2 — Scent & Ingredient Guide | `data_asset` | live | 1762 |
| `evening-unwinding` | P3 — Use Scenarios | `article` | live | 1180 |
| `home-ambiance` | P3 — Use Scenarios | `article` | live | 1388 |
| `scent-by-intention` | P3 — Use Scenarios | `hub` | live | 1417 |
| `study-deep-work` | P3 — Use Scenarios | `article` | live | 1353 |
| `yoga-breathwork` | P3 — Use Scenarios | `article` | live | 1445 |
| `aromatherapy-beads` | P4 — Product Formats & Tools | `article` | live | 1488 |
| `backflow-cones` | P4 — Product Formats & Tools | `article` | live | 1271 |
| `boshan-censer` | P4 — Product Formats & Tools | `history` | live | 905 |
| `gehuo-fenxiang-setup` | P4 — Product Formats & Tools | `how_to` | live | 1021 |
| `incense-burn-time-format-matrix` | P4 — Product Formats & Tools | `data_asset` | live | 1410 |
| `incense-burners-tools` | P4 — Product Formats & Tools | `reference` | live | 962 |
| `incense-coils` | P4 — Product Formats & Tools | `article` | live | 1039 |
| `incense-powder-resin` | P4 — Product Formats & Tools | `article` | live | 1116 |
| `incense-seal-zhuanxiang` | P4 — Product Formats & Tools | `how_to` | live | 973 |
| `incense-sticks` | P4 — Product Formats & Tools | `article` | live | 1311 |
| `incense-tools-utensils` | P4 — Product Formats & Tools | `reference` | live | 906 |
| `which-incense-format` | P4 — Product Formats & Tools | `hub` | live | 1419 |
| `xuande-censer` | P4 — Product Formats & Tools | `history` | live | 965 |
| `how-to-choose-incense` | P5 — Buying & Selection | `hub` | live | 1391 |
| `incense-gift-guide` | P5 — Buying & Selection | `article` | live | 1221 |
| `incense-holder-burner-guide` | P5 — Buying & Selection | `article` | live | 1158 |
| `incense-substitution-cross-reference` | P5 — Buying & Selection | `reference` | live | 2346 |
| `natural-vs-synthetic-incense` | P5 — Buying & Selection | `article` | live | 1255 |
| `how-to-burn-incense-safely` | P6 — Care & Safety | `article` | live | 1077 |
| `incense-pets-sensitivities` | P6 — Care & Safety | `article` | live | 1111 |
| `incense-safety-guide` | P6 — Care & Safety | `hub` | live | 1241 |
| `incense-smoke-air-quality-evidence` | P6 — Care & Safety | `authority_reference` | live | 1479 |
| `incense-storage-longevity` | P6 — Care & Safety | `article` | live | 1033 |
| `incense-ventilation-indoor-air` | P6 — Care & Safety | `article` | live | 1143 |
| `best-incense-for-small-room` | P7 — Incense vs Alternatives | `article` | live | 1435 |
| `incense-sticks-vs-candles` | P7 — Incense vs Alternatives | `article` | live | 1326 |
| `incense-vs-candles-vs-diffusers` | P7 — Incense vs Alternatives | `hub` | live | 1665 |
| `incense-vs-essential-oil-diffuser` | P7 — Incense vs Alternatives | `article` | live | 2500 |
| `incense-vs-reed-diffuser-wax-melts` | P7 — Incense vs Alternatives | `article` | live | 1076 |
| `indian-incense-agarbatti` | P8 — Regional Incense Traditions | `article` | live | 1685 |
| `japanese-incense-kodo` | P8 — Regional Incense Traditions | `article` | live | 2434 |
| `middle-eastern-incense` | P8 — Regional Incense Traditions | `article` | live | 1553 |
| `tibetan-incense` | P8 — Regional Incense Traditions | `article` | live | 1638 |
| `world-incense-traditions` | P8 — Regional Incense Traditions | `hub` | live | 1237 |
| `baizi-incense-recipe` | P9 — Chinese Incense Recipes (香方) | `recipe` | live | 1150 |
| `chinese-incense-recipes` | P9 — Chinese Incense Recipes (香方) | `hub` | live | 1380 |
| `ersu-jiuju-recipe` | P9 — Chinese Incense Recipes (香方) | `recipe` | live | 1114 |
| `huarui-furen-yamen-recipe` | P9 — Chinese Incense Recipes (香方) | `recipe` | live | 1114 |
| `jiangnan-lizhu-bedchamber-recipe` | P9 — Chinese Incense Recipes (香方) | `recipe` | live | 1195 |
| `lotus-incense-recipe` | P9 — Chinese Incense Recipes (香方) | `recipe` | live | 1062 |
| `shouyang-princess-plum-recipe` | P9 — Chinese Incense Recipes (香方) | `recipe` | live | 1117 |
| `xuezhong-chunxin-recipe` | P9 — Chinese Incense Recipes (香方) | `recipe` | live | 1204 |
| `hand-rolled-vs-machine-made` | P10 — Incense Craft & Materials | `article` | live | 1065 |
| `hexiang-blending-system` | P10 — Incense Craft & Materials | `authority_reference` | live | 2439 |
| `how-incense-is-made` | P10 — Incense Craft & Materials | `hub` | live | 1201 |
| `incense-authentication-database` | P10 — Incense Craft & Materials | `buyer_intelligence` | live | 1053 |
| `incense-ingredients-glossary` | P10 — Incense Craft & Materials | `glossary` | live | 2415 |
| `makko-natural-binders` | P10 — Incense Craft & Materials | `article` | live | 1028 |
| `qinan-buying-authentication` | P10 — Incense Craft & Materials | `buyer_intelligence` | live | 1051 |
| `what-makes-incense-natural` | P10 — Incense Craft & Materials | `article` | live | 1737 |
| `aroma-molecules-and-mood` | P11 — Aromatherapy & Botany | `article` | live | 1352 |
| `essential-oils-in-incense` | P11 — Aromatherapy & Botany | `article` | live | 1615 |
| `how-aromatherapy-works` | P11 — Aromatherapy & Botany | `hub` | live | 1471 |
| `plant-sources-of-incense-scents` | P11 — Aromatherapy & Botany | `article` | live | 1131 |
| `calming-evening-ritual` | P12 — Culture & Mindfulness | `article` | live | 1391 |
| `four-leisure-arts` | P12 — Culture & Mindfulness | `article` | live | 943 |
| `incense-and-breathwork` | P12 — Culture & Mindfulness | `article` | live | 1343 |
| `incense-for-meditation` | P12 — Culture & Mindfulness | `article` | live | 1826 |
| `incense-in-daily-ritual` | P12 — Culture & Mindfulness | `hub` | live | 1391 |
| `agarwood` | Ingredient Encyclopedia | `entity` | live | 1517 |
| `agastache-rugosa` | Ingredient Encyclopedia | `entity` | live | 1000 |
| `ambergris` | Ingredient Encyclopedia | `entity` | live | 1052 |
| `angelica` | Ingredient Encyclopedia | `entity` | live | 877 |
| `atractylodes` | Ingredient Encyclopedia | `entity` | live | 1053 |
| `benzoin` | Ingredient Encyclopedia | `entity` | live | 1232 |
| `borneol` | Ingredient Encyclopedia | `entity` | live | 1096 |
| `borneol-oil` | Ingredient Encyclopedia | `entity` | live | 1068 |
| `calamus` | Ingredient Encyclopedia | `entity` | live | 1019 |
| `cardamom` | Ingredient Encyclopedia | `entity` | live | 1027 |
| `cedar` | Ingredient Encyclopedia | `entity` | live | 1171 |
| `chrysanthemum` | Ingredient Encyclopedia | `entity` | live | 1149 |
| `cinnamon` | Ingredient Encyclopedia | `entity` | live | 1207 |
| `clove` | Ingredient Encyclopedia | `entity` | live | 1136 |
| `cyperus` | Ingredient Encyclopedia | `entity` | live | 991 |
| `frankincense` | Ingredient Encyclopedia | `entity` | live | 1229 |
| `jasmine` | Ingredient Encyclopedia | `entity` | live | 1242 |
| `jiangzhenxiang` | Ingredient Encyclopedia | `entity` | live | 1118 |
| `linglingxiang` | Ingredient Encyclopedia | `entity` | live | 1133 |
| `mugwort` | Ingredient Encyclopedia | `entity` | live | 1116 |
| `myrrh` | Ingredient Encyclopedia | `entity` | live | 1265 |
| `orange-peel` | Ingredient Encyclopedia | `entity` | live | 1240 |
| `orris-root` | Ingredient Encyclopedia | `entity` | live | 1244 |
| `osmanthus` | Ingredient Encyclopedia | `entity` | live | 1032 |
| `patchouli` | Ingredient Encyclopedia | `entity` | live | 1097 |
| `pine-resin` | Ingredient Encyclopedia | `entity` | live | 921 |
| `plum-blossom` | Ingredient Encyclopedia | `entity` | live | 1110 |
| `rose` | Ingredient Encyclopedia | `entity` | live | 1085 |
| `sandalwood` | Ingredient Encyclopedia | `entity` | live | 1214 |
| `spikenard-nardostachys` | Ingredient Encyclopedia | `entity` | live | 1108 |
| `star-anise` | Ingredient Encyclopedia | `entity` | live | 1085 |
| `styrax-resin` | Ingredient Encyclopedia | `entity` | live | 1062 |
| `sweetgum` | Ingredient Encyclopedia | `entity` | live | 892 |
| `vetiver` | Ingredient Encyclopedia | `entity` | live | 1098 |
| `chinese-incense` | Chinese Incense (concept) | `pillar` | live | 1389 |

## Notes

- **12 canonical clusters** = P1–P11 + Commercial (B2B Buying & Supply). Exactly one `hub` per cluster.
- **Ingredient entity pages** (34) and the **Chinese-incense concept page** (1) live in separate
  collections and are not part of the P1–P11 blog taxonomy; they carry `entity` / `pillar` roles.
- Ingredient/concept frontmatter still uses `status: draft`; they are nonetheless built and served
  (no draft filter in the collection routes), so this ledger records them as `live`.
- Word counts are body-only (frontmatter stripped) and include markdown link/anchor text.
