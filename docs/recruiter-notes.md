# Recruiter Notes

## What this project demonstrates

This repo is the **public face of LingoPilot** — my concept for GitHub-native localization QA. It shows that I can design workflows that reduce manual steps, connect engineering and localization review, and document them clearly for non-technical stakeholders.

The demo app itself is small. The proof is in the **workflow thinking**: pseudo-localization catches layout issues early, screenshots make review visual, and PR-based delivery fits how teams already work.

## What to look at first

1. **Run the app locally** — `npm install && npm run dev` → http://localhost:3001. Switch locales in the nav.
2. **Read `.lingopilot.yml`** — shows how the automation is configured for this repo.
3. **Check `public/locales/`** — compare `en/` (source) with `zz-pseudo/` (auto-generated overflow test strings).
4. **Browse `screenshots/`** — if bot PRs have run, these show route-level visual validation.

## What is intentionally out of scope

- Private LingoPilot engine and dashboard source code
- Production deployment, scaling, or customer usage claims
- Full translation management platform features
- Credentials, webhooks, or internal infrastructure details

## Interview talking points

- **Problem framing:** Why pseudo-loc and screenshots matter before real translation spend.
- **GitHub-native design:** Why PR-based delivery fits review workflows better than a separate dashboard-only tool.
- **Public vs private split:** This repo is the safe demo; engine/dashboard are walkthrough-only in interview.
- **Support angle:** How this workflow helps CS/support teams verify UI changes across languages without filing "looks broken in French" tickets blindly.
- **What I'd build next:** Better diff summaries, failure notifications, and help-center docs for teams adopting the workflow.
