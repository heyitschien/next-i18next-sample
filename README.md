# next-i18next-sample

**Public demo surface for LingoPilot** — a GitHub-native localization QA workflow concept.

This repo is the public demo surface for my **LingoPilot** concept: a GitHub-native localization QA workflow. The private engine/dashboard repos are not public, but this sample shows the workflow direction safely.

> **What this demonstrates:** Edit English locale files → automation opens a PR with pseudo-translated strings and route screenshots — a repeatable i18n QA loop without manual copy-paste.

---

## What this is

A minimal **Next.js (Pages Router) + [next-i18next](https://github.com/i18next/next-i18next)** demo app. It serves as the target repository for LingoPilot's automated localization workflow: pseudo-localization, screenshot validation, and GitHub-native PR delivery.

This is a **concept demo** and public proof point — not a production system used by customers.

---

## Why it matters

Localization bugs often slip through because QA is manual, screenshots are inconsistent, and pseudo-loc testing is skipped under deadline pressure. LingoPilot explores automating that loop inside GitHub — where teams already review code.

This sample lets recruiters and interviewers see the workflow direction without access to private infrastructure.

---

## What it demonstrates

| Layer | Detail |
|---|---|
| Framework | Next.js 14, Pages Router |
| i18n library | `next-i18next` (industry standard) |
| Locales | `en` (source), `fr`, `vi`, `zz-pseudo` (auto-generated) |
| Namespaces | `common`, `home`, `products`, `checkout`, `product` |
| Routes covered | `/` · `/products` · `/checkout` · `/product/[id]` |
| LingoPilot config | `.lingopilot.yml` |

**Skills shown:** i18n workflow design · pseudo-localization · screenshot validation · GitHub-native automation thinking · documentation for non-engineers

---

## Recruiter quick scan

This project demonstrates:

- Localization / i18n workflow design
- Pseudo-localization for catching UI overflow before real translation
- Screenshot validation across multiple routes
- GitHub-native automation concept (PR-based delivery)
- Clear documentation connecting a public demo to private architecture work
- Product-minded thinking about reducing manual QA steps

**Start here:** run locally (below) → switch locales in the nav → read `.lingopilot.yml`

---

## Demo / walkthrough

### LingoPilot workflow (concept)

```
1. Edit any file under public/locales/en/
2. Push to main
3. LingoPilot automation receives the webhook → enqueues a job
4. Worker clones repo → generates pseudo-translations
5. Worker opens a PR: updates public/locales/zz-pseudo/ + commits screenshots
6. Reviewer inspects PR screenshots before merging
```

When the private LingoPilot stack is running, bot-generated PRs include updated `zz-pseudo` locale files and Puppeteer screenshots at 1280×800 for each route.

---

## How to run locally

```bash
git clone https://github.com/heyitschien/next-i18next-sample.git
cd next-i18next-sample
npm install
npm run dev
# → http://localhost:3001
```

Switch between `EN`, `FR`, and `VI` using the nav buttons. The `zz-pseudo` locale is auto-generated — see `.lingopilot.yml` for config.

**Requirements:** Node.js 20 (see `.nvmrc`)

---

## Screenshots / video

### Screenshots

- Bot-committed screenshots (when automation has run) live in `screenshots/`
- Additional captures: [docs/screenshots/](./docs/screenshots/)

### Walkthrough video

Coming soon: short walkthrough by Chien explaining:

1. What problem this solves
2. How the workflow works
3. What decisions were made
4. How this connects to product support / technical support work

---

## Related private work

The full **LingoPilot engine** and **dashboard** are private repos. I can walk through architecture, product decisions, and workflow design during an interview.

| Component | Status |
|---|---|
| This repo (`next-i18next-sample`) | Public demo surface |
| LingoPilot engine (GitHub App + worker) | Private — interview walkthrough only |
| LingoPilot dashboard (run history + screenshot gallery) | Private — interview walkthrough only |

Do not expect public access to private repo code. This sample is intentionally scoped to show the workflow safely.

---

## Notes on privacy / scope

| In scope (public) | Out of scope (private) |
|---|---|
| Next.js demo app and locale files | LingoPilot engine source code |
| `.lingopilot.yml` configuration sample | Dashboard UI and run history |
| Workflow concept and documentation | Production deployment details |
| Public automation PRs (when bot is active) | Credentials, tokens, or customer data |

**Language:** This is a **public demo surface** and **concept demo** — not an enterprise-grade production system.

---

## Project structure

```
next-i18next-sample/
├── pages/
│   ├── _app.js          # layout + language switcher
│   ├── index.js         # home page
│   ├── products.js      # products listing
│   ├── checkout.js      # checkout page
│   └── product/[id].js  # dynamic product detail
├── public/locales/
│   ├── en/              # source strings (edit these)
│   ├── fr/              # French translations
│   ├── vi/              # Vietnamese translations
│   └── zz-pseudo/       # auto-generated by LingoPilot worker
├── screenshots/         # auto-committed by LingoPilot bot (when active)
├── docs/
│   ├── recruiter-notes.md
│   └── screenshots/
└── .lingopilot.yml      # LingoPilot configuration
```

---

## Triggering automation (optional)

If you have local access to the private LingoPilot engine:

```bash
# Via GitHub repository_dispatch (no commit needed)
gh api repos/heyitschien/next-i18next-sample/dispatches \
  --method POST \
  -f event_type=localization \
  -f "client_payload[sha]=main"

# Or edit any source string and push
echo " " >> public/locales/en/home.json && git add . && git commit -m "test: trigger lingo bot" && git push
```

---

## Tech stack

- **Next.js 14** · **React 18** · **next-i18next** · **i18next**
- Node.js 20 (see `.nvmrc`)

---

## Contact

- **GitHub:** https://github.com/heyitschien
- **LinkedIn:** https://www.linkedin.com/in/chien-escalera-duong-4ba535347/

For deeper context, see [docs/recruiter-notes.md](./docs/recruiter-notes.md).
