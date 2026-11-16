> **Current seven-repository documentation map — 2026-11-16 UTC · CAT-v1**  
> **Primary category:** `LLM-TOKEN` — AI/LLM → Token Budgeting.  
> [Canonical Category Index and Directory](https://github.com/saipradikmallakuntla-tech/zion-ai-apps-hub/blob/main/CATEGORY_INDEX_AND_DIRECTORY.md) · [Seven-node registry](https://github.com/saipradikmallakuntla-tech/zion-ai-apps-hub/blob/main/NETWORK.md) · [Portfolio status](https://github.com/saipradikmallakuntla-tech/zion-ai-apps-hub/blob/main/PORTFOLIO_STATUS.md) · [Locale/review register](https://github.com/saipradikmallakuntla-tech/zion-ai-apps-hub/blob/main/TRANSLATION_PARITY_REGISTER.md).  
> This owner-approved documentation map covers seven existing owned repositories: one hub and six utilities. Earlier scope statements/counts below are retained dated batch history. Current written coverage is **79 IDs / 237 locale entries total**, not approvals or apps; 48 pre-existing Markdown files plus the new index give 49 files. Category labels classify documentation, not website filters or software. Satellite interfaces remain English-only; human language/domain, receiver and channel decisions remain pending. No code, tests, byte-hash scripts, live checks, external distribution or automatic integration is introduced.

# Prompt Token Budget Lab

Standalone, dependency-free Batch 99 utility. **Live:** https://saipradikmallakuntla-tech.github.io/prompt-token-budget-lab/

## Use
Open `index.html` directly or serve this directory with `python3 -m http.server 8000`. Select a synthetic short/overflow/Unicode example, or enter non-sensitive text. Set context capacity, output reserve, character ratio, explicit message/tool overhead, margin and assumed prices. Select **Estimate budget**. Export downloads JSON without the prompt. The interface is English-only.

## Method and limits
Count Unicode code points (not graphemes or bytes); estimate text tokens with `ceil(codePoints / ratio)`; budget input as `ceil((textTokens + overhead) * (1 + margin / 100))`. Allocation is budgeted input plus output reserve. Cost is `(budgetedInput * inputPrice + reserve * outputPrice) / 1,000,000` USD. These are user-configured assumptions, not current provider pricing.

This is **not an exact tokenizer, guaranteed upper bound, billing calculator or model-context guarantee**. Language, code, tool serialization, media and hidden overhead may invalidate the estimate. Use the real tokenizer and provider billing documentation before production. Input is capped at 100,000 UTF-16 code units; numeric ranges are bounded. No API calls, uploads, storage, telemetry, cookies, external fonts or runtime packages. Exports omit prompt text; keep real secrets out of the tab.

## Tests and publication
`timeout 15s node --check app.js`

`timeout 15s node tests/test.cjs`

Three synthetic examples and eleven built-in assertions are embedded in `app.js` and usable through the UI; Node tests add fixture invariants and invalid-input checks. Tests are synthetic, not production certification. Publish `main:/` with `.nojekyll` and HTTPS enforced; no custom domain.

## Seven-node network
- [Hub](https://saipradikmallakuntla-tech.github.io/zion-ai-apps-hub/)
- [Stream Inspector](https://saipradikmallakuntla-tech.github.io/llm-stream-inspector/)
- [Retry Safety Lab](https://saipradikmallakuntla-tech.github.io/agent-retry-safety-lab/)
- [CORS Doctor](https://saipradikmallakuntla-tech.github.io/cors-cookie-doctor/)
- [Schema Drift Auditor](https://saipradikmallakuntla-tech.github.io/tool-schema-drift-auditor/)
- [Webhook Replay Guard](https://saipradikmallakuntla-tech.github.io/webhook-replay-guard/)

[Discovery EN](https://saipradikmallakuntla-tech.github.io/zion-ai-apps-hub/batch-99-discovery.html) · [ES](https://saipradikmallakuntla-tech.github.io/zion-ai-apps-hub/es/batch-99-discovery.html) · [PT](https://saipradikmallakuntla-tech.github.io/zion-ai-apps-hub/pt/batch-99-discovery.html). See [NETWORK.md](NETWORK.md). No diagnostic inputs are appended to links.

## Batch-99 documentation reconciliation — 2026-11-16 UTC

Batch: `zion-batch-99-portfolio-reconciliation-2026-11-16-en-es-pt`. This repository already existed; this cycle changes only README.md and NETWORK.md. The original body above is retained as dated documentary context, including commands that are not executed here. This is not a new app launch, software localization or deployment verification.

Catalog B99-C01 and routing B99-R01: [English](https://github.com/saipradikmallakuntla-tech/zion-ai-apps-hub/blob/main/BATCH_99_CATALOG_ROUTING_GUIDE.md#en) · [Español neutro](https://github.com/saipradikmallakuntla-tech/zion-ai-apps-hub/blob/main/BATCH_99_CATALOG_ROUTING_GUIDE.md#es) · [Português](https://github.com/saipradikmallakuntla-tech/zion-ai-apps-hub/blob/main/BATCH_99_CATALOG_ROUTING_GUIDE.md#pt). Heuristic token/context/cost assumptions are not tokenizer, billing or capacity guarantees. The interface remains documented as English-only.

Current reciprocal documentation is in the [dated local network appendix](NETWORK.md), with all six peer README destinations. Use the single [central portfolio/status and evidence register](https://github.com/saipradikmallakuntla-tech/zion-ai-apps-hub/blob/main/PORTFOLIO_STATUS.md) and [locale-review register](https://github.com/saipradikmallakuntla-tech/zion-ai-apps-hub/blob/main/TRANSLATION_PARITY_REGISTER.md); no competing local status file is added. Seven nodes/six utilities/42 possible directed relationships describe documentation, not verified live integration. Human language/domain, receiver and channel decisions remain pending. No sensitive inputs in links, automatic handoff, code/test/hash/browser/live-probe work, Pages/DNS change, Notion/further Mem0 call or external distribution.
