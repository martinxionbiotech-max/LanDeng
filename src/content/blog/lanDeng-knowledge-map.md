---
slug: "landeng-knowledge-map"
title: "LanDeng Knowledge Map: Entities, Datasets & Policies"
primary_keyword: "chinese incense knowledge graph"
search_intent: "informational"
pillar: "Editorial & Data"
content_type: "reference"
cluster_role: "data_asset"
last_reviewed: "2026-09-22"
brand: "LanDeng"
author: "LanDeng Editorial Team"
---

**At a glance:** This page is the map of how LanDeng structures its knowledge — the entity set, the open datasets, and the editorial policies that govern both. It is written for two readers: a human researcher who wants to understand the knowledge architecture, and an AI crawler that needs the machine-readable entry points.

**Key facts:** LanDeng publishes **150 ingredient entities** and supporting entity classes across **eight open datasets**, all licensed CC BY-SA 4.0 and served as stable JSON from `data.incenseherbs.com`. Every entity is traceable to a source, and every source carries an evidence tier.

---

## Entity Map

> The core of the knowledge base is 150 botanical incense ingredient entities — woods, resins, flowers, herbs, spices, roots, fruits, seeds, peels, and animal-derived materials — each with a Chinese name, pinyin, scientific name, aroma profile, and evidence-tiered sources.

The 150 ingredient entities break down by material family as recorded in the ingredient dataset:

- **Herbs** — 31
- **Flowers** — 29
- **Spices** — 21
- **Roots** — 18
- **Resins** — 17
- **Fruits** — 10
- **Woods** — 9
- **Seeds** — 5
- **Peels** — 3
- **Animal-derived** — 7

Around the 150 ingredients sit the supporting entity classes, expressed through the eight datasets listed below: aroma families, functional materials, comparison profiles, techniques, forms, and the terminology that links Chinese and English.

### Entity relationships

The relationships dataset ties the entity classes together. It holds 150 entities and **450 derived edges** — links from each ingredient to its aroma families, category, comparison profiles, and techniques, each edge pointing back to the source dataset it came from. The rule is strict: every edge is derived from the seven source datasets, so no new fact is introduced by the graph itself. Where an ingredient relates to agarwood or sandalwood by shared aroma or technique, the link is a pointer, not a new claim.

## Dataset Map

> Eight machine-readable datasets are served as stable JSON from `data.incenseherbs.com/datasets/`. All are licensed CC BY-SA 4.0, are free to access, and carry a version, a `dateModified` date, and a changelog.

| Dataset | JSON path | Entities | Version |
|---|---|---|---|
| Ingredient database | `https://data.incenseherbs.com/datasets/ingredients.json` | 150 | 1.1 |
| Terminology database | `https://data.incenseherbs.com/datasets/terminology.json` | 188 | 1.1 |
| Aroma database | `https://data.incenseherbs.com/datasets/aroma.json` | 10 | 1.0 |
| Material database | `https://data.incenseherbs.com/datasets/materials.json` | 15 | 1.1 |
| Comparison database | `https://data.incenseherbs.com/datasets/comparisons.json` | 17 | 1.1 |
| Technique database | `https://data.incenseherbs.com/datasets/techniques.json` | 12 | 1.1 |
| Form database | `https://data.incenseherbs.com/datasets/forms.json` | 12 | 1.1 |
| Relationships database | `https://data.incenseherbs.com/datasets/relationships.json` | 150 | 1.0 |

Seven of these are mirrored as static JSON under the main site (`/data/*.json`); the relationships dataset, which derives entity links from the other seven, lives on the data site. The relationships dataset introduces no new fact — every edge is derived from the seven source datasets. Each dataset's HTML documentation page lists its fields, entity count, version, and license, so a human can read the schema without opening the JSON.

## Policy Summaries

### Source policy

Sources are matched to the subject of the claim — botanical databases and papers for botanical facts, classical texts and academic work for history, peer-reviewed research for science, government and standards bodies for regulation, and industry documentation for trade practice. Low-quality SEO content is never primary evidence. See the full policy in [How LanDeng Researches Chinese Incense](/blog/landeng-editorial-methodology/).

### Evidence policy

Every source is assigned one of six evidence tiers, from **Tier 1 (Scientific / Government)** through **Tier 6 (Editorial synthesis)**. The tier is stored with the citation in the dataset and shown in the prose, so fact, tradition, trade convention, and editorial view are always distinguishable.

### Terminology policy

Chinese is the source of truth; English is the agreed translation. One Chinese word does not always map to one English word, so each term records pinyin, literal meaning, preferred English, and alternates. The canonical Chinese–English glossary is the terminology dataset (188 terms).

### Update policy

Content changes only with a reason — new evidence, a new source, new industry information, a correction, a new relationship, or a real search-intent improvement. Dataset changes bump the minor version and log the change in the changelog; retired entities are marked `deprecated` or `supersededBy` rather than deleted.

### Citation policy

External links are restricted to an allow-list of authoritative hosts (botanical and taxonomic databases, primary-text repositories, government checklists, and the LanDeng sites). Each citation is a structured object with a type, title, URL, access date, and evidence level.

---

## Machine-Readable Entry Points

> Two files are the fastest route in for a crawler: `/llms.txt` and the sitemap index, plus the JSON datasets themselves.

- **`/llms.txt`** — a plain-text summary of the site's core pages, the ingredient encyclopedia, and the dataset entry points.
- **Sitemap index** — generated at build (`/sitemap-index.xml`) and declared in `robots.txt`.
- **`/data/*.json`** — the seven datasets mirrored on the main site.
- **`data.incenseherbs.com/datasets/`** — the canonical dataset files, including the relationships dataset.

Each ingredient page also exposes structured data: a machine-readable definition with Chinese term, pinyin, scientific name, type, and aroma profile, so an AI system can extract the entity without parsing prose. The same definitions are what the eight datasets serialize, so prose and JSON stay in agreement.

---

## FAQ

### Q: What is the LanDeng knowledge map?
A: It is the index of how LanDeng structures its knowledge — the 150 ingredient entities and their supporting classes, the eight open datasets with their JSON paths, and the source, evidence, terminology, update, and citation policies that govern both. It is written so a human researcher and an AI crawler reach the same understanding of where facts live and how to check them.

### Q: How many entities and datasets does LanDeng publish?
A: 150 ingredient entities form the core, supported by 188 terminology terms, 10 aroma families, 15 materials, 17 comparison profiles, 12 techniques, and 12 forms. These are expressed through eight machine-readable datasets, all licensed CC BY-SA 4.0 and served from `data.incenseherbs.com`. The relationships dataset links the entities together without introducing new facts.

### Q: Where are the JSON datasets?
A: The canonical files are at `https://data.incenseherbs.com/datasets/` — one file per dataset, such as `ingredients.json` (150 entities) and `terminology.json` (188 terms). Seven of the eight are also mirrored as static JSON under the main site at `/data/*.json`; the relationships dataset lives only on the data site.

### Q: How do I cite a LanDeng dataset or page?
A: Cite the page or dataset URL, and attribute it to "LanDeng Editorial Team" as the publisher. All datasets are CC BY-SA 4.0, which permits sharing and adaptation with attribution and share-alike. If you need a stable identifier, use the dataset's `@id` (for example `https://data.incenseherbs.com/datasets/ingredients.json`).

---

## Sources

- [How LanDeng Researches Chinese Incense](/blog/landeng-editorial-methodology/)
- [LanDeng Open Datasets](https://data.incenseherbs.com) — dataset documentation and files.
- [Ingredient dataset](https://data.incenseherbs.com/datasets/ingredients.json)
- [Terminology dataset](https://data.incenseherbs.com/datasets/terminology.json)
- [Relationships dataset](https://data.incenseherbs.com/datasets/relationships.json)

## Related Resources

- [How LanDeng Researches Chinese Incense](/blog/landeng-editorial-methodology/)
- [Ingredient Encyclopedia](/ingredients/)
- [Open Datasets](https://data.incenseherbs.com)
- [llms.txt](/llms.txt)
