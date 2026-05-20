// ============================================================
//  LUXE Admin Panel — Full JS
// ============================================================

// ── Mock Data ────────────────────────────────────────────────
const ADMIN_PRODUCTS = [
  { id:1,  name:"Obsidian Oversized Tee",  category:"tshirts",    price:49,  original:79,  discount:38, rating:4.8, reviews:124, stock:42, badge:"Bestseller", img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&q=60" },
  { id:2,  name:"Noir Zip Hoodie",          category:"hoodies",    price:89,  original:129, discount:31, rating:4.9, reviews:89,  stock:18, badge:"New",        img:"https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=200&q=60" },
  { id:3,  name:"Phantom Cargo Jacket",     category:"jackets",    price:149, original:199, discount:25, rating:4.7, reviews:56,  stock:9,  badge:"Limited",    img:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200&q=60" },
  { id:4,  name:"Velvet Slim Jeans",        category:"jeans",      price:69,  original:99,  discount:30, rating:4.6, reviews:203, stock:55, badge:"Trending",   img:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&q=60" },
  { id:5,  name:"Ivory Linen Shirt",        category:"shirts",     price:55,  original:79,  discount:30, rating:4.5, reviews:78,  stock:31, badge:"New",        img:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&q=60" },
  { id:6,  name:"Eclipse Bomber",           category:"jackets",    price:129, original:179, discount:28, rating:4.9, reviews:45,  stock:7,  badge:"Limited",    img:"https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=200&q=60" },
  { id:7,  name:"Aura Crop Hoodie",         category:"hoodies",    price:69,  original:99,  discount:30, rating:4.7, reviews:167, stock:23, badge:"Bestseller", img:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200&q=60" },
  { id:8,  name:"Monochrome Set",           category:"streetwear", price:119, original:159, discount:25, rating:4.8, reviews:92,  stock:14, badge:"New",        img:"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=200&q=60" },
  { id:9,  name:"Cashmere Blend Coat",      category:"jackets",    price:249, original:349, discount:29, rating:5.0, reviews:31,  stock:5,  badge:"Luxury",     img:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=200&q=60" },
  { id:10, name:"Street Graphic Tee",       category:"tshirts",    price:35,  original:49,  discount:29, rating:4.4, reviews:256, stock:67, badge:"Trending",   img:"https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=200&q=60" },
  { id:11, name:"Utility Cargo Pants",      category:"streetwear", price:79,  original:109, discount:28, rating:4.6, reviews:143, stock:28, badge:"Bestseller", img:"https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200&q=60" },
  { id:12, name:"Silk Touch Dress Shirt",   category:"shirts",     price:89,  original:129, discount:31, rating:4.7, reviews:67,  stock:19, badge:"Luxury",     img:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200&q=60" },
];

let ADMIN_ORDERS = [
  { id:"LX-48291", customer:"James Whitfield",  email:"james@email.com",   country:"United States", date:"May 15, 2025",   status:"delivered",  items:["Obsidian Oversized Tee","Noir Zip Hoodie"],    total:138,  payment:"Visa •••• 4242" },
  { id:"LX-39104", customer:"Sofia Andersson",  email:"sofia@email.com",   country:"Sweden",        date:"Apr 28, 2025",   status:"shipped",    items:["Phantom Cargo Jacket"],                        total:149,  payment:"PayPal" },
  { id:"LX-27653", customer:"Marcus Chen",      email:"marcus@email.com",  country:"Canada",        date:"Apr 10, 2025",   status:"delivered",  items:["Ivory Linen Shirt","Aura Crop Hoodie"],        total:124,  payment:"Mastercard •••• 8821" },
  { id:"LX-18920", customer:"Layla Hassan",     email:"layla@email.com",   country:"UAE",           date:"Mar 22, 2025",   status:"processing", items:["Monochrome Set"],                              total:119,  payment:"Visa •••• 1234" },
  { id:"LX-11045", customer:"Oliver Schmidt",   email:"oliver@email.com",  country:"Germany",       date:"Mar 10, 2025",   status:"delivered",  items:["Velvet Slim Jeans","Street Graphic Tee","Ivory Linen Shirt"], total:153, payment:"Apple Pay" },
  { id:"LX-09832", customer:"Amara Osei",       email:"amara@email.com",   country:"United Kingdom",date:"Feb 28, 2025",   status:"cancelled",  items:["Eclipse Bomber"],                              total:129,  payment:"Visa •••• 5566" },
  { id:"LX-08741", customer:"Yuki Tanaka",      email:"yuki@email.com",    country:"Australia",     date:"Feb 15, 2025",   status:"delivered",  items:["Aura Crop Hoodie","Utility Cargo Pants"],      total:148,  payment:"PayPal" },
  { id:"LX-07620", customer:"Carlos Rivera",    email:"carlos@email.com",  country:"United States", date:"Feb 1, 2025",    status:"delivered",  items:["Cashmere Blend Coat","Noir Zip Hoodie"],       total:338,  payment:"Amex •••• 3737" },
];

const ADMIN_CUSTOMERS = [
  { id:"C001", name:"James Whitfield",  email:"james@email.com",   country:"United States", orders:4, spent:530,  joined:"Jan 2025", status:"active" },
  { id:"C002", name:"Sofia Andersson",  email:"sofia@email.com",   country:"Sweden",        orders:2, spent:218,  joined:"Feb 2025", status:"active" },
  { id:"C003", name:"Marcus Chen",      email:"marcus@email.com",  country:"Canada",        orders:6, spent:742,  joined:"Dec 2024", status:"active" },
  { id:"C004", name:"Layla Hassan",     email:"layla@email.com",   country:"UAE",           orders:1, spent:119,  joined:"Mar 2025", status:"active" },
  { id:"C005", name:"Oliver Schmidt",   email:"oliver@email.com",  country:"Germany",       orders:3, spent:367,  joined:"Nov 2024", status:"active" },
  { id:"C006", name:"Amara Osei",       email:"amara@email.com",   country:"United Kingdom",orders:5, spent:615,  joined:"Oct 2024", status:"active" },
  { id:"C007", name:"Yuki Tanaka",      email:"yuki@email.com",    country:"Australia",     orders:2, spent:178,  joined:"Apr 2025", status:"active" },
  { id:"C008", name:"Carlos Rivera",    email:"carlos@email.com",  country:"United States", orders:7, spent:893,  joined:"Sep 2024", status:"vip"    },
  { id:"C009", name:"Priya Nair",       email:"priya@email.com",   country:"United Kingdom",orders:3, spent:312,  joined:"Jan 2025", status:"active" },
  { id:"C010", name:"Ahmed Al-Rashid",  email:"ahmed@email.com",   country:"UAE",           orders:4, spent:456,  joined:"Feb 2025", status:"active" },
];

let ADMIN_COUPONS = [
  { code:"LUXE10",   discount:10, minOrder:0,   used:142, limit:500,  expiry:"Dec 31, 2025", status:"active"  },
  { code:"LUXE20",   discount:20, minOrder:100, used:67,  limit:200,  expiry:"Jun 30, 2025", status:"active"  },
  { code:"NEWUSER",  discount:15, minOrder:0,   used:89,  limit:1000, expiry:"Dec 31, 2025", status:"active"  },
  { code:"FLASH30",  discount:30, minOrder:150, used:23,  limit:50,   expiry:"May 31, 2025", status:"expired" },
  { code:"SUMMER25", discount:25, minOrder:80,  used:0,   limit:300,  expiry:"Aug 31, 2025", status:"active"  },
];

const ADMIN_REVIEWS = [
  { name:"James Whitfield", avatar:"JW", rating:5, date:"March 2025",  product:"Obsidian Oversized Tee", text:"Absolutely premium quality. The fabric feels luxurious and the fit is perfect.", verified:true  },
  { name:"Sofia Andersson",  avatar:"SA", rating:5, date:"April 2025",  product:"Aura Crop Hoodie",       text:"The hoodie is everything. Soft, stylish, and the color is exactly as shown. Shipping to Sweden was fast!", verified:true  },
  { name:"Marcus Chen",      avatar:"MC", rating:4, date:"May 2025",    product:"Phantom Cargo Jacket",   text:"Great quality jacket. The stitching is immaculate. Slightly runs large but worth it.", verified:true  },
  { name:"Layla Hassan",     avatar:"LH", rating:5, date:"Apr 2025",    product:"Monochrome Set",         text:"Ordered the Monochrome Set and it arrived perfectly packaged. Outstanding quality.", verified:true  },
  { name:"Oliver Schmidt",   avatar:"OS", rating:3, date:"Mar 2025",    product:"Ivory Linen Shirt",      text:"Good quality overall but delivery took longer than expected. Product itself is great.", verified:false },
];

const REVENUE_DATA = [
  { day:"Mon", amount:1240 },
  { day:"Tue", amount:890  },
  { day:"Wed", amount:1560 },
  { day:"Thu", amount:2100 },
  { day:"Fri", amount:1780 },
  { day:"Sat", amount:2450 },
  { day:"Sun", amount:1920 },
];

const STATUS_BADGE = {
  delivered:  "adm-badge-green",
  shipped:    "adm-badge-blue",
  processing: "adm-badge-orange",
  cancelled:  "adm-badge-red",
  active:     "adm-badge-green",
  expired:    "adm-badge-gray",
  vip:        "adm-badge-gold",
};

function fmt(n) { return "$" + Number(n).toFixed(2); }
function fmtK(n) { return n >= 1000 ? "$" + (n/1000).toFixed(1) + "k" : "$" + n; }
function initials(name) { return name.split(" ").map(n=>n[0]).join("").toUpperCase().slice(0,2); }

// ── Toast ────────────────────────────────────────────────────
function adminToast(msg, type) {
  document.querySelectorAll(".adm-toast").forEach(t => t.remove());
  const icons = { success:"check-circle-fill", error:"x-circle-fill", info:"info-circle-fill" };
  const t = document.createElement("div");
  t.className = "adm-toast adm-toast-" + type;
  t.innerHTML = '<i class="bi bi-' + (icons[type]||"info-circle-fill") + '"></i><span>' + msg + "</span>";
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 400); }, 3000);
}

// ── Panel switching ──────────────────────────────────────────
const PANEL_TITLES = { dashboard:"Dashboard", orders:"Orders", products:"Products", customers:"Customers", inventory:"Inventory", coupons:"Coupons", reviews:"Reviews", settings:"Settings" };

function switchPanel(name) {
  document.querySelectorAll(".adm-panel").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".adm-nav-item[data-panel]").forEach(i => i.classList.remove("active"));
  const panel = document.getElementById("panel-" + name);
  const navItem = document.querySelector(".adm-nav-item[data-panel='" + name + "']");
  if (panel) panel.classList.add("active");
  if (navItem) navItem.classList.add("active");
  document.getElementById("adm-page-title").textContent = PANEL_TITLES[name] || name;
  document.getElementById("adm-breadcrumb").textContent = PANEL_TITLES[name] || name;
  if (name === "orders")    renderOrdersTable(ADMIN_ORDERS);
  if (name === "products")  renderProductsTable(ADMIN_PRODUCTS);
  if (name === "customers") renderCustomersTable(ADMIN_CUSTOMERS);
  if (name === "inventory") renderInventoryTable();
  if (name === "coupons")   renderCouponsTable(ADMIN_COUPONS);
  if (name === "reviews")   renderReviews();
}

document.querySelectorAll(".adm-nav-item[data-panel]").forEach(item => {
  item.addEventListener("click", () => switchPanel(item.dataset.panel));
});

// ── Sidebar mobile ───────────────────────────────────────────
document.getElementById("sidebar-toggle").addEventListener("click", () => {
  document.getElementById("adm-sidebar").classList.add("open");
  document.getElementById("sidebar-overlay").style.display = "block";
});
function closeSidebar() {
  document.getElementById("adm-sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").style.display = "none";
}

// ── Logout ───────────────────────────────────────────────────
function adminLogout() {
  if (confirm("Sign out of admin panel?")) {
    localStorage.removeItem("luxe_admin");
    window.location.href = "login.html";
  }
}

// ── Dashboard ────────────────────────────────────────────────
function renderDashboard() {
  const activeOrders = ADMIN_ORDERS.filter(o => o.status !== "cancelled");
  const totalRevenue = activeOrders.reduce((s,o) => s + o.total, 0);
  const totalOrders  = ADMIN_ORDERS.length;
  const totalCustomers = ADMIN_CUSTOMERS.length;
  const avgOrder = totalRevenue / activeOrders.length;

  document.getElementById("stats-grid").innerHTML = [
    { label:"Total Revenue",   value:fmtK(totalRevenue), change:"+12.4%", up:true,  icon:"bi-currency-dollar", bg:"#fff0f0", ic:"#c8102e" },
    { label:"Total Orders",    value:totalOrders,        change:"+8.1%",  up:true,  icon:"bi-bag-check",       bg:"#f0f4ff", ic:"#2563eb" },
    { label:"Customers",       value:totalCustomers,     change:"+5.3%",  up:true,  icon:"bi-people",          bg:"#f0fdf4", ic:"#16a34a" },
    { label:"Avg Order Value", value:fmt(avgOrder),      change:"-2.1%",  up:false, icon:"bi-graph-up",        bg:"#fffbeb", ic:"#d97706" },
  ].map(s => '<div class="adm-stat-card"><div><div class="adm-stat-label">' + s.label + '</div><div class="adm-stat-value">' + s.value + '</div><div class="adm-stat-change ' + (s.up?"up":"down") + '"><i class="bi bi-arrow-' + (s.up?"up":"down") + '-short"></i> ' + s.change + ' vs last month</div></div><div class="adm-stat-icon" style="background:' + s.bg + ';color:' + s.ic + '"><i class="bi ' + s.icon + '"></i></div></div>').join("");

  // Revenue chart
  const maxAmt = Math.max(...REVENUE_DATA.map(d => d.amount));
  const totalWeek = REVENUE_DATA.reduce((s,d) => s + d.amount, 0);
  document.getElementById("total-revenue-label").textContent = "Total: " + fmtK(totalWeek);
  document.getElementById("revenue-chart").innerHTML = REVENUE_DATA.map(d =>
    '<div class="adm-bar-wrap"><div class="adm-bar" style="height:' + Math.round((d.amount/maxAmt)*100) + '%" title="' + fmtK(d.amount) + '"></div><div class="adm-bar-label">' + d.day + "</div></div>"
  ).join("");

  // Top products
  document.getElementById("top-products").innerHTML = ADMIN_PRODUCTS.slice(0,5).map((p,i) =>
    '<div style="display:flex;align-items:center;gap:.85rem;padding:.6rem 0;border-bottom:1px solid var(--adm-border)"><img src="' + p.img + '" style="width:40px;height:48px;object-fit:cover;border-radius:6px;flex-shrink:0" /><div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + p.name + '</div><div class="adm-progress" style="margin-top:5px"><div class="adm-progress-fill" style="width:' + (100-i*15) + '%"></div></div></div><div style="font-size:13px;font-weight:700;flex-shrink:0">' + fmt(p.price) + "</div></div>"
  ).join("");

  // Recent orders
  renderOrdersTableEl(ADMIN_ORDERS.slice(0,5), document.getElementById("recent-orders-table"), true);
}

// ── Orders ───────────────────────────────────────────────────
function renderOrdersTableEl(orders, el, mini) {
  if (!el) return;
  el.innerHTML = "<thead><tr><th>Order ID</th><th>Customer</th>" + (mini?"":"<th>Country</th>") + "<th>Date</th><th>Items</th><th>Total</th><th>Status</th><th>Actions</th></tr></thead><tbody>" +
    orders.map(o => "<tr><td><strong>" + o.id + "</strong></td><td><div style='display:flex;align-items:center;gap:8px'><div class='adm-user-avatar' style='width:28px;height:28px;font-size:10px'>" + initials(o.customer) + "</div>" + o.customer + "</div></td>" +
      (mini?"":"<td style='font-size:12.5px;color:var(--adm-muted)'>" + o.country + "</td>") +
      "<td style='color:var(--adm-muted);font-size:12.5px'>" + o.date + "</td><td>" + o.items.length + "</td><td><strong>" + fmt(o.total) + "</strong></td><td><span class='adm-badge " + (STATUS_BADGE[o.status]||"adm-badge-gray") + "'>" + o.status + "</span></td><td><div style='display:flex;gap:4px'><button class='adm-btn adm-btn-outline adm-btn-sm adm-btn-icon' title='View' onclick='openOrderModal(\"" + o.id + "\")'><i class='bi bi-eye'></i></button><button class='adm-btn adm-btn-outline adm-btn-sm adm-btn-icon' title='Edit Status' onclick='openOrderModal(\"" + o.id + "\")'><i class='bi bi-pencil'></i></button></div></td></tr>"
    ).join("") + "</tbody>";
}

function renderOrdersTable(orders) {
  renderOrdersTableEl(orders, document.getElementById("orders-table"), false);
  document.getElementById("order-status-filter").onchange = function() {
    const v = this.value;
    renderOrdersTableEl(v==="all" ? ADMIN_ORDERS : ADMIN_ORDERS.filter(o=>o.status===v), document.getElementById("orders-table"), false);
  };
  document.getElementById("order-search").oninput = function() {
    const q = this.value.toLowerCase();
    renderOrdersTableEl(ADMIN_ORDERS.filter(o=>o.id.toLowerCase().includes(q)||o.customer.toLowerCase().includes(q)), document.getElementById("orders-table"), false);
  };
}

function openOrderModal(id) {
  const o = ADMIN_ORDERS.find(x=>x.id===id);
  if (!o) return;
  document.getElementById("order-modal-title").textContent = "Order #" + o.id;
  document.getElementById("order-modal-body").innerHTML =
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.25rem">' +
    '<div><div class="adm-label">Customer</div><div style="font-weight:600">' + o.customer + '</div><div style="font-size:12.5px;color:var(--adm-muted)">' + o.email + '</div></div>' +
    '<div><div class="adm-label">Date</div><div style="font-weight:600">' + o.date + '</div></div>' +
    '<div><div class="adm-label">Payment</div><div style="font-weight:600">' + o.payment + '</div></div>' +
    '<div><div class="adm-label">Total</div><div style="font-weight:700;font-size:1.1rem">' + fmt(o.total) + '</div></div>' +
    '</div><div class="adm-label" style="margin-bottom:.5rem">Items</div>' +
    '<div style="margin-bottom:1.25rem;padding:.75rem;background:var(--adm-bg);border-radius:8px;font-size:13px">' + o.items.join(", ") + '</div>' +
    '<div class="adm-label" style="margin-bottom:.5rem">Update Status</div>' +
    '<select class="adm-input adm-select" id="modal-status-select" style="width:auto;margin-bottom:1.25rem">' +
    ["processing","shipped","delivered","cancelled"].map(s=>'<option value="'+s+'"'+(s===o.status?" selected":"")+'>'+s.charAt(0).toUpperCase()+s.slice(1)+"</option>").join("") +
    '</select><br><div style="display:flex;gap:.75rem"><button class="adm-btn adm-btn-dark" onclick="saveOrderStatus(\''+o.id+'\')">Update Status</button><button class="adm-btn adm-btn-outline" onclick="closeOrderModal()">Close</button></div>';
  document.getElementById("order-modal-bg").classList.add("open");
}
function closeOrderModal() { document.getElementById("order-modal-bg").classList.remove("open"); }
document.getElementById("order-modal-bg").addEventListener("click", e => { if(e.target===e.currentTarget) closeOrderModal(); });

function saveOrderStatus(id) {
  const sel = document.getElementById("modal-status-select");
  const order = ADMIN_ORDERS.find(o=>o.id===id);
  if (order) { order.status = sel.value; renderOrdersTable(ADMIN_ORDERS); }
  closeOrderModal();
  adminToast("Order " + id + " updated to " + sel.value, "success");
}

// ── Products ─────────────────────────────────────────────────
function renderProductsTable(prods) {
  const el = document.getElementById("products-table");
  if (!el) return;
  el.innerHTML = "<thead><tr><th>Image</th><th>Name</th><th>Category</th><th>Price</th><th>Discount</th><th>Stock</th><th>Rating</th><th>Status</th></tr></thead><tbody>" +
    prods.map(p => "<tr><td><img src='" + p.img + "' class='adm-table-img'/></td><td><strong style='font-size:13px'>" + p.name + "</strong></td><td><span class='adm-badge adm-badge-gray'>" + p.category + "</span></td><td><strong>$" + p.price + "</strong></td><td><span class='adm-badge adm-badge-red'>-" + p.discount + "%</span></td><td><div style='display:flex;align-items:center;gap:6px'><div class='adm-progress' style='width:60px'><div class='adm-progress-fill' style='width:" + Math.min(p.stock,80)/80*100 + "%;background:" + (p.stock<15?"var(--adm-red)":"var(--adm-gold)") + "'></div></div><span style='font-size:13px;font-weight:600'>" + p.stock + "</span></div></td><td><span style='color:#e8a838'>&#9733;</span> " + p.rating + " <span style='color:var(--adm-muted);font-size:12px'>(" + p.reviews + ")</span></td><td><span class='adm-badge " + (p.stock>0?"adm-badge-green":"adm-badge-red") + "'>" + (p.stock>0?"In Stock":"Out") + "</span></td></tr>"
    ).join("") + "</tbody>";

  document.getElementById("product-search").oninput = function() {
    const q = this.value.toLowerCase();
    renderProductsTable(ADMIN_PRODUCTS.filter(p=>p.name.toLowerCase().includes(q)||p.category.includes(q)));
  };
  document.getElementById("product-cat-filter").onchange = function() {
    const v = this.value;
    renderProductsTable(v==="all" ? ADMIN_PRODUCTS : ADMIN_PRODUCTS.filter(p=>p.category===v));
  };
}

// ── Customers ────────────────────────────────────────────────
function renderCustomersTable(customers) {
  const el = document.getElementById("customers-table");
  if (!el) return;
  el.innerHTML = "<thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Country</th><th>Orders</th><th>Spent</th><th>Joined</th><th>Status</th><th>Actions</th></tr></thead><tbody>" +
    customers.map(c => "<tr><td style='color:var(--adm-muted);font-size:12px'>" + c.id + "</td><td><div style='display:flex;align-items:center;gap:8px'><div class='adm-user-avatar'>" + initials(c.name) + "</div><strong style='font-size:13px'>" + c.name + "</strong></div></td><td style='color:var(--adm-muted);font-size:12.5px'>" + c.email + "</td><td>" + c.country + "</td><td style='font-weight:600'>" + c.orders + "</td><td><strong>$" + c.spent + "</strong></td><td style='color:var(--adm-muted);font-size:12.5px'>" + c.joined + "</td><td><span class='adm-badge " + (STATUS_BADGE[c.status]||"adm-badge-gray") + "'>" + c.status + "</span></td><td><button class='adm-btn adm-btn-outline adm-btn-sm adm-btn-icon' title='View' onclick='openCustomerModal(\"" + c.id + "\")'><i class='bi bi-eye'></i></button></td></tr>"
    ).join("") + "</tbody>";

  document.getElementById("customer-search").oninput = function() {
    const q = this.value.toLowerCase();
    renderCustomersTable(ADMIN_CUSTOMERS.filter(c=>c.name.toLowerCase().includes(q)||c.email.toLowerCase().includes(q)));
  };
}

function openCustomerModal(id) {
  const c = ADMIN_CUSTOMERS.find(x=>x.id===id);
  if (!c) return;
  const orders = ADMIN_ORDERS.filter(o=>o.customer===c.name);
  document.getElementById("customer-modal-body").innerHTML =
    '<div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;padding-bottom:1.25rem;border-bottom:1px solid var(--adm-border)">' +
    '<div class="adm-user-avatar" style="width:52px;height:52px;font-size:1.1rem">' + initials(c.name) + '</div>' +
    '<div><div style="font-weight:700;font-size:1rem">' + c.name + '</div><div style="font-size:13px;color:var(--adm-muted)">' + c.email + '</div><span class="adm-badge ' + (STATUS_BADGE[c.status]||"adm-badge-gray") + '" style="margin-top:4px;display:inline-block">' + c.status + '</span></div></div>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1.5rem">' +
    '<div style="background:var(--adm-bg);border-radius:8px;padding:.85rem 1rem"><div class="adm-label">Country</div><div style="font-weight:600">' + c.country + '</div></div>' +
    '<div style="background:var(--adm-bg);border-radius:8px;padding:.85rem 1rem"><div class="adm-label">Member Since</div><div style="font-weight:600">' + c.joined + '</div></div>' +
    '<div style="background:var(--adm-bg);border-radius:8px;padding:.85rem 1rem"><div class="adm-label">Total Orders</div><div style="font-weight:700;font-size:1.2rem">' + c.orders + '</div></div>' +
    '<div style="background:var(--adm-bg);border-radius:8px;padding:.85rem 1rem"><div class="adm-label">Total Spent</div><div style="font-weight:700;font-size:1.2rem">$' + c.spent + '</div></div></div>' +
    (orders.length ? '<div class="adm-label" style="margin-bottom:.5rem">Recent Orders</div>' + orders.map(o=>'<div style="display:flex;align-items:center;justify-content:space-between;padding:.6rem 0;border-bottom:1px solid var(--adm-border);font-size:13px"><span style="font-weight:600">' + o.id + '</span><span style="color:var(--adm-muted)">' + o.date + '</span><span class="adm-badge ' + (STATUS_BADGE[o.status]||"adm-badge-gray") + '">' + o.status + '</span><strong>' + fmt(o.total) + '</strong></div>').join("") : "") +
    '<button class="adm-btn adm-btn-outline" style="margin-top:1.25rem" onclick="closeCustomerModal()">Close</button>';
  document.getElementById("customer-modal-bg").classList.add("open");
}
function closeCustomerModal() { document.getElementById("customer-modal-bg").classList.remove("open"); }
document.getElementById("customer-modal-bg").addEventListener("click", e => { if(e.target===e.currentTarget) closeCustomerModal(); });

// ── Inventory ────────────────────────────────────────────────
function renderInventoryTable() {
  const el = document.getElementById("inventory-table");
  if (!el) return;
  el.innerHTML = "<thead><tr><th>Image</th><th>Product</th><th>Category</th><th>Price</th><th>Stock Level</th><th>Status</th><th>Actions</th></tr></thead><tbody>" +
    ADMIN_PRODUCTS.map(p => {
      const low = p.stock < 15;
      return "<tr><td><img src='" + p.img + "' class='adm-table-img'/></td><td><strong style='font-size:13px'>" + p.name + "</strong></td><td><span class='adm-badge adm-badge-gray'>" + p.category + "</span></td><td><strong>$" + p.price + "</strong></td><td><div style='display:flex;align-items:center;gap:8px'><div class='adm-progress' style='width:80px'><div class='adm-progress-fill' style='width:" + Math.min(p.stock,80)/80*100 + "%;background:" + (low?"var(--adm-red)":"var(--adm-gold)") + "'></div></div><span style='font-size:13px;font-weight:600'>" + p.stock + " units</span></div></td><td><span class='adm-badge " + (low?"adm-badge-red":"adm-badge-green") + "'>" + (low?"Low Stock":"In Stock") + "</span></td><td><button class='adm-btn adm-btn-outline adm-btn-sm' onclick='adminToast(\"Stock update coming soon\",\"info\")'><i class='bi bi-pencil me-1'></i>Update</button></td></tr>";
    }).join("") + "</tbody>";
}

// ── Coupons ──────────────────────────────────────────────────
function renderCouponsTable(coupons) {
  const el = document.getElementById("coupons-table");
  if (!el) return;
  el.innerHTML = "<thead><tr><th>Code</th><th>Discount</th><th>Min Order</th><th>Usage</th><th>Expiry</th><th>Status</th><th>Actions</th></tr></thead><tbody>" +
    coupons.map(c => "<tr><td><strong style='font-family:monospace;font-size:13px;letter-spacing:.05em'>" + c.code + "</strong></td><td><span class='adm-badge adm-badge-gold'>" + c.discount + "% OFF</span></td><td>" + (c.minOrder>0?"$"+c.minOrder:"No minimum") + "</td><td><div style='display:flex;align-items:center;gap:6px'><div class='adm-progress' style='width:60px'><div class='adm-progress-fill' style='width:" + Math.round(c.used/c.limit*100) + "%'></div></div><span style='font-size:12.5px'>" + c.used + " / " + c.limit + "</span></div></td><td style='font-size:12.5px;color:var(--adm-muted)'>" + c.expiry + "</td><td><span class='adm-badge " + (STATUS_BADGE[c.status]||"adm-badge-gray") + "'>" + c.status + "</span></td><td><button class='adm-btn adm-btn-red adm-btn-sm adm-btn-icon' title='Delete' onclick='deleteCoupon(\"" + c.code + "\")'><i class='bi bi-trash'></i></button></td></tr>"
    ).join("") + "</tbody>";
}

function deleteCoupon(code) {
  if (!confirm("Delete coupon " + code + "?")) return;
  ADMIN_COUPONS = ADMIN_COUPONS.filter(c=>c.code!==code);
  renderCouponsTable(ADMIN_COUPONS);
  adminToast("Coupon " + code + " deleted", "info");
}

function openCouponModal() { document.getElementById("coupon-modal-bg").classList.add("open"); }
function closeCouponModal() { document.getElementById("coupon-modal-bg").classList.remove("open"); }
document.getElementById("coupon-modal-bg").addEventListener("click", e => { if(e.target===e.currentTarget) closeCouponModal(); });
document.getElementById("coupon-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const code = document.getElementById("cp-code").value.trim().toUpperCase();
  if (!code) return;
  ADMIN_COUPONS.push({ code, discount:parseInt(document.getElementById("cp-discount").value), minOrder:parseInt(document.getElementById("cp-min").value), used:0, limit:parseInt(document.getElementById("cp-limit").value), expiry:document.getElementById("cp-expiry").value||"No expiry", status:"active" });
  renderCouponsTable(ADMIN_COUPONS);
  closeCouponModal();
  adminToast("Coupon " + code + " added!", "success");
  this.reset();
});

// ── Reviews ──────────────────────────────────────────────────
function renderReviews() {
  const filter = document.getElementById("review-filter").value;
  const reviews = filter==="all" ? ADMIN_REVIEWS : ADMIN_REVIEWS.filter(r=>r.rating===parseInt(filter));
  document.getElementById("reviews-list").innerHTML = reviews.map(r =>
    '<div style="padding:1.1rem;border:1px solid var(--adm-border);border-radius:var(--adm-r);margin-bottom:.75rem">' +
    '<div style="display:flex;align-items:center;gap:.85rem;margin-bottom:.65rem;flex-wrap:wrap">' +
    '<div class="adm-user-avatar">' + r.avatar + '</div>' +
    '<div><div style="font-weight:600;font-size:14px">' + r.name + '</div><div style="font-size:12px;color:var(--adm-muted)">' + r.date + " &middot; " + r.product + '</div></div>' +
    '<div style="margin-left:auto;display:flex;align-items:center;gap:.5rem;flex-wrap:wrap">' +
    '<span style="color:#e8a838">' + "★".repeat(r.rating) + "☆".repeat(5-r.rating) + '</span>' +
    (r.verified?'<span class="adm-badge adm-badge-green" style="font-size:10px"><i class="bi bi-patch-check-fill"></i> Verified</span>':"") +
    '<button class="adm-btn adm-btn-red adm-btn-sm" onclick="adminToast(\'Review removed\',\'info\')"><i class="bi bi-trash"></i></button></div></div>' +
    '<p style="font-size:13.5px;color:var(--adm-muted);line-height:1.7">' + r.text + '</p></div>'
  ).join("") || '<p style="color:var(--adm-muted);font-size:14px">No reviews found.</p>';
}
document.getElementById("review-filter").addEventListener("change", renderReviews);

// ── Global search ────────────────────────────────────────────
document.getElementById("adm-global-search").addEventListener("input", function() {
  const q = this.value.toLowerCase().trim();
  if (!q) return;
  const orderMatch = ADMIN_ORDERS.find(o=>o.id.toLowerCase().includes(q)||o.customer.toLowerCase().includes(q));
  const custMatch  = ADMIN_CUSTOMERS.find(c=>c.name.toLowerCase().includes(q)||c.email.toLowerCase().includes(q));
  if (orderMatch)     { switchPanel("orders");    adminToast("Found order " + orderMatch.id, "info"); }
  else if (custMatch) { switchPanel("customers"); adminToast("Found customer " + custMatch.name, "info"); }
  else adminToast('No results for "' + q + '"', "error");
});

// ── Settings save buttons ────────────────────────────────────
document.querySelectorAll(".settings-save-btn").forEach(btn => {
  btn.addEventListener("click", () => adminToast("Settings saved!", "success"));
});

// ── Init ─────────────────────────────────────────────────────
renderDashboard();

