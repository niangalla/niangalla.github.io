# Alla Niang · Portfolio

Static personal portfolio of **Alla NIANG**, Data & AI Engineer (Dakar, Senegal).
Plain HTML + CSS + JavaScript: no framework, no build step, no backend, no paid services.
The contact form posts to [FormSubmit](https://formsubmit.co) (free, no account).

```
index.html          single page (EN by default, FR/EN toggle, light/dark toggle)
css/style.css       all styles ("data pipeline" theme + v2 redesign overrides at the end: oversized hero, numbered works, handwritten notes)
js/main.js          translations (EN/FR object), theme, pipeline rail, contact form (FormSubmit)
assets/             photo (webp + jpg), CV PDF, favicon, Open Graph image
assets/projects/    project card visuals (webp): repo diagrams/screenshots (*-card, *-full) and drawn diagrams (*-diagram)
.nojekyll           tells GitHub Pages to serve files as-is
```

## Versions

- **v2 (current, since 2026-10-23):** redesign first built as a draft under `/draft/`, then promoted to the root. Big "DATA & AI ENGINEER" hero, "Open to work" pill, numbered flagship projects (01 CuberOne, 02 Chatbot RAG e-Sénégal, 03 WattWatch Africa), "More projects" grid, two handwritten notes (Caveat font).
- **v1 (previous design):** git tag `v1-original` in the `niangalla.github.io` repo. To roll back: `git checkout v1-original -- index.html css js assets && git commit -m "Roll back to v1" && git push`.
- `/draft/` now only holds a redirect to `/` so old draft links keep working.
- This folder is the **single source of truth**: edit `index.html`, `css/style.css` and `js/main.js` here directly. The old `build_draft.py` generator was retired (renamed `build_draft.retired.py`, it exits immediately) because re-running it would regenerate the page from v1 and overwrite edits.

## Preview locally

```bash
cd portfolio
python3 -m http.server 8000
# open http://localhost:8000
```

## Publish on GitHub Pages as https://niangalla.github.io

1. On GitHub (account `niangalla`), create a **public** repository named exactly `niangalla.github.io`.
2. Upload the contents of this folder to the repository root (`index.html` must be at the root):
   ```bash
   cd portfolio
   git init
   git add index.html css js assets README.md .nojekyll
   git commit -m "Portfolio"
   git branch -M main
   git remote add origin https://github.com/niangalla/niangalla.github.io.git
   git push -u origin main
   ```
   (Or use "Add file > Upload files" in the GitHub web UI and drag the files in.)
3. In the repo: **Settings > Pages > Build and deployment > Source: Deploy from a branch**, branch `main`, folder `/ (root)`. Save.
4. After about a minute the site is live at **https://niangalla.github.io/**.

The `preview-*.png` screenshots and the zip are not needed on GitHub.

## Contact form (FormSubmit)

The form sends messages in-page (via `fetch`) to `https://formsubmit.co/ajax/niangalla98@gmail.com`; visitors don't need a mail app.
Subjects are prefixed with `[Portfolio] `, a hidden `_honey` field blocks simple spam bots, and if sending fails the visitor is shown a direct email link instead.

1. **One-time activation:** the **first real submission** (once the site is live) does not deliver the message. Instead FormSubmit sends an **activation email to niangalla98@gmail.com**. Open it and click **Activate Form**. From then on every submission arrives in that inbox. (Tip: send the first test message yourself right after publishing.)
2. **Hide the address (optional, recommended):** after activation, FormSubmit gives you a random alias endpoint (e.g. `https://formsubmit.co/ajax/abc123def456…`). In `js/main.js`, replace the email in `FORM_ENDPOINT` with that alias (and update the `action` attribute of `<form id="contact-form">` in `index.html`) so your address no longer appears in the form code.
   Note: the address is still listed in the Contact section and email links on purpose; this only hides the form endpoint.

## Updating content

- **Text**: every visible string has a `data-i18n` key. Edit the English text in `index.html` *and* the matching key in both `en` and `fr` objects in `js/main.js` (the JS object wins when the page loads).
- **CV**: replace `assets/Alla_Niang_CV.pdf` (keep the file name).
- **Project visuals**: card images live in `assets/projects/` (16:9 cards, `-full` versions open on click). Keep `width`/`height` in `index.html` in sync if you swap one.
- **Recommendations**: quotes live in `js/main.js` (`reco.*` keys; FR verbatim, EN translated).
- **Photo**: replace `assets/alla-niang.webp` and `assets/alla-niang.jpg` (portrait, 4:5, ~800×1000).
- **Language link**: `?lang=fr` opens the French version directly (e.g. `https://niangalla.github.io/?lang=fr`).
- If you use a custom domain or another repo name, update the `canonical`, `og:url` and `og:image` URLs in `index.html`.
