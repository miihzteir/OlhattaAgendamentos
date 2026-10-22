(() => {
  // src/styles.js
  var CSS = `
.est-tabs{display:flex; flex-wrap:wrap; gap:4px; overflow-x:auto; background:#fff; border:1px solid var(--line); border-radius:12px; padding:5px; margin-bottom:20px; scrollbar-width:none;}
.est-tabs::-webkit-scrollbar{display:none;}
.est-tab{display:inline-flex; align-items:center; gap:7px; padding:8px 13px; border-radius:9px; border:none; background:none; font-family:'Manrope',sans-serif; font-size:13px; font-weight:700; color:var(--ink-soft); cursor:pointer; white-space:nowrap; transition:background .15s, color .15s, transform .18s cubic-bezier(.34,1.56,.64,1);}
.est-tab svg{width:15px; height:15px;}
.est-tab:hover{background:var(--sage-pale); color:var(--ink);}
.est-tab:active{transform:scale(.95);}
.est-tab.on{background:var(--sage-dark); color:#fff;}
.est-tab .nav-badge{margin-left:2px;}
.est-tab.on .nav-badge{background:rgba(255,255,255,.25);}
.est-sub{display:flex; gap:6px; flex-wrap:wrap; margin-bottom:16px;}
.est-statsub{font-size:11.5px; color:var(--ink-soft); margin-top:5px; line-height:1.5; display:flex; gap:6px; align-items:center; flex-wrap:wrap;}
.stat-card .est-val.est-money{font-size:24px;}
.est-trend{font-size:11px; font-weight:800; padding:1px 7px; border-radius:20px; background:var(--st-realizado-bg); color:var(--st-realizado);}
.est-trend.down{background:var(--st-cancelado-bg); color:var(--st-cancelado);}
.est-trend.eq{background:#F1EEE4; color:var(--ink-soft);}
.est-period{display:flex; gap:8px; flex-wrap:wrap; align-items:center;}
.est-period input[type=date]{width:150px; min-width:0; padding:8px 11px; font-size:13px;}
.est-ate{font-size:12.5px; color:var(--ink-soft); font-weight:600;}
.est-num{font-variant-numeric:tabular-nums; white-space:nowrap;}
td.est-r, th.est-r{text-align:right;}
td.est-c, th.est-c{text-align:center;}
.est-neg{color:var(--st-cancelado); font-weight:800;}
.est-pos-n{color:var(--st-realizado); font-weight:800;}
.est-two{display:flex; flex-direction:column; line-height:1.3; min-width:0;}
.est-two b{color:var(--ink); font-weight:700;}
.est-two small{color:var(--ink-soft); font-size:11.5px;}
.est-cell{display:flex; align-items:center; gap:10px; min-width:0;}
.est-thumb{width:32px; height:32px; border-radius:9px; display:flex; align-items:center; justify-content:center; background:var(--sage-pale); color:var(--sage-dark); flex-shrink:0;}
.est-thumb.pk{background:var(--brown-light); color:var(--brown-dark);}
.est-thumb svg{width:16px; height:16px;}
.est-link{background:none; border:none; padding:0; color:var(--sage-dark); font-weight:700; cursor:pointer; font-family:inherit; font-size:inherit; text-decoration:underline; text-underline-offset:3px;}
.est-link:hover{color:var(--brown-dark);}
.est-list{display:flex; flex-direction:column;}
.est-li{display:flex; align-items:center; gap:10px; padding:10px 6px; border-bottom:1px solid #F1EEE4; min-height:54px; border-radius:8px;}
.est-li:last-child{border-bottom:none;}
.est-li.click{cursor:pointer; transition:background .15s;}
.est-li.click:hover{background:var(--sage-pale);}
.est-li .grow{flex:1; min-width:0;}
.est-li .grow b{display:block; font-size:13.5px; color:var(--ink); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
.est-li .grow small{display:block; font-size:12px; color:var(--ink-soft); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
.est-li .side{display:flex; flex-direction:column; align-items:flex-end; gap:4px; flex-shrink:0; font-size:12px; color:var(--ink-soft);}
.est-scroll{max-height:340px; overflow-y:auto;}
.est-rank{width:26px; height:26px; border-radius:50%; background:var(--brown-pale); color:var(--brown-dark); font-weight:800; font-size:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0;}
.est-bar{width:80px; height:8px; border-radius:6px; background:var(--sage-pale); overflow:hidden; flex-shrink:0;}
.est-bar i{display:block; height:100%; background:var(--sage-dark); border-radius:6px;}
.est-alert{cursor:pointer; margin-bottom:8px; transition:transform .18s cubic-bezier(.34,1.56,.64,1); align-items:center;}
.est-alert:hover{transform:translateX(3px);}
.est-alert .grow{flex:1;}
.est-alert:last-child{margin-bottom:0;}
.est-row2{display:grid; grid-template-columns:minmax(0,1.5fr) minmax(0,1fr) minmax(0,1fr); gap:16px; margin-bottom:16px;}
.est-row2b{display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:16px; margin-bottom:16px;}
.est-card-h{display:flex; align-items:center; gap:10px; justify-content:space-between; flex-wrap:wrap; margin-bottom:12px;}
.est-card-h .section-title{margin:0;}
.est-chart{position:relative; min-height:220px;}
.est-chart svg{width:100%; height:220px; display:block;}
.est-tip{position:absolute; top:6px; background:var(--ink); color:#fff; border-radius:9px; padding:7px 10px; font-size:11.5px; pointer-events:none; white-space:nowrap; z-index:3; box-shadow:0 8px 20px rgba(0,0,0,.2);}
.est-tip div{display:flex; gap:6px; align-items:center;}
.est-tip i{width:8px; height:8px; border-radius:50%;}
.est-tip span{margin-left:auto; padding-left:12px; font-weight:800;}
.est-legend{display:flex; gap:14px; font-size:12px; color:var(--ink-soft); align-items:center; flex-wrap:wrap;}
.est-legend i{display:inline-block; width:9px; height:9px; border-radius:3px; margin-right:5px; vertical-align:-1px;}
.est-donut{display:flex; align-items:center; gap:18px; flex-wrap:wrap;}
.est-donut-leg{flex:1; min-width:150px; display:flex; flex-direction:column; gap:9px; font-size:13px;}
.est-donut-leg div{display:flex; align-items:center; gap:8px;}
.est-donut-leg i{width:10px; height:10px; border-radius:3px; flex-shrink:0;}
.est-donut-leg b{margin-left:auto; font-variant-numeric:tabular-nums;}
/* Venda */
.est-pos{display:grid; grid-template-columns:minmax(0,1.15fr) minmax(0,1fr); gap:16px; align-items:start;}
.est-results{display:flex; flex-direction:column; gap:8px; max-height:560px; overflow-y:auto; margin-top:12px;}
.est-res{display:flex; align-items:center; gap:10px; padding:10px 12px; border:1px solid var(--line); border-radius:12px; background:#fff; cursor:pointer; text-align:left; width:100%; font-family:inherit; transition:transform .2s cubic-bezier(.34,1.56,.64,1), border-color .15s, box-shadow .15s;}
.est-res:hover{border-color:var(--sage); box-shadow:0 4px 14px rgba(60,70,50,.10); transform:translateY(-1px);}
.est-res:active{transform:scale(.99);}
.est-res .grow{flex:1; min-width:0;}
.est-res .grow b{display:block; font-size:13.5px; color:var(--ink); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
.est-res .grow small{display:block; font-size:12px; color:var(--ink-soft); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;}
.est-res .price{font-family:'Fraunces',serif; font-weight:600; font-size:15px; color:var(--ink); white-space:nowrap;}
.est-res.off{opacity:.5; cursor:not-allowed;}
.est-cart{position:sticky; top:96px;}
.est-ci{display:grid; grid-template-columns:minmax(0,1fr) auto; gap:6px 10px; padding:12px 0; border-bottom:1px solid #F1EEE4;}
.est-ci b{display:block; color:var(--ink); font-size:13.5px;}
.est-ci small{font-size:12px; color:var(--ink-soft);}
.est-ci .sub{font-weight:800; text-align:right; white-space:nowrap;}
.est-ci .ctl{grid-column:1/-1; display:flex; align-items:center; gap:8px;}
.est-step{display:inline-flex; align-items:center; border:1px solid var(--line); border-radius:9px; overflow:hidden; height:34px;}
.est-step button{width:32px; height:100%; border:none; background:var(--sage-pale); cursor:pointer; display:flex; align-items:center; justify-content:center; color:var(--ink);}
.est-step button:hover{background:var(--sage-light);}
.est-step button svg{width:14px; height:14px;}
.est-step input{width:56px; height:100%; border:none; border-radius:0; text-align:center; font-weight:800; padding:0;}
.est-comp{grid-column:1/-1; background:var(--brown-pale); border-radius:9px; padding:8px 11px; font-size:12.5px;}
.est-comp div{display:flex; justify-content:space-between; gap:10px;}
.est-warn{grid-column:1/-1; font-size:12px; color:var(--st-cancelado); font-weight:700;}
.est-totals{display:flex; flex-direction:column; gap:7px; padding:12px 0 2px; font-size:13.5px;}
.est-totals div{display:flex; justify-content:space-between; gap:10px;}
.est-totals .big{font-family:'Fraunces',serif; font-size:22px; font-weight:600; color:var(--ink); padding-top:8px; border-top:1px solid var(--line);}
.est-tutor-pick{position:relative;}
.est-tutor-res{position:absolute; left:0; right:0; top:calc(100% + 4px); background:#fff; border:1px solid var(--line); border-radius:10px; box-shadow:0 12px 30px rgba(0,0,0,.12); max-height:240px; overflow-y:auto; z-index:5;}
.est-tutor-res button{display:block; width:100%; text-align:left; border:none; background:none; padding:9px 12px; cursor:pointer; font-family:inherit; font-size:13px; border-bottom:1px solid #F1EEE4;}
.est-tutor-res button:hover{background:var(--sage-pale);}
.est-tutor-res small{color:var(--ink-soft);}
.est-chosen{display:flex; align-items:center; gap:8px; background:var(--sage-pale); border-radius:9px; padding:8px 10px; font-size:13px;}
.est-chosen .grow{flex:1; min-width:0;}
/* Pacotes */
.est-pk-grid{display:grid; grid-template-columns:repeat(auto-fill,minmax(290px,1fr)); gap:16px;}
.est-pk{display:flex; flex-direction:column; gap:12px; cursor:pointer;}
.est-pk.card{transition:transform .22s cubic-bezier(.34,1.56,.64,1), box-shadow .22s;}
.est-pk.card:hover{transform:translateY(-3px); box-shadow:0 10px 24px rgba(138,102,71,.14);}
.est-pk h3{margin:0; font-size:16px;}
.est-pk .price{font-family:'Fraunces',serif; font-size:18px; font-weight:600; color:var(--sage-dark);}
.est-pk .desc{margin:0; color:var(--ink-soft); font-size:12.5px; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;}
.est-pk ul{list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:6px; flex:1;}
.est-pk li{display:flex; align-items:center; gap:8px; font-size:13px;}
.est-pk li svg{width:14px; height:14px; color:var(--sage);}
.est-pk li span{flex:1; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}
.est-pk li em{font-style:normal; font-size:12px; color:var(--ink-soft); white-space:nowrap;}
.est-pk.inativo{opacity:.6;}
.est-mini{display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:8px;}
.est-mini .mini-stat{text-align:center; padding:8px;}
.est-mini .mini-stat .n{font-size:15px;}
.est-mini .mini-stat .l{font-size:10px;}
.est-kv{display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:8px; margin-bottom:16px;}
.est-kv .mini-stat .n{font-size:15px; font-family:'Manrope',sans-serif; font-weight:800; overflow-wrap:anywhere;}
.est-rows{display:flex; flex-direction:column; gap:8px;}
.est-rowe{display:grid; grid-template-columns:minmax(0,1fr) 100px 36px; gap:8px; align-items:center;}
.est-rowe.e5{grid-template-columns:minmax(0,1.6fr) 95px 110px 115px 140px 36px;}
.est-rowe-h{font-size:12px; font-weight:700; color:var(--ink-soft); margin-bottom:-2px;}
.est-prev{display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:8px;}
.modal.est-wide{max-width:820px;}
.est-drawer .table-wrap{max-height:300px;}
.est-g3{display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:12px;}
.est-g2{display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:12px;}
.est-g3 .full, .est-g2 .full{grid-column:1/-1;}
.est-g3 .field, .est-g2 .field{margin-bottom:0;}
.est-formsec{grid-column:1/-1; font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:.06em; color:var(--brown-dark); margin-top:6px;}
.est-check{display:flex; align-items:center; gap:9px; font-size:13.5px; font-weight:600; color:var(--ink); cursor:pointer; margin:0;}
.est-check input{width:18px; height:18px; accent-color:var(--sage-dark); flex-shrink:0;}
.est-receipt{font-size:13px;}
.est-receipt .rh{text-align:center; border-bottom:1px dashed var(--line); padding-bottom:10px; margin-bottom:10px;}
.est-receipt .rh b{font-family:'Fraunces',serif; font-size:20px; color:var(--sage-dark); display:block;}
.est-receipt table td{padding:5px 0; border:none; vertical-align:top;}
.est-receipt table td:last-child{text-align:right; white-space:nowrap;}
.est-receipt tr.tot td{border-top:1px dashed var(--line); padding-top:9px; font-weight:800; font-size:15px;}
.est-perm td, .est-perm th{text-align:center;}
.est-perm td:first-child, .est-perm th:first-child{text-align:left;}
.est-switch{position:relative; display:inline-block; width:40px; height:22px; margin:0; vertical-align:middle;}
.est-switch input{opacity:0; width:0; height:0;}
.est-switch i{position:absolute; inset:0; border-radius:20px; background:#CFCBBF; cursor:pointer; transition:background .2s;}
.est-switch i::after{content:''; position:absolute; width:16px; height:16px; left:3px; top:3px; border-radius:50%; background:#fff; transition:transform .25s cubic-bezier(.34,1.56,.64,1); box-shadow:0 1px 3px rgba(0,0,0,.2);}
.est-switch input:checked + i{background:var(--sage-dark);}
.est-switch input:checked + i::after{transform:translateX(18px);}
.est-dash-kpis{display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;}
@media (max-width:1250px){ .est-row2{grid-template-columns:minmax(0,1fr) minmax(0,1fr);} .est-row2 > :first-child{grid-column:1/-1;} }
@media (max-width:980px){ .est-pos{grid-template-columns:1fr;} .est-cart{position:static;} .est-row2b{grid-template-columns:1fr;} }
@media (max-width:880px){ .est-tabs{margin-bottom:14px; flex-wrap:nowrap;} .est-row2{grid-template-columns:1fr;} }
@media (max-width:640px){
  .est-g3, .est-g2, .est-kv{grid-template-columns:1fr;}
  .est-rowe.e5{grid-template-columns:1fr 1fr; border:1px solid var(--line); border-radius:10px; padding:8px;}
  .est-rowe.e5 > :first-child{grid-column:1/-1;}
  .est-rowe-h{display:none;}
  .est-prev, .est-mini{grid-template-columns:1fr 1fr;}
  .est-period input[type=date]{flex:1; width:auto;}
  .est-bar{width:56px;}
  .stat-card .est-val.est-money{font-size:19px;}
  .filters .search-input{flex-basis:100%;}
}
@media print{
  body.est-imprimindo #app, body.est-imprimindo .toast-wrap, body.est-imprimindo #drawerRoot{display:none !important;}
  body.est-imprimindo .modal-backdrop{position:static; background:none; padding:0;}
  body.est-imprimindo .modal{box-shadow:none; max-width:none;}
  body.est-imprimindo .modal-head, body.est-imprimindo .modal-foot, body.est-imprimindo .est-noprint{display:none !important;}
}
`;

  // src/core.js
  var round = (n, d = 3) => {
    const f = 10 ** d;
    return Math.round((Number(n) || 0) * f) / f;
  };
  var money = (n) => Math.round((Number(n) || 0) * 100) / 100;
  function todayISO(now = Date.now()) {
    const d = new Date(now);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }
  function addDaysISO(iso, days) {
    const [y, m, d] = iso.split("-").map(Number);
    const dt = new Date(y, m - 1, d + days);
    return todayISO(dt.getTime());
  }

  class StockError extends Error {
    constructor(shortages) {
      super("Estoque insuficiente: " + shortages.map((s) => `${s.name} (precisa ${s.required}, disponível ${s.available})`).join("; "));
      this.name = "StockError";
      this.shortages = shortages;
    }
  }

  class PermissionError extends Error {
    constructor(msg) {
      super(msg);
      this.name = "PermissionError";
    }
  }

  class ValidationError extends Error {
    constructor(msg) {
      super(msg);
      this.name = "ValidationError";
    }
  }
  var PERMS = {
    vender: "Registrar vendas",
    desconto: "Aplicar descontos",
    cancelar: "Cancelar vendas e registrar devoluções",
    entradas: "Registrar entradas de mercadoria",
    ajustar: "Ajustes, perdas, inventário e montagem de kits",
    cadastros: "Cadastrar e editar produtos, pacotes e fornecedores",
    custos: "Ver e alterar custos e margens",
    relatorios: "Acessar relatórios"
  };
  var DEFAULT_PERMS = {
    gerente: { vender: true, desconto: true, cancelar: true, entradas: true, ajustar: true, cadastros: true, custos: true, relatorios: true },
    funcionario: { vender: true, desconto: false, cancelar: false, entradas: true, ajustar: false, cadastros: false, custos: false, relatorios: false }
  };
  function can(user, perms, p) {
    if (!user || user.active === false)
      return false;
    if (user.role === "admin")
      return true;
    const table = perms && perms[user.role] || DEFAULT_PERMS[user.role] || {};
    return table[p] === true;
  }
  function assertCan(ctx, p) {
    if (!can(ctx.user, ctx.perms, p))
      throw new PermissionError(`Seu perfil não tem permissão para: ${PERMS[p] || p}.`);
  }
  var sumLots = (lots = []) => round(lots.reduce((s, l) => s + (Number(l.qty) || 0), 0));
  var isExpired = (lot, today) => !!lot.expiry && lot.expiry < today;
  function availableQty(p, today) {
    if (!p || p.status !== "ativo")
      return 0;
    return round((p.lots || []).filter((l) => !isExpired(l, today)).reduce((s, l) => s + (Number(l.qty) || 0), 0));
  }
  function fefo(lots, today, includeExpired = false) {
    return (lots || []).filter((l) => l.qty > 0 && (includeExpired || !isExpired(l, today))).slice().sort((a, b) => {
      if (!a.expiry && !b.expiry)
        return String(a.id).localeCompare(String(b.id));
      if (!a.expiry)
        return 1;
      if (!b.expiry)
        return -1;
      return a.expiry.localeCompare(b.expiry) || String(a.id).localeCompare(String(b.id));
    });
  }
  function takeFromLots(lots, qty, today, { lotId = null, includeExpired = false } = {}) {
    let rest = round(qty);
    const next = (lots || []).map((l) => ({ ...l }));
    const taken = [];
    const order = lotId ? next.filter((l) => l.id === lotId && l.qty > 0) : fefo(next, today, includeExpired).map((o) => next.find((l) => l.id === o.id));
    for (const lot of order) {
      if (rest <= 0)
        break;
      const t = round(Math.min(lot.qty, rest));
      if (t <= 0)
        continue;
      lot.qty = round(lot.qty - t);
      rest = round(rest - t);
      taken.push({ lotId: lot.id, code: lot.code || "", expiry: lot.expiry || "", qty: t });
    }
    if (rest > 0.000000001)
      throw new ValidationError("Quantidade maior que o saldo disponível.");
    return { lots: next.filter((l) => l.qty > 0), taken };
  }
  function putIntoLots(lots, qty, { lotId = null, code = "", expiry = "" }, makeId) {
    const next = (lots || []).map((l) => ({ ...l }));
    let lot = lotId ? next.find((l) => l.id === lotId) : next.find((l) => (l.code || "") === (code || "") && (l.expiry || "") === (expiry || ""));
    if (!lot) {
      lot = { id: lotId || makeId(), code: code || "", expiry: expiry || "", qty: 0 };
      next.push(lot);
    }
    lot.qty = round(lot.qty + qty);
    return { lots: next, lotId: lot.id };
  }
  function nearestExpiry(p, today) {
    const l = fefo(p.lots, today)[0];
    return l && l.expiry ? l.expiry : "";
  }
  function stockStatus(p, today, warnDays = 30) {
    const available = availableQty(p, today);
    const limit = addDaysISO(today, warnDays);
    const lots = (p.lots || []).filter((l) => l.qty > 0);
    const expiredLots = lots.filter((l) => isExpired(l, today));
    const nearLots = lots.filter((l) => l.expiry && !isExpired(l, today) && l.expiry <= limit);
    let level = "ok";
    if (available <= 0)
      level = "sem";
    else if ((Number(p.minStock) || 0) > 0 && available <= p.minStock)
      level = "baixo";
    return { available, level, expiredLots, nearLots, total: sumLots(p.lots) };
  }
  function packageAvailability(pkg, productsById, today) {
    const comps = pkg.components || [];
    if (!comps.length)
      return Infinity;
    let min = Infinity;
    for (const c of comps) {
      const p = productsById[c.productId];
      const a = p ? availableQty(p, today) : 0;
      min = Math.min(min, Math.floor(round(a / c.qty) + 0.000000001));
    }
    return Math.max(0, min);
  }
  function packageCost(pkg, productsById) {
    let total = 0;
    for (const c of pkg.components || []) {
      const p = productsById[c.productId];
      if (!p || p.cost === null || p.cost === undefined || p.cost === "")
        return null;
      total += c.qty * Number(p.cost);
    }
    return money(total);
  }
  function aggregateRequirements(lines, packagesById) {
    const req = {};
    for (const ln of lines) {
      if (ln.type === "produto")
        req[ln.refId] = round((req[ln.refId] || 0) + ln.qty);
      else {
        const pkg = packagesById[ln.refId];
        for (const c of pkg && pkg.components || [])
          req[c.productId] = round((req[c.productId] || 0) + c.qty * ln.qty);
      }
    }
    return req;
  }
  function suggestRestock(p, consumed, today) {
    const available = availableQty(p, today);
    return Math.max(0, Math.ceil(round(consumed + (Number(p.minStock) || 0) - available)));
  }
  function normalizeSku(s) {
    return String(s || "").trim().toUpperCase().replace(/\s+/g, "-");
  }

  // src/fmt.js
  var esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  var brlF = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
  var brl = (n) => brlF.format(Number(n) || 0);
  var numF = (n, d = 3) => new Intl.NumberFormat("pt-BR", { maximumFractionDigits: d }).format(Number(n) || 0);
  var moneyIn = (n) => (Number(n) || 0).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  var pct = (n) => new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 }).format(n) + "%";
  var fmtD = (ms) => ms ? new Date(ms).toLocaleDateString("pt-BR") : "";
  var fmtT = (ms) => ms ? new Date(ms).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) : "";
  var fmtDT = (ms) => ms ? `${fmtD(ms)} ${fmtT(ms)}` : "";
  var fmtISO = (iso) => iso ? iso.split("-").reverse().join("/") : "";
  var ABBR = new Set(["kg", "g", "ml", "l", "mg", "un"]);
  var PL = { quilograma: "quilogramas", mililitro: "mililitros", comprimido: "comprimidos", unidade: "unidades", litro: "litros" };
  function plural(unit, n) {
    const u = unit || "unidade";
    if (Math.abs(n) === 1 || ABBR.has(u.toLowerCase()))
      return u;
    return PL[u] || (/(s|x)$/.test(u) ? u : /[aeiou]$/.test(u) ? u + "s" : /(r|z)$/.test(u) ? u + "es" : /l$/.test(u) ? u.slice(0, -1) + "is" : u + "s");
  }
  var qty = (n, unit) => `${numF(n)} ${plural(unit, Number(n))}`;
  function parseNum(v) {
    if (v === null || v === undefined)
      return NaN;
    const s = String(v).trim().replace(/\s|R\$/g, "");
    if (!s)
      return NaN;
    return Number(s.includes(",") ? s.replace(/\./g, "").replace(",", ".") : s);
  }
  var sa = (t) => String(t ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  var match = (q, ...f) => {
    const n = sa(q).trim();
    if (!n)
      return true;
    const h = sa(f.join(" "));
    return n.split(/\s+/).every((w) => h.includes(w));
  };
  var maskCNPJ = (v) => v.replace(/\D/g, "").slice(0, 14).replace(/^(\d{2})(\d)/, "$1.$2").replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3").replace(/\.(\d{3})(\d)/, ".$1/$2").replace(/(\d{4})(\d)/, "$1-$2");
  var P = {
    estoque: '<path d="M21 8 12 3 3 8v8l9 5 9-5V8Z"/><path d="m3 8 9 5 9-5"/><path d="M12 13v8"/>',
    painel: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
    vender: '<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2.5 3h2.6l2.4 12.1a1.6 1.6 0 0 0 1.6 1.3h8.7a1.6 1.6 0 0 0 1.6-1.2L21 7H6"/>',
    vendas: '<path d="M6 7h12l1 14H5L6 7Z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
    produto: '<path d="M10 2v4"/><path d="M14 2v4"/><rect x="7" y="6" width="10" height="5" rx="1"/><path d="M8 11h8l1 3v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6Z"/><path d="M10 16h4"/>',
    pacote: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13"/><path d="M3 12h18"/><path d="M12 8c-1.5-3-5-4-5.5-2S9 8 12 8Zm0 0c1.5-3 5-4 5.5-2S15 8 12 8Z"/>',
    reposicao: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
    entrada: '<path d="M2 6h11v10H2z"/><path d="M13 9h4l4 4v3h-8"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    ajuste: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3"/><path d="M2 14h4M10 8h4M18 16h4"/>',
    mov: '<path d="M7 4 3 8l4 4"/><path d="M3 8h14"/><path d="m17 20 4-4-4-4"/><path d="M21 16H7"/>',
    fornecedor: '<path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/>',
    relatorio: '<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6"/><path d="M8 17v-3M12 17v-6M16 17v-2"/>',
    config: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z"/><path d="m9 12 2 2 4-4"/>',
    kit: '<path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M12 11v6M9 14h6"/>',
    servico: '<path d="M5 3H4v6a5 5 0 0 0 10 0V3h-1"/><path d="M9 14v1a6 6 0 0 0 12 0v-3"/><circle cx="21" cy="10" r="2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    trash: '<path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M6 6l1 14h10l1-14"/>',
    edit: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
    check: '<path d="m5 12 5 5L20 7"/>',
    ban: '<circle cx="12" cy="12" r="9"/><path d="m5.6 5.6 12.8 12.8"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    undo: '<path d="M9 14 4 9l5-5"/><path d="M4 9h11a5 5 0 0 1 0 10h-3"/>',
    download: '<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
    receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
    chevron: '<path d="m9 6 6 6-6 6"/>',
    print: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><path d="M6 14h12v7H6z"/>',
    tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'
  };
  var ic = (n) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ""}</svg>`;

  // src/store.js
  var PFX = "estoque_";
  var clean = (d) => JSON.parse(JSON.stringify(d));
  function translate(e) {
    const map = {
      "permission-denied": "Seu perfil não tem permissão para esta ação.",
      unavailable: "Sem conexão com o servidor. Verifique a internet e tente de novo.",
      aborted: "Outra pessoa alterou estes dados ao mesmo tempo. Tente de novo.",
      "failed-precondition": "Outra pessoa alterou estes dados ao mesmo tempo. Tente de novo."
    };
    if (e && e.code && map[e.code]) {
      const x = new Error(map[e.code]);
      x.code = e.code;
      return x;
    }
    return e;
  }
  function createCompatStore() {
    const ref = (c, id) => fireDB.collection(PFX + c).doc(id);
    return {
      async tx(fn) {
        try {
          return await fireDB.runTransaction(async (t) => fn({
            get: async (c, id) => {
              const s = await t.get(ref(c, id));
              return s.exists ? { id: s.id, ...s.data() } : null;
            },
            set: (c, id, d) => t.set(ref(c, id), clean(d)),
            update: (c, id, d) => t.update(ref(c, id), clean(d)),
            delete: (c, id) => t.delete(ref(c, id))
          }));
        } catch (e) {
          throw translate(e);
        }
      },
      newId: (c) => fireDB.collection(PFX + c).doc().id,
      watch(c, cb, o = {}, onErr) {
        let q = fireDB.collection(PFX + c);
        if (o.since !== undefined)
          q = q.where(o.field || "at", ">=", o.since);
        if (o.orderBy)
          q = q.orderBy(o.orderBy, o.dir || "asc");
        if (o.limit)
          q = q.limit(o.limit);
        return q.onSnapshot((s) => cb(s.docs.map((d) => ({ id: d.id, ...d.data() }))), (e) => onErr && onErr(translate(e)));
      },
      watchDoc(c, id, cb, onErr) {
        return ref(c, id).onSnapshot((s) => cb(s.exists ? { id: s.id, ...s.data() } : null), (e) => onErr && onErr(translate(e)));
      }
    };
  }

  // src/state.js
  var DEFAULT_GERAL = {
    expiryDays: 30,
    consumoDias: 30,
    units: ["unidade", "frasco", "caixa", "comprimido", "dose", "tubo", "ampola", "pacote", "mililitro", "quilograma"]
  };
  var S = {
    store: null,
    started: false,
    perfis: null,
    perms: DEFAULT_PERMS,
    geral: DEFAULT_GERAL,
    products: [],
    packages: [],
    suppliers: [],
    categories: [],
    sales: [],
    movements: [],
    entries: [],
    adjustments: [],
    audit: [],
    pMap: {},
    kMap: {},
    sMap: {},
    cMap: {},
    loaded: {}
  };
  var ROLES = { admin: "Administrador", gerente: "Gerente", funcionario: "Funcionário" };
  var myEmail = () => (auth.currentUser && auth.currentUser.email || "").toLowerCase();
  function roleOf(email) {
    if (!S.perfis)
      return "admin";
    return (S.perfis.emails || {})[String(email).toLowerCase()] || "funcionario";
  }
  function me() {
    const u = auth.currentUser;
    let nome = "";
    try {
      nome = getCurrentUser();
    } catch (e) {}
    return { uid: u ? u.uid : "", name: nome || u && (u.displayName || u.email) || "", email: myEmail(), role: roleOf(myEmail()), active: true };
  }
  var ctx = () => ({ user: me(), perms: S.perms });
  var canDo = (p) => can(me(), S.perms, p);
  var isAdmin = () => me().role === "admin";
  var payments = () => typeof FORMAS_PAGAMENTO !== "undefined" ? FORMAS_PAGAMENTO : ["Dinheiro", "Pix", "Cartão de Débito", "Cartão de Crédito"];
  var authorizedEmails = () => (typeof EMAILS_AUTORIZADOS !== "undefined" ? EMAILS_AUTORIZADOS : []).map((e) => e.toLowerCase());
  var today = () => todayISO();
  var status = (p) => stockStatus(p, today(), Number(S.geral.expiryDays) || 30);
  var avail = (p) => availableQty(p, today());
  var activeProducts = () => S.products.filter((p) => p.status === "ativo");
  var catName = (id) => S.cMap[id] && S.cMap[id].name || "";
  var supName = (id) => S.sMap[id] && S.sMap[id].name || "";
  var saleNet = (s) => s.status === "cancelada" ? 0 : Math.max(0, (s.total || 0) - (s.refunded || 0));
  var validSales = () => S.sales.filter((s) => s.status !== "cancelada");
  function reindex() {
    S.pMap = Object.fromEntries(S.products.map((p) => [p.id, p]));
    S.kMap = Object.fromEntries(S.packages.map((p) => [p.id, p]));
    S.sMap = Object.fromEntries(S.suppliers.map((p) => [p.id, p]));
    S.cMap = Object.fromEntries(S.categories.map((p) => [p.id, p]));
  }
  function computeAlerts() {
    const out = { sem: [], baixo: [], vencidos: [], vencendo: [] };
    for (const p of activeProducts()) {
      const st = status(p);
      if (st.level === "sem")
        out.sem.push(p);
      else if (st.level === "baixo")
        out.baixo.push(p);
      for (const l of st.expiredLots)
        out.vencidos.push({ p, l });
      for (const l of st.nearLots)
        out.vencendo.push({ p, l });
    }
    out.vencendo.sort((a, b) => a.l.expiry.localeCompare(b.l.expiry));
    out.total = out.sem.length + out.baixo.length + out.vencidos.length + out.vencendo.length;
    out.urgent = out.sem.length + out.baixo.length + out.vencidos.length;
    return out;
  }
  function consumptionByProduct(sales) {
    const out = {};
    for (const s of sales) {
      if (s.status === "cancelada")
        continue;
      for (const it of s.items) {
        const net = it.qty - ((s.returnedByKey || {})[it.key] || 0);
        if (net <= 0)
          continue;
        if (it.type === "produto") {
          const o = out[it.refId] || (out[it.refId] = { avulso: 0, pacote: 0, name: it.name, unit: it.unit });
          o.avulso += net;
        } else
          for (const c of it.composition) {
            const o = out[c.productId] || (out[c.productId] = { avulso: 0, pacote: 0, name: c.name, unit: c.unit });
            o.pacote += net * c.qty;
          }
      }
    }
    return out;
  }
  function monthRange(off = 0) {
    const d = new Date;
    return { from: todayISO(new Date(d.getFullYear(), d.getMonth() + off, 1).getTime()), to: todayISO(new Date(d.getFullYear(), d.getMonth() + off + 1, 0).getTime()) };
  }
  var inRange = (ms, r) => ms >= new Date(r.from + "T00:00:00").getTime() && ms <= new Date(r.to + "T23:59:59.999").getTime();
  var periodLabel = (r) => r.from === r.to ? fmtISO(r.from) : `${fmtISO(r.from)} a ${fmtISO(r.to)}`;
  function periodHTML(r, key) {
    const t = today(), m = monthRange(0), pm = monthRange(-1);
    const on = (x) => r.from === x.from && r.to === x.to ? "on" : "";
    return `<div class="est-period" data-period="${key}">
    <input type="date" data-pf value="${r.from}" aria-label="De"><span class="est-ate">até</span><input type="date" data-pt value="${r.to}" aria-label="Até">
    <button class="chip-btn ${on({ from: t, to: t })}" data-pq="hoje">Hoje</button>
    <button class="chip-btn ${on({ from: addDaysISO(t, -6), to: t })}" data-pq="7">7 dias</button>
    <button class="chip-btn ${on(m)}" data-pq="mes">Este mês</button>
    <button class="chip-btn ${on(pm)}" data-pq="mesp">Mês passado</button></div>`;
  }
  function bindPeriod(el, r, rerender) {
    const f = el.querySelector("[data-pf]"), t = el.querySelector("[data-pt]");
    if (!f)
      return;
    f.onchange = () => {
      if (f.value) {
        r.from = f.value;
        if (r.to < r.from)
          r.to = r.from;
        rerender();
      }
    };
    t.onchange = () => {
      if (t.value) {
        r.to = t.value;
        if (r.from > r.to)
          r.from = r.to;
        rerender();
      }
    };
    el.querySelectorAll("[data-pq]").forEach((b) => b.onclick = () => {
      const d = today(), q = b.dataset.pq;
      const x = q === "hoje" ? { from: d, to: d } : q === "7" ? { from: addDaysISO(d, -6), to: d } : q === "mes" ? monthRange(0) : monthRange(-1);
      r.from = x.from;
      r.to = x.to;
      rerender();
    });
  }
  var levelBadge = (lv) => lv === "sem" ? '<span class="badge st-Cancelado">Sem estoque</span>' : lv === "baixo" ? '<span class="badge st-AguardandoConfirmacao">Estoque baixo</span>' : '<span class="badge st-Realizado">Normal</span>';
  function saleBadge(s) {
    if (s.status === "cancelada")
      return '<span class="badge st-Cancelado">Cancelada</span>';
    if (s.status === "devolvida")
      return '<span class="badge st-Desmarcado">Devolvida</span>';
    if (s.refunded > 0)
      return '<span class="badge st-Desmarcado">Devolução parcial</span>';
    return '<span class="badge st-Realizado">Concluída</span>';
  }
  var MOV = {
    entrada: ["Entrada por compra", "st-Realizado"],
    estoque_inicial: ["Estoque inicial", "st-Realizado"],
    venda_avulsa: ["Venda avulsa", "st-Confirmado"],
    venda_pacote: ["Venda de pacote", "st-Confirmado"],
    estorno: ["Estorno de cancelamento", "st-Desmarcado"],
    devolucao: ["Devolução", "st-Desmarcado"],
    ajuste_entrada: ["Ajuste (acréscimo)", "st-Reagendado"],
    ajuste_saida: ["Ajuste (retirada)", "st-Reagendado"],
    inventario_entrada: ["Inventário (acréscimo)", "st-Reagendado"],
    inventario_saida: ["Inventário (retirada)", "st-Reagendado"],
    perda: ["Perda ou avaria", "st-Cancelado"],
    vencido: ["Descarte de vencido", "st-Cancelado"],
    montagem_saida: ["Montagem de kit (saída)", "st-Reagendado"],
    montagem_entrada: ["Montagem de kit (entrada)", "st-Realizado"]
  };
  var movBadge = (t) => {
    const m = MOV[t] || [t, "st-Reagendado"];
    return `<span class="badge ${m[1]}">${m[0]}</span>`;
  };
  var stat = (label, value, sub = "", go = "") => `<div class="stat-card${go ? " clicavel" : ""}" ${go ? `data-est-go="${go}" role="button" tabindex="0"` : ""}><div class="label">${label}</div><div class="value est-val">${value}</div>${sub ? `<div class="est-statsub">${sub}</div>` : ""}</div>`;
  var empty = (t, d, btn = "") => `<div class="empty">${ICONS.inbox}<div class="t">${esc(t)}</div><div class="d">${d}</div>${btn ? `<div style="margin-top:12px;">${btn}</div>` : ""}</div>`;
  var searchBox = (id, ph, val, extra = "") => `<div class="search-input" ${extra}>${ic("search")}<input id="${id}" placeholder="${ph}" value="${esc(val)}" autocomplete="off"></div>`;
  function modal(title, body, foot, opts = {}) {
    openModal(modalShell(title, body, foot), { narrow: !!opts.narrow });
    const root = document.getElementById("modalRoot");
    const m = root.querySelector(".modal");
    if (opts.wide)
      m.classList.add("est-wide");
    document.getElementById("modalClose").addEventListener("click", closeModal);
    root.querySelectorAll("[data-mclose]").forEach((b) => b.addEventListener("click", closeModal));
    return m;
  }
  function confirmar({ title, text, ok = "Confirmar", danger = false, reason = null }, cb) {
    const m = modal(title, `<p style="font-size:13.5px; color:var(--ink-soft); margin:0 0 ${reason ? 12 : 0}px;">${text}</p>${reason ? `<div class="field" style="margin:0;"><label for="estReason">${reason}</label><textarea id="estReason" rows="2"></textarea></div>` : ""}`, `<button class="btn btn-secondary" data-mclose>Voltar</button><button class="btn ${danger ? "btn-danger" : "btn-primary"}" id="estOk">${ok}</button>`, { narrow: true });
    m.querySelector("#estOk").onclick = () => {
      const r = reason ? m.querySelector("#estReason").value.trim() : true;
      if (reason && !r) {
        m.querySelector("#estReason").focus();
        m.querySelector("#estReason").style.borderColor = "var(--st-cancelado)";
        return;
      }
      cb(r, m);
    };
  }
  function drawer(title, sub, body) {
    openDrawer(`<div class="drawer-head"><div style="min-width:0;"><h2>${title}</h2>${sub ? `<div class="drawer-sub">${sub}</div>` : ""}</div><button class="icon-btn" id="drawerClose">${ICONS.x}</button></div><div class="drawer-body est-drawer">${body}</div>`);
    document.getElementById("drawerClose").addEventListener("click", closeDrawer);
    return document.querySelector("#drawerRoot .drawer");
  }
  var errBox = (msg) => `<div class="alert alert-danger" style="margin-top:12px;"><div>${msg}</div></div>`;

  // src/nav.js
  var SUBS = [
    { id: "painel", label: "Painel", icon: "painel" },
    { id: "vender", label: "Vender", icon: "vender", perm: "vender" },
    { id: "vendas", label: "Vendas", icon: "vendas" },
    { id: "produtos", label: "Produtos", icon: "produto" },
    { id: "pacotes", label: "Pacotes", icon: "pacote" },
    { id: "reposicao", label: "Reposição", icon: "reposicao" },
    { id: "entradas", label: "Entradas", icon: "entrada", perm: "entradas" },
    { id: "ajustes", label: "Ajustes e kits", icon: "ajuste", perm: "ajustar" },
    { id: "movimentacoes", label: "Movimentações", icon: "mov" },
    { id: "fornecedores", label: "Fornecedores", icon: "fornecedor" },
    { id: "relatorios", label: "Relatórios", icon: "relatorio", perm: "relatorios" },
    { id: "configuracoes", label: "Configurações", icon: "config" }
  ];
  var NESTED = {
    relatorios: { def: "estoque", opts: ["estoque", "vendas", "consumo", "financeiro"] },
    configuracoes: { def: "perfis", opts: ["perfis", "categorias", "preferencias", "auditoria", "backup"] }
  };
  var ui = { sub: "painel", nested: { relatorios: "estoque", configuracoes: "perfis" } };
  var visibleSubs = () => SUBS.filter((s) => !s.perm || canDo(s.perm));
  function routeGet() {
    const n = NESTED[ui.sub];
    const nest = n && ui.nested[ui.sub] !== n.def ? "-" + ui.nested[ui.sub] : "";
    return ui.sub === "painel" && !nest ? "" : ui.sub + nest;
  }
  function routeSet(v) {
    const [sub, nest] = String(v || "").split("-");
    ui.sub = SUBS.some((s) => s.id === sub) ? sub : "painel";
    const n = NESTED[ui.sub];
    if (n)
      ui.nested[ui.sub] = n.opts.includes(nest) ? nest : n.def;
  }
  var subLabel = () => (SUBS.find((s) => s.id === ui.sub) || SUBS[0]).label;
  function estGo(sub, nested) {
    ui.sub = sub;
    if (nested && NESTED[sub])
      ui.nested[sub] = nested;
    if (state.view !== "estoque")
      goTo("estoque");
    else {
      render();
      window.scrollTo(0, 0);
    }
  }
  function tabsHTML() {
    const al = computeAlerts();
    return `<div class="est-tabs" role="tablist">${visibleSubs().map((s) => {
      const badge = s.id === "reposicao" && al.urgent ? `<span class="nav-badge">${al.urgent}</span>` : "";
      return `<button class="est-tab ${ui.sub === s.id ? "on" : ""}" data-est-sub="${s.id}" role="tab">${ic(s.icon)}<span>${s.label}</span>${badge}</button>`;
    }).join("")}</div>`;
  }
  function nestedHTML(sub, labels) {
    return `<div class="est-sub">${NESTED[sub].opts.filter((o) => labels[o]).map((o) => `<button class="chip-btn ${ui.nested[sub] === o ? "on" : ""}" data-est-nest="${sub}:${o}">${labels[o]}</button>`).join("")}</div>`;
  }
  function loadingHTML() {
    return `<div class="card pad">${empty("Carregando o estoque", "Buscando produtos e vendas na nuvem.")}</div>`;
  }
  function deniedHTML() {
    return `<div class="card pad">${empty("Acesso restrito", "Seu perfil não tem acesso a esta área do estoque. Fale com quem administra o sistema.")}</div>`;
  }
  var ready = () => S.loaded.products && S.loaded.packages && S.loaded.sales && S.loaded.movements;

  // src/charts.js
  function nice(max) {
    if (max <= 0)
      return 10;
    const p = 10 ** Math.floor(Math.log10(max));
    const m = max / p;
    return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 2.5 ? 2.5 : m <= 5 ? 5 : 10) * p;
  }
  var short = (v) => v >= 1000 ? (v / 1000).toLocaleString("pt-BR", { maximumFractionDigits: 1 }) + " mil" : v.toLocaleString("pt-BR", { maximumFractionDigits: 0 });
  function lineChart(host, { labels, series, fmt = brl }) {
    if (!host)
      return;
    const draw = () => {
      if (!host.isConnected)
        return;
      const W = Math.max(260, Math.floor(host.getBoundingClientRect().width) - 1), H = 220;
      const pl = 44, pr = 8, pt = 10, pb = 26;
      const max = nice(Math.max(1, ...series.flatMap((s) => s.values)) * 1.1);
      const n = labels.length;
      const x = (i) => pl + (n <= 1 ? 0 : i * (W - pl - pr) / (n - 1));
      const y = (v) => pt + (H - pt - pb) * (1 - v / max);
      const every = Math.max(1, Math.ceil(n / Math.max(2, Math.floor(W / 80))));
      let s = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="Gráfico de vendas">`;
      for (const f of [0, 0.25, 0.5, 0.75, 1]) {
        const t = max * f;
        s += `<line x1="${pl}" x2="${W - pr}" y1="${y(t)}" y2="${y(t)}" stroke="#ECE6D8" ${t ? 'stroke-dasharray="3 4"' : ""}/><text x="${pl - 8}" y="${y(t) + 4}" text-anchor="end" font-size="10.5" fill="#9A9C90" font-family="Manrope">${short(t)}</text>`;
      }
      labels.forEach((l, i) => {
        if (i % every === 0 || i === n - 1)
          s += `<text x="${x(i)}" y="${H - 6}" text-anchor="${i === 0 ? "start" : i === n - 1 ? "end" : "middle"}" font-size="10.5" fill="#9A9C90" font-family="Manrope">${esc(l)}</text>`;
      });
      series.forEach((se, si) => {
        const pts = se.values.map((v, i) => [x(i), y(v)]);
        const d = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
        if (si === 0)
          s += `<path d="${d} L${x(n - 1)} ${y(0)} L${x(0)} ${y(0)} Z" fill="${se.color}" opacity=".08"/>`;
        s += `<path d="${d}" fill="none" stroke="${se.color}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>`;
        const last = pts[pts.length - 1];
        if (last)
          s += `<circle cx="${last[0]}" cy="${last[1]}" r="3.5" fill="${se.color}"/>`;
      });
      s += `<line class="hl" x1="0" x2="0" y1="${pt}" y2="${H - pb}" stroke="#C9D3C2" opacity="0"/><rect x="${pl}" y="0" width="${W - pl - pr}" height="${H}" fill="transparent" class="hz"/></svg><div class="est-tip" hidden></div>`;
      host.innerHTML = s;
      const hz = host.querySelector(".hz"), hl = host.querySelector(".hl"), tip = host.querySelector(".est-tip");
      const move = (cx) => {
        const r = host.getBoundingClientRect();
        const i = Math.max(0, Math.min(n - 1, Math.round((cx - r.left - pl) / (W - pl - pr) * (n - 1))));
        hl.setAttribute("x1", x(i));
        hl.setAttribute("x2", x(i));
        hl.setAttribute("opacity", 1);
        tip.innerHTML = `<b>${esc(labels[i])}</b>${series.map((se) => `<div><i style="background:${se.color}"></i>${esc(se.name)}<span>${fmt(se.values[i])}</span></div>`).join("")}`;
        tip.hidden = false;
        tip.style.left = Math.min(W - tip.offsetWidth - 4, Math.max(4, x(i) + 12)) + "px";
      };
      hz.addEventListener("pointermove", (e) => move(e.clientX));
      hz.addEventListener("pointerdown", (e) => move(e.clientX));
      hz.addEventListener("pointerleave", () => {
        hl.setAttribute("opacity", 0);
        tip.hidden = true;
      });
    };
    draw();
    let t;
    const ro = new ResizeObserver(() => {
      clearTimeout(t);
      t = setTimeout(draw, 120);
    });
    ro.observe(host);
  }

  // src/v-painel.js
  var ui2 = { days: 30 };
  function split(s) {
    const f = s.gross > 0 ? s.total / s.gross : 0;
    let p = 0, k = 0;
    for (const it of s.items) {
      const v = (it.qty - ((s.returnedByKey || {})[it.key] || 0)) * it.unitPrice * f;
      if (it.type === "produto")
        p += v;
      else
        k += v;
    }
    return [p, k];
  }
  function trend(cur, prev) {
    if (!prev && !cur)
      return "";
    if (!prev)
      return '<span class="est-trend">novo</span>';
    const d = (cur - prev) / prev * 100;
    if (Math.abs(d) < 0.5)
      return '<span class="est-trend eq">igual</span>';
    return `<span class="est-trend ${d < 0 ? "down" : ""}">${d < 0 ? "▼" : "▲"} ${numF(Math.min(100, Math.abs(d)), 0)}%</span>`;
  }
  function salesSummary() {
    const sales = validSales();
    const now = new Date;
    const mStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
    const pmStart = new Date(now.getFullYear(), now.getMonth() - 1, 1).getTime();
    const pmEnd = new Date(now.getFullYear(), now.getMonth() - 1, Math.min(now.getDate(), new Date(now.getFullYear(), now.getMonth(), 0).getDate()), 23, 59, 59).getTime();
    const t = today();
    const day = sales.filter((s) => todayISO(s.createdAt) === t);
    const month = sales.filter((s) => s.createdAt >= mStart);
    const prev = sales.filter((s) => s.createdAt >= pmStart && s.createdAt <= pmEnd);
    const sum = (a) => a.reduce((x, s) => x + saleNet(s), 0);
    return { day, month, prev, dayV: sum(day), monthV: sum(month), prevV: sum(prev) };
  }
  function alertRows(al) {
    const r = [];
    if (al.vencidos.length)
      r.push(["danger", `${al.vencidos.length} lote${al.vencidos.length > 1 ? "s" : ""} vencido${al.vencidos.length > 1 ? "s" : ""}`, "Bloqueados para venda"]);
    if (al.sem.length)
      r.push(["danger", `${al.sem.length} produto${al.sem.length > 1 ? "s" : ""} sem estoque`, "Impedem novas vendas"]);
    if (al.baixo.length)
      r.push(["warn", `${al.baixo.length} produto${al.baixo.length > 1 ? "s" : ""} com estoque baixo`, "No mínimo ou abaixo"]);
    if (al.vencendo.length)
      r.push(["warn", `${al.vencendo.length} lote${al.vencendo.length > 1 ? "s" : ""} perto do vencimento`, `Em até ${S.geral.expiryDays} dias`]);
    if (!r.length)
      return `<div class="alert alert-sage">${ic("check")}<div><div class="t1">Tudo em ordem</div>Nenhum alerta no momento</div></div>`;
    return r.map(([c, t, s]) => `<div class="alert alert-${c} est-alert" data-est-go="reposicao" role="button" tabindex="0"><div class="grow"><div class="t1">${t}</div>${s}</div>${ic("chevron")}</div>`).join("");
  }
  function renderPainel() {
    const al = computeAlerts();
    const prods = activeProducts();
    const pkgs = S.packages.filter((p) => p.status === "ativo");
    const sm = salesSummary();
    const restock = [...al.sem, ...al.baixo];
    const cons = consumptionByProduct(S.sales.filter((s) => s.createdAt >= Date.now() - 30 * 86400000));
    const top = Object.entries(cons).map(([id, c]) => ({ id, ...c, total: c.avulso + c.pacote })).sort((a, b) => b.total - a.total).slice(0, 5);
    const ok = prods.length - al.sem.length - al.baixo.length;
    if (!S.products.length && !S.packages.length) {
      return `<div class="card pad">${empty("O estoque ainda está vazio", "Comece cadastrando os produtos (colírios, medicamentos, materiais). Depois monte os pacotes, como consulta com colírio.", canDo("cadastros") ? `<button class="btn btn-primary" data-est-go="produtos">${ic("plus")} Cadastrar produtos</button>` : "")}</div>`;
    }
    return `
  <div class="grid g3" style="margin-bottom:16px;">
    ${stat("Produtos ativos", prods.length, `${pkgs.length} pacote${pkgs.length === 1 ? "" : "s"} à venda`, "produtos")}
    ${stat("Estoque baixo", al.baixo.length, "no mínimo ou abaixo", "reposicao")}
    ${stat("Sem estoque", al.sem.length, "indisponíveis para venda", "reposicao")}
    ${stat("Vendas hoje", sm.day.length, brl(sm.dayV), "vendas")}
    ${stat("Vendas do mês", `<span class="est-money">${brl(sm.monthV)}</span>`, `${sm.month.length} venda${sm.month.length === 1 ? "" : "s"} ${trend(sm.monthV, sm.prevV)}`, "vendas")}
    ${stat("Lotes vencendo", al.vencendo.length, `em até ${S.geral.expiryDays} dias${al.vencidos.length ? ` · ${al.vencidos.length} vencido${al.vencidos.length > 1 ? "s" : ""}` : ""}`, "reposicao")}
  </div>
  <div class="est-row2">
    <div class="card pad">
      <div class="est-card-h"><div class="section-title">Vendas</div><div class="dash-nav-gran" id="estDays">${[7, 30, 90].map((d) => `<button class="dgran ${ui2.days === d ? "active" : ""}" data-d="${d}">${d} dias</button>`).join("")}</div></div>
      <div class="est-chart" id="estChart"></div>
      <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center; margin-top:8px;"><div class="est-legend"><span><i style="background:#5C7355"></i>Produtos</span><span><i style="background:#A9805F"></i>Pacotes</span></div><div style="margin-left:auto; font-size:12.5px; color:var(--ink-soft);" id="estChartTot"></div></div>
    </div>
    <div class="card pad">
      <div class="section-title">Situação do estoque</div>
      ${prods.length ? `<div class="est-donut">${donutChartHtml([{ value: ok, color: "#5C7355" }, { value: al.baixo.length, color: "#C9A66B" }, { value: al.sem.length, color: "#B03B3B" }], prods.length, "produtos")}
        <div class="est-donut-leg"><div><i style="background:#5C7355"></i>Normal<b>${ok}</b></div><div><i style="background:#C9A66B"></i>Estoque baixo<b>${al.baixo.length}</b></div><div><i style="background:#B03B3B"></i>Sem estoque<b>${al.sem.length}</b></div></div></div>` : empty("Sem produtos", "Cadastre produtos para acompanhar.")}
    </div>
    <div class="card pad"><div class="section-title">${ic("reposicao")} Alertas</div>${alertRows(al)}</div>
  </div>
  <div class="est-row2">
    <div class="card pad">
      <div class="est-card-h"><div class="section-title">Precisam de reposição <span class="tag">${restock.length}</span></div>${restock.length ? '<button class="btn btn-ghost btn-sm" data-est-go="reposicao">Ver reposição</button>' : ""}</div>
      ${restock.length ? `<div class="est-list est-scroll" data-keep="prest">${restock.map((p) => {
      const st = status(p);
      return `<div class="est-li click" data-est-prod="${p.id}"><div class="est-thumb">${ic("produto")}</div><div class="grow"><b>${esc(p.name)}</b><small>Mínimo ${qty(p.minStock, p.unit)}</small></div><div class="side"><b class="est-num ${st.level === "sem" ? "est-neg" : ""}">${qty(st.available, p.unit)}</b>${levelBadge(st.level)}</div></div>`;
    }).join("")}</div>` : `<div class="alert alert-sage">${ic("check")}<div>Nenhum produto abaixo do mínimo.</div></div>`}
    </div>
    <div class="card pad">
      <div class="est-card-h"><div class="section-title">Mais vendidos <span class="tag">30 dias</span></div></div>
      ${top.length ? `<div class="est-list">${top.map((x, i) => `<div class="est-li click" data-est-prod="${x.id}"><span class="est-rank">${i + 1}</span><div class="grow"><b>${esc(x.name)}</b><small>${qty(x.total, x.unit)}${x.pacote ? ` · ${numF(x.pacote)} em pacotes` : ""}</small></div><div class="est-bar"><i style="width:${Math.max(6, x.total / top[0].total * 100)}%"></i></div></div>`).join("")}</div>` : '<div class="hint">Nenhuma venda nos últimos 30 dias.</div>'}
    </div>
    <div class="card pad">
      <div class="est-card-h"><div class="section-title">Últimas vendas</div>${S.sales.length ? '<button class="btn btn-ghost btn-sm" data-est-go="vendas">Ver todas</button>' : ""}</div>
      ${S.sales.length ? `<div class="est-list">${S.sales.slice(0, 5).map((s) => `<div class="est-li click" data-est-sale="${s.id}"><div class="est-thumb ${s.items.some((i) => i.type === "pacote") ? "pk" : ""}">${ic(s.items.some((i) => i.type === "pacote") ? "pacote" : "produto")}</div><div class="grow"><b>${esc(s.items.map((i) => i.name).join(", "))}</b><small>${esc(s.client || "Sem cliente")} · ${brl(s.total)}</small></div><div class="side">${fmtT(s.createdAt)}${saleBadge(s)}</div></div>`).join("")}</div>` : '<div class="hint">Nenhuma venda registrada ainda.</div>'}
    </div>
  </div>
  <div class="card pad">
    <div class="est-card-h"><div class="section-title">Últimas movimentações</div>${S.movements.length ? '<button class="btn btn-ghost btn-sm" data-est-go="movimentacoes">Ver todas</button>' : ""}</div>
    ${S.movements.length ? `<div class="table-wrap" style="max-height:360px;"><table><thead><tr><th>Data e hora</th><th>Produto</th><th>Tipo</th><th class="est-r">Quantidade</th><th class="est-r">Saldo</th><th>Responsável</th></tr></thead><tbody>
      ${S.movements.slice(0, 8).map((m) => `<tr><td class="est-num">${fmtDT(m.at)}</td><td>${esc(m.productName)}</td><td>${movBadge(m.type)}</td><td class="est-r est-num ${m.direction < 0 ? "est-neg" : "est-pos-n"}">${m.direction < 0 ? "−" : "+"}${qty(m.qty, m.unit)}</td><td class="est-r est-num">${numF(m.before)} → ${numF(m.after)}</td><td>${esc(m.byName)}</td></tr>`).join("")}
    </tbody></table></div>` : '<div class="hint">As entradas e saídas aparecem aqui.</div>'}
  </div>`;
  }
  function bindPainel(el) {
    const draw = () => {
      const t = today();
      const days = [];
      for (let i = ui2.days - 1;i >= 0; i--)
        days.push(addDaysISO(t, -i));
      const idx = Object.fromEntries(days.map((d, i) => [d, i]));
      const p = days.map(() => 0), k = days.map(() => 0);
      for (const s of validSales()) {
        const i = idx[todayISO(s.createdAt)];
        if (i === undefined)
          continue;
        const [a, b] = split(s);
        p[i] += a;
        k[i] += b;
      }
      lineChart(el.querySelector("#estChart"), { labels: days.map((d) => d.slice(8) + "/" + d.slice(5, 7)), series: [{ name: "Produtos", color: "#5C7355", values: p }, { name: "Pacotes", color: "#A9805F", values: k }] });
      const tot = el.querySelector("#estChartTot");
      if (tot)
        tot.innerHTML = `Total em ${ui2.days} dias: <strong style="color:var(--ink)">${brl(p.concat(k).reduce((a, b) => a + b, 0))}</strong>`;
    };
    el.querySelectorAll("#estDays [data-d]").forEach((b) => b.onclick = () => {
      ui2.days = +b.dataset.d;
      el.querySelectorAll("#estDays [data-d]").forEach((x) => x.classList.toggle("active", x === b));
      draw();
    });
    if (el.querySelector("#estChart"))
      draw();
  }

  // src/ops.js
  var now = (ctx) => ctx.now ? ctx.now() : Date.now();
  var who = (ctx) => ({ by: ctx.user.uid, byName: ctx.user.name || ctx.user.email || "" });
  var opRef = (col, id) => ({ lastOpCol: col, lastOpId: id });
  function audit(db, t, ctx, action, details) {
    t.set("audit", db.newId("audit"), { at: now(ctx), ...who(ctx), action, details });
  }
  function movement(db, t, ctx, m) {
    const id = db.newId("movements");
    t.set("movements", id, { at: now(ctx), ...who(ctx), ...m });
    return id;
  }
  function num(v, label, { min = 0, allowZero = false } = {}) {
    const n = Number(String(v).replace(",", "."));
    if (!Number.isFinite(n) || n < min || !allowZero && n === 0)
      throw new ValidationError(`Confira ${label}: valor inválido.`);
    return round(n);
  }
  async function createSale(db, ctx, input) {
    assertCan(ctx, "vender");
    const discount = money(input.discount || 0);
    if (discount < 0)
      throw new ValidationError("Desconto inválido.");
    if (discount > 0)
      assertCan(ctx, "desconto");
    const merged = {};
    for (const l of input.lines || []) {
      const qty = num(l.qty, "a quantidade");
      if (l.type !== "produto" && l.type !== "pacote")
        throw new ValidationError("Item inválido.");
      const k = l.type + ":" + l.refId;
      merged[k] = merged[k] ? { ...merged[k], qty: round(merged[k].qty + qty) } : { type: l.type, refId: l.refId, qty };
    }
    const lines = Object.values(merged);
    if (!lines.length)
      throw new ValidationError("Adicione pelo menos um item à venda.");
    const saleId = db.newId("sales");
    return db.tx(async (t) => {
      const today = todayISO(now(ctx));
      const counter = await t.get("counters", "vendas");
      const pkgs = {};
      for (const l of lines)
        if (l.type === "pacote")
          pkgs[l.refId] = await t.get("packages", l.refId);
      for (const l of lines) {
        if (l.type === "pacote") {
          const p = pkgs[l.refId];
          if (!p)
            throw new ValidationError("Pacote não encontrado.");
          if (p.status !== "ativo")
            throw new ValidationError(`O pacote "${p.name}" está inativo.`);
        }
      }
      const ids = new Set;
      for (const l of lines) {
        if (l.type === "produto")
          ids.add(l.refId);
        else
          for (const c of pkgs[l.refId].components || [])
            ids.add(c.productId);
      }
      const prods = {};
      for (const id of ids)
        prods[id] = await t.get("products", id);
      for (const l of lines) {
        if (l.type === "produto") {
          const p = prods[l.refId];
          if (!p)
            throw new ValidationError("Produto não encontrado.");
          if (p.status !== "ativo")
            throw new ValidationError(`O produto "${p.name}" está inativo.`);
        } else {
          for (const c of pkgs[l.refId].components || []) {
            const p = prods[c.productId];
            if (!p)
              throw new ValidationError(`Um produto do pacote "${pkgs[l.refId].name}" não existe mais.`);
            if (p.status !== "ativo")
              throw new ValidationError(`O produto "${p.name}", do pacote "${pkgs[l.refId].name}", está inativo.`);
          }
        }
      }
      const req = aggregateRequirements(lines, pkgs);
      const shortages = [];
      for (const [pid, qty] of Object.entries(req)) {
        const a = availableQty(prods[pid], today);
        if (qty > a + 0.000000001)
          shortages.push({ productId: pid, name: prods[pid].name, unit: prods[pid].unit, required: qty, available: a });
      }
      if (shortages.length)
        throw new StockError(shortages);
      const items = lines.map((l, i) => {
        const key = "i" + (i + 1);
        if (l.type === "produto") {
          const p = prods[l.refId];
          return { key, type: "produto", refId: l.refId, name: p.name, unit: p.unit, sku: p.sku || "", qty: l.qty, unitPrice: money(p.price), subtotal: money(p.price * l.qty), composition: [], services: [] };
        }
        const pk = pkgs[l.refId];
        return {
          key,
          type: "pacote",
          refId: l.refId,
          name: pk.name,
          unit: "pacote",
          sku: "",
          qty: l.qty,
          unitPrice: money(pk.price),
          subtotal: money(pk.price * l.qty),
          packageVersion: pk.version || 1,
          composition: (pk.components || []).map((c) => ({ productId: c.productId, name: prods[c.productId].name, unit: prods[c.productId].unit, qty: c.qty })),
          services: (pk.services || []).map((s) => s.name)
        };
      });
      const gross = money(items.reduce((s, it) => s + it.subtotal, 0));
      if (discount > gross)
        throw new ValidationError("O desconto não pode ser maior que o total.");
      const number = (counter && counter.value || 0) + 1;
      const state2 = {};
      for (const id of ids)
        state2[id] = { lots: prods[id].lots || [], stock: sumLots(prods[id].lots) };
      const consumption = {};
      const moves = [];
      let costTotal = 0;
      const consume = (pid, qty, type, label) => {
        const p = prods[pid];
        const before = state2[pid].stock;
        const r = takeFromLots(state2[pid].lots, qty, today);
        state2[pid].lots = r.lots;
        state2[pid].stock = round(before - qty);
        costTotal += qty * (Number(p.cost) || 0);
        const c = consumption[pid] || (consumption[pid] = { productId: pid, name: p.name, unit: p.unit, cost: p.cost ?? null, lots: [] });
        for (const tk of r.taken) {
          const ex = c.lots.find((x) => x.lotId === tk.lotId);
          if (ex)
            ex.qty = round(ex.qty + tk.qty);
          else
            c.lots.push({ ...tk });
        }
        moves.push({
          productId: pid,
          productName: p.name,
          unit: p.unit,
          type,
          direction: -1,
          qty,
          before,
          after: state2[pid].stock,
          lots: r.taken,
          reason: label,
          refCol: "sales",
          refId: saleId,
          refLabel: `Venda nº ${number}`
        });
      };
      for (const it of items)
        if (it.type === "produto")
          consume(it.refId, it.qty, "venda_avulsa", "Venda avulsa");
      for (const it of items)
        if (it.type === "pacote")
          for (const c of it.composition)
            consume(c.productId, round(c.qty * it.qty), "venda_pacote", `Pacote ${it.name} (${it.qty}×)`);
      const sale = {
        number,
        items,
        gross,
        discount,
        total: money(gross - discount),
        refunded: 0,
        costTotal: money(costTotal),
        client: String(input.client || "").trim(),
        payment: input.payment || "",
        notes: String(input.notes || "").trim(),
        tutorId: input.tutorId || "",
        animalId: input.animalId || "",
        animalName: String(input.animalName || "").trim(),
        agendamentoId: input.agendamentoId || "",
        nfId: "",
        consumption: Object.values(consumption),
        returnedByKey: {},
        returns: [],
        status: "concluida",
        createdAt: now(ctx),
        createdBy: ctx.user.uid,
        createdByName: ctx.user.name || "",
        version: 1
      };
      t.set("counters", "vendas", { value: number });
      t.set("sales", saleId, sale);
      for (const id of ids)
        t.update("products", id, { lots: state2[id].lots, stock: state2[id].stock, updatedAt: now(ctx), ...opRef("sales", saleId) });
      for (const m of moves)
        movement(db, t, ctx, m);
      audit(db, t, ctx, "venda", `Venda nº ${number} de ${money(gross - discount)}`);
      return { id: saleId, ...sale };
    });
  }
  function restoreToProduct(state2, pid, product, lotsOut, qty) {
    let rest = round(qty);
    const back = [];
    for (let i = lotsOut.length - 1;i >= 0 && rest > 0; i--) {
      const lo = lotsOut[i];
      const t = round(Math.min(lo.qty, rest));
      if (t <= 0)
        continue;
      lo.qty = round(lo.qty - t);
      rest = round(rest - t);
      state2[pid].lots = putIntoLots(state2[pid].lots, t, { lotId: lo.lotId, code: lo.code, expiry: lo.expiry }, () => lo.lotId).lots;
      back.push({ lotId: lo.lotId, code: lo.code, expiry: lo.expiry, qty: t });
    }
    if (rest > 0.000000001)
      throw new ValidationError(`Não há quantidade de "${product.name}" para devolver nesta venda.`);
    return back;
  }
  async function linkSaleNF(db, ctx, saleId, nfId) {
    assertCan(ctx, "vender");
    return db.tx(async (t) => {
      const sale = await t.get("sales", saleId);
      if (!sale)
        throw new ValidationError("Venda não encontrada.");
      t.update("sales", saleId, { nfId: String(nfId || ""), updatedAt: now(ctx) });
    });
  }
  async function cancelSale(db, ctx, saleId, reason) {
    assertCan(ctx, "cancelar");
    if (!String(reason || "").trim())
      throw new ValidationError("Informe o motivo do cancelamento.");
    return db.tx(async (t) => {
      const sale = await t.get("sales", saleId);
      if (!sale)
        throw new ValidationError("Venda não encontrada.");
      if (sale.status !== "concluida")
        throw new ValidationError("Esta venda já foi cancelada ou devolvida.");
      const prods = {};
      for (const c of sale.consumption)
        prods[c.productId] = await t.get("products", c.productId);
      const state2 = {};
      const moves = [];
      const consumption = sale.consumption.map((c) => ({ ...c, lots: c.lots.map((l) => ({ ...l })) }));
      for (const c of consumption) {
        const p = prods[c.productId];
        if (!p)
          continue;
        const out = round(c.lots.reduce((s, l) => s + l.qty, 0));
        if (out <= 0)
          continue;
        state2[c.productId] = state2[c.productId] || { lots: p.lots || [], stock: sumLots(p.lots) };
        const before = state2[c.productId].stock;
        const back = restoreToProduct(state2, c.productId, p, c.lots, out);
        state2[c.productId].stock = round(before + out);
        moves.push({
          productId: c.productId,
          productName: p.name,
          unit: p.unit,
          type: "estorno",
          direction: 1,
          qty: out,
          before,
          after: state2[c.productId].stock,
          lots: back,
          reason: `Cancelamento: ${reason}`,
          refCol: "sales",
          refId: saleId,
          refLabel: `Venda nº ${sale.number}`
        });
      }
      t.update("sales", saleId, {
        status: "cancelada",
        consumption,
        refunded: money(sale.total),
        updatedAt: now(ctx),
        version: (sale.version || 1) + 1,
        cancel: { at: now(ctx), ...who(ctx), reason: String(reason).trim() }
      });
      for (const [pid, s] of Object.entries(state2))
        t.update("products", pid, { lots: s.lots, stock: s.stock, updatedAt: now(ctx), ...opRef("sales", saleId) });
      for (const m of moves)
        movement(db, t, ctx, m);
      audit(db, t, ctx, "cancelamento", `Venda nº ${sale.number} cancelada: ${reason}`);
    });
  }
  async function returnSale(db, ctx, saleId, quantities, reason) {
    assertCan(ctx, "cancelar");
    if (!String(reason || "").trim())
      throw new ValidationError("Informe o motivo da devolução.");
    return db.tx(async (t) => {
      const sale = await t.get("sales", saleId);
      if (!sale)
        throw new ValidationError("Venda não encontrada.");
      if (sale.status !== "concluida")
        throw new ValidationError("Esta venda não aceita mais devoluções.");
      const returned = { ...sale.returnedByKey || {} };
      const units = {};
      const retItems = [];
      let value = 0;
      const factor = sale.gross > 0 ? sale.total / sale.gross : 0;
      for (const it of sale.items) {
        const q = round(Number(quantities[it.key]) || 0);
        if (!q)
          continue;
        if (q < 0 || q > round(it.qty - (returned[it.key] || 0)) + 0.000000001)
          throw new ValidationError(`Quantidade de devolução inválida para "${it.name}".`);
        returned[it.key] = round((returned[it.key] || 0) + q);
        retItems.push({ key: it.key, name: it.name, qty: q });
        value += q * it.unitPrice * factor;
        if (it.type === "produto")
          units[it.refId] = round((units[it.refId] || 0) + q);
        else
          for (const c of it.composition)
            units[c.productId] = round((units[c.productId] || 0) + c.qty * q);
      }
      if (!retItems.length)
        throw new ValidationError("Informe a quantidade a devolver.");
      const prods = {};
      for (const pid of Object.keys(units))
        prods[pid] = await t.get("products", pid);
      const consumption = sale.consumption.map((c) => ({ ...c, lots: c.lots.map((l) => ({ ...l })) }));
      const state2 = {};
      const moves = [];
      for (const [pid, q] of Object.entries(units)) {
        const p = prods[pid];
        const c = consumption.find((x) => x.productId === pid);
        if (!p || !c)
          throw new ValidationError("Produto da venda não encontrado.");
        state2[pid] = { lots: p.lots || [], stock: sumLots(p.lots) };
        const before = state2[pid].stock;
        const back = restoreToProduct(state2, pid, p, c.lots, q);
        state2[pid].stock = round(before + q);
        moves.push({ productId: pid, productName: p.name, unit: p.unit, type: "devolucao", direction: 1, qty: q, before, after: state2[pid].stock, lots: back, reason: `Devolução: ${reason}`, refCol: "sales", refId: saleId, refLabel: `Venda nº ${sale.number}` });
      }
      const all = sale.items.every((it) => round(returned[it.key] || 0) >= it.qty);
      const refunded = money((sale.refunded || 0) + value);
      t.update("sales", saleId, {
        returnedByKey: returned,
        consumption,
        refunded: all ? money(sale.total) : refunded,
        status: all ? "devolvida" : "concluida",
        returns: [...sale.returns || [], { at: now(ctx), ...who(ctx), items: retItems, value: money(value), reason: String(reason).trim() }],
        updatedAt: now(ctx),
        version: (sale.version || 1) + 1
      });
      for (const [pid, s] of Object.entries(state2))
        t.update("products", pid, { lots: s.lots, stock: s.stock, updatedAt: now(ctx), ...opRef("sales", saleId) });
      for (const m of moves)
        movement(db, t, ctx, m);
      audit(db, t, ctx, "devolucao", `Devolução na venda nº ${sale.number}: ${retItems.map((r) => r.qty + "× " + r.name).join(", ")}`);
    });
  }
  async function registerEntry(db, ctx, input) {
    assertCan(ctx, "entradas");
    const items = (input.items || []).map((it) => ({
      productId: it.productId,
      qty: num(it.qty, "a quantidade"),
      cost: it.cost === "" || it.cost === null || it.cost === undefined ? null : money(num(it.cost, "o custo", { allowZero: true })),
      lotCode: String(it.lotCode || "").trim(),
      expiry: it.expiry || ""
    }));
    if (!items.length)
      throw new ValidationError("Adicione pelo menos um produto à entrada.");
    const updateCost = !!input.updateCost && can(ctx.user, ctx.perms, "custos");
    const entryId = db.newId("entries");
    return db.tx(async (t) => {
      const supplier = input.supplierId ? await t.get("suppliers", input.supplierId) : null;
      const prods = {};
      for (const it of items)
        if (!prods[it.productId])
          prods[it.productId] = await t.get("products", it.productId);
      const state2 = {};
      const moves = [];
      const out = [];
      for (const it of items) {
        const p = prods[it.productId];
        if (!p)
          throw new ValidationError("Produto não encontrado.");
        if (p.controlsLot && (!it.lotCode || !it.expiry))
          throw new ValidationError(`"${p.name}" exige lote e validade.`);
        const s = state2[it.productId] || (state2[it.productId] = { lots: p.lots || [], stock: sumLots(p.lots), cost: p.cost });
        const before = s.stock;
        const r = putIntoLots(s.lots, it.qty, { code: it.lotCode, expiry: it.expiry }, () => db.newId("lots"));
        s.lots = r.lots;
        s.stock = round(before + it.qty);
        if (updateCost && it.cost !== null)
          s.cost = it.cost;
        out.push({ ...it, name: p.name, unit: p.unit });
        moves.push({ productId: it.productId, productName: p.name, unit: p.unit, type: "entrada", direction: 1, qty: it.qty, before, after: s.stock, lots: [{ lotId: r.lotId, code: it.lotCode, expiry: it.expiry, qty: it.qty }], reason: input.invoice ? `Compra (NF ${input.invoice})` : "Compra ou reposição", refCol: "entries", refId: entryId, refLabel: supplier ? supplier.name : "Entrada" });
      }
      const total = money(out.reduce((s, it) => s + (it.cost || 0) * it.qty, 0));
      t.set("entries", entryId, { at: now(ctx), ...who(ctx), supplierId: input.supplierId || "", supplierName: supplier ? supplier.name : "", invoice: String(input.invoice || "").trim(), notes: String(input.notes || "").trim(), items: out, total });
      for (const [pid, s] of Object.entries(state2)) {
        const upd = { lots: s.lots, stock: s.stock, updatedAt: now(ctx), ...opRef("entries", entryId) };
        if (updateCost && s.cost !== prods[pid].cost)
          upd.cost = s.cost;
        t.update("products", pid, upd);
      }
      for (const m of moves)
        movement(db, t, ctx, m);
      audit(db, t, ctx, "entrada", `Entrada de ${out.length} item(ns)${supplier ? " de " + supplier.name : ""}`);
      return entryId;
    });
  }
  var ADJ_TYPES = {
    ajuste_entrada: { label: "Ajuste (acrescentar)", dir: 1 },
    ajuste_saida: { label: "Ajuste (retirar)", dir: -1 },
    perda: { label: "Perda ou avaria", dir: -1 },
    vencido: { label: "Descarte de vencido", dir: -1 },
    inventario: { label: "Contagem de inventário", dir: 0 }
  };
  async function adjustStock(db, ctx, input) {
    assertCan(ctx, "ajustar");
    const type = input.type;
    if (!ADJ_TYPES[type])
      throw new ValidationError("Tipo de ajuste inválido.");
    const reason = String(input.reason || "").trim();
    if (!reason)
      throw new ValidationError("Informe o motivo do ajuste.");
    const qty = type === "inventario" ? num(input.qty, "a quantidade contada", { allowZero: true }) : num(input.qty, "a quantidade");
    const adjId = db.newId("adjustments");
    return db.tx(async (t) => {
      const today = todayISO(now(ctx));
      const p = await t.get("products", input.productId);
      if (!p)
        throw new ValidationError("Produto não encontrado.");
      let lots = p.lots || [];
      const before = sumLots(lots);
      let delta = 0;
      let used = [];
      if (type === "inventario") {
        const lot = input.lotId ? lots.find((l) => l.id === input.lotId) : null;
        const current = lot ? lot.qty : before;
        delta = round(qty - current);
        if (delta > 0) {
          const r = putIntoLots(lots, delta, lot ? { lotId: lot.id } : { code: input.lotCode || "", expiry: input.expiry || "" }, () => db.newId("lots"));
          lots = r.lots;
          used = [{ lotId: r.lotId, qty: delta }];
        } else if (delta < 0) {
          const r = takeFromLots(lots, -delta, today, { lotId: lot ? lot.id : null, includeExpired: true });
          lots = r.lots;
          used = r.taken;
        }
        if (delta === 0)
          throw new ValidationError("A contagem é igual ao saldo atual. Nada a ajustar.");
      } else if (ADJ_TYPES[type].dir > 0) {
        if (p.controlsLot && !input.lotId && (!input.lotCode || !input.expiry))
          throw new ValidationError("Informe o lote e a validade.");
        const r = putIntoLots(lots, qty, input.lotId ? { lotId: input.lotId } : { code: input.lotCode || "", expiry: input.expiry || "" }, () => db.newId("lots"));
        lots = r.lots;
        delta = qty;
        used = [{ lotId: r.lotId, qty }];
      } else {
        if (qty > before + 0.000000001)
          throw new ValidationError(`Saldo insuficiente. "${p.name}" tem ${before} ${p.unit}.`);
        const r = takeFromLots(lots, qty, today, { lotId: input.lotId || null, includeExpired: true });
        lots = r.lots;
        delta = -qty;
        used = r.taken;
      }
      const after = round(before + delta);
      const mvType = type === "inventario" ? delta > 0 ? "inventario_entrada" : "inventario_saida" : type;
      t.set("adjustments", adjId, { at: now(ctx), ...who(ctx), type, productId: p.id, productName: p.name, qty: Math.abs(delta), direction: delta > 0 ? 1 : -1, reason });
      t.update("products", p.id, { lots, stock: after, updatedAt: now(ctx), ...opRef("adjustments", adjId) });
      movement(db, t, ctx, { productId: p.id, productName: p.name, unit: p.unit, type: mvType, direction: delta > 0 ? 1 : -1, qty: Math.abs(delta), before, after, lots: used, reason, refCol: "adjustments", refId: adjId, refLabel: ADJ_TYPES[type].label });
      audit(db, t, ctx, "ajuste", `${ADJ_TYPES[type].label}: ${p.name} ${delta > 0 ? "+" : ""}${delta} (${reason})`);
    });
  }
  async function assembleKit(db, ctx, kitId, qtyIn, reason) {
    assertCan(ctx, "ajustar");
    const qty = num(qtyIn, "a quantidade de kits");
    if (!Number.isInteger(qty))
      throw new ValidationError("A quantidade de kits deve ser inteira.");
    const asmId = db.newId("assemblies");
    return db.tx(async (t) => {
      const today = todayISO(now(ctx));
      const kit = await t.get("products", kitId);
      if (!kit || kit.kind !== "kit" || !(kit.kitComponents || []).length)
        throw new ValidationError("Produto não é um kit com componentes.");
      const prods = {};
      for (const c of kit.kitComponents)
        prods[c.productId] = await t.get("products", c.productId);
      const shortages = [];
      for (const c of kit.kitComponents) {
        const p = prods[c.productId];
        const a = availableQty(p, today);
        if (c.qty * qty > a + 0.000000001)
          shortages.push({ productId: c.productId, name: p ? p.name : "?", unit: p ? p.unit : "", required: round(c.qty * qty), available: a });
      }
      if (shortages.length)
        throw new StockError(shortages);
      let minExp = "";
      for (const c of kit.kitComponents) {
        const p = prods[c.productId];
        const need = round(c.qty * qty);
        const before = sumLots(p.lots);
        const r = takeFromLots(p.lots, need, today);
        for (const tk of r.taken)
          if (tk.expiry && (!minExp || tk.expiry < minExp))
            minExp = tk.expiry;
        t.update("products", p.id, { lots: r.lots, stock: round(before - need), updatedAt: now(ctx), ...opRef("assemblies", asmId) });
        movement(db, t, ctx, { productId: p.id, productName: p.name, unit: p.unit, type: "montagem_saida", direction: -1, qty: need, before, after: round(before - need), lots: r.taken, reason: `Montagem de ${qty} kit(s) ${kit.name}`, refCol: "assemblies", refId: asmId, refLabel: "Montagem de kit" });
      }
      const kbefore = sumLots(kit.lots);
      const code = "MONT-" + today.replaceAll("-", "");
      const r = putIntoLots(kit.lots, qty, { code, expiry: minExp }, () => db.newId("lots"));
      t.update("products", kit.id, { lots: r.lots, stock: round(kbefore + qty), updatedAt: now(ctx), ...opRef("assemblies", asmId) });
      t.set("assemblies", asmId, { at: now(ctx), ...who(ctx), kitId, kitName: kit.name, qty, reason: String(reason || "").trim() });
      movement(db, t, ctx, { productId: kit.id, productName: kit.name, unit: kit.unit, type: "montagem_entrada", direction: 1, qty, before: kbefore, after: round(kbefore + qty), lots: [{ lotId: r.lotId, code, expiry: minExp, qty }], reason: reason || "Montagem de kit", refCol: "assemblies", refId: asmId, refLabel: "Montagem de kit" });
      audit(db, t, ctx, "montagem", `${qty} kit(s) ${kit.name} montado(s)`);
    });
  }
  var PRODUCT_FIELDS = ["name", "barcode", "categoryId", "description", "unit", "minStock", "price", "cost", "supplierId", "controlsLot", "status", "kind", "kitComponents"];
  async function saveProduct(db, ctx, input) {
    assertCan(ctx, "cadastros");
    const name = String(input.name || "").trim();
    if (!name)
      throw new ValidationError("Informe o nome do produto.");
    const sku = normalizeSku(input.sku);
    if (!sku)
      throw new ValidationError("Informe o código interno (SKU).");
    if (!/^[A-Z0-9._-]+$/.test(sku))
      throw new ValidationError("O código interno aceita só letras, números, ponto, hífen e sublinhado.");
    const data = {
      name,
      barcode: String(input.barcode || "").trim(),
      categoryId: input.categoryId || "",
      description: String(input.description || "").trim(),
      unit: input.unit || "unidade",
      minStock: num(input.minStock || 0, "o estoque mínimo", { allowZero: true }),
      price: money(num(input.price || 0, "o preço de venda", { allowZero: true })),
      cost: input.cost === "" || input.cost === null || input.cost === undefined ? null : money(num(input.cost, "o custo", { allowZero: true })),
      supplierId: input.supplierId || "",
      controlsLot: !!input.controlsLot,
      status: input.status === "inativo" ? "inativo" : "ativo",
      kind: input.kind === "kit" ? "kit" : "produto",
      kitComponents: input.kind === "kit" ? (input.kitComponents || []).map((c) => ({ productId: c.productId, qty: num(c.qty, "a quantidade do componente") })) : []
    };
    if (data.kind === "kit" && !data.kitComponents.length)
      throw new ValidationError("Adicione os componentes do kit.");
    if (data.kitComponents.some((c) => c.productId === input.id))
      throw new ValidationError("Um kit não pode conter ele mesmo.");
    const isNew = !input.id;
    const id = input.id || db.newId("products");
    const initQty = isNew && input.initialQty ? num(input.initialQty, "o estoque inicial") : 0;
    const adjId = initQty ? db.newId("adjustments") : null;
    return db.tx(async (t) => {
      const old = isNew ? null : await t.get("products", id);
      if (!isNew && !old)
        throw new ValidationError("Produto não encontrado.");
      const skuDoc = !old || old.sku !== sku ? await t.get("skus", sku) : null;
      if (skuDoc && skuDoc.productId !== id)
        throw new ValidationError(`O código interno ${sku} já está em uso.`);
      if (!can(ctx.user, ctx.perms, "custos")) {
        if (old ? data.cost !== old.cost : data.cost !== null)
          throw new ValidationError("Seu perfil não pode definir ou alterar custos.");
      }
      if (data.controlsLot && initQty && (!input.initialLot || !input.initialExpiry))
        throw new ValidationError("Informe lote e validade do estoque inicial.");
      if (old) {
        const changes = {};
        for (const f of PRODUCT_FIELDS)
          if (JSON.stringify(old[f] ?? null) !== JSON.stringify(data[f] ?? null))
            changes[f] = { de: old[f] ?? null, para: data[f] };
        if (old.sku !== sku) {
          changes.sku = { de: old.sku, para: sku };
          t.set("skus", sku, { productId: id });
          t.delete("skus", old.sku);
        }
        t.update("products", id, { ...data, sku, updatedAt: now(ctx) });
        if (Object.keys(changes).length)
          audit(db, t, ctx, "produto_editado", `${name}: ${Object.entries(changes).map(([k, v]) => `${k} ${fmtAudit(v.de)} → ${fmtAudit(v.para)}`).join("; ")}`);
        return id;
      }
      let lots = [];
      if (initQty)
        lots = putIntoLots([], initQty, { code: input.initialLot || "", expiry: input.initialExpiry || "" }, () => db.newId("lots")).lots;
      t.set("skus", sku, { productId: id });
      t.set("products", id, { ...data, sku, lots, stock: initQty, createdAt: now(ctx), updatedAt: now(ctx), ...adjId ? opRef("adjustments", adjId) : { lastOpCol: "", lastOpId: "" } });
      if (initQty) {
        t.set("adjustments", adjId, { at: now(ctx), ...who(ctx), type: "estoque_inicial", productId: id, productName: name, qty: initQty, direction: 1, reason: "Estoque inicial" });
        movement(db, t, ctx, { productId: id, productName: name, unit: data.unit, type: "estoque_inicial", direction: 1, qty: initQty, before: 0, after: initQty, lots: lots.map((l) => ({ lotId: l.id, code: l.code, expiry: l.expiry, qty: l.qty })), reason: "Estoque inicial no cadastro", refCol: "adjustments", refId: adjId, refLabel: "Cadastro" });
      }
      audit(db, t, ctx, "produto_criado", `${name} (${sku})`);
      return id;
    });
  }
  function fmtAudit(v) {
    if (v === null || v === undefined || v === "")
      return "vazio";
    if (typeof v === "object")
      return JSON.stringify(v);
    return String(v);
  }
  async function savePackage(db, ctx, input) {
    assertCan(ctx, "cadastros");
    const name = String(input.name || "").trim();
    if (!name)
      throw new ValidationError("Informe o nome do pacote.");
    const comps = {};
    for (const c of input.components || []) {
      if (!c.productId)
        continue;
      comps[c.productId] = round((comps[c.productId] || 0) + num(c.qty, "a quantidade do produto"));
    }
    const components = Object.entries(comps).map(([productId, qty]) => ({ productId, qty }));
    const services = (input.services || []).map((s) => ({ name: String(s.name || s).trim() })).filter((s) => s.name);
    if (!components.length && !services.length)
      throw new ValidationError("Adicione produtos ou serviços ao pacote.");
    const data = { name, description: String(input.description || "").trim(), price: money(num(input.price, "o preço do pacote", { allowZero: true })), status: input.status === "inativo" ? "inativo" : "ativo", components, services };
    const id = input.id || db.newId("packages");
    return db.tx(async (t) => {
      const old = input.id ? await t.get("packages", id) : null;
      for (const c of components) {
        const p = await t.get("products", c.productId);
        if (!p)
          throw new ValidationError("Produto do pacote não encontrado.");
      }
      const compChanged = old && JSON.stringify(old.components) !== JSON.stringify(components);
      const version = old ? (old.version || 1) + (compChanged ? 1 : 0) : 1;
      if (old) {
        t.update("packages", id, { ...data, version, updatedAt: now(ctx) });
        const parts = [];
        if (old.price !== data.price)
          parts.push(`preço ${old.price} → ${data.price}`);
        if (compChanged)
          parts.push("composição alterada (versão " + version + ")");
        if (old.status !== data.status)
          parts.push(`status ${old.status} → ${data.status}`);
        if (old.name !== data.name)
          parts.push(`nome ${old.name} → ${data.name}`);
        audit(db, t, ctx, "pacote_editado", `${name}${parts.length ? ": " + parts.join("; ") : ""}`);
      } else {
        t.set("packages", id, { ...data, version, createdAt: now(ctx), updatedAt: now(ctx) });
        audit(db, t, ctx, "pacote_criado", name);
      }
      return id;
    });
  }
  async function saveSimple(db, ctx, col, input, fields, label) {
    assertCan(ctx, "cadastros");
    if (!String(input.name || "").trim())
      throw new ValidationError("Informe o nome.");
    const id = input.id || db.newId(col);
    const data = {};
    for (const f of fields)
      data[f] = typeof input[f] === "string" ? input[f].trim() : input[f] ?? "";
    return db.tx(async (t) => {
      const old = input.id ? await t.get(col, id) : null;
      if (old)
        t.update(col, id, { ...data, updatedAt: now(ctx) });
      else
        t.set(col, id, { ...data, createdAt: now(ctx), updatedAt: now(ctx) });
      audit(db, t, ctx, old ? label + "_editado" : label + "_criado", data.name);
      return id;
    });
  }

  // src/csv.js
  function downloadCSV(name, headers, rows) {
    const cell = (v) => {
      if (typeof v === "number")
        return String(v).replace(".", ",");
      const s = String(v ?? "");
      return /[;"\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const csv = "\uFEFF" + [headers, ...rows].map((r) => r.map(cell).join(";")).join(`\r
`);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    downloadBlob(name.endsWith(".csv") ? name : name + ".csv", blob);
  }
  function downloadBlob(name, blob) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = name;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(a.href);
      a.remove();
    }, 500);
  }

  // src/v-vendas.js
  var blankCart = () => ({ lines: [], tutorId: "", animalId: "", client: "", payment: "", discount: "", discMode: "valor", notes: "", agendamentoId: "" });
  var cart = Object.assign(blankCart(), { q: "", filter: "todos", tq: "" });
  var rr = () => render();
  function startSale({ tutorId = "", animalId = "", agendamentoId = "" } = {}) {
    if (!canDo("vender")) {
      toast("Seu perfil não pode registrar vendas.");
      return;
    }
    closeDrawer();
    if (cart.lines.length && cart.tutorId && cart.tutorId !== tutorId)
      Object.assign(cart, blankCart());
    cart.tutorId = tutorId;
    cart.animalId = animalId;
    cart.agendamentoId = agendamentoId;
    const t = tutorId ? tutorById(tutorId) : null;
    cart.client = t ? t.nome : cart.client;
    estGo("vender");
  }
  function req() {
    const r = aggregateRequirements(cart.lines, S.kMap);
    const short = {};
    for (const [pid, q] of Object.entries(r)) {
      const p = S.pMap[pid];
      const a = p ? avail(p) : 0;
      if (q > a + 0.000000001)
        short[pid] = { name: p ? p.name : "Produto removido", required: q, available: a, unit: p ? p.unit : "" };
    }
    return { r, short };
  }
  function info(l) {
    if (l.type === "produto") {
      const p = S.pMap[l.refId];
      return p ? { name: p.name, price: p.price } : null;
    }
    const k = S.kMap[l.refId];
    return k ? { name: k.name, price: k.price } : null;
  }
  function totals() {
    const gross = money(cart.lines.reduce((s, l) => {
      const i = info(l);
      return s + (i ? i.price * l.qty : 0);
    }, 0));
    let d = parseNum(cart.discount);
    if (!Number.isFinite(d) || d < 0 || !canDo("desconto"))
      d = 0;
    if (cart.discMode === "pct")
      d = gross * Math.min(d, 100) / 100;
    d = money(Math.min(d, gross));
    return { gross, discount: d, total: money(gross - d) };
  }
  function renderVender() {
    if (!S.products.length && !S.packages.length)
      return `<div class="card pad">${empty("Nada para vender ainda", "Cadastre produtos e pacotes para começar a registrar vendas.", canDo("cadastros") ? `<button class="btn btn-primary" data-est-go="produtos">${ic("plus")} Cadastrar produtos</button>` : "")}</div>`;
    return `<div class="est-pos">
    <div class="card pad">
      <div class="section-title">Adicionar itens</div>
      ${searchBox("estVq", "Buscar produto ou pacote", cart.q)}
      <div class="est-sub" style="margin:10px 0 0;">${[["todos", "Todos"], ["produto", "Produtos"], ["pacote", "Pacotes"]].map(([k, l]) => `<button class="chip-btn ${cart.filter === k ? "on" : ""}" data-vf="${k}">${l}</button>`).join("")}</div>
      <div class="est-results" id="estRes" data-keep="vres"></div>
    </div>
    <div class="card pad est-cart" id="estCart"></div>
  </div>`;
  }
  function resultsHTML() {
    const t = today();
    const out = [];
    if (cart.filter !== "pacote")
      for (const p of S.products) {
        if (p.status !== "ativo" || !match(cart.q, p.name, p.sku, p.barcode))
          continue;
        const a = avail(p);
        out.push(`<button class="est-res ${a <= 0 ? "off" : ""}" data-add="produto:${p.id}"><div class="est-thumb">${ic("produto")}</div><div class="grow"><b>${esc(p.name)}</b><small>${a > 0 ? "Disponível: " + qty(a, p.unit) : "Sem estoque"}</small></div><span class="pill-muted">Produto</span><span class="price">${brl(p.price)}</span></button>`);
      }
    if (cart.filter !== "produto")
      for (const k of S.packages) {
        if (k.status !== "ativo" || !match(cart.q, k.name, k.description))
          continue;
        const a = packageAvailability(k, S.pMap, t);
        const comp = (k.components || []).map((c) => S.pMap[c.productId] ? `${numF(c.qty)} ${S.pMap[c.productId].name}` : "").concat((k.services || []).map((s) => s.name)).filter(Boolean).join(", ");
        out.push(`<button class="est-res ${a <= 0 ? "off" : ""}" data-add="pacote:${k.id}"><div class="est-thumb pk">${ic("pacote")}</div><div class="grow"><b>${esc(k.name)}</b><small>${esc(comp)}${a === Infinity ? "" : a > 0 ? ` · Disponível: ${a}` : " · Falta estoque"}</small></div><span class="pill">Pacote</span><span class="price">${brl(k.price)}</span></button>`);
      }
    return out.length ? out.slice(0, 60).join("") : '<div class="hint">Nenhum item encontrado.</div>';
  }
  function tutorBlock() {
    const t = cart.tutorId ? tutorById(cart.tutorId) : null;
    if (t) {
      const anims = animaisDoTutor(t.id);
      return `<div class="field"><label>Tutor</label><div class="est-chosen"><div class="grow"><strong>${esc(t.nome)}</strong>${t.telefone ? ` · ${esc(t.telefone)}` : ""}</div><button class="btn btn-ghost btn-sm" id="estTutorX">Trocar</button></div></div>
      <div class="field"><label for="estAnimal">Animal</label><select id="estAnimal"><option value="">Nenhum</option>${anims.map((a) => `<option value="${a.id}" ${cart.animalId === a.id ? "selected" : ""}>${esc(a.nome)}</option>`).join("")}</select></div>`;
    }
    return `<div class="field est-tutor-pick"><label for="estTq">Tutor <span style="font-weight:500;">(opcional)</span></label><input id="estTq" placeholder="Nome, telefone ou código" value="${esc(cart.tq || cart.client)}" autocomplete="off"><div class="est-tutor-res" id="estTres" hidden></div><div class="hint">Sem cadastro? O nome digitado fica como cliente da venda.</div></div>`;
  }
  function cartHTML() {
    const { short } = req();
    const tt = totals();
    if (!cart.lines.length)
      return `<div class="section-title">Venda atual</div>${tutorBlock()}${empty("Nenhum item", "Clique em um produto ou pacote para adicionar.")}`;
    return `<div class="est-card-h"><div class="section-title">Venda atual</div><button class="btn btn-ghost btn-sm" id="estClear">Limpar</button></div>
    ${tutorBlock()}
    <div>${cart.lines.map((l, i) => {
      const it = info(l);
      if (!it)
        return "";
      let warn = "";
      if (l.type === "produto" && short[l.refId])
        warn = `Disponível: ${qty(short[l.refId].available, short[l.refId].unit)}`;
      if (l.type === "pacote") {
        const miss = (S.kMap[l.refId].components || []).filter((c) => short[c.productId]).map((c) => short[c.productId].name);
        if (miss.length)
          warn = "Falta estoque de: " + miss.join(", ");
      }
      const k = l.type === "pacote" ? S.kMap[l.refId] : null;
      return `<div class="est-ci"><div style="min-width:0;"><b>${esc(it.name)}</b><small>${l.type === "pacote" ? "Pacote" : "Avulso"} · ${brl(it.price)} cada</small></div><div class="sub">${brl(it.price * l.qty)}</div>
        <div class="ctl"><div class="est-step"><button data-dec="${i}" aria-label="Diminuir">${ic("minus")}</button><input data-q="${i}" inputmode="decimal" value="${numF(l.qty)}" aria-label="Quantidade"><button data-inc="${i}" aria-label="Aumentar">${ic("plus")}</button></div><button class="icon-btn" data-rm="${i}" aria-label="Remover" style="margin-left:auto;">${ic("trash")}</button></div>
        ${k ? `<div class="est-comp">${(k.components || []).map((c) => {
        const p = S.pMap[c.productId];
        return p ? `<div><span>${esc(p.name)}</span><span class="est-num">−${qty(round(c.qty * l.qty), p.unit)}</span></div>` : "";
      }).join("")}${(k.services || []).map((s) => `<div><span>${esc(s.name)}</span><span style="color:var(--ink-soft);">serviço</span></div>`).join("")}</div>` : ""}
        ${warn ? `<div class="est-warn">${esc(warn)}</div>` : ""}</div>`;
    }).join("")}</div>
    <div class="field-row" style="margin-top:14px;">
      <div class="field"><label for="estPay">Pagamento</label><select id="estPay"><option value="">Selecione</option>${payments().map((p) => `<option ${cart.payment === p ? "selected" : ""}>${esc(p)}</option>`).join("")}</select></div>
      ${canDo("desconto") ? `<div class="field"><label for="estDisc">Desconto</label><div style="display:flex; gap:6px;"><input id="estDisc" inputmode="decimal" value="${esc(cart.discount)}" placeholder="0,00"><div class="dash-nav-gran" style="flex-shrink:0;"><button class="dgran ${cart.discMode === "valor" ? "active" : ""}" data-dm="valor">R$</button><button class="dgran ${cart.discMode === "pct" ? "active" : ""}" data-dm="pct">%</button></div></div></div>` : ""}
    </div>
    <div class="field"><label for="estNotes">Observação <span style="font-weight:500;">(opcional)</span></label><input id="estNotes" value="${esc(cart.notes)}"></div>
    <div class="est-totals"><div><span>Subtotal</span><strong class="est-num">${brl(tt.gross)}</strong></div>${tt.discount ? `<div><span>Desconto</span><strong class="est-num">−${brl(tt.discount)}</strong></div>` : ""}<div class="big"><span>Total</span><span class="est-num">${brl(tt.total)}</span></div></div>
    <button class="btn btn-primary" id="estGo" style="width:100%; justify-content:center; margin-top:10px; padding:12px;" ${Object.keys(short).length ? "disabled" : ""}>${ic("check")} Revisar e confirmar</button>
    ${Object.keys(short).length ? '<div class="hint" style="text-align:center;">Ajuste as quantidades: há itens sem estoque suficiente.</div>' : ""}`;
  }
  function bindVender(el) {
    const res = el.querySelector("#estRes");
    if (!res)
      return;
    const drawRes = () => res.innerHTML = resultsHTML();
    drawRes();
    drawCart();
    const q = el.querySelector("#estVq");
    q.oninput = () => {
      cart.q = q.value;
      drawRes();
    };
    q.onkeydown = (e) => {
      if (e.key !== "Enter")
        return;
      const v = q.value.trim().toUpperCase();
      const p = S.products.find((x) => x.status === "ativo" && (x.barcode && x.barcode.toUpperCase() === v || x.sku === v));
      const bs = [...res.querySelectorAll(".est-res:not(.off)")];
      if (p)
        addLine("produto", p.id);
      else if (bs.length === 1)
        addLine(...bs[0].dataset.add.split(":"));
      else
        return;
      q.value = "";
      cart.q = "";
      drawRes();
    };
    el.querySelectorAll("[data-vf]").forEach((b) => b.onclick = () => {
      cart.filter = b.dataset.vf;
      el.querySelectorAll("[data-vf]").forEach((x) => x.classList.toggle("on", x === b));
      drawRes();
    });
    res.onclick = (e) => {
      const b = e.target.closest("[data-add]");
      if (!b || b.classList.contains("off"))
        return;
      addLine(...b.dataset.add.split(":"));
    };
  }
  function addLine(type, refId) {
    const ex = cart.lines.find((l) => l.type === type && l.refId === refId);
    if (ex)
      ex.qty = round(ex.qty + 1);
    else
      cart.lines.push({ type, refId, qty: 1 });
    drawCart();
    const c = document.getElementById("estCart");
    if (c && matchMedia("(max-width:980px)").matches)
      c.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function drawCart() {
    const c = document.getElementById("estCart");
    if (!c)
      return;
    c.innerHTML = cartHTML();
    c.querySelectorAll("[data-inc]").forEach((b) => b.onclick = () => {
      cart.lines[b.dataset.inc].qty = round(cart.lines[b.dataset.inc].qty + 1);
      drawCart();
    });
    c.querySelectorAll("[data-dec]").forEach((b) => b.onclick = () => {
      const l = cart.lines[b.dataset.dec];
      l.qty = round(l.qty - 1);
      if (l.qty <= 0)
        cart.lines.splice(b.dataset.dec, 1);
      drawCart();
    });
    c.querySelectorAll("[data-rm]").forEach((b) => b.onclick = () => {
      cart.lines.splice(b.dataset.rm, 1);
      drawCart();
    });
    c.querySelectorAll("[data-q]").forEach((inp) => inp.onchange = () => {
      const v = parseNum(inp.value), l = cart.lines[inp.dataset.q];
      if (!Number.isFinite(v) || v <= 0) {
        inp.value = numF(l.qty);
        return;
      }
      l.qty = l.type === "pacote" ? Math.max(1, Math.round(v)) : round(v);
      drawCart();
    });
    const on = (id, k, ev = "oninput", redraw = false) => {
      const i = c.querySelector("#" + id);
      if (i)
        i[ev] = () => {
          cart[k] = i.value;
          if (redraw)
            drawCart();
        };
    };
    on("estNotes", "notes");
    on("estPay", "payment", "onchange", true);
    on("estDisc", "discount", "onchange", true);
    on("estAnimal", "animalId", "onchange");
    c.querySelectorAll("[data-dm]").forEach((b) => b.onclick = () => {
      cart.discMode = b.dataset.dm;
      drawCart();
    });
    const clr = c.querySelector("#estClear");
    if (clr)
      clr.onclick = () => {
        Object.assign(cart, blankCart());
        cart.tq = "";
        drawCart();
      };
    const tx = c.querySelector("#estTutorX");
    if (tx)
      tx.onclick = () => {
        cart.tutorId = "";
        cart.animalId = "";
        cart.client = "";
        cart.tq = "";
        drawCart();
        c.querySelector("#estTq").focus();
      };
    const tq = c.querySelector("#estTq"), tres = c.querySelector("#estTres");
    if (tq) {
      const run = () => {
        cart.tq = tq.value;
        cart.client = tq.value.trim();
        const v = tq.value.trim(), d = v.replace(/\D/g, "");
        if (v.length < 2) {
          tres.hidden = true;
          return;
        }
        const list = (DB.tutores || []).filter((t) => sa(t.nome).includes(sa(v)) || d.length >= 3 && String(t.telefone || "").replace(/\D/g, "").includes(d) || String(t.codigo || "") === v.replace("#", "")).slice(0, 8);
        tres.innerHTML = list.map((t) => `<button type="button" data-tid="${t.id}"><strong>${esc(t.nome)}</strong> <small>${esc(t.telefone || "")} · ${esc(animaisDoTutor(t.id).map((a) => a.nome).join(", ") || "sem animal")}</small></button>`).join("") || '<div class="hint" style="padding:9px 12px;">Nenhum tutor encontrado. O nome fica como cliente da venda.</div>';
        tres.hidden = false;
      };
      tq.oninput = run;
      tq.onblur = () => setTimeout(() => tres.hidden = true, 150);
      tres.onmousedown = (e) => e.preventDefault();
      tres.onclick = (e) => {
        const b = e.target.closest("[data-tid]");
        if (!b)
          return;
        const t = tutorById(b.dataset.tid);
        cart.tutorId = t.id;
        cart.client = t.nome;
        cart.tq = "";
        const an = animaisDoTutor(t.id);
        cart.animalId = an.length === 1 ? an[0].id : "";
        drawCart();
      };
    }
    const go = c.querySelector("#estGo");
    if (go)
      go.onclick = review;
  }
  function review() {
    const { r } = req();
    const tt = totals();
    if (!cart.payment) {
      toast("Selecione a forma de pagamento");
      const p = document.getElementById("estPay");
      if (p) {
        p.focus();
        p.style.borderColor = "var(--st-cancelado)";
      }
      return;
    }
    const t = cart.tutorId ? tutorById(cart.tutorId) : null;
    const an = cart.animalId ? animalById(cart.animalId) : null;
    const m = modal("Confirmar venda", `
    ${t || cart.client ? `<div class="alert alert-sage" style="margin-bottom:12px;"><div>Cliente: <strong>${esc(t ? t.nome : cart.client)}</strong>${an ? ` · ${esc(an.nome)}` : ""}</div></div>` : ""}
    <div class="table-wrap" style="margin-bottom:12px;"><table><thead><tr><th>Item</th><th class="est-r">Qtd.</th><th class="est-r">Subtotal</th></tr></thead><tbody>
    ${cart.lines.map((l) => {
      const i = info(l);
      return `<tr><td><div class="est-two"><b>${esc(i.name)}</b><small>${l.type === "pacote" ? "Pacote" : "Avulso"}</small></div></td><td class="est-r est-num">${numF(l.qty)}</td><td class="est-r est-num">${brl(i.price * l.qty)}</td></tr>`;
    }).join("")}
    </tbody></table></div>
    <div class="section-title" style="font-size:14px;">Baixa automática no estoque</div>
    <div class="table-wrap"><table><thead><tr><th>Produto</th><th class="est-r">Sai</th><th class="est-r">Fica</th></tr></thead><tbody>
    ${Object.entries(r).map(([pid, q]) => {
      const p = S.pMap[pid];
      const after = round(avail(p) - q);
      return `<tr><td>${esc(p.name)}</td><td class="est-r est-num est-neg">−${qty(q, p.unit)}</td><td class="est-r est-num">${qty(after, p.unit)}${p.minStock && after <= p.minStock ? ' <span class="badge st-AguardandoConfirmacao">baixo</span>' : ""}</td></tr>`;
    }).join("") || '<tr><td colspan="3" style="color:var(--ink-soft);">Só serviços, sem baixa de estoque.</td></tr>'}
    </tbody></table></div>
    <div class="est-totals"><div><span>Pagamento</span><strong>${esc(cart.payment)}</strong></div>${tt.discount ? `<div><span>Desconto</span><strong>−${brl(tt.discount)}</strong></div>` : ""}<div class="big"><span>Total</span><span>${brl(tt.total)}</span></div></div>
    <div id="estVerr"></div>`, `<button class="btn btn-secondary" data-mclose>Voltar e editar</button><button class="btn btn-primary" id="estVok">${ic("check")} Confirmar venda</button>`, { wide: false });
    const ok = m.querySelector("#estVok");
    ok.onclick = async () => {
      ok.disabled = true;
      ok.textContent = "Registrando...";
      const low = Object.keys(r).map((id) => S.pMap[id]).filter((p) => p && p.minStock && round(avail(p) - r[p.id]) <= p.minStock);
      try {
        const sale = await createSale(S.store, ctx(), { lines: cart.lines, discount: tt.discount, client: t ? t.nome : cart.client, tutorId: cart.tutorId, animalId: cart.animalId, animalName: an ? an.nome : "", agendamentoId: cart.agendamentoId, payment: cart.payment, notes: cart.notes });
        try {
          logAction(`registrou a venda nº ${sale.number} (${brl(sale.total)})${t ? " de " + t.nome : ""}`);
          saveDB();
        } catch (e) {}
        Object.assign(cart, blankCart());
        cart.tq = "";
        closeModal();
        rr();
        setTimeout(() => openReceipt(sale, low), 60);
      } catch (e) {
        ok.disabled = false;
        ok.innerHTML = `${ic("check")} Confirmar venda`;
        m.querySelector("#estVerr").innerHTML = e instanceof StockError ? errBox(`<div><strong>Venda não concluída: falta estoque.</strong> Nada foi descontado.</div>${e.shortages.map((s) => `<div>${esc(s.name)}: precisa ${qty(s.required, s.unit)}, tem ${qty(s.available, s.unit)}</div>`).join("")}`) : errBox(`${esc(e.message)} Nada foi descontado.`);
      }
    };
  }
  function openReceipt(sale, low = []) {
    const m = modal(`Venda nº ${sale.number} concluída`, `
    ${low.length ? `<div class="alert alert-warn est-noprint" style="margin-bottom:12px;"><div><div class="t1">Estoque baixo</div>${low.map((p) => esc(p.name)).join(", ")}</div></div>` : ""}
    <div class="est-receipt"><div class="rh"><b>Olhatta</b><div style="color:var(--ink-soft);">Comprovante de venda nº ${sale.number}</div><small style="color:var(--ink-soft);">${fmtDT(sale.createdAt)}</small></div>
    <table>${sale.items.map((it) => `<tr><td>${numF(it.qty)}× ${esc(it.name)}${it.type === "pacote" ? `<br><small style="color:var(--ink-soft);">${esc(it.composition.map((c) => `${numF(c.qty * it.qty)} ${c.name}`).concat(it.services).join(" · "))}</small>` : ""}</td><td>${brl(it.subtotal)}</td></tr>`).join("")}
    ${sale.discount ? `<tr><td>Desconto</td><td>−${brl(sale.discount)}</td></tr>` : ""}<tr class="tot"><td>Total</td><td>${brl(sale.total)}</td></tr></table>
    <p style="margin:12px 0 0; font-size:12px; color:var(--ink-soft);">Pagamento: ${esc(sale.payment || "—")}${sale.client ? `<br>Cliente: ${esc(sale.client)}${sale.animalName ? " · " + esc(sale.animalName) : ""}` : ""}<br>Atendido por ${esc(sale.createdByName)}</p></div>`, `<button class="btn btn-secondary" id="estPrint">${ic("print")} Imprimir</button>${typeof formNotaFiscal === "function" ? `<button class="btn btn-secondary" id="estNF">${ic("receipt")} Lançar nota fiscal</button>` : ""}<button class="btn btn-primary" data-mclose>Concluir</button>`, { narrow: true });
    m.querySelector("#estPrint").onclick = printModal;
    const nf = m.querySelector("#estNF");
    if (nf)
      nf.onclick = () => {
        closeModal();
        openNFFromSale(sale);
      };
  }
  function printModal() {
    document.body.classList.add("est-imprimindo");
    setTimeout(() => {
      window.print();
      document.body.classList.remove("est-imprimindo");
    }, 50);
  }
  var nfLink = { saleId: null };
  function openNFFromSale(sale) {
    closeDrawer();
    nfLink.saleId = sale.id;
    formNotaFiscal(null, { __est: true, tutorId: sale.tutorId || "", animalId: sale.animalId || "", agendamentoId: sale.agendamentoId || "", data: todayISO(sale.createdAt) });
    setTimeout(() => {
      const f = sale.gross > 0 ? sale.total / sale.gross : 0;
      const cats = DB.categoriasNF || [];
      const pick = (it) => {
        const want = it.type === "pacote" ? ["Consulta"] : [S.pMap[it.refId] && S.cMap[S.pMap[it.refId].categoryId] ? S.cMap[S.pMap[it.refId].categoryId].name : "", /col[ií]rio/i.test(it.name) ? "Colírio" : "Medicamento"];
        for (const w of want) {
          const c = cats.find((x) => sa(x) === sa(w) || w && sa(x).startsWith(sa(w).slice(0, 5)));
          if (c)
            return c;
        }
        return cats.includes("Outro") ? "Outro" : cats[0];
      };
      sale.items.forEach((it, i) => {
        const net = it.qty - ((sale.returnedByKey || {})[it.key] || 0);
        if (net <= 0)
          return;
        if (i > 0)
          document.getElementById("nfAddItemBtn")?.click();
        const rows = document.querySelectorAll("#nfItensList [data-item-desc]");
        const row = rows[rows.length - 1]?.parentElement;
        if (!row)
          return;
        const cat = row.querySelector("[data-item-cat]"), desc = row.querySelector("[data-item-desc]"), val = row.querySelector("[data-item-valor]");
        cat.value = pick(it);
        cat.dispatchEvent(new Event("change"));
        desc.value = `${numF(net)}× ${it.name}`;
        desc.dispatchEvent(new Event("input"));
        val.value = money(net * it.unitPrice * f).toFixed(2);
        val.dispatchEvent(new Event("input"));
      });
      const fp = document.querySelector("#formNF [name=formaPagamento]");
      if (fp && [...fp.options].some((o) => o.value === sale.payment))
        fp.value = sale.payment;
    }, 30);
  }
  async function onNFCreated(nf) {
    if (!nfLink.saleId)
      return;
    const id = nfLink.saleId;
    nfLink.saleId = null;
    nf.vendaId = id;
    try {
      saveDB();
      await linkSaleNF(S.store, ctx(), id, nf.id);
    } catch (e) {
      console.error(e);
    }
  }
  var hist = { r: monthRange(0), q: "", user: "", status: "", limit: 100 };
  function setHistPeriod(p) {
    if (p === "hoje")
      hist.r = { from: today(), to: today() };
    if (p === "mes")
      hist.r = monthRange(0);
  }
  function filtered() {
    return S.sales.filter((s) => inRange(s.createdAt, hist.r) && (!hist.user || s.createdBy === hist.user) && (!hist.status || (hist.status === "devolucao" ? s.refunded > 0 && s.status !== "cancelada" : hist.status === "semnf" ? !s.nfId && s.status !== "cancelada" : s.status === hist.status)) && match(hist.q, String(s.number), s.client, s.animalName, s.payment, ...s.items.map((i) => i.name), ...s.items.flatMap((i) => i.composition.map((c) => c.name))));
  }
  function renderVendas() {
    const list = filtered();
    const net = list.reduce((a, s) => a + saleNet(s), 0);
    const sellers = [...new Map(S.sales.map((s) => [s.createdBy, s.createdByName])).entries()];
    const pk = list.filter((s) => s.status !== "cancelada" && s.items.some((i) => i.type === "pacote")).length;
    return `
  <div class="grid g3" style="margin-bottom:16px;">
    ${stat("Vendas no período", list.filter((s) => s.status !== "cancelada").length, periodLabel(hist.r))}
    ${stat("Valor líquido", `<span class="est-money">${brl(net)}</span>`, "descontadas devoluções")}
    ${stat("Com pacote", pk, "vendas que incluem pacote")}
  </div>
  <div class="card pad">
    <div class="filters" style="justify-content:space-between;">${periodHTML(hist.r, "hist")}${canDo("vender") ? `<button class="btn btn-primary" data-est-go="vender">${ic("plus")} Nova venda</button>` : ""}</div>
    <div class="filters">
      ${searchBox("estHq", "Buscar venda", hist.q)}
      <select id="estHu"><option value="">Todos os responsáveis</option>${sellers.map(([id, n]) => `<option value="${id}" ${hist.user === id ? "selected" : ""}>${esc(n)}</option>`).join("")}</select>
      <select id="estHs"><option value="">Todas as situações</option>${[["concluida", "Concluídas"], ["cancelada", "Canceladas"], ["devolucao", "Com devolução"], ["semnf", "Sem nota fiscal"]].map(([k, l]) => `<option value="${k}" ${hist.status === k ? "selected" : ""}>${l}</option>`).join("")}</select>
      <button class="btn btn-secondary btn-sm" id="estHcsv">${ic("download")} Exportar</button>
    </div>
    ${list.length ? `<div class="table-wrap" data-keep="hist"><table><thead><tr><th>Nº</th><th>Data</th><th>Cliente</th><th>Itens</th><th>Responsável</th><th class="est-r">Total</th><th>Situação</th></tr></thead><tbody>
      ${list.slice(0, hist.limit).map((s) => `<tr class="rowlink" data-est-sale="${s.id}"><td class="est-num"><strong>${s.number}</strong></td><td class="est-num">${fmtDT(s.createdAt)}</td><td>${esc(s.client || "—")}${s.animalName ? `<br><small style="color:var(--ink-soft);">${esc(s.animalName)}</small>` : ""}</td><td style="max-width:260px;">${esc(s.items.map((i) => `${numF(i.qty)}× ${i.name}`).join(", "))}</td><td>${esc(s.createdByName)}</td><td class="est-r est-num"><strong>${brl(s.total)}</strong></td><td>${saleBadge(s)}${s.nfId ? ' <span class="pill-muted">NF</span>' : ""}</td></tr>`).join("")}
    </tbody></table></div>${list.length > hist.limit ? '<div style="text-align:center; margin-top:12px;"><button class="btn btn-secondary" id="estHmore">Mostrar mais</button></div>' : ""}` : empty("Nenhuma venda no período", "Mude o período ou os filtros.")}
  </div>`;
  }
  function bindVendas(el) {
    bindPeriod(el.querySelector("[data-period=hist]"), hist.r, rr);
    const q = el.querySelector("#estHq");
    let t;
    if (q)
      q.oninput = () => {
        clearTimeout(t);
        t = setTimeout(() => {
          hist.q = q.value;
          rr();
          const n = document.getElementById("estHq");
          if (n && hist.q) {
            n.focus();
            n.setSelectionRange(n.value.length, n.value.length);
          }
        }, 250);
      };
    const s1 = el.querySelector("#estHu");
    if (s1)
      s1.onchange = () => {
        hist.user = s1.value;
        rr();
      };
    const s2 = el.querySelector("#estHs");
    if (s2)
      s2.onchange = () => {
        hist.status = s2.value;
        rr();
      };
    const more = el.querySelector("#estHmore");
    if (more)
      more.onclick = () => {
        hist.limit += 100;
        rr();
      };
    const csv = el.querySelector("#estHcsv");
    if (csv)
      csv.onclick = () => downloadCSV(`vendas_${hist.r.from}_${hist.r.to}`, ["Nº", "Data", "Cliente", "Animal", "Itens", "Responsável", "Pagamento", "Bruto", "Desconto", "Total", "Devolvido", "Líquido", "Situação", "Nota fiscal"], filtered().map((s) => [s.number, fmtDT(s.createdAt), s.client, s.animalName || "", s.items.map((i) => `${i.qty}x ${i.name}`).join(", "), s.createdByName, s.payment, s.gross, s.discount, s.total, s.refunded || 0, saleNet(s), s.status, s.nfId ? "Sim" : "Não"]));
  }
  function openSale(id) {
    const s = S.sales.find((x) => x.id === id);
    if (!s)
      return toast("Venda não encontrada");
    const ret = s.returnedByKey || {};
    const nfOk = s.nfId && (DB.notasFiscais || []).some((n) => n.id === s.nfId);
    const tutor = s.tutorId ? tutorById(s.tutorId) : null;
    const outs = {};
    for (const mv of S.movements)
      if (mv.refId === s.id && mv.type.startsWith("venda"))
        for (const l of mv.lots || []) {
          const k = mv.productId + l.lotId;
          outs[k] = outs[k] || { name: mv.productName, unit: mv.unit, code: l.code, expiry: l.expiry, qty: 0 };
          outs[k].qty += l.qty;
        }
    const outRows = Object.values(outs).length ? Object.values(outs) : s.consumption.flatMap((c) => c.lots.map((l) => ({ name: c.name, unit: c.unit, code: l.code, expiry: l.expiry, qty: l.qty })));
    const d = drawer(`Venda nº ${s.number}`, `${fmtDT(s.createdAt)} · ${esc(s.createdByName)}`, `
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px;">${saleBadge(s)} <span class="pill-muted">${esc(s.payment || "Sem pagamento")}</span>${nfOk ? '<span class="pill">Nota fiscal lançada</span>' : ""}</div>
    <div class="est-kv">
      <div class="mini-stat"><div class="l">Cliente</div><div class="n">${tutor ? `<button class="est-link" data-open-tutor="${tutor.id}">${esc(tutor.nome)}</button>` : esc(s.client || "—")}</div></div>
      <div class="mini-stat"><div class="l">Animal</div><div class="n">${s.animalId && animalById(s.animalId) ? `<button class="est-link" data-open-animal="${s.animalId}">${esc(s.animalName || animalById(s.animalId).nome)}</button>` : esc(s.animalName || "—")}</div></div>
      <div class="mini-stat"><div class="l">Total</div><div class="n">${brl(s.total)}</div></div>
      <div class="mini-stat"><div class="l">Valor líquido</div><div class="n">${brl(saleNet(s))}</div></div>
    </div>
    <div class="section-title">Itens</div>
    <div class="table-wrap" style="margin-bottom:12px;"><table><thead><tr><th>Item</th><th class="est-r">Qtd.</th><th class="est-r">Subtotal</th></tr></thead><tbody>
    ${s.items.map((it) => `<tr><td><div class="est-two"><b>${esc(it.name)}</b><small>${it.type === "pacote" ? esc(it.composition.map((c) => `${numF(c.qty)} ${c.name}`).concat(it.services).join(" · ")) : "Avulso"}${ret[it.key] ? ` · devolvido ${numF(ret[it.key])}` : ""}</small></div></td><td class="est-r est-num">${numF(it.qty)}</td><td class="est-r est-num">${brl(it.subtotal)}</td></tr>`).join("")}
    </tbody></table></div>
    <div class="est-totals" style="margin-bottom:14px;"><div><span>Subtotal</span><span class="est-num">${brl(s.gross)}</span></div>${s.discount ? `<div><span>Desconto</span><span class="est-num">−${brl(s.discount)}</span></div>` : ""}${s.refunded ? `<div><span>${s.status === "cancelada" ? "Estornado" : "Devolvido"}</span><span class="est-num">−${brl(s.refunded)}</span></div>` : ""}
    ${canDo("custos") ? `<div><span>Custo dos produtos</span><span class="est-num">${brl(s.costTotal)}</span></div><div><span>Margem estimada</span><strong class="est-num">${brl(s.total - s.costTotal)}</strong></div>` : ""}</div>
    <div class="section-title">Saída do estoque</div>
    <div class="table-wrap" style="margin-bottom:14px;"><table><thead><tr><th>Produto</th><th>Lote</th><th class="est-r">Qtd.</th></tr></thead><tbody>
    ${outRows.map((o) => `<tr><td>${esc(o.name)}</td><td>${esc(o.code || "—")}${o.expiry ? `<br><small style="color:var(--ink-soft);">vence ${fmtD(new Date(o.expiry + "T12:00").getTime())}</small>` : ""}</td><td class="est-r est-num">${qty(o.qty, o.unit)}</td></tr>`).join("") || '<tr><td colspan="3" style="color:var(--ink-soft);">Sem saída de estoque.</td></tr>'}
    </tbody></table></div>
    ${s.cancel ? `<div class="alert alert-danger" style="margin-bottom:10px;"><div><div class="t1">Cancelada em ${fmtDT(s.cancel.at)}</div>${esc(s.cancel.byName)}: ${esc(s.cancel.reason)}. O estoque voltou por estorno.</div></div>` : ""}
    ${(s.returns || []).map((r) => `<div class="alert alert-warn" style="margin-bottom:10px;"><div><div class="t1">Devolução em ${fmtDT(r.at)}</div>${esc(r.items.map((i) => `${numF(i.qty)}× ${i.name}`).join(", "))} (${brl(r.value)}). ${esc(r.reason)}</div></div>`).join("")}
    ${s.notes ? `<div class="alert alert-brown" style="margin-bottom:10px;"><div>${esc(s.notes)}</div></div>` : ""}
    <div class="section-title" style="margin-top:6px;">Ações</div>
    <div style="display:flex; gap:8px; flex-wrap:wrap;">
      <button class="btn btn-secondary btn-sm" id="estSRec">${ic("print")} Comprovante</button>
      ${nfOk ? `<button class="btn btn-secondary btn-sm" id="estSNfOpen">${ic("receipt")} Ver nota fiscal</button>` : s.status !== "cancelada" && typeof formNotaFiscal === "function" ? `<button class="btn btn-primary btn-sm" id="estSNf">${ic("receipt")} Lançar nota fiscal</button>` : ""}
      ${s.status === "concluida" && canDo("cancelar") ? `<button class="btn btn-secondary btn-sm" id="estSRet">${ic("undo")} Devolução</button><button class="btn btn-danger btn-sm" id="estSCan">${ic("ban")} Cancelar venda</button>` : ""}
    </div>`);
    const on = (id, fn) => {
      const b = d.querySelector("#" + id);
      if (b)
        b.onclick = fn;
    };
    on("estSRec", () => {
      closeDrawer();
      openReceipt(s);
    });
    on("estSNf", () => openNFFromSale(s));
    on("estSNfOpen", () => {
      closeDrawer();
      goTo("notasfiscais");
      setTimeout(() => openNFDrawer(s.nfId), 60);
    });
    on("estSRet", () => {
      closeDrawer();
      openReturn(s);
    });
    on("estSCan", () => {
      closeDrawer();
      confirmar({ title: `Cancelar a venda nº ${s.number}?`, text: "Todo o estoque desta venda volta ao saldo por estorno. Fica registrado e não pode ser desfeito.", ok: "Cancelar venda", danger: true, reason: "Motivo" }, async (reason, m) => {
        try {
          await cancelSale(S.store, ctx(), s.id, reason);
          try {
            logAction(`cancelou a venda nº ${s.number}: ${reason}`);
            saveDB();
          } catch (e) {}
          closeModal();
          toast(`Venda nº ${s.number} cancelada e estoque estornado`);
        } catch (e) {
          m.querySelector(".modal-body").insertAdjacentHTML("beforeend", errBox(esc(e.message)));
        }
      });
    });
  }
  function openReturn(s) {
    const ret = s.returnedByKey || {};
    const m = modal(`Devolução na venda nº ${s.number}`, `<p class="hint" style="margin:0 0 12px;">Informe quanto voltou de cada item. O estoque volta para os mesmos lotes de onde saiu.</p>
    <div class="est-rows">${s.items.map((it) => {
      const left = round(it.qty - (ret[it.key] || 0));
      return `<div class="est-rowe" style="grid-template-columns:minmax(0,1fr) 110px;"><div class="est-two"><b>${esc(it.name)}</b><small>Vendido ${numF(it.qty)} · pode devolver ${numF(left)}</small></div><input data-rk="${it.key}" inputmode="decimal" placeholder="0" ${left <= 0 ? "disabled" : ""} aria-label="Quantidade devolvida"></div>`;
    }).join("")}</div>
    <div class="field" style="margin:14px 0 0;"><label for="estRr">Motivo</label><textarea id="estRr" rows="2"></textarea></div><div id="estRerr"></div>`, `<button class="btn btn-secondary" data-mclose>Voltar</button><button class="btn btn-primary" id="estRok">Registrar devolução</button>`);
    m.querySelector("#estRok").onclick = async () => {
      const q = {};
      m.querySelectorAll("[data-rk]").forEach((i) => {
        const v = parseNum(i.value);
        if (Number.isFinite(v) && v > 0)
          q[i.dataset.rk] = v;
      });
      try {
        await returnSale(S.store, ctx(), s.id, q, m.querySelector("#estRr").value);
        try {
          logAction(`registrou devolução na venda nº ${s.number}`);
          saveDB();
        } catch (e) {}
        closeModal();
        toast("Devolução registrada e estoque devolvido");
      } catch (e) {
        m.querySelector("#estRerr").innerHTML = errBox(esc(e.message));
      }
    };
  }

  // src/v-estoque.js
  var rr2 = () => render();
  var hlog = (t) => {
    try {
      logAction(t);
      saveDB();
    } catch (e) {}
  };
  var sugg = {};
  function restockRows() {
    const days = Number(S.geral.consumoDias) || 30;
    const cons = consumptionByProduct(S.sales.filter((s) => s.createdAt >= Date.now() - days * 86400000));
    return activeProducts().filter((p) => p.kind !== "kit").map((p) => {
      const c = cons[p.id] ? cons[p.id].avulso + cons[p.id].pacote : 0;
      const s = suggestRestock(p, c, today());
      return { p, st: status(p), c, s, v: sugg[p.id] !== undefined ? sugg[p.id] : s };
    }).filter((x) => x.s > 0 || x.st.level !== "ok" || sugg[x.p.id] > 0).sort((a, b) => ({ sem: 0, baixo: 1, ok: 2 })[a.st.level] - { sem: 0, baixo: 1, ok: 2 }[b.st.level] || a.p.name.localeCompare(b.p.name));
  }
  function renderReposicao() {
    if (!S.products.length)
      return `<div class="card pad">${empty("Nada para acompanhar ainda", "Os alertas e a reposição sugerida aparecem quando houver produtos cadastrados.", canDo("cadastros") ? '<button class="btn btn-primary" data-est-go="produtos">Cadastrar produtos</button>' : "")}</div>`;
    const al = computeAlerts();
    const list = restockRows();
    const days = Number(S.geral.consumoDias) || 30;
    return `
  <div class="grid g4" style="margin-bottom:16px;">
    ${stat("Sem estoque", al.sem.length, "produtos", "produtos")}
    ${stat("Estoque baixo", al.baixo.length, "no mínimo ou abaixo")}
    ${stat("Lotes vencidos", al.vencidos.length, "bloqueados para venda")}
    ${stat("Vencem em breve", al.vencendo.length, `em até ${S.geral.expiryDays} dias`)}
  </div>
  <div class="card pad" style="margin-bottom:16px;">
    <div class="est-card-h"><div class="section-title">Reposição sugerida <span class="tag">${list.length}</span></div>
      ${list.length ? `<div style="display:flex; gap:8px; flex-wrap:wrap;"><button class="btn btn-secondary btn-sm" id="estRcsv">${ic("download")} Exportar lista</button>${canDo("entradas") ? `<button class="btn btn-primary btn-sm" id="estRent">${ic("entrada")} Registrar entrada</button>` : ""}</div>` : ""}</div>
    <div class="hint" style="margin:-4px 0 12px;">Sugestão = o que saiu nos últimos ${days} dias + estoque mínimo − disponível. Ajuste as quantidades se precisar.</div>
    ${list.length ? `<div class="table-wrap" data-keep="rest"><table><thead><tr><th>Produto</th><th class="est-r">Disponível</th><th class="est-r">Mínimo</th><th class="est-r">Saiu em ${days} dias</th><th class="est-c">Comprar</th><th>Fornecedor</th></tr></thead><tbody>
      ${list.map(({ p, st, c, v }) => `<tr><td><button class="est-link" data-est-prod="${p.id}">${esc(p.name)}</button></td><td class="est-r">${st.level === "sem" ? `<span class="badge st-Cancelado">${qty(st.available, p.unit)}</span>` : st.level === "baixo" ? `<span class="badge st-AguardandoConfirmacao">${qty(st.available, p.unit)}</span>` : `<span class="est-num">${qty(st.available, p.unit)}</span>`}</td><td class="est-r est-num">${numF(p.minStock || 0)}</td><td class="est-r est-num">${numF(c)}</td><td class="est-c"><input data-sg="${p.id}" inputmode="numeric" value="${v}" style="width:80px; text-align:center; padding:7px;" aria-label="Quantidade a comprar"></td><td>${esc(supName(p.supplierId) || "—")}</td></tr>`).join("")}
    </tbody></table></div>` : `<div class="alert alert-sage">${ic("check")}<div>Nada para repor agora.</div></div>`}
  </div>
  <div class="est-row2b">
    <div class="card pad"><div class="section-title">Lotes vencidos</div>
      ${al.vencidos.length ? `<div class="est-list est-scroll">${al.vencidos.map(({ p, l }) => `<div class="est-li"><div class="grow"><b>${esc(p.name)}</b><small>Lote ${esc(l.code || "—")} · ${qty(l.qty, p.unit)}</small></div><span class="badge st-Cancelado">${fmtISO(l.expiry)}</span>${canDo("ajustar") ? `<button class="btn btn-danger btn-sm" data-disc="${p.id}|${l.id}">Descartar</button>` : ""}</div>`).join("")}</div>` : '<div class="hint">Nenhum lote vencido.</div>'}
    </div>
    <div class="card pad"><div class="section-title">Vencem em até ${S.geral.expiryDays} dias</div>
      ${al.vencendo.length ? `<div class="est-list est-scroll">${al.vencendo.map(({ p, l }) => `<div class="est-li click" data-est-prod="${p.id}"><div class="grow"><b>${esc(p.name)}</b><small>Lote ${esc(l.code || "—")} · ${qty(l.qty, p.unit)}</small></div><span class="badge st-AguardandoConfirmacao">${fmtISO(l.expiry)}</span></div>`).join("")}</div>` : '<div class="hint">Nenhum lote perto do vencimento.</div>'}
    </div>
  </div>`;
  }
  function bindReposicao(el) {
    el.querySelectorAll("[data-sg]").forEach((i) => i.onchange = () => {
      const v = parseNum(i.value);
      sugg[i.dataset.sg] = Number.isFinite(v) && v >= 0 ? Math.round(v) : 0;
      i.value = sugg[i.dataset.sg];
    });
    el.querySelectorAll("[data-disc]").forEach((b) => b.onclick = () => {
      const [pid, lid] = b.dataset.disc.split("|");
      openAdjust(pid, { type: "vencido", lotId: lid });
    });
    const c = el.querySelector("#estRcsv");
    if (c)
      c.onclick = () => downloadCSV(`reposicao_${today()}`, ["Produto", "Código", "Unidade", "Disponível", "Mínimo", `Saiu em ${S.geral.consumoDias} dias`, "Comprar", "Fornecedor"], restockRows().filter((x) => x.v > 0).map(({ p, st, c: cc, v }) => [p.name, p.sku, p.unit, st.available, p.minStock || 0, cc, v, supName(p.supplierId)]));
    const e = el.querySelector("#estRent");
    if (e)
      e.onclick = () => {
        const list = restockRows().filter((x) => x.v > 0);
        entry.items = list.map(({ p, v }) => ({ productId: p.id, qty: String(v), cost: p.cost !== null && p.cost !== undefined ? moneyIn(p.cost) : "", lotCode: "", expiry: "" }));
        const sups = [...new Set(list.map((x) => x.p.supplierId).filter(Boolean))];
        if (sups.length === 1)
          entry.supplierId = sups[0];
        estGo("entradas");
      };
  }
  var entry = { supplierId: "", invoice: "", notes: "", updateCost: true, items: [] };
  var blankItem = () => ({ productId: "", qty: "", cost: "", lotCode: "", expiry: "" });
  function renderEntradas() {
    if (!entry.items.length)
      entry.items.push(blankItem());
    const prods = S.products.filter((p) => p.status === "ativo");
    const total = entry.items.reduce((s, it) => s + (parseNum(it.qty) || 0) * (parseNum(it.cost) || 0), 0);
    return `<div class="card pad" style="margin-bottom:16px;">
    <div class="section-title">Registrar entrada de mercadoria</div>
    ${!prods.length ? empty("Cadastre produtos primeiro", "A entrada soma ao estoque de produtos já cadastrados.") : `
    <div class="est-g3" style="margin-bottom:14px;">
      <div class="field"><label for="eSup">Fornecedor</label><select id="eSup"><option value="">Sem fornecedor</option>${S.suppliers.map((s) => `<option value="${s.id}" ${entry.supplierId === s.id ? "selected" : ""}>${esc(s.name)}</option>`).join("")}</select></div>
      <div class="field"><label for="eInv">Nota fiscal de compra <span style="font-weight:500;">(opcional)</span></label><input id="eInv" value="${esc(entry.invoice)}"></div>
      <div class="field"><label for="eNotes">Observação <span style="font-weight:500;">(opcional)</span></label><input id="eNotes" value="${esc(entry.notes)}"></div>
    </div>
    <div class="est-rowe e5 est-rowe-h"><span>Produto</span><span>Quantidade</span><span>Custo unitário</span><span>Lote</span><span>Validade</span><span></span></div>
    <div class="est-rows" id="eRows">${entry.items.map((it, i) => {
      const p = S.pMap[it.productId];
      return `<div class="est-rowe e5">
        <select data-ef="productId" data-i="${i}" aria-label="Produto"><option value="">Escolha o produto</option>${prods.map((x) => `<option value="${x.id}" ${x.id === it.productId ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select>
        <input data-ef="qty" data-i="${i}" inputmode="decimal" placeholder="Qtd." value="${esc(it.qty)}" aria-label="Quantidade">
        <input data-ef="cost" data-i="${i}" inputmode="decimal" placeholder="0,00" value="${esc(it.cost)}" aria-label="Custo unitário">
        <input data-ef="lotCode" data-i="${i}" placeholder="${p && p.controlsLot ? "Obrigatório" : "Opcional"}" value="${esc(it.lotCode)}" aria-label="Lote">
        <input type="date" data-ef="expiry" data-i="${i}" value="${esc(it.expiry)}" aria-label="Validade">
        <button class="icon-btn" data-er="${i}" aria-label="Remover">${ic("trash")}</button></div>`;
    }).join("")}</div>
    <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap; margin-top:12px;">
      <button class="btn btn-secondary btn-sm" id="eAdd">${ic("plus")} Adicionar produto</button>
      ${canDo("custos") ? `<label class="est-check" style="font-size:13px; font-weight:600;"><input type="checkbox" id="eCost" ${entry.updateCost ? "checked" : ""}> Atualizar o custo dos produtos</label>` : ""}
      <div style="margin-left:auto; font-weight:800;">Total: <span id="eTot">${brl(total)}</span></div>
    </div>
    <div id="eErr"></div>
    <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:14px;"><button class="btn btn-secondary" id="eClear">Limpar</button><button class="btn btn-primary" id="eSave">${ic("check")} Confirmar entrada</button></div>`}
  </div>
  <div class="card pad"><div class="section-title">Entradas recentes</div>
    ${S.entries.length ? `<div class="table-wrap" data-keep="ent"><table><thead><tr><th>Data</th><th>Fornecedor</th><th>Itens</th><th class="est-r">Total</th><th>Responsável</th></tr></thead><tbody>
      ${S.entries.slice(0, 100).map((e) => `<tr class="rowlink" data-en="${e.id}"><td class="est-num">${fmtDT(e.at)}</td><td><div class="est-two"><b>${esc(e.supplierName || "Sem fornecedor")}</b><small>${e.invoice ? "NF " + esc(e.invoice) : "Sem nota"}</small></div></td><td style="max-width:280px;">${esc(e.items.map((i) => `${numF(i.qty)} ${i.name}`).join(", "))}</td><td class="est-r est-num">${brl(e.total)}</td><td>${esc(e.byName)}</td></tr>`).join("")}
    </tbody></table></div>` : '<div class="hint">Nenhuma entrada registrada.</div>'}
  </div>`;
  }
  function bindEntradas(el) {
    el.querySelectorAll("[data-en]").forEach((r) => r.onclick = () => openEntry(r.dataset.en));
    if (!el.querySelector("#eSave"))
      return;
    const tot = () => el.querySelector("#eTot").textContent = brl(entry.items.reduce((s, it) => s + (parseNum(it.qty) || 0) * (parseNum(it.cost) || 0), 0));
    el.querySelectorAll("[data-ef]").forEach((i) => {
      const h = () => {
        const it = entry.items[i.dataset.i];
        it[i.dataset.ef] = i.value;
        if (i.dataset.ef === "productId") {
          const p = S.pMap[i.value];
          if (p && !it.cost && p.cost !== null && p.cost !== undefined)
            it.cost = moneyIn(p.cost);
          if (p && p.supplierId && !entry.supplierId)
            entry.supplierId = p.supplierId;
          rr2();
        } else
          tot();
      };
      i.oninput = h;
      if (i.tagName === "SELECT")
        i.onchange = h;
    });
    el.querySelectorAll("[data-er]").forEach((b) => b.onclick = () => {
      entry.items.splice(b.dataset.er, 1);
      rr2();
    });
    el.querySelector("#eAdd").onclick = () => {
      entry.items.push(blankItem());
      rr2();
      setTimeout(() => {
        const r = document.getElementById("eRows");
        if (r)
          r.lastElementChild.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 30);
    };
    el.querySelector("#eSup").onchange = (e) => entry.supplierId = e.target.value;
    el.querySelector("#eInv").oninput = (e) => entry.invoice = e.target.value;
    el.querySelector("#eNotes").oninput = (e) => entry.notes = e.target.value;
    const ec = el.querySelector("#eCost");
    if (ec)
      ec.onchange = () => entry.updateCost = ec.checked;
    el.querySelector("#eClear").onclick = () => {
      Object.assign(entry, { supplierId: "", invoice: "", notes: "", items: [] });
      rr2();
    };
    el.querySelector("#eSave").onclick = () => {
      const items = entry.items.filter((it) => it.productId);
      const err = (m) => el.querySelector("#eErr").innerHTML = errBox(esc(m));
      if (!items.length)
        return err("Escolha pelo menos um produto.");
      for (const it of items) {
        const p = S.pMap[it.productId];
        if (!(parseNum(it.qty) > 0))
          return err(`Informe a quantidade de ${p.name}.`);
        if (p.controlsLot && (!it.lotCode.trim() || !it.expiry))
          return err(`${p.name} controla lote: informe lote e validade.`);
        if (it.expiry && it.expiry < today())
          return err(`A validade informada para ${p.name} já passou.`);
      }
      const sum = items.map((it) => `${numF(parseNum(it.qty))} ${S.pMap[it.productId].name}`).join(", ");
      confirmar({ title: "Confirmar entrada?", text: `Vai somar ao estoque: ${esc(sum)}.`, ok: "Confirmar entrada" }, async () => {
        try {
          await registerEntry(S.store, ctx(), { supplierId: entry.supplierId, invoice: entry.invoice, notes: entry.notes, updateCost: entry.updateCost, items: items.map((it) => ({ productId: it.productId, qty: parseNum(it.qty), cost: it.cost === "" ? null : parseNum(it.cost), lotCode: it.lotCode, expiry: it.expiry })) });
          hlog(`registrou entrada de mercadoria: ${sum}`);
          Object.assign(entry, { supplierId: "", invoice: "", notes: "", items: [] });
          closeModal();
          toast("Entrada registrada e estoque atualizado");
          rr2();
        } catch (e) {
          closeModal();
          err(e.message);
        }
      });
    };
  }
  function openEntry(id) {
    const e = S.entries.find((x) => x.id === id);
    if (!e)
      return;
    drawer("Entrada de mercadoria", `${fmtDT(e.at)} · ${esc(e.byName)}`, `
    <div class="est-kv"><div class="mini-stat"><div class="l">Fornecedor</div><div class="n">${esc(e.supplierName || "—")}</div></div><div class="mini-stat"><div class="l">Nota de compra</div><div class="n">${esc(e.invoice || "—")}</div></div></div>
    <div class="table-wrap"><table><thead><tr><th>Produto</th><th class="est-r">Qtd.</th><th class="est-r">Custo</th><th>Lote</th></tr></thead><tbody>${e.items.map((i) => `<tr><td>${esc(i.name)}</td><td class="est-r est-num">${qty(i.qty, i.unit)}</td><td class="est-r est-num">${i.cost === null ? "—" : brl(i.cost)}</td><td>${esc(i.lotCode || "—")}${i.expiry ? `<br><small style="color:var(--ink-soft);">vence ${fmtISO(i.expiry)}</small>` : ""}</td></tr>`).join("")}</tbody></table></div>
    <div class="est-totals"><div class="big"><span>Total</span><span>${brl(e.total)}</span></div></div>${e.notes ? `<div class="alert alert-brown"><div>${esc(e.notes)}</div></div>` : ""}`);
  }
  function renderAjustes() {
    const adj = S.adjustments.filter((a) => a.type !== "estoque_inicial");
    const kits = S.products.filter((p) => p.kind === "kit" && p.status === "ativo");
    return `<div class="card pad" style="margin-bottom:16px;">
    <div class="est-card-h"><div class="section-title">Ajustes, perdas e inventário</div><button class="btn btn-primary btn-sm" id="aNew">${ic("plus")} Novo ajuste</button></div>
    ${adj.length ? `<div class="table-wrap" data-keep="adj"><table><thead><tr><th>Data</th><th>Produto</th><th>Tipo</th><th class="est-r">Quantidade</th><th>Motivo</th><th>Responsável</th></tr></thead><tbody>
      ${adj.slice(0, 150).map((a) => `<tr><td class="est-num">${fmtDT(a.at)}</td><td>${esc(a.productName)}</td><td>${esc(ADJ_TYPES[a.type] ? ADJ_TYPES[a.type].label : a.type)}</td><td class="est-r est-num ${a.direction < 0 ? "est-neg" : "est-pos-n"}">${a.direction < 0 ? "−" : "+"}${numF(a.qty)}</td><td style="max-width:280px;">${esc(a.reason)}</td><td>${esc(a.byName)}</td></tr>`).join("")}
    </tbody></table></div>` : '<div class="hint">Use para corrigir contagens, registrar perdas, avarias ou descarte de vencidos. Todo ajuste fica registrado.</div>'}
  </div>
  <div class="card pad"><div class="section-title">Kits montados</div>
    <div class="hint" style="margin:-6px 0 12px;">Kit montado é um produto próprio: a montagem retira os componentes uma única vez e a venda do kit baixa só o kit.</div>
    ${kits.length ? `<div class="est-list">${kits.map((k) => `<div class="est-li click" data-est-prod="${k.id}"><div class="est-thumb">${ic("kit")}</div><div class="grow"><b>${esc(k.name)}</b><small>${esc((k.kitComponents || []).map((c) => `${numF(c.qty)} ${S.pMap[c.productId] ? S.pMap[c.productId].name : "?"}`).join(", "))}</small></div><div class="side"><b class="est-num">${qty(status(k).available, k.unit)}</b></div></div>`).join("")}</div>` : '<div class="hint">Nenhum kit. Cadastre um produto do tipo "Kit montado" em Produtos.</div>'}
  </div>`;
  }
  function bindAjustes(el) {
    const b = el.querySelector("#aNew");
    if (b)
      b.onclick = () => openAdjust();
  }
  function openAdjust(productId = "", preset = {}) {
    if (!canDo("ajustar"))
      return toast("Seu perfil não pode ajustar o estoque");
    let lotSel = preset.lotId || "";
    const m = modal("Ajustar estoque", `<div class="est-g2">
    <div class="field full"><label for="aP">Produto</label><select id="aP"><option value="">Escolha o produto</option>${S.products.map((p) => `<option value="${p.id}" ${p.id === productId ? "selected" : ""}>${esc(p.name)}</option>`).join("")}</select></div>
    <div class="field"><label for="aT">Tipo</label><select id="aT">${Object.entries(ADJ_TYPES).map(([k, v]) => `<option value="${k}" ${k === (preset.type || "ajuste_saida") ? "selected" : ""}>${v.label}</option>`).join("")}</select></div>
    <div class="field" id="aLw"><label for="aL">Lote</label><select id="aL"></select></div>
    <div class="field" id="aNlw" hidden><label for="aNl">Novo lote</label><input id="aNl"></div>
    <div class="field" id="aNew2" hidden><label for="aNe">Validade</label><input id="aNe" type="date"></div>
    <div class="field"><label for="aQ" id="aQl">Quantidade</label><input id="aQ" inputmode="decimal"></div>
    <div class="field full"><label for="aR">Motivo</label><textarea id="aR" rows="2"></textarea></div>
    <div class="alert alert-sage full" id="aInfo"><div></div></div><div id="aErr" class="full"></div></div>`, `<button class="btn btn-secondary" data-mclose>Cancelar</button><button class="btn btn-primary" id="aOk">${ic("check")} Registrar ajuste</button>`);
    const aP = m.querySelector("#aP"), aT = m.querySelector("#aT"), aL = m.querySelector("#aL");
    const sync = () => {
      const p = S.pMap[aP.value];
      const t = aT.value;
      const lots = p ? (p.lots || []).filter((l) => l.qty > 0) : [];
      const dirIn = ADJ_TYPES[t].dir > 0;
      aL.innerHTML = (dirIn ? '<option value="">Novo lote ou sem lote</option>' : t === "inventario" && !(p && p.controlsLot) ? '<option value="">Saldo geral</option>' : '<option value="">Automático (o que vence primeiro)</option>') + lots.map((l) => `<option value="${l.id}" ${l.id === lotSel ? "selected" : ""}>${esc(l.code || "Sem lote")}${l.expiry ? " · " + fmtISO(l.expiry) : ""} · ${numF(l.qty)}${isExpired(l, today()) ? " (vencido)" : ""}</option>`).join("");
      m.querySelector("#aLw").hidden = !lots.length && !dirIn;
      const nl = dirIn && !aL.value && p && p.controlsLot;
      m.querySelector("#aNlw").hidden = !nl;
      m.querySelector("#aNew2").hidden = !nl;
      m.querySelector("#aQl").textContent = t === "inventario" ? "Quantidade contada" : "Quantidade";
      m.querySelector("#aInfo div").innerHTML = p ? `Saldo físico: <strong>${qty(sumLots(p.lots), p.unit)}</strong>${aL.value ? ` · neste lote: <strong>${numF((p.lots.find((l) => l.id === aL.value) || {}).qty || 0)}</strong>` : ""}` : "Escolha o produto para ver o saldo.";
    };
    aP.onchange = () => {
      lotSel = "";
      sync();
    };
    aT.onchange = sync;
    aL.onchange = () => {
      lotSel = aL.value;
      sync();
    };
    sync();
    m.querySelector("#aOk").onclick = async () => {
      const err = (x) => m.querySelector("#aErr").innerHTML = errBox(esc(x));
      if (!aP.value)
        return err("Escolha o produto.");
      const q = parseNum(m.querySelector("#aQ").value);
      if (!Number.isFinite(q) || q < 0 || aT.value !== "inventario" && q === 0)
        return err("Informe a quantidade.");
      if (!m.querySelector("#aR").value.trim())
        return err("Informe o motivo. Todo ajuste fica registrado.");
      try {
        await adjustStock(S.store, ctx(), { productId: aP.value, type: aT.value, qty: q, lotId: aL.value || null, lotCode: m.querySelector("#aNl").value.trim(), expiry: m.querySelector("#aNe").value, reason: m.querySelector("#aR").value });
        hlog(`ajustou o estoque de ${S.pMap[aP.value].name} (${ADJ_TYPES[aT.value].label})`);
        closeModal();
        toast("Ajuste registrado");
      } catch (e) {
        err(e.message);
      }
    };
  }
  var mf = { r: monthRange(0), q: "", type: "", user: "", limit: 150 };
  var movRows = () => S.movements.filter((m) => inRange(m.at, mf.r) && (!mf.type || m.type === mf.type) && (!mf.user || m.by === mf.user) && match(mf.q, m.productName, m.reason, m.refLabel, ...(m.lots || []).map((l) => l.code)));
  function renderMovimentacoes() {
    const list = movRows();
    const users = [...new Map(S.movements.map((m) => [m.by, m.byName])).entries()];
    const ins = list.filter((m) => m.direction > 0).length;
    return `<div class="card pad">
    <div class="filters" style="justify-content:space-between;">${periodHTML(mf.r, "mov")}<button class="btn btn-secondary btn-sm" id="mCsv">${ic("download")} Exportar</button></div>
    <div class="filters">
      ${searchBox("mQ", "Buscar movimentação", mf.q)}
      <select id="mT"><option value="">Todos os tipos</option>${Object.entries(MOV).map(([k, v]) => `<option value="${k}" ${mf.type === k ? "selected" : ""}>${v[0]}</option>`).join("")}</select>
      <select id="mU"><option value="">Todos os responsáveis</option>${users.map(([id, n]) => `<option value="${id}" ${mf.user === id ? "selected" : ""}>${esc(n)}</option>`).join("")}</select>
    </div>
    <div class="hint" style="margin:-6px 0 10px;">${list.length} movimentaç${list.length === 1 ? "ão" : "ões"} em ${periodLabel(mf.r)} · ${ins} entrada${ins === 1 ? "" : "s"} e ${list.length - ins} saída${list.length - ins === 1 ? "" : "s"}. Nada é apagado; correções viram novos registros.</div>
    ${list.length ? `<div class="table-wrap" data-keep="mov"><table><thead><tr><th>Data e hora</th><th>Produto</th><th>Tipo</th><th class="est-r">Quantidade</th><th class="est-r">Antes</th><th class="est-r">Depois</th><th>Lote</th><th>Responsável</th><th>Motivo</th><th>Documento</th></tr></thead><tbody>
      ${list.slice(0, mf.limit).map((m) => `<tr><td class="est-num">${fmtDT(m.at)}</td><td><button class="est-link" style="text-decoration:none; color:var(--ink);" data-est-prod="${m.productId}">${esc(m.productName)}</button></td><td>${movBadge(m.type)}</td><td class="est-r est-num ${m.direction < 0 ? "est-neg" : "est-pos-n"}">${m.direction < 0 ? "−" : "+"}${qty(m.qty, m.unit)}</td><td class="est-r est-num">${numF(m.before)}</td><td class="est-r est-num">${numF(m.after)}</td><td>${esc((m.lots || []).map((l) => l.code).filter(Boolean).join(", ") || "—")}</td><td>${esc(m.byName)}</td><td style="max-width:240px;">${esc(m.reason || "")}</td><td>${m.refCol === "sales" ? `<button class="est-link" data-est-sale="${m.refId}">${esc(m.refLabel)}</button>` : esc(m.refLabel || "")}</td></tr>`).join("")}
    </tbody></table></div>${list.length > mf.limit ? '<div style="text-align:center; margin-top:12px;"><button class="btn btn-secondary" id="mMore">Mostrar mais</button></div>' : ""}` : empty("Nenhuma movimentação no período", "Vendas, entradas e ajustes aparecem aqui automaticamente.")}
  </div>`;
  }
  function bindMovimentacoes(el) {
    bindPeriod(el.querySelector("[data-period=mov]"), mf.r, rr2);
    const q = el.querySelector("#mQ");
    let t;
    q.oninput = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        mf.q = q.value;
        rr2();
        const n = document.getElementById("mQ");
        if (n && mf.q) {
          n.focus();
          n.setSelectionRange(n.value.length, n.value.length);
        }
      }, 250);
    };
    el.querySelector("#mT").onchange = (e) => {
      mf.type = e.target.value;
      rr2();
    };
    el.querySelector("#mU").onchange = (e) => {
      mf.user = e.target.value;
      rr2();
    };
    const more = el.querySelector("#mMore");
    if (more)
      more.onclick = () => {
        mf.limit += 150;
        rr2();
      };
    el.querySelector("#mCsv").onclick = () => downloadCSV(`movimentacoes_${mf.r.from}_${mf.r.to}`, ["Data", "Produto", "Tipo", "Quantidade", "Unidade", "Saldo anterior", "Saldo posterior", "Lotes", "Responsável", "Motivo", "Documento"], movRows().map((m) => [fmtDT(m.at), m.productName, (MOV[m.type] || [m.type])[0], m.direction * m.qty, m.unit, m.before, m.after, (m.lots || []).map((l) => l.code).filter(Boolean).join(", "), m.byName, m.reason, m.refLabel]));
  }
  var ff = { q: "" };
  function renderFornecedores() {
    const add = canDo("cadastros") ? `<button class="btn btn-primary" data-new-sup>${ic("plus")} Novo fornecedor</button>` : "";
    if (!S.suppliers.length)
      return `<div class="card pad">${empty("Nenhum fornecedor cadastrado", "Cadastre os fornecedores para ligar aos produtos e às entradas de mercadoria.", add)}</div>`;
    const list = S.suppliers.filter((s) => match(ff.q, s.name, s.cnpj, s.email, s.phone, s.address));
    return `<div class="card pad"><div class="view-head" style="margin-bottom:12px;"><div class="filters" style="margin:0; flex:1;">${searchBox("fQ", "Buscar fornecedor", ff.q)}</div>${add}</div>
    <div class="table-wrap" data-keep="sup"><table><thead><tr><th>Fornecedor</th><th>CNPJ</th><th>Telefone</th><th>E-mail</th><th class="est-r">Produtos</th><th>Última entrada</th></tr></thead><tbody>
    ${list.map((s) => {
      const n = S.products.filter((p) => p.supplierId === s.id).length;
      const last = S.entries.find((e) => e.supplierId === s.id);
      return `<tr class="rowlink" data-sup="${s.id}"><td><strong>${esc(s.name)}</strong></td><td class="est-num">${esc(s.cnpj || "—")}</td><td class="est-num">${esc(s.phone || "—")}</td><td>${esc(s.email || "—")}</td><td class="est-r est-num">${n}</td><td class="est-num">${last ? fmtD(last.at) : "—"}</td></tr>`;
    }).join("") || '<tr><td colspan="6" style="text-align:center; color:var(--ink-soft);">Nenhum fornecedor encontrado.</td></tr>'}
    </tbody></table></div></div>`;
  }
  function bindFornecedores(el) {
    el.querySelectorAll("[data-new-sup]").forEach((b) => b.onclick = () => openSupplier());
    el.querySelectorAll("[data-sup]").forEach((r) => r.onclick = () => openSupplier(r.dataset.sup));
    const q = el.querySelector("#fQ");
    if (q) {
      let t;
      q.oninput = () => {
        clearTimeout(t);
        t = setTimeout(() => {
          ff.q = q.value;
          rr2();
          const n = document.getElementById("fQ");
          if (n && ff.q) {
            n.focus();
            n.setSelectionRange(n.value.length, n.value.length);
          }
        }, 200);
      };
    }
  }
  function openSupplier(id) {
    const s = id ? S.sMap[id] : null;
    const edit = canDo("cadastros");
    const prods = s ? S.products.filter((p) => p.supplierId === s.id || S.entries.some((e) => e.supplierId === s.id && e.items.some((i) => i.productId === p.id))) : [];
    const ro = edit ? "" : "readonly";
    const m = modal(s ? esc(s.name) : "Novo fornecedor", `<form id="sF" class="est-g2" novalidate>
    <div class="field full"><label for="sName">Nome ou razão social</label><input id="sName" name="name" value="${esc(s ? s.name : "")}" ${ro}></div>
    <div class="field"><label for="sCnpj">CNPJ <span style="font-weight:500;">(opcional)</span></label><input id="sCnpj" name="cnpj" inputmode="numeric" value="${esc(s ? s.cnpj : "")}" ${ro}></div>
    <div class="field"><label for="sPhone">Telefone</label><input id="sPhone" name="phone" inputmode="tel" value="${esc(s ? s.phone : "")}" ${ro}></div>
    <div class="field full"><label for="sEmail">E-mail</label><input id="sEmail" name="email" type="email" value="${esc(s ? s.email : "")}" ${ro}></div>
    <div class="field full"><label for="sAddr">Endereço</label><input id="sAddr" name="address" value="${esc(s ? s.address : "")}" ${ro}></div>
    <div class="field full"><label for="sNotes">Observações</label><textarea id="sNotes" name="notes" rows="2" style="min-height:0;" ${ro}>${esc(s ? s.notes : "")}</textarea></div>
    ${s ? `<div class="full"><label>Produtos fornecidos</label>${prods.length ? `<div class="chip-list" style="margin-top:0;">${prods.map((p) => `<span class="chip" style="padding-right:11px; cursor:pointer;" data-est-prod="${p.id}">${esc(p.name)}</span>`).join("")}</div>` : '<div class="hint">Nenhum produto ligado ainda.</div>'}</div>` : ""}
    <div id="sErr" class="full"></div></form>`, edit ? `${s && !prods.length ? `<button class="btn btn-danger" id="sDel" style="margin-right:auto;">${ic("trash")} Excluir</button>` : ""}<button class="btn btn-secondary" data-mclose>Cancelar</button><button class="btn btn-primary" id="sSave">${ic("check")} Salvar</button>` : '<button class="btn btn-secondary" data-mclose>Fechar</button>');
    if (!edit)
      return;
    const f = m.querySelector("#sF");
    f.cnpj.oninput = () => f.cnpj.value = maskCNPJ(f.cnpj.value);
    try {
      aplicarMascaraTelefone(f.phone);
    } catch (e) {}
    m.querySelector("#sSave").onclick = async () => {
      const d = Object.fromEntries(new FormData(f));
      if (!d.name.trim())
        return m.querySelector("#sErr").innerHTML = errBox("Informe o nome do fornecedor.");
      if (d.cnpj && d.cnpj.replace(/\D/g, "").length !== 14)
        return m.querySelector("#sErr").innerHTML = errBox("O CNPJ precisa ter 14 números.");
      try {
        await saveSimple(S.store, ctx(), "suppliers", { id: s ? s.id : undefined, ...d }, ["name", "cnpj", "phone", "email", "address", "notes"], "fornecedor");
        hlog(`${s ? "editou" : "cadastrou"} o fornecedor ${d.name}`);
        closeModal();
        toast(s ? "Fornecedor atualizado" : "Fornecedor cadastrado");
      } catch (e) {
        m.querySelector("#sErr").innerHTML = errBox(esc(e.message));
      }
    };
    const del = m.querySelector("#sDel");
    if (del)
      del.onclick = () => confirmar({ title: `Excluir ${esc(s.name)}?`, text: "O fornecedor não tem produtos ligados. As entradas antigas continuam com o nome registrado.", ok: "Excluir", danger: true }, async () => {
        try {
          await S.store.tx(async (t) => {
            t.delete("suppliers", s.id);
            t.set("audit", S.store.newId("audit"), { at: Date.now(), by: ctx().user.uid, byName: ctx().user.name, action: "fornecedor_excluido", details: s.name });
          });
          hlog(`excluiu o fornecedor ${s.name}`);
          closeModal();
          toast("Fornecedor excluído");
        } catch (e) {
          toast(e.message);
        }
      });
  }

  // src/v-produtos.js
  var rr3 = () => render();
  var hlog2 = (t) => {
    try {
      logAction(t);
      saveDB();
    } catch (e) {}
  };
  var pf = { q: "", cat: "", sit: "" };
  var SIT = [["", "Todas as situações"], ["ok", "Normal"], ["baixo", "Estoque baixo"], ["sem", "Sem estoque"], ["vencendo", "Perto do vencimento"], ["vencido", "Com lote vencido"], ["inativo", "Inativos"]];
  function rows() {
    return S.products.filter((p) => {
      if (pf.sit === "inativo") {
        if (p.status !== "inativo")
          return false;
      } else if (p.status !== "ativo")
        return false;
      if (pf.cat && p.categoryId !== pf.cat)
        return false;
      const st = status(p);
      if (["ok", "baixo", "sem"].includes(pf.sit) && st.level !== pf.sit)
        return false;
      if (pf.sit === "vencendo" && !st.nearLots.length)
        return false;
      if (pf.sit === "vencido" && !st.expiredLots.length)
        return false;
      return match(pf.q, p.name, p.sku, p.barcode, p.description, catName(p.categoryId), supName(p.supplierId));
    }).sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  }
  function renderProdutos() {
    const add = canDo("cadastros") ? `<button class="btn btn-primary" data-new-prod>${ic("plus")} Novo produto</button>` : "";
    if (!S.products.length)
      return `<div class="card pad">${empty("Nenhum produto cadastrado", "Cadastre os produtos que a clínica vende ou usa nos pacotes. O estoque inicial pode ser informado no próprio cadastro.", add)}</div>`;
    const list = rows();
    const c = canDo("custos");
    const al = computeAlerts();
    return `
  <div class="grid g3" style="margin-bottom:16px;">
    ${stat("Produtos ativos", S.products.filter((p) => p.status === "ativo").length, `${S.products.filter((p) => p.status !== "ativo").length} inativo(s)`)}
    ${stat("Abaixo do mínimo", al.baixo.length + al.sem.length, `${al.sem.length} sem estoque`, "reposicao")}
    ${stat("Categorias", S.categories.length, "para organizar os produtos", "configuracoes-categorias")}
  </div>
  <div class="card pad">
    <div class="view-head" style="margin-bottom:12px;">
      <div class="filters" style="margin:0; flex:1;">
        ${searchBox("estPq", "Buscar produto", pf.q)}
        <select id="estPcat"><option value="">Todas as categorias</option>${S.categories.map((x) => `<option value="${x.id}" ${pf.cat === x.id ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select>
        <select id="estPsit">${SIT.map(([k, l]) => `<option value="${k}" ${pf.sit === k ? "selected" : ""}>${l}</option>`).join("")}</select>
        <button class="btn btn-secondary btn-sm" id="estPcsv">${ic("download")} Exportar</button>
      </div>${add}
    </div>
    <div class="table-wrap" data-keep="prod"><table><thead><tr><th>Produto</th><th class="est-r">Disponível</th><th class="est-r">Mínimo</th><th class="est-r">Preço</th>${c ? '<th class="est-r">Custo</th>' : ""}<th>Validade</th><th>Situação</th></tr></thead><tbody>
    ${list.map((p) => {
      const st = status(p);
      const ne = nearestExpiry(p, today()) || st.expiredLots[0] && st.expiredLots[0].expiry || "";
      return `<tr class="rowlink" data-est-prod="${p.id}"><td><div class="est-cell"><div class="est-thumb">${ic(p.kind === "kit" ? "kit" : "produto")}</div><div class="est-two"><b>${esc(p.name)}</b><small>${esc(p.sku)}${catName(p.categoryId) ? " · " + esc(catName(p.categoryId)) : ""}${p.kind === "kit" ? " · kit" : ""}</small></div></div></td>
        <td class="est-r est-num ${st.level === "sem" ? "est-neg" : ""}">${qty(st.available, p.unit)}</td><td class="est-r est-num">${numF(p.minStock || 0)}</td><td class="est-r est-num">${brl(p.price)}</td>${c ? `<td class="est-r est-num">${p.cost === null || p.cost === undefined ? "—" : brl(p.cost)}</td>` : ""}
        <td class="est-num">${ne ? st.expiredLots.some((l) => l.expiry === ne) ? `<span class="badge st-Cancelado">${fmtISO(ne)}</span>` : st.nearLots.some((l) => l.expiry === ne) ? `<span class="badge st-AguardandoConfirmacao">${fmtISO(ne)}</span>` : fmtISO(ne) : "—"}</td>
        <td>${p.status === "inativo" ? '<span class="pill-muted">Inativo</span>' : levelBadge(st.level)}</td></tr>`;
    }).join("") || `<tr><td colspan="7" style="text-align:center; color:var(--ink-soft);">Nenhum produto com esses filtros.</td></tr>`}
    </tbody></table></div>
  </div>`;
  }
  function bindProdutos(el) {
    el.querySelectorAll("[data-new-prod]").forEach((b) => b.onclick = () => openProductForm());
    const q = el.querySelector("#estPq");
    if (!q)
      return;
    let t;
    q.oninput = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        pf.q = q.value;
        rr3();
        const n = document.getElementById("estPq");
        if (n && pf.q) {
          n.focus();
          n.setSelectionRange(n.value.length, n.value.length);
        }
      }, 200);
    };
    el.querySelector("#estPcat").onchange = (e) => {
      pf.cat = e.target.value;
      rr3();
    };
    el.querySelector("#estPsit").onchange = (e) => {
      pf.sit = e.target.value;
      rr3();
    };
    el.querySelector("#estPcsv").onclick = () => {
      const c = canDo("custos");
      downloadCSV("produtos", ["Produto", "Código", "Código de barras", "Categoria", "Unidade", "Disponível", "Total físico", "Mínimo", "Preço", ...c ? ["Custo"] : [], "Fornecedor", "Validade mais próxima", "Situação", "Status"], rows().map((p) => {
        const st = status(p);
        return [p.name, p.sku, p.barcode, catName(p.categoryId), p.unit, st.available, st.total, p.minStock, p.price, ...c ? [p.cost ?? ""] : [], supName(p.supplierId), fmtISO(nearestExpiry(p, today())), { sem: "Sem estoque", baixo: "Estoque baixo", ok: "Normal" }[st.level], p.status];
      }));
    };
  }
  function openProduct(id) {
    const p = S.pMap[id];
    if (!p)
      return toast("Produto não encontrado");
    const st = status(p);
    const lots = (p.lots || []).filter((l) => l.qty > 0).sort((a, b) => (a.expiry || "9999").localeCompare(b.expiry || "9999"));
    const mv = S.movements.filter((m) => m.productId === id).slice(0, 25);
    const inPk = S.packages.filter((k) => (k.components || []).some((c) => c.productId === id));
    const cons = consumptionByProduct(S.sales.filter((s) => s.createdAt >= Date.now() - 30 * 86400000))[id];
    const c = canDo("custos");
    const d = drawer(esc(p.name), `${esc(p.sku)}${catName(p.categoryId) ? " · " + esc(catName(p.categoryId)) : ""}`, `
    <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:16px;">${p.status === "inativo" ? '<span class="pill-muted">Inativo</span>' : levelBadge(st.level)}${p.controlsLot ? '<span class="pill-muted">Controla lote</span>' : ""}${p.kind === "kit" ? '<span class="pill">Kit montado</span>' : ""}</div>
    <div class="est-kv">
      <div class="mini-stat"><div class="l">Disponível</div><div class="n">${qty(st.available, p.unit)}</div></div>
      <div class="mini-stat"><div class="l">Mínimo</div><div class="n">${qty(p.minStock || 0, p.unit)}</div></div>
      <div class="mini-stat"><div class="l">Preço</div><div class="n">${brl(p.price)}</div></div>
      ${c ? `<div class="mini-stat"><div class="l">Custo e margem</div><div class="n">${p.cost === null || p.cost === undefined ? "—" : `${brl(p.cost)}${p.price ? " · " + pct((p.price - p.cost) / p.price * 100) : ""}`}</div></div>` : `<div class="mini-stat"><div class="l">Fornecedor</div><div class="n">${esc(supName(p.supplierId) || "—")}</div></div>`}
      <div class="mini-stat"><div class="l">Saiu em 30 dias</div><div class="n">${cons ? qty(cons.avulso + cons.pacote, p.unit) : "—"}</div></div>
      <div class="mini-stat"><div class="l">Código de barras</div><div class="n">${esc(p.barcode || "—")}</div></div>
    </div>
    ${p.description ? `<p style="font-size:13px; color:var(--ink-soft); margin:0 0 14px;">${esc(p.description)}</p>` : ""}
    ${p.kind === "kit" ? `<div class="alert alert-brown" style="margin-bottom:14px;"><div>Componentes: ${esc((p.kitComponents || []).map((x) => `${numF(x.qty)} ${S.pMap[x.productId] ? S.pMap[x.productId].name : "?"}`).join(", "))}. A montagem retira os componentes; a venda do kit baixa só o kit.</div></div>` : ""}
    ${inPk.length ? `<div class="alert alert-sage" style="margin-bottom:14px;"><div>Faz parte de ${inPk.length === 1 ? "um pacote" : inPk.length + " pacotes"}: <strong>${esc(inPk.map((k) => k.name).join(", "))}</strong>. Todos usam este mesmo estoque.</div></div>` : ""}
    <div class="section-title">Lotes em estoque</div>
    ${lots.length ? `<div class="table-wrap" style="margin-bottom:16px;"><table><thead><tr><th>Lote</th><th>Validade</th><th class="est-r">Qtd.</th></tr></thead><tbody>${lots.map((l) => `<tr><td>${esc(l.code || "Sem lote")}</td><td>${l.expiry ? isExpired(l, today()) ? `<span class="badge st-Cancelado">${fmtISO(l.expiry)}</span>` : st.nearLots.includes(l) ? `<span class="badge st-AguardandoConfirmacao">${fmtISO(l.expiry)}</span>` : fmtISO(l.expiry) : "—"}</td><td class="est-r est-num">${qty(l.qty, p.unit)}</td></tr>`).join("")}</tbody></table></div>` : '<div class="hint" style="margin-bottom:16px;">Sem saldo em estoque.</div>'}
    <div class="section-title">Últimas movimentações</div>
    ${mv.length ? `<div class="timeline" style="margin-bottom:16px;">${mv.map((x) => `<div class="tl-item"><div class="tl-date">${fmtD(x.at)}</div><div class="tl-content"><div class="tl-title">${movBadge(x.type)} <span class="est-num ${x.direction < 0 ? "est-neg" : "est-pos-n"}">${x.direction < 0 ? "−" : "+"}${numF(x.qty)}</span></div><div style="color:var(--ink-soft); font-size:12px; margin-top:3px;">Saldo ${numF(x.before)} → ${numF(x.after)} · ${esc(x.byName)}${x.refLabel ? " · " + esc(x.refLabel) : ""}</div></div></div>`).join("")}</div>` : '<div class="hint" style="margin-bottom:16px;">Nenhuma movimentação ainda.</div>'}
    <div class="section-title">Ações</div>
    <div style="display:flex; gap:8px; flex-wrap:wrap;">
      ${canDo("cadastros") ? `<button class="btn btn-primary btn-sm" id="estPe">${ic("edit")} Editar</button>` : ""}
      ${canDo("ajustar") ? `<button class="btn btn-secondary btn-sm" id="estPa">${ic("ajuste")} Ajustar estoque</button>` : ""}
      ${p.kind === "kit" && canDo("ajustar") && p.status === "ativo" ? `<button class="btn btn-secondary btn-sm" id="estPk">${ic("kit")} Montar kits</button>` : ""}
      ${canDo("cadastros") ? `<button class="btn ${p.status === "ativo" ? "btn-danger" : "btn-secondary"} btn-sm" id="estPt">${p.status === "ativo" ? "Inativar" : "Reativar"}</button>` : ""}
    </div>`);
    const on = (i, fn) => {
      const b = d.querySelector("#" + i);
      if (b)
        b.onclick = fn;
    };
    on("estPe", () => {
      closeDrawer();
      openProductForm(id);
    });
    on("estPa", () => {
      closeDrawer();
      openAdjust(id);
    });
    on("estPk", () => {
      closeDrawer();
      openAssemble(id);
    });
    on("estPt", () => {
      const ina = p.status === "ativo";
      const run = async () => {
        try {
          await saveProduct(S.store, ctx(), { ...p, status: ina ? "inativo" : "ativo" });
          hlog2(`${ina ? "inativou" : "reativou"} o produto ${p.name}`);
          closeModal();
          closeDrawer();
          toast(ina ? "Produto inativado" : "Produto reativado");
        } catch (e) {
          toast(e.message);
        }
      };
      if (!ina)
        return run();
      closeDrawer();
      confirmar({ title: `Inativar ${esc(p.name)}?`, text: `O produto deixa de aparecer para venda${inPk.length ? " e os pacotes que usam ele ficam indisponíveis" : ""}. O histórico continua guardado.`, ok: "Inativar", danger: true }, run);
    });
  }
  function openProductForm(id) {
    const p = id ? S.pMap[id] : null;
    const isNew = !p;
    const c = canDo("custos");
    const v = (k) => esc(p ? p[k] ?? "" : "");
    const units = [...new Set([...S.geral.units, ...p ? [p.unit] : []])];
    const kit = p && p.kind === "kit" ? p.kitComponents.map((x) => ({ ...x })) : [];
    const m = modal(isNew ? "Novo produto" : "Editar produto", `<form id="estPf" class="est-g3" novalidate>
    <div class="field full"><label for="pfName">Nome</label><input id="pfName" name="name" value="${v("name")}"></div>
    <div class="field"><label for="pfSku">Código interno</label><input id="pfSku" name="sku" value="${v("sku")}" autocapitalize="characters"></div>
    <div class="field"><label for="pfBar">Código de barras <span style="font-weight:500;">(opcional)</span></label><input id="pfBar" name="barcode" value="${v("barcode")}" inputmode="numeric"></div>
    <div class="field"><label for="pfCat">Categoria</label><select id="pfCat" name="categoryId"><option value="">Sem categoria</option>${S.categories.map((x) => `<option value="${x.id}" ${p && p.categoryId === x.id ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select></div>
    <div class="field full"><label for="pfDesc">Descrição <span style="font-weight:500;">(opcional)</span></label><textarea id="pfDesc" name="description" rows="2" style="min-height:0;">${v("description")}</textarea></div>
    <div class="est-formsec">Estoque e valores</div>
    <div class="field"><label for="pfUnit">Unidade</label><select id="pfUnit" name="unit">${units.map((u) => `<option ${(p ? p.unit : "unidade") === u ? "selected" : ""}>${esc(u)}</option>`).join("")}</select></div>
    <div class="field"><label for="pfMin">Estoque mínimo</label><input id="pfMin" name="minStock" inputmode="decimal" value="${p ? numF(p.minStock) : ""}" placeholder="0"></div>
    <div class="field"><label for="pfSup">Fornecedor</label><select id="pfSup" name="supplierId"><option value="">Nenhum</option>${S.suppliers.map((x) => `<option value="${x.id}" ${p && p.supplierId === x.id ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select></div>
    <div class="field"><label for="pfPrice">Preço de venda avulsa</label><input id="pfPrice" name="price" inputmode="decimal" value="${p ? moneyIn(p.price) : ""}" placeholder="0,00"></div>
    ${c ? `<div class="field"><label for="pfCost">Custo de compra <span style="font-weight:500;">(opcional)</span></label><input id="pfCost" name="cost" inputmode="decimal" value="${p && p.cost !== null && p.cost !== undefined ? moneyIn(p.cost) : ""}" placeholder="0,00"></div>` : ""}
    <div class="field"><label for="pfKind">Tipo</label><select id="pfKind" name="kind"><option value="produto">Produto</option><option value="kit" ${p && p.kind === "kit" ? "selected" : ""}>Kit montado</option></select></div>
    <label class="est-check full"><input type="checkbox" name="controlsLot" ${p && p.controlsLot ? "checked" : ""}> Controla lote e validade</label>
    <div class="full" id="pfKitBox" ${p && p.kind === "kit" ? "" : "hidden"}><div class="est-formsec" style="margin-bottom:8px;">Componentes do kit</div><div class="est-rows" id="pfKitRows"></div><button type="button" class="btn btn-secondary btn-sm" id="pfKitAdd" style="margin-top:8px;">${ic("plus")} Adicionar componente</button></div>
    ${isNew ? `<div class="est-formsec">Estoque inicial <span style="text-transform:none; letter-spacing:0; font-weight:600; color:var(--ink-soft);">(opcional)</span></div>
      <div class="field"><label for="pfIq">Quantidade em estoque</label><input id="pfIq" name="initialQty" inputmode="decimal" placeholder="0"></div>
      <div class="field est-lotf"><label for="pfIl">Lote</label><input id="pfIl" name="initialLot"></div>
      <div class="field est-lotf"><label for="pfIe">Validade</label><input id="pfIe" name="initialExpiry" type="date"></div>` : `<div class="alert alert-sage full"><div>Saldo atual: <strong>${qty(status(p).total, p.unit)}</strong>. Para mudar o saldo, use Ajustar estoque ou registre uma entrada, assim tudo fica no histórico.</div></div>`}
    <div class="full" id="pfErr"></div></form>`, `<button class="btn btn-secondary" data-mclose>Cancelar</button><button class="btn btn-primary" id="pfSave">${ic("check")} Salvar</button>`, { wide: true });
    const f = m.querySelector("#estPf");
    const kitRows = () => {
      m.querySelector("#pfKitRows").innerHTML = kit.map((k, i) => `<div class="est-rowe"><select data-kp="${i}" aria-label="Produto"><option value="">Escolha o produto</option>${S.products.filter((x) => x.id !== id && x.kind !== "kit" && (x.status === "ativo" || x.id === k.productId)).map((x) => `<option value="${x.id}" ${x.id === k.productId ? "selected" : ""}>${esc(x.name)}</option>`).join("")}</select><input data-kq="${i}" inputmode="decimal" value="${k.qty || ""}" placeholder="Qtd." aria-label="Quantidade"><button type="button" class="icon-btn" data-kr="${i}" aria-label="Remover">${ic("trash")}</button></div>`).join("") || '<div class="hint">Nenhum componente.</div>';
      m.querySelectorAll("[data-kp]").forEach((s) => s.onchange = () => kit[s.dataset.kp].productId = s.value);
      m.querySelectorAll("[data-kq]").forEach((s) => s.oninput = () => kit[s.dataset.kq].qty = parseNum(s.value));
      m.querySelectorAll("[data-kr]").forEach((b) => b.onclick = () => {
        kit.splice(b.dataset.kr, 1);
        kitRows();
      });
    };
    kitRows();
    m.querySelector("#pfKitAdd").onclick = () => {
      kit.push({ productId: "", qty: 1 });
      kitRows();
      m.querySelector("#pfKitRows").lastElementChild.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
    f.kind.onchange = () => {
      m.querySelector("#pfKitBox").hidden = f.kind.value !== "kit";
      if (f.kind.value === "kit")
        m.querySelector("#pfKitBox").scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
    const lot = () => m.querySelectorAll(".est-lotf").forEach((x) => x.hidden = !f.controlsLot.checked);
    f.controlsLot.onchange = lot;
    lot();
    f.sku.onblur = () => f.sku.value = normalizeSku(f.sku.value);
    m.querySelector("#pfSave").onclick = async () => {
      const d = Object.fromEntries(new FormData(f));
      const err = (x) => m.querySelector("#pfErr").innerHTML = errBox(esc(x));
      const n = (k) => {
        const x = parseNum(d[k]);
        return Number.isFinite(x) ? x : d[k] ? NaN : "";
      };
      for (const k of ["minStock", "price", "cost", "initialQty"])
        if (Number.isNaN(n(k)))
          return err("Confira os números digitados.");
      if (!String(d.name || "").trim())
        return err("Informe o nome do produto.");
      if (!String(d.sku || "").trim())
        return err("Informe o código interno.");
      const b = m.querySelector("#pfSave");
      b.disabled = true;
      try {
        const nid = await saveProduct(S.store, ctx(), {
          ...p || {},
          id: p ? p.id : undefined,
          name: d.name,
          sku: d.sku,
          barcode: d.barcode,
          categoryId: d.categoryId,
          description: d.description,
          unit: d.unit,
          minStock: n("minStock") || 0,
          price: n("price") || 0,
          cost: c ? n("cost") === "" ? null : n("cost") : p ? p.cost ?? null : null,
          supplierId: d.supplierId,
          status: p ? p.status : "ativo",
          controlsLot: !!d.controlsLot,
          kind: d.kind,
          kitComponents: kit.filter((k) => k.productId),
          initialQty: n("initialQty") || 0,
          initialLot: d.initialLot,
          initialExpiry: d.initialExpiry
        });
        hlog2(`${isNew ? "cadastrou" : "editou"} o produto ${d.name}`);
        closeModal();
        toast(isNew ? "Produto cadastrado" : "Alterações salvas");
        if (isNew)
          setTimeout(() => openProduct(nid), 300);
      } catch (e) {
        b.disabled = false;
        err(e.message);
      }
    };
  }
  function openAssemble(id) {
    const p = S.pMap[id];
    const max = Math.min(...p.kitComponents.map((c) => {
      const x = S.pMap[c.productId];
      return x ? Math.floor(status(x).available / c.qty) : 0;
    }));
    const m = modal(`Montar ${esc(p.name)}`, `<p class="hint" style="margin:0 0 12px;">Os componentes saem do estoque agora e o kit entra pronto. Dá para montar até <strong>${max}</strong>.</p>
    <div class="est-comp" style="margin-bottom:14px;">${p.kitComponents.map((c) => `<div><span>${esc(S.pMap[c.productId] ? S.pMap[c.productId].name : "?")}</span><span>${numF(c.qty)} por kit</span></div>`).join("")}</div>
    <div class="field"><label for="kq">Quantidade de kits</label><input id="kq" inputmode="numeric" value="1"></div>
    <div class="field"><label for="kr">Observação <span style="font-weight:500;">(opcional)</span></label><input id="kr"></div><div id="kerr"></div>`, `<button class="btn btn-secondary" data-mclose>Cancelar</button><button class="btn btn-primary" id="kok">Montar</button>`, { narrow: true });
    m.querySelector("#kok").onclick = async () => {
      try {
        await assembleKit(S.store, ctx(), id, parseNum(m.querySelector("#kq").value), m.querySelector("#kr").value);
        hlog2(`montou kits de ${p.name}`);
        closeModal();
        toast("Kits montados");
      } catch (e) {
        m.querySelector("#kerr").innerHTML = errBox(esc(e.shortages ? "Falta estoque de " + e.shortages.map((s) => s.name).join(", ") : e.message));
      }
    };
  }
  var kf = { q: "", show: "ativo" };
  function renderPacotes() {
    const add = canDo("cadastros") ? `<button class="btn btn-primary" data-new-pk>${ic("plus")} Novo pacote</button>` : "";
    if (!S.packages.length)
      return `<div class="card pad">${empty("Nenhum pacote cadastrado", "Monte pacotes com serviços e produtos do estoque, como consulta com colírio por um preço especial. O colírio sai do mesmo estoque da venda avulsa.", add)}</div>`;
    const t = today();
    const list = S.packages.filter((k) => (kf.show === "todos" || k.status === kf.show) && match(kf.q, k.name, k.description));
    const c = canDo("custos");
    return `<div class="view-head" style="margin-bottom:14px;"><div class="filters" style="margin:0; flex:1;">${searchBox("estKq", "Buscar pacote", kf.q)}${[["ativo", "Ativos"], ["inativo", "Inativos"], ["todos", "Todos"]].map(([k, l]) => `<button class="chip-btn ${kf.show === k ? "on" : ""}" data-ks="${k}">${l}</button>`).join("")}</div>${add}</div>
  ${list.length ? `<div class="est-pk-grid">${list.map((k) => {
      const av = packageAvailability(k, S.pMap, t);
      const cost = packageCost(k, S.pMap);
      const sep = (k.components || []).reduce((s, x) => s + (S.pMap[x.productId] ? S.pMap[x.productId].price * x.qty : 0), 0);
      return `<div class="card pad est-pk ${k.status}" data-est-pk="${k.id}" role="button" tabindex="0">
      <div class="est-cell" style="align-items:flex-start;"><div class="est-thumb pk">${ic("pacote")}</div><div style="flex:1; min-width:0;"><h3>${esc(k.name)}</h3><div class="price">${brl(k.price)}</div></div>${k.status === "inativo" ? '<span class="pill-muted">Inativo</span>' : av === 0 ? '<span class="badge st-Cancelado">Sem estoque</span>' : ""}</div>
      ${k.description ? `<p class="desc">${esc(k.description)}</p>` : ""}
      <ul>${(k.components || []).map((x) => {
        const p = S.pMap[x.productId];
        return `<li>${ic("produto")}<span>${esc(p ? p.name : "Produto removido")}</span><em>${p ? qty(x.qty, p.unit) : ""}</em></li>`;
      }).join("")}${(k.services || []).map((s) => `<li>${ic("servico")}<span>${esc(s.name)}</span><em>serviço</em></li>`).join("")}</ul>
      <div class="est-mini"><div class="mini-stat"><div class="n">${av === Infinity ? "Livre" : av}</div><div class="l">Disponível</div></div>${c ? `<div class="mini-stat"><div class="n">${cost === null ? "—" : brl(cost)}</div><div class="l">Custo</div></div><div class="mini-stat"><div class="n">${cost === null || !k.price ? "—" : pct((k.price - cost) / k.price * 100)}</div><div class="l">Margem</div></div>` : `<div class="mini-stat"><div class="n">${(k.components || []).length}</div><div class="l">Produtos</div></div><div class="mini-stat"><div class="n">${(k.services || []).length}</div><div class="l">Serviços</div></div>`}</div>
      ${sep > 0 ? `<div class="hint" style="margin:0;">Produtos avulsos somam ${brl(sep)}</div>` : ""}
    </div>`;
    }).join("")}</div>` : `<div class="card pad">${empty("Nenhum pacote", "Nenhum pacote com esses filtros.")}</div>`}`;
  }
  function bindPacotes(el) {
    el.querySelectorAll("[data-new-pk]").forEach((b) => b.onclick = () => openPackageForm());
    el.querySelectorAll("[data-est-pk]").forEach((b) => {
      b.onclick = () => openPackageForm(b.dataset.estPk);
      b.onkeydown = (e) => {
        if (e.key === "Enter")
          openPackageForm(b.dataset.estPk);
      };
    });
    el.querySelectorAll("[data-ks]").forEach((b) => b.onclick = () => {
      kf.show = b.dataset.ks;
      rr3();
    });
    const q = el.querySelector("#estKq");
    if (q) {
      let t;
      q.oninput = () => {
        clearTimeout(t);
        t = setTimeout(() => {
          kf.q = q.value;
          rr3();
          const n = document.getElementById("estKq");
          if (n && kf.q) {
            n.focus();
            n.setSelectionRange(n.value.length, n.value.length);
          }
        }, 200);
      };
    }
  }
  function openPackageForm(id) {
    const k = id ? S.kMap[id] : null;
    const edit = canDo("cadastros");
    const comps = k ? (k.components || []).map((x) => ({ ...x })) : [{ productId: "", qty: 1 }];
    const servs = k ? (k.services || []).map((x) => ({ ...x })) : [{ name: "Consulta" }];
    const c = canDo("custos");
    const sold = k ? S.sales.filter((s) => s.items.some((i) => i.type === "pacote" && i.refId === k.id)).length : 0;
    const ro = edit ? "" : "readonly";
    const m = modal(k ? esc(k.name) : "Novo pacote", `<form id="estKf" class="est-g2" novalidate>
    <div class="field"><label for="kfName">Nome do pacote</label><input id="kfName" name="name" value="${esc(k ? k.name : "")}" ${ro}></div>
    <div class="field"><label for="kfPrice">Preço do pacote</label><input id="kfPrice" name="price" inputmode="decimal" value="${k ? moneyIn(k.price) : ""}" placeholder="0,00" ${ro}></div>
    <div class="field full"><label for="kfDesc">Descrição <span style="font-weight:500;">(opcional)</span></label><textarea id="kfDesc" name="description" rows="2" style="min-height:0;" ${ro}>${esc(k ? k.description : "")}</textarea></div>
    <div class="full"><div class="est-formsec" style="margin-bottom:8px;">Serviços <span style="text-transform:none; letter-spacing:0; font-weight:600; color:var(--ink-soft);">(não mexem no estoque)</span></div><div class="est-rows" id="kfS"></div>${edit ? `<button type="button" class="btn btn-secondary btn-sm" id="kfSa" style="margin-top:8px;">${ic("plus")} Adicionar serviço</button>` : ""}</div>
    <div class="full"><div class="est-formsec" style="margin-bottom:8px;">Produtos do estoque</div><div class="est-rows" id="kfP"></div>${edit ? `<button type="button" class="btn btn-secondary btn-sm" id="kfPa" style="margin-top:8px;">${ic("plus")} Adicionar produto</button>` : ""}</div>
    <div class="full est-prev" id="kfPrev"></div>
    ${k ? `<div class="field"><label for="kfSt">Situação</label><select id="kfSt" name="status" ${edit ? "" : "disabled"}><option value="ativo">Ativo</option><option value="inativo" ${k.status === "inativo" ? "selected" : ""}>Inativo</option></select></div>
      <div class="hint" style="align-self:end; margin:0 0 10px;">${sold ? `Vendido em ${sold} venda${sold > 1 ? "s" : ""}. Mudar a composição não altera as vendas já feitas.` : "Ainda não vendido."}</div>` : ""}
    <div class="full" id="kfErr"></div></form>`, edit ? `<button class="btn btn-secondary" data-mclose>Cancelar</button><button class="btn btn-primary" id="kfSave">${ic("check")} Salvar pacote</button>` : '<button class="btn btn-secondary" data-mclose>Fechar</button>', { wide: true });
    const f = m.querySelector("#estKf");
    const opts = (sel) => `<option value="">Escolha o produto</option>${S.products.filter((p) => p.status === "ativo" || p.id === sel).map((p) => `<option value="${p.id}" ${p.id === sel ? "selected" : ""}>${esc(p.name)}</option>`).join("")}`;
    const prev = () => {
      const pk = { components: comps.filter((x) => x.productId && x.qty > 0) };
      const av = packageAvailability(pk, S.pMap, today());
      const cost = packageCost(pk, S.pMap);
      const price = parseNum(f.price.value) || 0;
      const sep = pk.components.reduce((s, x) => s + (S.pMap[x.productId] ? S.pMap[x.productId].price * x.qty : 0), 0);
      m.querySelector("#kfPrev").innerHTML = `<div class="mini-stat"><div class="l">Disponível agora</div><div class="n">${av === Infinity ? "Livre" : av}</div></div>${c ? `<div class="mini-stat"><div class="l">Custo estimado</div><div class="n">${cost === null ? "Falta custo" : brl(cost)}</div></div><div class="mini-stat"><div class="l">Margem estimada</div><div class="n">${cost === null ? "—" : `${brl(price - cost)}${price ? " · " + pct((price - cost) / price * 100) : ""}`}</div></div>` : `<div class="mini-stat"><div class="l">Produtos avulsos</div><div class="n">${brl(sep)}</div></div><div class="mini-stat"><div class="l">Preço do pacote</div><div class="n">${brl(price)}</div></div>`}`;
    };
    const draw = () => {
      m.querySelector("#kfP").innerHTML = comps.map((x, i) => `<div class="est-rowe"><select data-cp="${i}" ${edit ? "" : "disabled"} aria-label="Produto">${opts(x.productId)}</select><input data-cq="${i}" inputmode="decimal" value="${x.qty ? numF(x.qty) : ""}" placeholder="Qtd." ${ro} aria-label="Quantidade">${edit ? `<button type="button" class="icon-btn" data-cr="${i}" aria-label="Remover">${ic("trash")}</button>` : "<span></span>"}</div>`).join("") || '<div class="hint">Nenhum produto.</div>';
      m.querySelector("#kfS").innerHTML = servs.map((x, i) => `<div class="est-rowe" style="grid-template-columns:minmax(0,1fr) 36px;"><input data-sn="${i}" value="${esc(x.name)}" placeholder="Nome do serviço" ${ro} aria-label="Serviço">${edit ? `<button type="button" class="icon-btn" data-sr="${i}" aria-label="Remover">${ic("trash")}</button>` : ""}</div>`).join("") || '<div class="hint">Nenhum serviço.</div>';
      m.querySelectorAll("[data-cp]").forEach((s) => s.onchange = () => {
        comps[s.dataset.cp].productId = s.value;
        prev();
      });
      m.querySelectorAll("[data-cq]").forEach((s) => s.oninput = () => {
        comps[s.dataset.cq].qty = parseNum(s.value) || 0;
        prev();
      });
      m.querySelectorAll("[data-cr]").forEach((b) => b.onclick = () => {
        comps.splice(b.dataset.cr, 1);
        draw();
      });
      m.querySelectorAll("[data-sn]").forEach((s) => s.oninput = () => servs[s.dataset.sn].name = s.value);
      m.querySelectorAll("[data-sr]").forEach((b) => b.onclick = () => {
        servs.splice(b.dataset.sr, 1);
        draw();
      });
      prev();
    };
    draw();
    f.price.oninput = prev;
    if (!edit)
      return;
    m.querySelector("#kfPa").onclick = () => {
      comps.push({ productId: "", qty: 1 });
      draw();
      m.querySelector("#kfP").lastElementChild.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
    m.querySelector("#kfSa").onclick = () => {
      servs.push({ name: "" });
      draw();
      const l = [...m.querySelectorAll("[data-sn]")].pop();
      l.focus();
      l.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };
    m.querySelector("#kfSave").onclick = async () => {
      const d = Object.fromEntries(new FormData(f));
      const price = parseNum(d.price);
      const err = (x) => m.querySelector("#kfErr").innerHTML = errBox(esc(x));
      if (!String(d.name || "").trim())
        return err("Informe o nome do pacote.");
      if (!Number.isFinite(price) || price < 0)
        return err("Informe o preço do pacote.");
      if (comps.some((x) => x.productId && !(x.qty > 0)))
        return err("Informe a quantidade de cada produto.");
      const b = m.querySelector("#kfSave");
      b.disabled = true;
      try {
        await savePackage(S.store, ctx(), { id: k ? k.id : undefined, name: d.name, description: d.description, price, status: d.status || (k ? k.status : "ativo"), components: comps.filter((x) => x.productId), services: servs });
        hlog2(`${k ? "editou" : "criou"} o pacote ${d.name}`);
        closeModal();
        toast(k ? "Pacote atualizado" : "Pacote criado");
      } catch (e) {
        b.disabled = false;
        err(e.message);
      }
    };
  }

  // src/v-relatorios.js
  var rf = { r: monthRange(0), est: "todos" };
  var exp = {};
  var rr4 = () => render();
  var card = (title, key, inner, extra = "") => `<div class="card pad" style="margin-bottom:16px;"><div class="est-card-h"><div class="section-title">${title}</div><div style="display:flex; gap:8px; flex-wrap:wrap; align-items:center;">${extra}${key ? `<button class="btn btn-secondary btn-sm" data-csv="${key}">${ic("download")} CSV</button>` : ""}</div></div>${inner}</div>`;
  var table = (heads, rows) => rows.length ? `<div class="table-wrap"><table><thead><tr>${heads.map((h) => `<th class="${h[1] || ""}">${h[0]}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table></div>` : '<div class="hint">Sem dados no período.</div>';
  var pSales = () => S.sales.filter((s) => inRange(s.createdAt, rf.r));
  function renderRelatorios() {
    const labels = { estoque: "Estoque", vendas: "Vendas", consumo: "Consumo", ...canDo("custos") ? { financeiro: "Financeiro" } : {} };
    let tab = ui.nested.relatorios;
    if (!labels[tab])
      tab = "estoque";
    const body = { estoque: rEstoque, vendas: rVendas, consumo: rConsumo, financeiro: rFin }[tab]();
    return `${nestedHTML("relatorios", labels)}<div class="card pad" style="margin-bottom:16px;">${periodHTML(rf.r, "rel")}</div>${body}`;
  }
  function bindRelatorios(el) {
    bindPeriod(el.querySelector("[data-period=rel]"), rf.r, rr4);
    el.querySelectorAll("[data-csv]").forEach((b) => b.onclick = () => {
      const x = exp[b.dataset.csv];
      if (x)
        downloadCSV(`${b.dataset.csv}_${rf.r.from}_${rf.r.to}`, x.h, x.rows);
    });
    el.querySelectorAll("[data-est-f]").forEach((b) => b.onclick = () => {
      rf.est = b.dataset.estF;
      rr4();
    });
  }
  function rEstoque() {
    const c = canDo("custos");
    const al = computeAlerts();
    let prods = activeProducts();
    if (rf.est === "baixo")
      prods = prods.filter((p) => status(p).level !== "ok");
    if (rf.est === "sem")
      prods = prods.filter((p) => status(p).level === "sem");
    const chips = [["todos", "Todos"], ["baixo", "Abaixo do mínimo"], ["sem", "Sem estoque"]].map(([k, l]) => `<button class="chip-btn ${rf.est === k ? "on" : ""}" data-est-f="${k}">${l}</button>`).join("");
    let tv = 0;
    const rows = prods.map((p) => {
      const st = status(p);
      const val = c && p.cost !== null && p.cost !== undefined ? st.total * p.cost : null;
      if (val)
        tv += val;
      return { p, st, val };
    });
    exp.posicao = { h: ["Produto", "Código", "Categoria", "Unidade", "Disponível", "Vencido", "Total físico", "Mínimo", ...c ? ["Custo unitário", "Valor em estoque"] : [], "Situação"], rows: rows.map(({ p, st, val }) => [p.name, p.sku, catName(p.categoryId), p.unit, st.available, st.total - st.available, st.total, p.minStock || 0, ...c ? [p.cost ?? "", val ?? ""] : [], { sem: "Sem estoque", baixo: "Estoque baixo", ok: "Normal" }[st.level]]) };
    const venc = [...al.vencidos.map((x) => ({ ...x, v: true })), ...al.vencendo];
    exp.validade = { h: ["Produto", "Lote", "Validade", "Quantidade", "Situação"], rows: venc.map(({ p, l, v }) => [p.name, l.code, fmtISO(l.expiry), l.qty, v ? "Vencido" : "Vence em breve"]) };
    const mv = {};
    for (const m of S.movements) {
      if (!inRange(m.at, rf.r))
        continue;
      const o = mv[m.productId] || (mv[m.productId] = { name: m.productName, unit: m.unit, ent: 0, venda: 0, outras: 0, volta: 0 });
      if (m.type === "entrada" || m.type === "estoque_inicial")
        o.ent += m.qty;
      else if (m.type.startsWith("venda"))
        o.venda += m.qty;
      else if (m.type === "estorno" || m.type === "devolucao")
        o.volta += m.qty;
      else
        o[m.direction > 0 ? "ent" : "outras"] += m.qty;
    }
    const mr = Object.entries(mv).sort((a, b) => a[1].name.localeCompare(b[1].name));
    exp.es = { h: ["Produto", "Unidade", "Entradas", "Saídas por venda", "Devoluções e estornos", "Outras saídas", "Saldo atual"], rows: mr.map(([id, o]) => [o.name, o.unit, o.ent, o.venda, o.volta, o.outras, S.pMap[id] ? sumLots(S.pMap[id].lots) : ""]) };
    return card("Posição atual do estoque", "posicao", table([["Produto"], ["Disponível", "est-r"], ["Vencido", "est-r"], ["Mínimo", "est-r"], ...c ? [["Custo un.", "est-r"], ["Valor em estoque", "est-r"]] : [], ["Situação"]], rows.map(({ p, st, val }) => `<tr><td><div class="est-two"><b>${esc(p.name)}</b><small>${esc(p.sku)}</small></div></td><td class="est-r est-num">${qty(st.available, p.unit)}</td><td class="est-r est-num">${st.total - st.available ? numF(st.total - st.available) : "—"}</td><td class="est-r est-num">${numF(p.minStock || 0)}</td>${c ? `<td class="est-r est-num">${p.cost === null || p.cost === undefined ? "—" : brl(p.cost)}</td><td class="est-r est-num">${val === null ? "—" : brl(val)}</td>` : ""}<td>${levelBadge(st.level)}</td></tr>`)) + (c ? `<div class="hint">Valor total em estoque, pelo custo: <strong style="color:var(--ink);">${brl(tv)}</strong></div>` : ""), chips) + card(`Validade: vencidos e próximos ${S.geral.expiryDays} dias`, "validade", table([["Produto"], ["Lote"], ["Validade"], ["Quantidade", "est-r"], ["Situação"]], venc.map(({ p, l, v }) => `<tr><td>${esc(p.name)}</td><td>${esc(l.code || "—")}</td><td class="est-num">${fmtISO(l.expiry)}</td><td class="est-r est-num">${qty(l.qty, p.unit)}</td><td>${v ? '<span class="badge st-Cancelado">Vencido</span>' : '<span class="badge st-AguardandoConfirmacao">Vence em breve</span>'}</td></tr>`))) + card(`Entradas e saídas em ${periodLabel(rf.r)}`, "es", table([["Produto"], ["Entradas", "est-r"], ["Saídas por venda", "est-r"], ["Devoluções e estornos", "est-r"], ["Outras saídas", "est-r"], ["Saldo atual", "est-r"]], mr.map(([id, o]) => `<tr><td>${esc(o.name)}</td><td class="est-r est-num est-pos-n">${o.ent ? "+" + numF(o.ent) : "—"}</td><td class="est-r est-num est-neg">${o.venda ? "−" + numF(o.venda) : "—"}</td><td class="est-r est-num">${o.volta ? "+" + numF(o.volta) : "—"}</td><td class="est-r est-num">${o.outras ? "−" + numF(o.outras) : "—"}</td><td class="est-r est-num">${S.pMap[id] ? qty(sumLots(S.pMap[id].lots), o.unit) : "—"}</td></tr>`)));
  }
  function rVendas() {
    const sales = pSales();
    const ok = sales.filter((s) => s.status !== "cancelada");
    const gross = ok.reduce((a, s) => a + s.gross, 0), disc = ok.reduce((a, s) => a + s.discount, 0), ref = ok.reduce((a, s) => a + (s.refunded || 0), 0), net = ok.reduce((a, s) => a + saleNet(s), 0);
    const canc = sales.length - ok.length;
    const byDay = {};
    for (const s of ok) {
      const d = todayISO(s.createdAt);
      const o = byDay[d] || (byDay[d] = { n: 0, v: 0 });
      o.n++;
      o.v += saleNet(s);
    }
    const days = Object.entries(byDay).sort((a, b) => b[0].localeCompare(a[0]));
    const prod = {}, pk = {};
    for (const s of ok) {
      const f = s.gross > 0 ? s.total / s.gross : 0;
      for (const it of s.items) {
        const q = it.qty - ((s.returnedByKey || {})[it.key] || 0);
        if (q <= 0)
          continue;
        const map = it.type === "produto" ? prod : pk;
        const o = map[it.refId] || (map[it.refId] = { name: it.name, unit: it.unit, q: 0, v: 0 });
        o.q += q;
        o.v += q * it.unitPrice * f;
      }
    }
    const pr = Object.values(prod).sort((a, b) => b.q - a.q), pa = Object.values(pk).sort((a, b) => b.q - a.q);
    exp.dias = { h: ["Data", "Vendas", "Valor líquido"], rows: days.map(([d, o]) => [fmtISO(d), o.n, o.v]) };
    exp.produtos = { h: ["Produto", "Unidade", "Quantidade", "Faturamento"], rows: pr.map((o) => [o.name, o.unit, o.q, o.v]) };
    exp.pacotes = { h: ["Pacote", "Quantidade", "Faturamento"], rows: pa.map((o) => [o.name, o.q, o.v]) };
    const m = (v) => `<span class="est-money">${brl(v)}</span>`;
    return `<div class="grid g3" style="margin-bottom:16px;">${stat("Vendas", ok.length, canc ? `${canc} cancelada${canc > 1 ? "s" : ""}` : "no período")}${stat("Faturamento bruto", m(gross), `descontos ${brl(disc)} · devoluções ${brl(ref)}`)}${stat("Faturamento líquido", m(net), `ticket médio ${brl(ok.length ? net / ok.length : 0)}`)}</div>
    <div class="est-row2b">${card("Produtos mais vendidos (avulsos)", "produtos", table([["Produto"], ["Quantidade", "est-r"], ["Faturamento", "est-r"]], pr.map((o) => `<tr><td>${esc(o.name)}</td><td class="est-r est-num">${qty(o.q, o.unit)}</td><td class="est-r est-num">${brl(o.v)}</td></tr>`)))}
    ${card("Pacotes mais vendidos", "pacotes", table([["Pacote"], ["Quantidade", "est-r"], ["Faturamento", "est-r"]], pa.map((o) => `<tr><td>${esc(o.name)}</td><td class="est-r est-num">${numF(o.q)}</td><td class="est-r est-num">${brl(o.v)}</td></tr>`)))}</div>
    ${card("Vendas por dia", "dias", table([["Data"], ["Vendas", "est-r"], ["Valor líquido", "est-r"]], days.map(([d, o]) => `<tr><td class="est-num">${fmtISO(d)}</td><td class="est-r est-num">${o.n}</td><td class="est-r est-num">${brl(o.v)}</td></tr>`)))}`;
  }
  function rConsumo() {
    const sales = pSales();
    const rows = Object.entries(consumptionByProduct(sales)).map(([id, c]) => ({ id, ...c, total: c.avulso + c.pacote })).sort((a, b) => b.total - a.total);
    const byPk = {};
    for (const s of sales) {
      if (s.status === "cancelada")
        continue;
      for (const it of s.items) {
        if (it.type !== "pacote")
          continue;
        const q = it.qty - ((s.returnedByKey || {})[it.key] || 0);
        if (q <= 0)
          continue;
        for (const c of it.composition) {
          const k = it.name + "|" + c.productId;
          const o = byPk[k] || (byPk[k] = { pk: it.name, name: c.name, unit: c.unit, q: 0, n: 0 });
          o.q += q * c.qty;
          o.n += q;
        }
      }
    }
    const pkRows = Object.values(byPk).sort((a, b) => a.pk.localeCompare(b.pk) || b.q - a.q);
    exp.consumo = { h: ["Produto", "Unidade", "Vendas avulsas", "Em pacotes", "Total consumido"], rows: rows.map((r) => [r.name, r.unit, r.avulso, r.pacote, r.total]) };
    exp.consumopacotes = { h: ["Pacote", "Produto", "Unidade", "Pacotes vendidos", "Quantidade consumida"], rows: pkRows.map((o) => [o.pk, o.name, o.unit, o.n, o.q]) };
    return card(`Consumo por produto em ${periodLabel(rf.r)}`, "consumo", table([["Produto"], ["Avulso", "est-r"], ["Em pacotes", "est-r"], ["Total", "est-r"]], rows.map((r) => `<tr><td>${esc(r.name)}</td><td class="est-r est-num">${numF(r.avulso)}</td><td class="est-r est-num">${numF(r.pacote)}</td><td class="est-r est-num"><strong>${qty(r.total, r.unit)}</strong></td></tr>`))) + card("Produtos usados nos pacotes vendidos", "consumopacotes", table([["Pacote"], ["Produto"], ["Pacotes vendidos", "est-r"], ["Consumido", "est-r"]], pkRows.map((o) => `<tr><td>${esc(o.pk)}</td><td>${esc(o.name)}</td><td class="est-r est-num">${numF(o.n)}</td><td class="est-r est-num">${qty(o.q, o.unit)}</td></tr>`)));
  }
  function rFin() {
    const ok = pSales().filter((s) => s.status !== "cancelada");
    const gross = ok.reduce((a, s) => a + s.gross, 0), disc = ok.reduce((a, s) => a + s.discount, 0), ref = ok.reduce((a, s) => a + (s.refunded || 0), 0), net = ok.reduce((a, s) => a + saleNet(s), 0);
    let cmv = 0;
    const noCost = new Set;
    for (const s of ok)
      for (const c of s.consumption) {
        const q = c.lots.reduce((a, l) => a + l.qty, 0);
        if (!q)
          continue;
        const cost = c.cost ?? (S.pMap[c.productId] ? S.pMap[c.productId].cost : null);
        if (cost === null || cost === undefined)
          noCost.add(c.name);
        else
          cmv += q * cost;
      }
    const buys = S.entries.filter((e) => inRange(e.at, rf.r)).reduce((a, e) => a + (e.total || 0), 0);
    const margin = net - cmv;
    const rows = [["Faturamento bruto", gross], ["Descontos concedidos", -disc], ["Devoluções", -ref], ["Faturamento líquido", net, 1], ["Custo dos produtos vendidos", -cmv], ["Margem estimada", margin, 1]];
    exp.financeiro = { h: ["Indicador", "Valor"], rows: [...rows.map((r) => [r[0], r[1]]), ["Compras de mercadoria no período", buys]] };
    return card(`Resultado de ${periodLabel(rf.r)}`, "financeiro", `<div class="table-wrap"><table><tbody>${rows.map(([l, v, b]) => `<tr><td>${b ? `<strong>${l}</strong>` : l}</td><td class="est-r est-num">${b ? `<strong>${brl(v)}</strong>` : brl(v)}</td></tr>`).join("")}
    <tr><td>Margem sobre o faturamento líquido</td><td class="est-r est-num">${net ? pct(margin / net * 100) : "—"}</td></tr><tr><td>Compras de mercadoria no período</td><td class="est-r est-num">${brl(buys)}</td></tr></tbody></table></div>
    <div class="alert alert-brown" style="margin-top:12px;"><div>Faturamento é o valor vendido. A margem estimada só desconta o custo dos produtos; não é lucro, porque não inclui salários, aluguel, impostos e outras despesas.${noCost.size ? `<br>Sem custo cadastrado, ficaram fora da conta: ${esc([...noCost].join(", "))}.` : ""}</div></div>`);
  }

  // src/v-config.js
  var rr5 = () => render();
  var af = { q: "" };
  var hlog3 = (t) => {
    try {
      logAction(t);
      saveDB();
    } catch (e) {}
  };
  var audit2 = (t, action, details) => t.set("audit", S.store.newId("audit"), { at: Date.now(), by: ctx().user.uid, byName: ctx().user.name, action, details });
  function renderConfig() {
    const labels = { perfis: "Perfis e permissões", ...canDo("cadastros") ? { categorias: "Categorias" } : {}, ...isAdmin() ? { preferencias: "Preferências", auditoria: "Auditoria", backup: "Backup" } : {} };
    let tab = ui.nested.configuracoes;
    if (!labels[tab])
      tab = "perfis";
    return nestedHTML("configuracoes", labels) + { perfis: rPerfis, categorias: rCats, preferencias: rPref, auditoria: rAudit, backup: rBackup }[tab]();
  }
  function rPerfis() {
    const emails = [...new Set([...authorizedEmails(), ...Object.keys(S.perfis && S.perfis.emails || {})])];
    const adm = isAdmin();
    return `<div class="card pad" style="margin-bottom:16px;">
    <div class="section-title">Quem pode fazer o quê no estoque</div>
    <div class="hint" style="margin:-6px 0 12px;">O perfil vale para a conta Google usada no login. ${S.perfis ? "" : "Enquanto ninguém salvar os perfis, todas as contas autorizadas têm acesso completo."} Você está entrando como <strong>${esc(myEmail())}</strong> (${ROLES[roleOf(myEmail())]}).</div>
    <div class="table-wrap"><table><thead><tr><th>Conta Google</th><th>Perfil no estoque</th></tr></thead><tbody>
    ${emails.map((e) => `<tr><td>${esc(e)}${e === myEmail() ? ' <span class="pill-muted">você</span>' : ""}</td><td><select data-role="${esc(e)}" ${adm ? "" : "disabled"} style="max-width:220px;">${Object.entries(ROLES).map(([k, l]) => `<option value="${k}" ${roleOf(e) === k ? "selected" : ""}>${l}</option>`).join("")}</select></td></tr>`).join("")}
    </tbody></table></div>
  </div>
  <div class="card pad">
    <div class="section-title">Permissões de cada perfil</div>
    <div class="hint" style="margin:-6px 0 12px;">O administrador tem acesso completo. As regras também valem no servidor: quem não tem permissão não consegue gravar.</div>
    <div class="table-wrap"><table class="est-perm"><thead><tr><th>Permissão</th><th>Gerente</th><th>Funcionário</th></tr></thead><tbody>
    ${Object.entries(PERMS).map(([k, l]) => `<tr><td>${l}</td>${["gerente", "funcionario"].map((r) => `<td><label class="est-switch"><input type="checkbox" data-perm="${r}.${k}" ${((S.perms || {})[r] || {})[k] ? "checked" : ""} ${adm ? "" : "disabled"} aria-label="${l} para ${ROLES[r]}"><i></i></label></td>`).join("")}</tr>`).join("")}
    </tbody></table></div>
    ${adm ? `<div style="display:flex; justify-content:flex-end; gap:10px; margin-top:14px; flex-wrap:wrap;"><button class="btn btn-secondary" id="cReset">Voltar ao padrão</button><button class="btn btn-primary" id="cSave">${ic("check")} Salvar perfis e permissões</button></div>` : '<div class="hint" style="margin-top:12px;">Só o administrador altera perfis e permissões.</div>'}
  </div>`;
  }
  function rCats() {
    return `<div class="card pad"><div class="est-card-h"><div class="section-title">Categorias de produtos</div><button class="btn btn-primary btn-sm" id="cNew">${ic("plus")} Nova categoria</button></div>
    ${S.categories.length ? `<div class="est-list">${S.categories.map((c) => {
      const n = S.products.filter((p) => p.categoryId === c.id).length;
      return `<div class="est-li click" data-cat="${c.id}"><div class="est-thumb">${ic("tag")}</div><div class="grow"><b>${esc(c.name)}</b><small>${n} produto${n === 1 ? "" : "s"}</small></div>${ic("chevron")}</div>`;
    }).join("")}</div>` : empty("Nenhuma categoria", "Categorias ajudam a filtrar os produtos.")}</div>`;
  }
  function rPref() {
    const g = S.geral;
    return `<div class="card pad"><div class="est-g2">
    <div class="field"><label for="gExp">Avisar vencimento com quantos dias</label><input id="gExp" inputmode="numeric" value="${g.expiryDays}"></div>
    <div class="field"><label for="gCons">Dias de saída usados na reposição sugerida</label><input id="gCons" inputmode="numeric" value="${g.consumoDias}"></div>
    <div class="field full"><label for="gUnits">Unidades de medida <span style="font-weight:500;">(uma por linha)</span></label><textarea id="gUnits" rows="7">${esc(g.units.join(`
`))}</textarea></div>
    <div class="full hint">As formas de pagamento são as mesmas das notas fiscais.</div>
    <div class="full" style="display:flex; justify-content:flex-end;"><button class="btn btn-primary" id="gSave">${ic("check")} Salvar</button></div></div></div>`;
  }
  function rAudit() {
    const rows = S.audit.filter((a) => match(af.q, a.byName, a.action, a.details));
    return `<div class="card pad"><div class="filters">${searchBox("auQ", "Buscar no registro", af.q)}</div>
    ${rows.length ? `<div class="table-wrap" data-keep="aud"><table><thead><tr><th>Data e hora</th><th>Quem</th><th>Ação</th><th>Detalhes</th></tr></thead><tbody>${rows.slice(0, 400).map((a) => `<tr><td class="est-num">${fmtDT(a.at)}</td><td>${esc(a.byName)}</td><td><span class="pill-muted">${esc(a.action.replace(/_/g, " "))}</span></td><td style="max-width:520px;">${esc(a.details)}</td></tr>`).join("")}</tbody></table></div>` : '<div class="hint">Nenhum registro.</div>'}</div>`;
  }
  function rBackup() {
    return `<div class="card pad"><div class="section-title">Backup do estoque</div>
    <p style="font-size:13.5px; color:var(--ink-soft); margin:0 0 14px;">Baixa um arquivo com produtos, pacotes, vendas, movimentações e cadastros do estoque. O backup geral do sistema (Configurações) continua cobrindo tutores, agenda e notas.</p>
    <button class="btn btn-primary" id="bkp">${ic("download")} Baixar backup do estoque</button></div>`;
  }
  function bindConfig(el) {
    const on = (id, fn) => {
      const x = el.querySelector("#" + id);
      if (x)
        x.onclick = fn;
    };
    const savePerm = async (perms, emails) => {
      try {
        await S.store.tx(async (t) => {
          t.set("config", "permissoes", perms);
          if (emails)
            t.set("config", "perfis", { emails });
          audit2(t, "permissoes", "Perfis e permissões do estoque alterados");
        });
        hlog3("alterou perfis e permissões do estoque");
        toast("Perfis e permissões salvos");
      } catch (e) {
        toast(e.message);
      }
    };
    on("cSave", () => {
      const perms = { gerente: {}, funcionario: {} };
      el.querySelectorAll("[data-perm]").forEach((i) => {
        const [r, k] = i.dataset.perm.split(".");
        perms[r][k] = i.checked;
      });
      const emails = {};
      el.querySelectorAll("[data-role]").forEach((s) => emails[s.dataset.role] = s.value);
      if (emails[myEmail()] !== "admin")
        return toast("Mantenha sua própria conta como administrador para não perder o acesso.");
      savePerm(perms, emails);
    });
    on("cReset", () => confirmar({ title: "Voltar ao padrão?", text: "As permissões de Gerente e Funcionário voltam à configuração inicial. Os perfis das contas continuam como estão.", ok: "Voltar ao padrão" }, () => {
      closeModal();
      savePerm(DEFAULT_PERMS, null);
    }));
    on("cNew", () => openCat());
    el.querySelectorAll("[data-cat]").forEach((x) => x.onclick = () => openCat(x.dataset.cat));
    on("gSave", async () => {
      const exp = Math.round(parseNum(el.querySelector("#gExp").value)), cd = Math.round(parseNum(el.querySelector("#gCons").value));
      if (!(exp > 0) || !(cd > 0))
        return toast("Informe números de dias válidos");
      const units = [...new Set(el.querySelector("#gUnits").value.split(`
`).map((x) => x.trim()).filter(Boolean))];
      if (!units.length)
        return toast("Deixe pelo menos uma unidade");
      try {
        await S.store.tx(async (t) => {
          t.set("config", "geral", { ...DEFAULT_GERAL, expiryDays: exp, consumoDias: cd, units });
          audit2(t, "preferencias", "Preferências do estoque alteradas");
        });
        toast("Preferências salvas");
      } catch (e) {
        toast(e.message);
      }
    });
    const aq = el.querySelector("#auQ");
    if (aq) {
      let t;
      aq.oninput = () => {
        clearTimeout(t);
        t = setTimeout(() => {
          af.q = aq.value;
          rr5();
          const i = document.getElementById("auQ");
          if (i && af.q) {
            i.focus();
            i.setSelectionRange(i.value.length, i.value.length);
          }
        }, 250);
      };
    }
    on("bkp", () => {
      const data = { sistema: "Olhatta · Estoque", geradoEm: new Date().toISOString(), por: myEmail() };
      for (const k of ["products", "packages", "suppliers", "categories", "sales", "movements", "entries", "adjustments", "audit"])
        data[k] = S[k];
      data.config = { perfis: S.perfis, permissoes: S.perms, geral: S.geral };
      downloadBlob(`backup-olhatta-estoque-${new Date().toISOString().slice(0, 10)}.json`, new Blob([JSON.stringify(data, null, 1)], { type: "application/json" }));
      toast("Backup baixado");
    });
  }
  function openCat(id) {
    const c = id ? S.cMap[id] : null;
    const used = c ? S.products.filter((p) => p.categoryId === c.id).length : 0;
    const m = modal(c ? "Editar categoria" : "Nova categoria", `<div class="field" style="margin:0;"><label for="cn">Nome</label><input id="cn" value="${esc(c ? c.name : "")}"></div><div id="cErr"></div>`, `${c && !used ? `<button class="btn btn-danger" id="cDel" style="margin-right:auto;">${ic("trash")} Excluir</button>` : ""}<button class="btn btn-secondary" data-mclose>Cancelar</button><button class="btn btn-primary" id="cOk">Salvar</button>`, { narrow: true });
    m.querySelector("#cOk").onclick = async () => {
      const name = m.querySelector("#cn").value.trim();
      if (!name)
        return m.querySelector("#cErr").innerHTML = errBox("Informe o nome.");
      if (S.categories.some((x) => x.id !== id && x.name.toLowerCase() === name.toLowerCase()))
        return m.querySelector("#cErr").innerHTML = errBox("Já existe uma categoria com esse nome.");
      try {
        await saveSimple(S.store, ctx(), "categories", { id, name }, ["name"], "categoria");
        closeModal();
        toast("Categoria salva");
      } catch (e) {
        m.querySelector("#cErr").innerHTML = errBox(esc(e.message));
      }
    };
    const d = m.querySelector("#cDel");
    if (d)
      d.onclick = async () => {
        try {
          await S.store.tx(async (t) => {
            t.delete("categories", id);
            audit2(t, "categoria_excluida", c.name);
          });
          closeModal();
          toast("Categoria excluída");
        } catch (e) {
          toast(e.message);
        }
      };
  }

  // src/main.js
  var VIEWS_EST = {
    painel: [renderPainel, bindPainel],
    vender: [renderVender, bindVender],
    vendas: [renderVendas, bindVendas],
    produtos: [renderProdutos, bindProdutos],
    pacotes: [renderPacotes, bindPacotes],
    reposicao: [renderReposicao, bindReposicao],
    entradas: [renderEntradas, bindEntradas],
    ajustes: [renderAjustes, bindAjustes],
    movimentacoes: [renderMovimentacoes, bindMovimentacoes],
    fornecedores: [renderFornecedores, bindFornecedores],
    relatorios: [renderRelatorios, bindRelatorios],
    configuracoes: [renderConfig, bindConfig]
  };
  var st = document.createElement("style");
  st.id = "estoque-css";
  st.textContent = CSS;
  document.head.appendChild(st);
  ICONS.estoque = ic("estoque");
  if (!VIEWS.some((v) => v.id === "estoque")) {
    const i = VIEWS.findIndex((v) => v.id === "notasfiscais");
    VIEWS.splice(i >= 0 ? i + 1 : VIEWS.length, 0, { id: "estoque", label: "Estoque", icon: "estoque", sub: "Produtos, pacotes, vendas e reposição" });
  }
  ROTA_SUB.estoque = { get: routeGet, set: routeSet };
  function estoqueHTML() {
    if (!ready())
      return tabsHTML() + loadingHTML();
    const sub = SUBS.find((s) => s.id === ui.sub);
    if (sub && sub.perm && !canDo(sub.perm))
      return tabsHTML() + deniedHTML();
    return tabsHTML() + VIEWS_EST[ui.sub][0]();
  }
  function bindEstoque(view) {
    view.querySelectorAll("[data-est-sub]").forEach((b) => b.onclick = () => estGo(b.dataset.estSub));
    view.querySelectorAll("[data-est-nest]").forEach((b) => b.onclick = () => {
      const [s, n] = b.dataset.estNest.split(":");
      ui.nested[s] = n;
      render();
    });
    const on = view.querySelector(".est-tab.on");
    if (on)
      on.scrollIntoView({ block: "nearest", inline: "nearest" });
    if (ready())
      VIEWS_EST[ui.sub][1](view);
  }
  var _render = window.render;
  window.render = function() {
    if (state.view !== "estoque") {
      _render();
      if (state.view === "dashboard")
        bindDashCard();
      return;
    }
    const view = document.getElementById("view");
    const keep = {};
    view.querySelectorAll("[data-keep]").forEach((e) => keep[e.dataset.keep] = [e.scrollTop, e.scrollLeft]);
    const y = window.scrollY;
    view.innerHTML = estoqueHTML();
    renderNav();
    attachViewHandlers();
    bindEstoque(view);
    try {
      renderUserSelect();
    } catch (e) {}
    view.querySelectorAll("[data-keep]").forEach((e) => {
      const k = keep[e.dataset.keep];
      if (k) {
        e.scrollTop = k[0];
        e.scrollLeft = k[1];
      }
    });
    if (Math.abs(window.scrollY - y) > 2)
      window.scrollTo(0, y);
    sincronizarRota();
    atualizarTituloAba();
  };
  var _titulo = window.atualizarTituloAba;
  window.atualizarTituloAba = function() {
    if (state.view === "estoque") {
      document.title = `${ui.sub === "painel" ? "Estoque" : subLabel()} · Olhatta`;
      return;
    }
    _titulo();
  };
  var _badge = window.navBadge;
  window.navBadge = function(id) {
    if (id === "estoque") {
      const n = ready() ? computeAlerts().urgent : 0;
      return n ? `<span class="nav-badge">${n}</span>` : "";
    }
    return _badge(id);
  };
  var pend = false;
  var tmr = 0;
  function refresh() {
    clearTimeout(tmr);
    tmr = setTimeout(() => {
      if (!document.getElementById("view") || document.getElementById("app").classList.contains("app-hidden"))
        return;
      const a = document.activeElement;
      if (a && document.getElementById("view").contains(a) && /INPUT|TEXTAREA|SELECT/.test(a.tagName)) {
        pend = true;
        renderNav();
        return;
      }
      if (state.view === "estoque" || state.view === "dashboard")
        render();
      else
        renderNav();
    }, 60);
  }
  document.addEventListener("focusout", () => setTimeout(() => {
    if (!pend)
      return;
    const a = document.activeElement;
    if (a && document.getElementById("view").contains(a) && /INPUT|TEXTAREA|SELECT/.test(a.tagName))
      return;
    pend = false;
    if (state.view === "estoque" || state.view === "dashboard")
      render();
  }, 260));
  var unsubs = [];
  function startData() {
    if (S.started)
      return;
    S.started = true;
    S.store = createCompatStore();
    const st2 = S.store;
    const since = Date.now() - 400 * 86400000;
    const onErr = (e) => {
      console.error("Estoque:", e);
      if (e && e.code === "permission-denied")
        toast("Estoque: o Firebase recusou o acesso. Confira se as regras novas foram publicadas.");
    };
    const set = (key, sortFn) => (rows) => {
      S[key] = sortFn ? rows.sort(sortFn) : rows;
      S.loaded[key] = true;
      reindex();
      refresh();
    };
    const desc = (f) => (a, b) => (b[f] || 0) - (a[f] || 0);
    const byName = (a, b) => String(a.name).localeCompare(String(b.name), "pt-BR");
    unsubs = [
      st2.watchDoc("config", "perfis", (d) => {
        S.perfis = d;
        refresh();
      }, onErr),
      st2.watchDoc("config", "permissoes", (d) => {
        const { id, ...r } = d || {};
        S.perms = d ? { ...DEFAULT_PERMS, ...r } : DEFAULT_PERMS;
        refresh();
      }, onErr),
      st2.watchDoc("config", "geral", (d) => {
        const { id, ...r } = d || {};
        S.geral = { ...DEFAULT_GERAL, ...r };
        refresh();
      }, onErr),
      st2.watch("products", set("products", byName), {}, onErr),
      st2.watch("packages", set("packages", byName), {}, onErr),
      st2.watch("suppliers", set("suppliers", byName), {}, onErr),
      st2.watch("categories", set("categories", byName), {}, onErr),
      st2.watch("sales", set("sales", desc("createdAt")), { field: "createdAt", since, orderBy: "createdAt" }, onErr),
      st2.watch("movements", set("movements", desc("at")), { field: "at", since, orderBy: "at" }, onErr),
      st2.watch("entries", set("entries", desc("at")), { orderBy: "at", dir: "desc", limit: 400 }, onErr),
      st2.watch("adjustments", set("adjustments", desc("at")), { orderBy: "at", dir: "desc", limit: 400 }, onErr),
      st2.watch("audit", set("audit", desc("at")), { orderBy: "at", dir: "desc", limit: 800 }, onErr)
    ];
  }
  function stopData() {
    unsubs.forEach((f) => f && f());
    unsubs = [];
    S.started = false;
    S.loaded = {};
  }
  auth.onAuthStateChanged((u) => {
    if (u && u.email && authorizedEmails().includes(u.email.toLowerCase()))
      startData();
    else
      stopData();
  });
  document.addEventListener("click", (e) => {
    const g = e.target.closest("[data-est-go]");
    const p = e.target.closest("[data-est-prod]");
    const s = e.target.closest("[data-est-sale]");
    const nv = e.target.closest("[data-est-nova-venda]");
    if (!g && !p && !s && !nv)
      return;
    e.stopPropagation();
    if (g) {
      const [sub, nest] = g.dataset.estGo.split("-");
      closeModal();
      closeDrawer();
      if (sub === "vendas" && g.dataset.estP)
        setHistPeriod(g.dataset.estP);
      estGo(sub, nest);
    } else if (p) {
      closeModal();
      openProduct(p.dataset.estProd);
    } else if (s) {
      closeModal();
      openSale(s.dataset.estSale);
    } else if (nv) {
      const [t, a, ag] = nv.dataset.estNovaVenda.split("|");
      startSale({ tutorId: t, animalId: a, agendamentoId: ag });
    }
  }, true);
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ")
      return;
    const g = e.target.closest && e.target.closest("[data-est-go][role=button]");
    if (g) {
      e.preventDefault();
      g.click();
    }
  });
  function dashCard() {
    if (!ready())
      return "";
    const al = computeAlerts();
    const sm = salesSummary();
    return `<div class="card pad" id="estDash">
    <div class="est-card-h"><div class="section-title">${ic("estoque")} Estoque e vendas</div><button class="btn btn-ghost btn-sm" data-est-go="painel">Abrir</button></div>
    <div class="est-dash-kpis"><div class="mini-stat est-li click" data-est-go="vendas" data-est-p="hoje" style="display:block; border:none;"><div class="n">${sm.day.length}</div><div class="l">Vendas hoje · ${brl(sm.dayV)}</div></div><div class="mini-stat est-li click" data-est-go="vendas" data-est-p="mes" style="display:block; border:none;"><div class="n">${brl(sm.monthV)}</div><div class="l">Vendido no mês</div></div></div>
    ${alertRows(al)}
    ${canDo("vender") ? `<button class="btn btn-primary btn-sm" data-est-go="vender" style="margin-top:12px;">${ic("plus")} Nova venda</button>` : ""}
  </div>`;
  }
  var _dash = window.renderDashboard;
  window.renderDashboard = function() {
    const html = _dash();
    const card = dashCard();
    if (!card)
      return html;
    const anchor = html.indexOf("Inteligência da rotina");
    if (anchor > -1) {
      const start = html.lastIndexOf('<div class="card pad">', anchor);
      if (start > -1)
        return html.slice(0, start) + card + `
      ` + html.slice(start);
    }
    return html + `<div style="margin-top:16px;">${card}</div>`;
  };
  function bindDashCard() {}
  function estSearch(q) {
    const qq = q.trim();
    if (qq.length < 2)
      return [];
    const out = [];
    const screens = [
      ...VIEWS.filter((v) => v.id !== "estoque").map((v) => ({ label: v.label, sub: v.sub, go: () => goTo(v.id), icon: ICONS[v.icon] })),
      ...visibleSubs().map((s) => ({ label: s.id === "painel" ? "Estoque" : `${s.label}`, sub: s.id === "painel" ? "Painel do estoque" : "Estoque", go: () => estGo(s.id), icon: ic(s.icon) })),
      ...canDo("relatorios") ? Object.entries({ vendas: "Relatório de vendas", consumo: "Relatório de consumo", financeiro: "Relatório financeiro" }).map(([k, l]) => ({ label: l, sub: "Estoque", go: () => estGo("relatorios", k), icon: ic("relatorio") })) : []
    ].filter((x) => match(qq, x.label, x.sub));
    screens.slice(0, 4).forEach((x) => out.push({ kind: "tela", ...x }));
    if (!ready())
      return out;
    S.products.filter((p) => match(qq, p.name, p.sku, p.barcode)).slice(0, 5).forEach((p) => out.push({ kind: "prod", id: p.id, label: p.name, meta: [p.sku, `${brl(p.price)}`] }));
    S.packages.filter((k) => match(qq, k.name, k.description)).slice(0, 3).forEach((k) => out.push({ kind: "pk", id: k.id, label: k.name, meta: [brl(k.price)] }));
    const n = qq.replace(/^#|n[ºo°]\s*/i, "");
    S.sales.filter((s) => String(s.number) === n || match(qq, s.client, s.animalName, ...s.items.map((i) => i.name))).slice(0, 4).forEach((s) => out.push({ kind: "sale", id: s.id, label: `Venda nº ${s.number}${s.client ? " · " + s.client : ""}`, meta: [fmtD(s.createdAt), brl(s.total)] }));
    S.suppliers.filter((s) => match(qq, s.name, s.cnpj)).slice(0, 3).forEach((s) => out.push({ kind: "sup", id: s.id, label: s.name, meta: [s.phone || ""] }));
    return out;
  }
  var lastScreens = [];
  var _gsp = window.renderGlobalSearchPanel;
  window.renderGlobalSearchPanel = function(q) {
    _gsp(q);
    const panel = document.getElementById("globalSearchResults");
    const extra = estSearch(q || "");
    if (!extra.length)
      return;
    lastScreens = extra.filter((x) => x.kind === "tela");
    if (panel.querySelector(".gsr-empty"))
      panel.innerHTML = "";
    const tag = { tela: "Tela", prod: "Produto", pk: "Pacote", sale: "Venda", sup: "Fornecedor" };
    const icn = { prod: ic("produto"), pk: ic("pacote"), sale: ic("vendas"), sup: ic("fornecedor") };
    const htmlScreens = extra.filter((x) => x.kind === "tela").map((x, i) => `<div class="gsr-item" data-gsr-est="tela:${i}"><div class="gsr-name">${x.icon || ""} ${esc(x.label)} <span class="pill-muted">${tag.tela}</span></div><div class="gsr-meta"><span>${esc(x.sub || "")}</span></div></div>`).join("");
    const htmlItems = extra.filter((x) => x.kind !== "tela").map((x) => `<div class="gsr-item" data-gsr-est="${x.kind}:${x.id}"><div class="gsr-name">${icn[x.kind]} ${esc(x.label)} <span class="pill-muted">${tag[x.kind]}</span></div><div class="gsr-meta">${x.meta.filter(Boolean).map((m) => `<span>${esc(m)}</span>`).join("")}</div></div>`).join("");
    panel.insertAdjacentHTML("afterbegin", htmlScreens);
    panel.insertAdjacentHTML("beforeend", htmlItems);
    panel.classList.add("show");
  };
  document.getElementById("globalSearchResults").addEventListener("click", (e) => {
    const el = e.target.closest("[data-gsr-est]");
    if (!el)
      return;
    const [k, id] = el.dataset.gsrEst.split(":");
    setTimeout(() => {
      if (k === "tela")
        lastScreens[+id] && lastScreens[+id].go();
      else if (k === "prod")
        openProduct(id);
      else if (k === "pk")
        openPackageForm(id);
      else if (k === "sale")
        openSale(id);
      else if (k === "sup")
        openSupplier(id);
    }, 0);
  });
  var _tutor = window.openTutorDrawer;
  window.openTutorDrawer = function(tutorId) {
    _tutor(tutorId);
    if (!ready())
      return;
    const body = document.querySelector("#drawerRoot .drawer-body");
    if (!body)
      return;
    const btns = body.firstElementChild;
    if (btns && canDo("vender"))
      btns.insertAdjacentHTML("beforeend", `<button class="btn btn-secondary btn-sm" data-est-nova-venda="${tutorId}||">${ic("vender")} Nova venda</button>`);
    const vendas = S.sales.filter((s) => s.tutorId === tutorId);
    const total = vendas.reduce((a, s) => a + (s.status === "cancelada" ? 0 : Math.max(0, s.total - (s.refunded || 0))), 0);
    const html = `<div class="section-title">${ic("vendas")} Compras (${vendas.length})${vendas.length ? ` <span class="tag">${brl(total)}</span>` : ""}</div>
    <div style="margin-bottom:20px;">${vendas.length ? `<div class="est-list">${vendas.slice(0, 8).map((s) => `<div class="est-li click" data-est-sale="${s.id}"><div class="grow"><b>${esc(s.items.map((i) => i.name).join(", "))}</b><small>${fmtD(s.createdAt)}${s.animalName ? " · " + esc(s.animalName) : ""} · Nº ${s.number}</small></div><div class="side"><b style="color:var(--ink);">${brl(s.total)}</b>${s.status === "cancelada" ? '<span class="badge st-Cancelado">Cancelada</span>' : ""}</div></div>`).join("")}</div>${vendas.length > 8 ? `<div class="hint">Mais ${vendas.length - 8} compra(s) em Estoque, Vendas.</div>` : ""}` : '<div class="hint">Nenhuma compra registrada.</div>'}</div>`;
    const titles = [...body.querySelectorAll(".section-title")];
    const tl = titles.find((t) => /Linha do tempo/.test(t.textContent));
    const anchor = tl ? tl.parentElement : null;
    if (anchor && anchor.parentElement === body)
      anchor.insertAdjacentHTML("beforebegin", html);
    else
      body.insertAdjacentHTML("beforeend", html);
  };
  var _ag = window.openAgendamentoDrawer;
  window.openAgendamentoDrawer = function(agId) {
    _ag(agId);
    if (!ready() || !canDo("vender"))
      return;
    const a = (DB.agendamentos || []).find((x) => x.id === agId);
    const edit = document.querySelector("#drawerRoot [data-edit-ag]");
    if (!a || !edit)
      return;
    const feitas = S.sales.filter((s) => s.agendamentoId === agId && s.status !== "cancelada");
    edit.insertAdjacentHTML("beforebegin", `<div class="section-title">${ic("vender")} Venda deste atendimento</div><div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:18px;">${feitas.map((s) => `<button class="btn btn-secondary btn-sm" data-est-sale="${s.id}">Venda nº ${s.number} · ${brl(s.total)}</button>`).join("")}<button class="btn btn-primary btn-sm" data-est-nova-venda="${a.tutorId || ""}|${a.animalId || ""}|${a.id}">${ic("plus")} Registrar venda</button></div>`);
  };
  var _nf = window.formNotaFiscal;
  window.formNotaFiscal = function(nf, presets) {
    if (!presets || !presets.__est)
      nfLink.saleId = null;
    const p = presets ? { ...presets } : presets;
    if (p)
      delete p.__est;
    return _nf(nf, p);
  };
  var _aval = window.perguntarAvaliacao;
  window.perguntarAvaliacao = function(nf) {
    onNFCreated(nf);
    return _aval(nf);
  };
  if (/^#\/estoque/.test(location.hash) && state.view !== "estoque" && window.__histPronto) {
    try {
      routeSet(location.hash.split("/")[2] || "");
      goTo("estoque");
    } catch (e) {}
  }
  window.Estq = { S, startSale, estGo, openSale, openProduct, NESTED, sa, myEmail, tutorById: (id) => tutorById(id) };
})();
