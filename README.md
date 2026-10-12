# अन्न · Ann Caterers — Haridwar

Static, bilingual (Hindi / English) website for a pure-veg caterer in Haridwar. No build step: plain HTML, CSS and JS, ready for GitHub Pages.

## Structure
```
index.html        page layout
css/style.css     all styling
js/data.js        ← EDIT THIS: phone, WhatsApp, address, menu, packages, FAQ, gallery, reviews
js/main.js        behaviour (language toggle, menu builder, sliders)
images/           put the client's real photos here
```

## Before going live (checklist)
- [ ] `js/data.js` → `SITE`: real phone, WhatsApp number (digits only, with 91), email, address, map query
- [ ] `js/data.js` → `TESTIMONIALS`: replace the sample reviews with real customer reviews
- [ ] `index.html` → stats (`data-target="500"`, `15` years, etc.): set the client's real numbers
- [ ] `js/data.js` → `GALLERY`: swap the stock photos for real event photos (`images/xyz.jpg`)
- [ ] Review the menu items and packages with the client

## Run locally
```
python -m http.server 5500
```
Then open http://localhost:5500

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
