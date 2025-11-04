# ResQHub

ResQHub is a small static website that provides disaster preparedness resources and guidance.

This repository was recently reorganized to improve maintainability. HTML pages now live under `src/pages/`, static assets (images) are under `src/assets/images/`, and reference PDFs live in `docs/`.

Quick overview
--------------

- Source pages: `src/pages/*.html`
- Images: `src/assets/images/` (logo, hero images, disaster images)
- Styles / scripts: `src/assets/styles/` and `src/assets/scripts/` (placeholders for future custom files)
- Reusable components: `src/components/` (placeholder)
- Documentation PDFs: `docs/`
- GitHub Actions workflow: `.github/workflows/static.yml` — configured to upload the `ResQHub` folder so Pages receives pages + assets + docs.

Previewing locally
-------------------

Because this is a static site, the easiest way to preview it locally is to run a simple HTTP server and open the pages in your browser. From the `ResQHub` directory you can run (PowerShell):

```powershell
# Start a simple HTTP server on port 8000
# (works with Python 3 installed)
python -m http.server 8000
```

Then open `http://localhost:8000/ResQHub/src/pages/index.html` in your browser.

Notes on deployment
-------------------

- GitHub Pages is configured via the workflow at `.github/workflows/static.yml`. The workflow uploads the `ResQHub` folder so the Pages artifact includes `src/pages`, `src/assets/images`, and `docs`.
- When editing pages, keep asset paths relative (the pages in `src/pages/` reference images as `../assets/images/<file>`).

How to add assets
------------------

- To add images, place them in `src/assets/images/` and update page references as needed.
- To add or update PDFs, place them in `docs/` and update links in `src/pages/library.html`.

Small maintenance tips
----------------------

- If you want a narrower Pages artifact, you can change the workflow `path` to `ResQHub/src` (and ensure docs are reachable). I set it to `ResQHub` to be conservative and include everything.
- Consider extracting header/footer into `src/components/` and using a templating/build step (e.g., Eleventy, Hugo) if the site grows.

Contact
-------

For questions about this restructure, open an issue or contact the repository owner.

