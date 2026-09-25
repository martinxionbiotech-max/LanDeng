# Schema Audit — JSON-LD / Structured Data

> Audit-only. Catalogues every `application/ld+json` emission point and type, and checks `@id` consistency, `mainEntity`, and `sameAs`.

## Emission points (6 files, 9 `<script type="application/ld+json">` templates)

| File | Emitted types | Applies to |
|---|---|---|
| `src/layouts/BaseLayout.astro` | Organization, WebSite | **every page** (site-wide) |
| `src/pages/index.astro` | Organization, WebSite | homepage (duplicate — see F1) |
| `src/pages/ingredients/[slug].astro` | WebPage, BreadcrumbList, DefinedTerm (+ FAQPage conditional, ImageObject, PropertyValue) | 150 entity pages |
| `src/pages/ingredients/index.astro` | CollectionPage (→ ItemList → ListItem), BreadcrumbList | ingredient index |
| `src/pages/blog/[slug].astro` | Article, BreadcrumbList (+ FAQPage conditional) | 99 blog pages |
| `src/pages/chinese-incense/index.astro` | WebPage, BreadcrumbList, Article | concept page |

> Note: the Phase-2 brief referenced "764 JSON-LD blocks". The **actual** rendered block count is far lower — the site uses ~9 schema templates (not per-entity inline blocks). Organization + WebSite render on all 258 URLs; WebPage/BreadcrumbList/DefinedTerm on 150 entity pages; Article/BreadcrumbList on 99 blog pages. Per-page blocks are constructed programmatically, not stored as 764 literal blocks.

## Type distribution (Schema.org)

`Organization · WebSite · WebPage · BreadcrumbList · ListItem · DefinedTerm · DefinedTermSet · CollectionPage · ItemList · Article · FAQPage · Question · Answer · ImageObject · PropertyValue` — plus, on the data site: `Dataset · DefinedTerm · DataDownload`.

**Schema usage is conservative** — no `Product`, no `Review`, no `AggregateRating`, no fabricated ratings/reviews (matches §27 policy).

## `@id` consistency

| @id | Defined in | Notes |
|---|---|---|
| `{SITE}#organization` | BaseLayout + index.astro | ⚠️ duplicated on homepage (F1) |
| `{SITE}#website` | BaseLayout + index.astro | ⚠️ duplicated on homepage (F1) |
| `{pageUrl}#webpage` | ingredients/[slug] | unique per entity |
| `{pageUrl}#breadcrumb` | ingredients/[slug], blog/[slug], chinese-incense | unique per page |
| `{pageUrl}#definedterm` | ingredients/[slug] | unique per entity |
| `{pageUrl}#article` | blog/[slug], chinese-incense | unique per page |

`isPartOf` / `publisher` / `breadcrumb` references resolve to `#website` / `#organization` / `#breadcrumb` consistently.

## `mainEntity` relationships

- **Entity page:** `WebPage.mainEntity → DefinedTerm` (correct).
- **Ingredient index:** `CollectionPage.mainEntity → ItemList` (correct).
- **Concept page:** `WebPage.mainEntity → Article` (correct).
- **Blog page:** `Article` is the top-level node (correct — no WebPage wrapper, minor structural inconsistency vs entity pages).

## `sameAs` handling

- Emitted only on entity pages, from the `## Sources` section, filtered through `SAMEAS_HOSTS = ['efloras.org', 'gbif.org', 'checklist.cites.org']`.
- `termCode` = scientific name (not slug) — a deliberate choice but a potential identity-mismatch: the data-site `ingredients.json` uses `termCode = slug`. **Cross-system `termCode` semantics differ** (scientific name on main site vs slug on data site).

## `DefinedTermSet` / dataset linkage

- Entity pages emit `inDefinedTermSet` → "LanDeng Chinese Botanical Incense Ingredient Encyclopedia" (URL = `/ingredients/`).
- The data site is the authoritative `Dataset` layer (8 files).

## Findings

| # | Finding | Severity |
|---|---|---|
| F1 | Homepage emits Organization + WebSite **twice** (index.astro + BaseLayout) → duplicate `@id` in one document | **P0** |
| F2 | `termCode` semantics differ between main site (scientific name) and data site (slug) | P2 |
| F3 | Blog pages have no `WebPage` wrapper (Article is top-level) — minor structural inconsistency vs entity/concept pages | P3 |
| F4 | `sameAs` allow-list narrower than data-site CI allow-list (missing `wikisource.org`) | P2 |
| F5 | No `sameAs` emitted unless sources contain allow-listed URLs — some Tier-1 entities may lack `sameAs` entirely | P3 |

## Bottom line

Structured data is **correctly conservative and largely consistent** (single @id graph, mainEntity wiring, no fabricated ratings/reviews). The concrete defects are the homepage duplicate (F1) and two identity asymmetries (F2, F4) that should be resolved in the schema phase.
