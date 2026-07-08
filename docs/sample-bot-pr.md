# Sample Bot PR — LingoPilot Workflow Example

**Repo:** [next-i18next-sample](https://github.com/heyitschien/next-i18next-sample)  
**Type:** Concept demo — illustrates a GitHub-native localization QA workflow

This is a **concrete example** of what a LingoPilot automation PR would contain. It is synthetic documentation (not a live PR link) because the private engine/dashboard repos are interview walkthroughs only.

---

## Trigger: source string changed

**File edited:** `public/locales/en/home.json`

```diff
 {
   "title": "Welcome to this LingoPilot sample demo",
-  "subtitle": "Change English copy on main and LingoPilot opens a PR with pseudo-localized text and screenshots — no manual QA needed. (post-merge baseline check)"
+  "subtitle": "Edit English copy here — automation opens a PR with pseudo-loc strings and route screenshots for review before launch."
 }
```

**Commit message (human or bot trigger):**

```text
feat(i18n): update home subtitle for clearer onboarding copy
```

---

## Bot-generated PR (example)

**Title:** `chore(i18n): pseudo-loc + screenshots for home subtitle change`

**Labels:** `i18n`, `lingopilot` (from `.lingopilot.yml`)

### Files changed

| File | Change |
| --- | --- |
| `public/locales/zz-pseudo/home.json` | Pseudo-localized `subtitle` — bracketed, lengthened strings to catch UI overflow |
| `screenshots/en-home.png` | `/` at 1280×800 |
| `screenshots/zz-pseudo-home.png` | `/` with pseudo-loc active |
| `screenshots/en-products.png` | `/products` baseline |
| `screenshots/zz-pseudo-products.png` | `/products` pseudo-loc |

### Example pseudo-loc output

```json
{
  "title": "[Ŵéłćômé të thïś ŁïñğöÞïłöt śäḿþlé déḿö]",
  "subtitle": "[Éḋïẗ Éñğłïśḧ çöþÿ ḧéřé — äüẗöḿäẗïöñ öþéñś ä ṔŔ ẅïẗḧ ṗśéüḋö-łöç śẗřïñğś äñḋ řöüẗé śçřééñśẗöẗś ƒöř řéṽïéẅ ḅéƒöřé łäüñçḧ.]"
}
```

Pseudo-loc makes truncation, clipping, and layout breaks visible **before** paying for real translation.

---

## Screenshot validation

Reviewer checks PR screenshots for:

| Check | Pass criteria |
| --- | --- |
| Nav labels fit | No overlap on `EN` / `FR` / `VI` buttons |
| Hero text | Subtitle wraps cleanly on 1280×800 |
| Pseudo-loc overflow | No clipped descenders or horizontal scroll |
| Route coverage | All routes in `.lingopilot.yml` captured |
| Regression | Other namespaces unchanged unless intended |

**Viewport:** 1280×800, `networkidle0` (per `.lingopilot.yml`)

---

## PR checklist (reviewer)

```markdown
## LingoPilot PR review

- [ ] Source change is intentional (en/*.json only)
- [ ] zz-pseudo reflects source keys — no missing strings
- [ ] Screenshots attached for all configured routes
- [ ] No visual overflow or broken layout in pseudo-loc views
- [ ] Labels and namespaces match .lingopilot.yml
- [ ] Ready to merge OR request re-run if screenshots stale
```

---

## Reviewer decision

| Outcome | Action |
| --- | --- |
| **Approve** | Merge — pseudo-loc and screenshots match source change |
| **Request changes** | Re-run worker if screenshots missing or wrong locale |
| **Block** | Source string introduces new key without namespace update |

**Example review comment:**

> Pseudo-loc subtitle overflows the hero card on `/` — see `zz-pseudo-home.png`. Suggest shorter source copy or CSS fix before merge.

---

## Employer relevance

| Posting theme | What this PR example proves |
| --- | --- |
| Localization QA | Pseudo-loc catches UI issues pre-translation |
| Pre-launch validation | Screenshot gate before merge |
| GitHub-native automation | PR-based delivery, labels, reviewer checklist |
| Product support prevention | Bad copy/layout caught before users see it |
| Documentation for non-engineers | Checklist readable by PM, support, or localization lead |
| Configuration discipline | `.lingopilot.yml` drives locales, routes, viewports |

---

## 10-minute reading path

1. This file (5 min)
2. [`.lingopilot.yml`](../.lingopilot.yml) (2 min)
3. Run locally + switch locales (3 min) — see [README](../README.md)
