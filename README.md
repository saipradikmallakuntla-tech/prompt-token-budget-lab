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
