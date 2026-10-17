/* अन्न · Ann Caterers — site behaviour */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const inr = (n) => "₹" + n.toLocaleString("en-IN");

  let diet = "veg";
  let activeCat = "all";
  const currentMenu = () => (diet === "veg" ? VEG_MENU : NONVEG_MENU);

  /* ---------- Contact details from SITE ---------- */
  const waLink = (msg) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
  function wireContacts() {
    $$(".js-whatsapp").forEach((a) => {
      a.href = waLink(a.dataset.msg || "Hello!");
      a.target = "_blank"; a.rel = "noopener";
    });
    const tel = (p) => `tel:${p.replace(/[^\d+]/g, "")}`;
    $$(".js-phone").forEach((a) => (a.href = tel(SITE.phones[0])));
    $("#phoneText").innerHTML = SITE.phones.map((p) => `<a href="${tel(p)}">${p}</a>`).join("<br>");
    $("#emailText").textContent = SITE.email;
    $("#emailText").href = `mailto:${SITE.email}`;
    $("#addrText").textContent = SITE.address;
    $("#year").textContent = new Date().getFullYear();
  }

  /* ---------- Renderers ---------- */
  function renderMarquee() {
    const words = OCCASIONS.map((o) => o.name).concat(["Live Counters", "Butter Chicken", "Hot Jalebi", "Mutton Biryani"]);
    const html = words.map((w) => `<span>${w}</span><i>✦</i>`).join("");
    $("#marqueeTrack").innerHTML = html + html;
  }

  function renderOccasions() {
    $("#occGrid").innerHTML = OCCASIONS.map((o) => `
      <article class="occ reveal">
        <div class="occ-ico">${o.icon}</div>
        <h3>${o.name}</h3>
        <p>${o.desc}</p>
      </article>`).join("");
  }

  function renderPackages() {
    $("#pkgGrid").innerHTML = PACKAGES.map((p) => `
      <article class="pkg reveal ${p.featured ? "featured" : ""}">
        ${p.featured ? `<span class="pkg-tag">Most popular</span>` : ""}
        <h3>${p.name}</h3>
        <div class="prices">
          <div><span class="veg-mark"></span><small>Veg</small><strong>${inr(p.veg)}</strong></div>
          <div><span class="nonveg-mark"></span><small>Non-veg</small><strong>${inr(p.nonveg)}</strong></div>
        </div>
        <p class="per">per plate</p>
        <ul>${p.feats.map((f) => `<li>${f}</li>`).join("")}</ul>
        <a class="btn ${p.featured ? "" : "btn-ghost dark"}" target="_blank" rel="noopener"
           href="${waLink(`Hello! I'm interested in the ${p.name} package. Please share more details.`)}">Enquire</a>
      </article>`).join("");
  }

  function renderTabs() {
    const tabs = [{ id: "all", name: "All" }, ...currentMenu()];
    $("#menuTabs").innerHTML = tabs.map((c) =>
      `<button role="tab" class="tab ${c.id === activeCat ? "active" : ""}" data-cat="${c.id}" aria-selected="${c.id === activeCat}">${c.name}</button>`
    ).join("");
  }

  function renderMenu() {
    const q = $("#menuSearch").value.trim().toLowerCase();
    const menu = currentMenu();
    const cats = activeCat === "all" ? menu : menu.filter((c) => c.id === activeCat);
    const mark = diet === "veg" ? "veg-mark" : "nonveg-mark";
    let html = "", n = 0;
    cats.forEach((c) => {
      const items = c.items.filter((i) => !q || i.name.toLowerCase().includes(q));
      if (!items.length) return;
      n += items.length;
      html += `<div class="menu-cat ${diet}"><h3>${c.name}<span>${items.length}</span></h3><ul>` +
        items.map((i) => `<li class="dish">
            <span class="${mark}"></span>
            <span class="dish-name">${i.name}</span>
            ${i.tag ? `<span class="badge">${i.tag}</span>` : ""}
          </li>`).join("") + `</ul></div>`;
    });
    $("#menuGrid").innerHTML = html;
    $("#menuEmpty").hidden = n > 0;
    $("#nvNote").hidden = diet !== "nonveg";
  }

  function renderGallery() {
    $("#galGrid").innerHTML = GALLERY.map((g) => `
      <figure class="gal ${g.cls || ""} reveal">
        <img src="${g.src}" alt="${g.alt}" loading="lazy" onerror="this.parentNode.classList.add('broken')">
        <figcaption>${g.alt}</figcaption>
      </figure>`).join("");
  }

  let tIdx = 0, tTimer;
  function renderTestimonials() {
    $("#tTrack").innerHTML = TESTIMONIALS.map((x) => `
      <blockquote class="t-card"><p>“${x.text}”</p><cite>${x.who}</cite></blockquote>`).join("");
    $("#tDots").innerHTML = TESTIMONIALS.map((_, i) => `<button aria-label="Review ${i + 1}" data-t="${i}"></button>`).join("");
    goT(0);
  }
  function goT(i) {
    tIdx = (i + TESTIMONIALS.length) % TESTIMONIALS.length;
    $("#tTrack").style.transform = `translateX(-${tIdx * 100}%)`;
    $$("#tDots button").forEach((b, j) => b.classList.toggle("on", j === tIdx));
    clearTimeout(tTimer); tTimer = setTimeout(() => goT(tIdx + 1), 6000);
  }

  function renderFaq() {
    $("#faqList").innerHTML = FAQS.map((f) => `
      <details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`).join("");
  }

  function renderQuoteForm() {
    $("#fEvent").innerHTML = OCCASIONS.map((o) => `<option>${o.name}</option>`).join("") + `<option>Other</option>`;
    $("#fPackage").innerHTML = PACKAGES.map((p) => `<option>${p.name}</option>`).join("") + `<option>Not sure yet</option>`;
    $("#fPackage").value = (PACKAGES.find((p) => p.featured) || PACKAGES[0]).name;
    $("#fDate").min = new Date().toISOString().split("T")[0];
  }

  function quoteMessage() {
    const lines = ["Hello Ann Caterers!", "", "I'd like a quote for:"];
    lines.push(`• Occasion: ${$("#fEvent").value}`);
    lines.push(`• Guests: ${$("#fGuests").value || "-"}`);
    lines.push(`• Package: ${$("#fPackage").value}`);
    lines.push(`• Food: ${$("#fDiet").value}`);
    if ($("#fDate").value) lines.push(`• Date: ${new Date($("#fDate").value).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}`);
    if ($("#fVenue").value.trim()) lines.push(`• Venue: ${$("#fVenue").value.trim()}`);
    return lines.join("\n");
  }

  /* ---------- Scroll reveal & counters ---------- */
  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 }) : null;
  const observeReveals = () => $$(".reveal:not(.in)").forEach((el) => (io ? io.observe(el) : el.classList.add("in")));

  const countIO = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.target, t0 = performance.now(), dur = 1400;
      const tick = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString("en-IN");
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick); countIO.unobserve(el);
    });
  }, { threshold: 0.5 }) : null;

  /* ---------- Events ---------- */
  function bind() {
    $$(".diet").forEach((b) => b.addEventListener("click", () => {
      diet = b.dataset.diet; activeCat = "all";
      $$(".diet").forEach((x) => { x.classList.toggle("active", x === b); x.setAttribute("aria-selected", x === b); });
      renderTabs(); renderMenu();
    }));
    $("#menuTabs").addEventListener("click", (e) => {
      const b = e.target.closest(".tab"); if (!b) return;
      activeCat = b.dataset.cat; renderTabs(); renderMenu();
    });
    $("#menuSearch").addEventListener("input", renderMenu);
    $("#tDots").addEventListener("click", (e) => { const b = e.target.closest("[data-t]"); if (b) goT(+b.dataset.t); });
    $("#quoteForm").addEventListener("submit", (e) => {
      e.preventDefault();
      window.open(waLink(quoteMessage()), "_blank", "noopener");
    });

    const nav = $("#nav");
    const onScroll = () => nav.classList.toggle("scrolled", scrollY > 30);
    addEventListener("scroll", onScroll, { passive: true }); onScroll();
    $("#burger").addEventListener("click", () => nav.classList.toggle("open"));
    $("#navLinks").addEventListener("click", (e) => { if (e.target.tagName === "A") nav.classList.remove("open"); });
  }

  /* ---------- Init ---------- */
  wireContacts();
  renderMarquee(); renderOccasions(); renderPackages(); renderTabs(); renderMenu();
  renderGallery(); renderTestimonials(); renderFaq(); renderQuoteForm();
  bind();
  observeReveals();
  $$(".count").forEach((el) => (countIO ? countIO.observe(el) : (el.textContent = el.dataset.target)));
})();
