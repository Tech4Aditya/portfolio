# CTOS_TERMINAL // Aditya Pandey Portfolio

> A cyberpunk, terminal-themed personal portfolio built as a live "CTOS" hacking interface — boot sequence, glitch text, scanlines, and all.

**Live Demo:** _add your deployed link here (e.g. Vercel/Netlify/GitHub Pages)_

---

## `> SYSTEM_OVERVIEW`

This isn't a template portfolio. It's a fully custom terminal/hacker-console UI inspired by Watch Dogs' CTOS aesthetic — boot logs, glitch-text headers, scanline overlays, and a live GitHub API feed pulling real repo data straight into the projects section.

## `> FEATURES`

- **Boot sequence animation** — simulated terminal initialization on load
- **Glitch-text effects** on headers and section titles
- **CRT scanline + matrix background** overlay for retro-hacker feel
- **Live GitHub API integration** — dynamically pulls and renders repos from `Tech4Aditya`
- **Codolio competitive programming stats** embedded via live iframe
- **Certificate gallery** — clickable cert cards with full-size preview
- **Fully responsive** navigation with section-based routing (`#about`, `#experience`, `#projects`, `#certs`)
- **Direct resume download** link

## `> TECH_STACK`

| Layer | Tech |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, animations, no framework) |
| Logic | Vanilla JavaScript |
| Fonts | Share Tech Mono, VT323 (Google Fonts) |
| Data | GitHub REST API, Codolio embed |

No frameworks, no build step — pure HTML/CSS/JS by design.

## `> DIRECTORY_STRUCTURE`
0ortfolio/
├── assets/          # profile pic, resume, certificates
├── index.html       # main structure & content
├── style.css        # terminal theme, animations, layout
└── script.js        # boot sequence, GitHub API fetch, interactivity

## `> RUN_LOCALLY`

```bash
git clone https://github.com/Tech4Aditya/portfolio.git
cd portfolio
```

Then just open `index.html` in a browser — no build step, no dependencies.

For live-reload during development:
```bash
# using VS Code Live Server extension, or:
npx serve .
```

## `> SECTIONS`

- **`SYS://ABOUT`** — profile, bio, social links (LinkedIn, GitHub, Codolio)
- **`SYS://EXPERIENCE`** — GSSoC'26 contribution log (15+ merged PRs across 7 repos) + live competitive programming stats
- **`SYS://PROJECTS`** — live GitHub repo feed via API
- **`SYS://CERTS`** — certificate gallery (GE Aerospace, IEEE VLSI, Deloitte, CodeChef, etc.)

## `> ROADMAP`

- [ ] Add project case-study pages (not just repo cards)
- [ ] Add dark/light terminal theme toggle
- [ ] Add contact form (currently social-links only)
- [ ] Lighthouse/perf pass on GitHub API calls (rate-limit handling, caching)

## `> CONTACT`

- LinkedIn: [tech-aditya](https://www.linkedin.com/in/tech-aditya/)
- GitHub: [Tech4Aditya](https://github.com/Tech4Aditya)
- Codolio: [Tech4Aditya](https://codolio.com/profile/Tech4Aditya)

---

> `CONNECTION SECURE. AWAITING INPUT... [USER_ID: Tech4Aditya]`
