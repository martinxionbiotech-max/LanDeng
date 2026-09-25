# Phase 2 Change Log

> Change-management ledger (§56). Every modification to the site/repos is recorded here before/after implementation.
> **This batch is audit-only** — no content, URL, schema, or navigation changes were made.

## Format

`Date · File/Area · Change · Reason · Risk · Validation · Rollback`

---

## 2026-09-25 — Baseline audit batch (phase2/audit)

### Init — 11 inventory documents created under `docs/`

| Date | File | Change | Reason | Risk | Validation | Rollback |
|---|---|---|---|---|---|---|
| 2026-09-25 | `docs/phase2-baseline.md` | Created baseline audit (Technical/SEO/Entity/Data/AIO/Commercial) | §4 required baseline before implementation | None (doc only) | Cross-checked against repo | `git revert` |
| 2026-09-25 | `docs/entity-inventory.md` | Created 150-entity Tier classification (T1=31 / T2=54 / T3=65) | §7 entity tiers | None | Data-driven from inbound-link map | `git revert` |
| 2026-09-25 | `docs/article-inventory.md` | Created 99 blog + 1 concept + 8 core page ledger | §5 required inventory | None | Matched frontmatter + routes | `git revert` |
| 2026-09-25 | `docs/topic-map.md` | Created cluster architecture map (13 hubs) | §11 topic map | None | Reconstructed from pillar/cluster_role | `git revert` |
| 2026-09-25 | `docs/internal-link-map.md` | Created hub→spoke→cross-link status + 37-orphan list | §13/§39 linking audit | None | `scripts/orphan_inbound.json` | `git revert` |
| 2026-09-25 | `docs/content-gap-analysis.md` | Created 18 real gaps (G01–G18) with P0–P3 priority | §36 gap analysis | None | Only real gaps; no auto-production | `git revert` |
| 2026-09-25 | `docs/commercial-intent-map.md` | Created funnel mapping (8 stages) | §18 commercial funnel | None | Verified routes + copy | `git revert` |
| 2026-09-25 | `docs/data-site-audit.md` | Created 8-dataset audit (615 records) | §28 data-site audit | None | Parsed 8 JSON files + CI | `git revert` |
| 2026-09-25 | `docs/aio-audit.md` | Created AIO audit (llms.txt / direct answer / FAQ / sources) | §24–26 AIO audit | None | Programmatic coverage checks | `git revert` |
| 2026-09-25 | `docs/schema-audit.md` | Created JSON-LD audit (types / @id / mainEntity / sameAs) | §27 schema audit | None | Catalogued all emission points | `git revert` |
| 2026-09-25 | `docs/phase2-change-log.md` | Initialized this ledger | §56 change management | None | — | — |

### Findings logged (no changes made)

| # | Finding | Severity | Where |
|---|---|---|---|
| 1 | `relationships.json` (450 edges) missing from main-site `data/` + `public/data/` mirror (7 vs 8 files) | P0 | data-site-audit / content-gap G01 |
| 2 | Homepage emits Organization + WebSite JSON-LD twice | P0 | schema-audit F1 / content-gap G02 |
| 3 | No custom 404 page | P0 | baseline / content-gap G03 |
| 4 | All 150 ingredients `status: draft` yet built/served | P0 | baseline / content-gap G04 |
| 5 | `llms.txt` lists 2 of 8 datasets | P0 | aio-audit A1 / content-gap G06 |
| 6 | Classical fixatives (amber/onycha/castoreum/shellac) orphaned (0 inbound) | P0 | internal-link-map / content-gap G05 |
| 7 | `termCode` semantics differ (scientific name vs slug) | P2 | schema-audit F2 |
| 8 | `sameAs` allow-list narrower than data-site CI (missing wikisource.org) | P2 | schema-audit F4 / data-site |
| 9 | Blog count 99 (brief expected 89) | info | article-inventory |

---

## Deferred (intentionally NOT done this batch)

- No article production (§53 content gate).
- No URL/canonical/schema/navigation changes.
- No internal-link rewiring.
- No data-site schema changes.
- No 404 page creation, no status-field wiring, no llms.txt edit.

Next phase (after this baseline is reviewed): P0 repairs first (§63 — audit → map → repair → connect → strengthen graph → AIO → commercial → only then content).

---

## 2026-09-25 — P0 repair batch (phase2/P0)

### G01 + G06 — Data mirror parity + llms.txt 8-dataset coverage

| Date | File | Change | Reason | Risk | Validation | Rollback |
|---|---|---|---|---|---|---|
| 2026-09-25 | `data/relationships.json`, `public/data/relationships.json` | Copied `relationships.json` (150 records / 450 edges) from `data-landeng/datasets/` into main-site mirror (now 8/8 files) | G01 cross-site consistency (§31); main site could not serve the relationship graph | None (own data, no new domain) | md5 match vs data-landeng source; 8 files present in both mirrors | `git revert` |
| 2026-09-25 | `scripts/generate-llms.mjs` | Rewrote to emit all 8 datasets with live counts (relationships shows `150 / 450`) | G06 incomplete machine-readable index; G01 needs relationships row | None (prebuild regenerates only) | `node scripts/generate-llms.mjs` → 8 dataset lines; build succeeded | `git revert` |
| 2026-09-25 | `public/llms.txt` | Machine-readable section now lists 8 datasets (ingredients 150 / terminology 249 / relationships 150+450 / comparisons 17 / materials 15 / forms 12 / techniques 12 / aroma 10) | G01 + G06 | None | grep confirms 8 rows + correct counts | `git revert` |

### G02 — Homepage duplicate schema

| Date | File | Change | Reason | Risk | Validation | Rollback |
|---|---|---|---|---|---|---|
| 2026-09-25 | `src/pages/index.astro` | Removed Organization + WebSite JSON-LD (consts + 2 `<script>` tags) that duplicated BaseLayout's emission | G02 duplicate @id in one document | None (single source retained in BaseLayout) | Built `dist/index.html` has exactly 2 JSON-LD blocks, `@id` `#organization`/`#website` each emitted once as primary node | `git revert` |

### G03 — Custom 404 page

| Date | File | Change | Reason | Risk | Validation | Rollback |
|---|---|---|---|---|---|---|
| 2026-09-25 | `src/pages/404.astro` (new) | Custom 404 (title / lead / return-home CTA / core links) following BaseLayout conventions | G03 broken-link UX | None (no URL/canonical change; 404 auto-excluded from sitemap) | Build emits `dist/404.html`; 404 absent from `sitemap-0.xml` | `git revert` |

### G04 — Vestigial `status: draft` cleanup

| Date | File | Change | Reason | Risk | Validation | Rollback |
|---|---|---|---|---|---|---|
| 2026-09-25 | `src/content/ingredients/*.md` (150) + `src/content/concepts/chinese-incense.md` (1) | `status: draft` → `status: published` (151 files) | G04 status field unwired; `draft` misleads future gating | None (field is parsed but never gated in build) | `grep -c "^status: draft"` → 0; `status: published` = 151 | `git revert` |

### G05 — Classical-fixative orphan repair (contextual links)

| Date | File | Change | Reason | Risk | Validation | Rollback |
|---|---|---|---|---|---|---|
| 2026-09-25 | `src/content/blog/hexiang-blending-system.md` | Linked 琥珀 amber → `/ingredients/amber/`, 甲香 operculum → `/ingredients/onycha/` in the 二苏旧局 recipe + binders/fixatives tables | G05 under-linked classical fixatives | None (anchor = entity name, no new URL) | Build: both `href`s render | `git revert` |
| 2026-09-25 | `src/content/blog/ersu-jiuju-recipe.md` | Linked 琥珀 amber → `/ingredients/amber/` in the 二苏旧局 assistant table | G05 | None | Build: `href` renders | `git revert` |
| 2026-09-25 | `src/content/blog/huarui-furen-yamen-recipe.md` | Linked 甲香 (onycha) → `/ingredients/onycha/` in the ingredient table | G05 | None | Build: `href` renders | `git revert` |
| 2026-09-25 | `src/content/blog/incense-ingredients-glossary.md` | Linked 甲香 (operculum) → `/ingredients/onycha/` in the classical-manuals passage | G05 | None | Build: `href` renders | `git revert` |

**G05 note:** `castoreum` and `shellac` were also 0-inbound in the baseline orphan map, but grep confirmed both already carry contextual inbound links from ingredient pages (`musk`/`civet` → castoreum; `amber`/`benzoin`/`dragons-blood` → shellac). No blog prose mentions castoreum/shellac as entities, so no fabrication was made — the added links target amber (琥珀) and onycha (甲香), which are discussed in recipe/blending blog prose but were unlinked there.
