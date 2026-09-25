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
