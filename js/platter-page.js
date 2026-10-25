/* अन्न · Ann Caters & Events — renders one platter menu (platter.html?p=silver) */
(() => {
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const id = new URLSearchParams(location.search).get("p");
  const p = PLATTERS.find((x) => x.id === id) || PLATTERS[0];

  document.title = `${p.name} · अन्न Ann Caters & Events`;
  $("#pName").textContent = p.name;
  $("#pIntro").textContent = p.intro;
  $("#pDownload").href = `menus/ann-${p.id}-platter.pdf`;
  $("#pEnquire").href = `https://wa.me/${SITE.whatsapp[0]}?text=${encodeURIComponent(`Hello! I'm interested in ${p.name}. Please share more details.`)}`;

  $("#pSwitch").innerHTML = PLATTERS.map((x) =>
    `<a href="platter.html?p=${x.id}" class="${x.id === p.id ? "on" : ""}">${esc(x.short)}</a>`).join("");

  $("#pSections").innerHTML = p.sections.map((s) => `
    <section class="p-sec">
      <h2>${esc(s.title)}</h2>
      ${s.note ? `<p class="p-note">${esc(s.note)}</p>` : ""}
      <ul>${s.items.map((it) => Array.isArray(it)
        ? `<li>${esc(it[0])}<small>${esc(it[1])}</small></li>`
        : `<li>${esc(it)}</li>`).join("")}</ul>
    </section>`).join("");

  $("#pContact").textContent = `Call & WhatsApp: ${SITE.phones.join("  ·  ")}`;
  $("#year").textContent = new Date().getFullYear();
})();
