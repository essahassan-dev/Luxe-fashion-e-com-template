// ============================================================
//  LUXE — Cart & Wishlist Logic (localStorage)
// ============================================================

// ---------- CART ----------
function getCart() {
  return JSON.parse(localStorage.getItem("luxe_cart") || "[]");
}

function saveCart(cart) {
  localStorage.setItem("luxe_cart", JSON.stringify(cart));
  updateCartBadge();
}

// Free shipping threshold (USD)
const FREE_SHIPPING_THRESHOLD = 100;
const SHIPPING_COST = 9.99;

function addToCart(productId, size, quantity = 1) {
  const cart = getCart();
  const product = getProductById(productId);
  if (!product) return;

  const existingIndex = cart.findIndex(
    (item) => item.id === productId && item.size === size
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: size,
      quantity: quantity,
    });
  }

  saveCart(cart);
  showToast(`${product.name} added to cart!`, "success");
}

function removeFromCart(productId, size) {
  let cart = getCart();
  cart = cart.filter((item) => !(item.id === productId && item.size === size));
  saveCart(cart);
}

function updateCartQuantity(productId, size, quantity) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId && i.size === size);
  if (item) {
    item.quantity = Math.max(1, quantity);
    saveCart(cart);
  }
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function clearCart() {
  localStorage.removeItem("luxe_cart");
  updateCartBadge();
}

// ---------- WISHLIST ----------
function getWishlist() {
  return JSON.parse(localStorage.getItem("luxe_wishlist") || "[]");
}

function saveWishlist(wishlist) {
  localStorage.setItem("luxe_wishlist", JSON.stringify(wishlist));
  updateWishlistBadge();
}

function toggleWishlist(productId) {
  const wishlist = getWishlist();
  const product = getProductById(productId);
  if (!product) return;

  const index = wishlist.findIndex((id) => id === productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    showToast(`${product.name} removed from wishlist`, "info");
  } else {
    wishlist.push(productId);
    showToast(`${product.name} added to wishlist!`, "success");
  }
  saveWishlist(wishlist);
  return index === -1; // returns true if added
}

function isInWishlist(productId) {
  return getWishlist().includes(productId);
}

// ---------- BADGE UPDATES ----------
function updateCartBadge() {
  const count = getCartCount();
  document.querySelectorAll(".cart-badge").forEach((el) => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

function updateWishlistBadge() {
  const count = getWishlist().length;
  document.querySelectorAll(".wishlist-badge").forEach((el) => {
    el.textContent = count;
    el.style.display = count > 0 ? "flex" : "none";
  });
}

// ---------- TOAST NOTIFICATION ----------
function showToast(message, type = "success") {
  const existing = document.querySelector(".luxe-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = `luxe-toast luxe-toast--${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === "success" ? "✓" : type === "info" ? "♡" : "!"}</span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ---------- COUPON ----------
function applyCoupon(code) {
  const discount = COUPONS[code.toUpperCase()];
  if (discount) {
    localStorage.setItem("luxe_coupon", JSON.stringify({ code, discount }));
    return discount;
  }
  return null;
}

function getAppliedCoupon() {
  return JSON.parse(localStorage.getItem("luxe_coupon") || "null");
}

function removeCoupon() {
  localStorage.removeItem("luxe_coupon");
}

// ---------- INIT ----------
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  updateWishlistBadge();
});
