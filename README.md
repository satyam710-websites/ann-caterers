# अन्न · Ann Caters & Events — Haridwar

Static website for a premium caterer in Haridwar. No build step: plain HTML, CSS and JS, ready for GitHub Pages.

## Structure
```
index.html            main page
platter.html          full menu for one platter (platter.html?p=silver | golden | platinum)
privacy.html          privacy policy
css/style.css         all styling (incl. the print/PDF layout of platter.html)
js/data.js            ← EDIT: phone, WhatsApp, address, occasions, à la carte menu, FAQ, gallery, reviews
js/platters.js        ← EDIT: the three platter set menus
js/main.js            main page behaviour (veg/non-veg toggle, quote form, sliders)
js/platter-page.js    renders platter.html
menus/                downloadable platter PDFs (generated, see below)
images/               logo files; put the client's real photos here too
tools/                make-menu-pdfs.ps1
```

## Before going live (checklist)
- [ ] `js/data.js` → `SITE`: real email (still a placeholder) and full address
- [ ] `js/data.js` → `TESTIMONIALS`: replace the sample reviews with real customer reviews
- [ ] `index.html` → stats (`data-target="500"`, `15` years, etc.): set the client's real numbers
- [ ] `js/data.js` → `GALLERY`: swap the stock photos for real event photos (`images/xyz.jpg`)
- [ ] Review the platter menus (`js/platters.js`) and the à la carte veg & non-veg menu with the client
- [ ] Confirm the non-veg disclaimer wording matches current Haridwar rules

## Run locally
```
python -m http.server 5500
```
Then open http://localhost:5500

## Platter PDFs
The "Download PDF" buttons serve the files in `menus/`. They are generated from `platter.html`,
so after changing `js/platters.js` (or the phone numbers) rebuild them with:
```
powershell -ExecutionPolicy Bypass -File tools\make-menu-pdfs.ps1
```
Needs Microsoft Edge or Google Chrome (no other software).

## Deploy to GitHub Pages
1. Create a new repo on GitHub (e.g. `ann-caterers`)
2. Push this folder:
   ```
   git init
   git add .
   git commit -m "Ann Caterers website"
   git branch -M main
   git remote add origin https://github.com/<username>/ann-caterers.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source: Deploy from branch → main / (root)**
4. The site goes live at `https://<username>.github.io/ann-caterers/`

Custom domain (e.g. `anncaterers.in`): add it under Settings → Pages, and point the domain's DNS to GitHub Pages.
