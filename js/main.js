/* अन्न · Ann Caterers — site behaviour */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };

  let lang = store.get("ann-lang", "en");
  let activeCat = "all";
  const selected = new Set(store.get("ann-sel", []));
  const t = (en, hi) => (lang === "hi" ? hi || en : en);

  /* ---------- Contact details from SITE ---------- */
  const waLink = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
  function wireContacts() {
    $$(".js-whatsapp").forEach((a) => {
      a.href = waLink(a.dataset.msg || "Namaste!");
      a.target = "_blank"; a.rel = "noopener";
    });
    $$(".js-phone").forEach((a) => (a.href = `tel:${SITE.phone.replace(/\s/g, "")}`));
    $("#phoneText").textContent = SITE.phone;
    $("#emailText").textContent = SITE.email;
    $("#emailText").href = `mailto:${SITE.email}`;
    $("#addrText").textContent = SITE.address;
    $("#mapFrame").src = `https://maps.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&z=14&output=embed`;
    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Static text translation ---------- */
  function applyStaticLang() {
    document.documentElement.lang = lang;
    document.body.classList.toggle("hi", lang === "hi");
    $$("[data-hi]").forEach((el) => {
      if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
      el.innerHTML = lang === "hi" ? el.dataset.hi : el.dataset.en;
    });
    $$("[data-hi-placeholder]").forEach((el) => {
      if (el.dataset.enPlaceholder === undefined) el.dataset.enPlaceholder = el.placeholder;
      el.placeholder = lang === "hi" ? el.dataset.hiPlaceholder : el.dataset.enPlaceholder;
    });
    $("#langToggle").textContent = lang === "hi" ? "EN" : "हिं";
  }

  /* ---------- Renderers ---------- */
  function renderMarquee() {
    const words = OCCASIONS.map((o) => t(o.en, o.hi)).concat(["Kanwar Bhandara", "Kumbh", "Navratri"].map((w, i) => t(w, ["कांवड़ भंडारा", "कुंभ", "नवरात्रि"][i])));
    const html = words.map((w) => `<span>${w}</span><i>✦</i>`).join("");
    $("#marqueeTrack").innerHTML = html + html;
  }

  function renderOccasions() {
    $("#occGrid").innerHTML = OCCASIONS.map((o) => `
      <article class="occ reveal">
        <div class="occ-ico">${o.icon}</div>
        <h3>${t(o.en, o.hi)}</h3>
        <p>${t(o.den, o.dhi)}</p>
      </article>`).join("");
  }

  function renderTabs() {
    const tabs = [{ id: "all", en: "All", hi: "सभी" }, ...MENU];
    $("#menuTabs").innerHTML = tabs.map((c) =>
      `<button role="tab" class="tab ${c.id === activeCat ? "active" : ""}" data-cat="${c.id}" aria-selected="${c.id === activeCat}">${t(c.en, c.hi)}</button>`
    ).join("");
  }

  const tagHi = { Live: "लाइव", Bestseller: "सबसे पसंदीदा", Local: "हरिद्वारी", Garhwali: "गढ़वाली", Pahadi: "पहाड़ी", Winter: "सर्दी", "Holi special": "होली विशेष" };

  function renderMenu() {
    const q = $("#menuSearch").value.trim().toLowerCase();
    const sattvik = $("#sattvikOnly").checked;
    const cats = activeCat === "all" ? MENU : MENU.filter((c) => c.id === activeCat);
    let html = "", n = 0;
    cats.forEach((c) => {
      const items = c.items.filter((i) =>
        (!sattvik || i.s) && (!q || i.en.toLowerCase().includes(q) || i.hi.includes(q))
      );
      if (!items.length) return;
      n += items.length;
      html += `<div class="menu-cat"><h3>${t(c.en, c.hi)}<span>${items.length}</span></h3><ul>` +
        items.map((i) => {
          const on = selected.has(i.en);
          return `<li class="dish ${on ? "on" : ""}">
            <span class="veg-mark" title="Veg"></span>
            <span class="dish-name">${t(i.en, i.hi)}<small>${lang === "hi" ? i.en : i.hi}</small></span>
            ${i.s ? `<span class="badge s" title="${t("No onion-garlic", "बिना प्याज़-लहसुन")}">${t("Sattvik", "सात्विक")}</span>` : ""}
            ${i.tag ? `<span class="badge">${t(i.tag, tagHi[i.tag])}</span>` : ""}
            <button class="add" data-item="${i.en}" aria-pressed="${on}" aria-label="${on ? "Remove" : "Add"} ${i.en}">${on ? "✓" : "＋"}</button>
          </li>`;
        }).join("") + `</ul></div>`;
    });
    $("#menuGrid").innerHTML = html;
    $("#menuEmpty").hidden = n > 0;
  }

  const findItem = (en) => { for (const c of MENU) for (const i of c.items) if (i.en === en) return { ...i, cat: c }; };

  function renderTicket() {
    const list = $("#ticketList");
    const items = [...selected].map(findItem).filter(Boolean);
    $("#selCount").textContent = items.length;
    $("#selChipCount").textContent = items.length;
    $("#selChip").hidden = items.length === 0;
    if (!items.length) {
      list.innerHTML = `<li class="ticket-empty">${t("No dishes yet. Tap ＋ in the menu.", "अभी कोई व्यंजन नहीं चुना गया। मेन्यू से ＋ दबाएँ।")}</li>`;
      return;
    }
    // group by category, in menu order
    list.innerHTML = MENU.map((c) => {
      const inCat = items.filter((i) => i.cat.id === c.id);
      if (!inCat.length) return "";
      return `<li class="t-cat">${t(c.en, c.hi)}</li>` + inCat.map((i) =>
        `<li class="t-item"><span>${t(i.en, i.hi)}</span><button data-remove="${i.en}" aria-label="Remove ${i.en}">×</button></li>`
      ).join("");
    }).join("");
  }

  function renderEvents() {
    const sel = $("#fEvent"), prev = sel.value;
    sel.innerHTML = OCCASIONS.map((o) => `<option value="${o.en}">${t(o.en, o.hi)}</option>`).join("") +
      `<option value="Other">${t("Other", "अन्य")}</option>`;
    if (prev) sel.value = prev;
  }

  function renderPresets() {
    $("#presetBtns").innerHTML = PRESETS.map((p, i) => `<button class="chip" data-preset="${i}">${t(p.en, p.hi)}</button>`).join("");
  }

  function renderPackages() {
    $("#pkgGrid").innerHTML = PACKAGES.map((p) => `
      <article class="pkg reveal ${p.featured ? "featured" : ""}">
        <span class="pkg-tag">${t(p.tag, p.taghi)}</span>
        <h3>${t(p.name, p.hi)}</h3>
        <ul>${p.feats.map((f) => `<li>${t(f[0], f[1])}</li>`).join("")}</ul>
        <a class="btn ${p.featured ? "" : "btn-ghost dark"}" target="_blank" rel="noopener"
           href="${waLink(`Namaste! I'm interested in the ${p.name} package. Please share details and pricing.`)}">
           ${t("Get price", "कीमत जानें")}</a>
      </article>`).join("");
  }

  function renderGallery() {
    $("#galGrid").innerHTML = GALLERY.map((g) => `
      <figure class="gal ${g.cls || ""} reveal">
        <img src="${g.src}" alt="${g.en}" loading="lazy" onerror="this.parentNode.classList.add('broken')">
        <figcaption>${g.en}</figcaption>
      </figure>`).join("");
  }

  let tIdx = 0, tTimer;
  function renderTestimonials() {
    $("#tTrack").innerHTML = TESTIMONIALS.map((x) => `
      <blockquote class="t-card"><p>“${t(x.en, x.hi)}”</p><cite>${x.who}</cite></blockquote>`).join("");
    $("#tDots").innerHTML = TESTIMONIALS.map((_, i) => `<button aria-label="Review ${i + 1}" data-t="${i}"></button>`).join("");
    goT(tIdx);
  }
  function goT(i) {
    tIdx = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    $("#tTrack").style.transform = `translateX(-${tIdx * 100}%)`;
    $$("#tDots button").forEach((b, j) => b.classList.toggle("on", j === tIdx));
    clearTimeout(tTimer); tTimer = setTimeout(() => goT(tIdx + 1), 6000);
  }

  function renderFaq() {
    $("#faqList").innerHTML = FAQS.map((f) => `
      <details class="faq-item"><summary>${t(f.qen, f.qhi)}</summary><p>${t(f.aen, f.ahi)}</p></details>`).join("");
  }

  function renderAll() {
    applyStaticLang();
    renderMarquee(); renderOccasions(); renderTabs(); renderMenu(); renderTicket();
    renderEvents(); renderPresets(); renderPackages(); renderTestimonials(); renderFaq();
    observeReveals();
  }

  /* ---------- Selection ---------- */
  function toggleItem(name) {
    selected.has(name) ? selected.delete(name) : selected.add(name);
    store.set("ann-sel", [...selected]);
    renderMenu(); renderTicket();
    const chip = $("#selChip"); chip.classList.remove("bump"); void chip.offsetWidth; chip.classList.add("bump");
  }

  function buildMessage() {
    const items = [...selected].map(findItem).filter(Boolean);
    const lines = ["🙏 Namaste Ann Caterers!", "", "I'd like a quote for:"];
    lines.push(`• Occasion: ${$("#fEvent").value}`);
    lines.push(`• Guests: ${$("#fGuests").value || "-"}`);
    if ($("#fDate").value) lines.push(`• Date: ${new Date($("#fDate").value).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`);
    if ($("#fVenue").value.trim()) lines.push(`• Venue: ${$("#fVenue").value.trim()}`);
    if ($("#fSattvik").checked) lines.push("• ⚠️ Full menu WITHOUT onion & garlic");
    if (items.length) {
      lines.push("", `🍽️ Menu (${items.length} dishes):`);
      MENU.forEach((c) => {
        const inCat = items.filter((i) => i.cat.id === c.id);
        if (inCat.length) lines.push(`*${c.en}*: ${inCat.map((i) => i.en).join(", ")}`);
      });
    } else {
      lines.push("", "Please suggest a menu.");
    }
    return lines.join("\n");
  }

  /* ---------- Scroll reveal & counters ---------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  function observeReveals() { $$(".reveal:not(.in)").forEach((el) => (io ? io.observe(el) : el.classList.add("in"))); }

  const countIO = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.target, t0 = performance.now(), dur = 1400;
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
        el.textContent = v.toLocaleString("en-IN");
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick); countIO.unobserve(el);
    });
  }, { threshold: 0.5 }) : null;

  /* ---------- Events ---------- */
  function bind() {
    $("#langToggle").addEventListener("click", () => { lang = lang === "en" ? "hi" : "en"; store.set("ann-lang", lang); renderAll(); });

    $("#menuTabs").addEventListener("click", (e) => {
      const b = e.target.closest(".tab"); if (!b) return;
      activeCat = b.dataset.cat; renderTabs(); renderMenu();
    });
    $("#menuSearch").addEventListener("input", renderMenu);
    $("#sattvikOnly").addEventListener("change", renderMenu);
    $("#menuGrid").addEventListener("click", (e) => { const b = e.target.closest(".add"); if (b) toggleItem(b.dataset.item); });
    $("#ticketList").addEventListener("click", (e) => { const b = e.target.closest("[data-remove]"); if (b) toggleItem(b.dataset.remove); });
    $("#presetBtns").addEventListener("click", (e) => {
      const b = e.target.closest("[data-preset]"); if (!b) return;
      const p = PRESETS[+b.dataset.preset];
      selected.clear(); p.items.forEach((n) => selected.add(n));
      if (p.en.includes("Sattvik") || p.en.includes("Vrat")) $("#fSattvik").checked = true;
      store.set("ann-sel", [...selected]); renderMenu(); renderTicket();
    });
    $("#clearSel").addEventListener("click", () => { selected.clear(); store.set("ann-sel", []); renderMenu(); renderTicket(); });
    $("#sendWa").addEventListener("click", () => window.open(waLink(buildMessage()), "_blank", "noopener"));
    $("#tDots").addEventListener("click", (e) => { const b = e.target.closest("[data-t]"); if (b) goT(+b.dataset.t); });

    // nav
    const nav = $("#nav");
    const onScroll = () => nav.classList.toggle("scrolled", scrollY > 30);
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
    $("#burger").addEventListener("click", () => nav.classList.toggle("open"));
    $("#navLinks").addEventListener("click", (e) => { if (e.target.tagName === "A") nav.classList.remove("open"); });

    // min date = today
    $("#fDate").min = new Date().toISOString().split("T")[0];
  }

  /* ---------- Init ---------- */
  wireContacts();
  bind();
  renderAll();
  renderGallery(); observeReveals();
  $$(".count").forEach((el) => (countIO ? countIO.observe(el) : (el.textContent = el.dataset.target)));
})();
