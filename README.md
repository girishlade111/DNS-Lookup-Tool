# DNS Lookup Tool

A lightweight, single-file DNS lookup web app — type a domain and inspect its DNS records instantly. 100% client-side, no build step, no backend, no dependencies. Just open `index.html` in a browser or visit the live site.

> Note: lookups run on simulated client-side data for demo/educational purposes — the UI walks through a full DNS resolution flow (query types, DNSSEC indicators, result formatting) without calling a live resolver.

## Features

- **DNS record lookup UI** — query common record types (A, AAAA, CNAME, MX, TXT, NS, SOA, etc.) from a clean form
- **Result formatting** — parsed, readable record output with copy support
- **Query history** — recent lookups kept in-browser
- **DNSSEC validation indicators** — visual cues for signed/unsigned responses
- **Educational content** — built-in "Learn" section explaining DNS concepts
- **Rate limiting & input sanitization** — client-side guards demo'd in the UI
- **Caching layer** — repeated queries served from an in-memory cache
- Fully responsive, dark-friendly design

## Tech Stack

- Plain HTML + CSS + JavaScript (single file — no frameworks, no bundler)
- Zero external requests — works offline once loaded

## Quick Start

No install needed:

```bash
# Option 1: open directly
open index.html        # or double-click in your file manager

# Option 2: serve locally
npx serve .            # then open http://localhost:3000
```

## Project Structure

```
.
├── index.html            # the whole app (UI + styles + logic)
├── UI Components.tsx     # reference: React sketch of the UI components
├── Caching Layer.js      # reference: caching snippet
├── DNSSEC Validation.js  # reference: DNSSEC snippet
├── Input Sanitization.js # reference: sanitization snippet
├── Rate Limiting.js      # reference: rate-limit snippet
├── Result Formatting.ts  # reference: formatting snippet
├── API Integration.sh    # reference: integration notes
├── Educational Content Structure.md
└── User guide            # usage notes
```

> The loose `.js`/`.ts`/`.tsx`/`.sh` files are design reference snippets from the app's development — the runnable app is `index.html` alone.

## Deploy Notes

Static single-file site — deploys anywhere:

- **GitHub Pages** — enabled on the `main` branch, root path (see homepage link)
- **Netlify / Cloudflare Pages / any static host** — drop `index.html` in and go

---

Built by Girish Lade — https://ladestack.in
