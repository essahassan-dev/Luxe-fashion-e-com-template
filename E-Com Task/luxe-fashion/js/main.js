// ============================================================
//  LUXE — Main JS
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initLoader();
  initNavbar();
  initScrollAnimations();
  initCursorEffect();
  initScrollTop();
  initPageTransitions();
  updateCartBadge();
  updateWishlistBadge();
});

// ---------- PAGE LOADER ----------
function initLoader() {
  const loader = document.getElementById("page-loader");
  if (!loader) return;
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("fade-out");
      setTimeout(() => loader.remove(), 600);
    }, 800);
  });
}

// ---------- NAVBAR ----------
function initNavbar() {
  const navbar = document.getElementById("luxe-navbar");
  if (!navbar) return;

  function updateNavbar() {
    navbar.classList.toggle("scrolled", window.scrollY > 80);
  }

  window.addEventListener("scroll", updateNavbar, { passive: true });
  updateNavbar();

  // Mobile menu toggle
  const toggler = document.querySelector(".navbar-toggler");
  const mobileMenu = document.getElementById("mobile-menu");
  if (toggler && mobileMenu) {
    toggler.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      toggler.classList.toggle("active");
    });
  }

  // Search overlay
  const searchBtn = document.getElementById("search-btn");
  const searchOverlay = document.getElementById("search-overlay");
  const searchClose = document.getElementById("search-close");
  const searchInput = document.getElementById("search-input");

  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener("click", () => {
      searchOverlay.classList.add("active");
      setTimeout(() => searchInput && searchInput.focus(), 300);
    });
    searchClose.addEventListener("click", () => {
      searchOverlay.classList.remove("active");
    });
    searchOverlay.addEventListener("click", (e) => {
      if (e.target === searchOverlay) searchOverlay.classList.remove("active");
    });

    // Live search
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        const resultsContainer = document.getElementById("search-results");
        if (!resultsContainer) return;

        if (query.length < 2) {
          resultsContainer.innerHTML = "";
          return;
        }

        const results = PRODUCTS.filter(
          (p) =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p.tags.some((t) => t.includes(query))
        ).slice(0, 5);

        if (results.length === 0) {
          resultsContainer.innerHTML = `<p class="search-no-result">No products found for "${query}"</p>`;
          return;
        }

        resultsContainer.innerHTML = results
          .map(
            (p) => `
          <a href="product.html?id=${p.id}" class="search-result-item">
            <img src="${p.images[0]}" alt="${p.name}" loading="lazy">
            <div>
              <p class="search-result-name">${p.name}</p>
              <p class="search-result-price">${formatPrice(p.price)}</p>
            </div>
          </a>
        `
          )
          .join("");
      });
    }
  }
}

// ---------- SCROLL ANIMATIONS ----------
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ---------- CUSTOM CURSOR (desktop only) ----------
function initCursorEffect() {
  if (window.innerWidth < 1024) return;

  const cursor = document.createElement("div");
  cursor.className = "luxe-cursor";
  const cursorDot = document.createElement("div");
  cursorDot.className = "luxe-cursor-dot";
  document.body.appendChild(cursor);
  document.body.appendChild(cursorDot);

  let mouseX = 0, mouseY = 0;
  let curX = 0, curY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function animateCursor() {
    curX += (mouseX - curX) * 0.12;
    curY += (mouseY - curY) * 0.12;
    cursor.style.transform = `translate(${curX}px, ${curY}px)`;
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll("a, button, .product-card, .collection-card").forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });
}

// ---------- COUNTDOWN TIMER ----------
function initCountdown(targetDate, elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  function update() {
    const now = new Date().getTime();
    const distance = new Date(targetDate).getTime() - now;

    if (distance < 0) {
      el.innerHTML = "<span>Sale Ended</span>";
      return;
    }

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    el.innerHTML = `
      <div class="countdown-unit"><span class="countdown-num">${String(hours).padStart(2, "0")}</span><span class="countdown-label">HRS</span></div>
      <div class="countdown-sep">:</div>
      <div class="countdown-unit"><span class="countdown-num">${String(minutes).padStart(2, "0")}</span><span class="countdown-label">MIN</span></div>
      <div class="countdown-sep">:</div>
      <div class="countdown-unit"><span class="countdown-num">${String(seconds).padStart(2, "0")}</span><span class="countdown-label">SEC</span></div>
    `;
  }

  update();
  setInterval(update, 1000);
}

// ---------- HERO SLIDER ----------
function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  if (!slides.length) return;

  let current = 0;
  let autoplay;

  function goTo(index) {
    slides[current].classList.remove("active");
    dots[current] && dots[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    dots[current] && dots[current].classList.add("active");
  }

  function startAutoplay() {
    autoplay = setInterval(() => goTo(current + 1), 5500);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      clearInterval(autoplay);
      goTo(i);
      startAutoplay();
    });
  });

  const prevBtn = document.getElementById("hero-prev");
  const nextBtn = document.getElementById("hero-next");
  if (prevBtn) prevBtn.addEventListener("click", () => { clearInterval(autoplay); goTo(current - 1); startAutoplay(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { clearInterval(autoplay); goTo(current + 1); startAutoplay(); });

  goTo(0);
  startAutoplay();
}

// ---------- SMOOTH SCROLL (anchor links) ----------
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ---------- NEWSLETTER FORM ----------
function initNewsletter() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector("input[type=email]").value;
    if (email) {
      showToast("Welcome to LUXE! Check your inbox for a special offer.", "success");
      form.reset();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  initNewsletter();

  // Flash sale countdown — 8 hours from now
  const saleEnd = new Date(Date.now() + 8 * 60 * 60 * 1000);
  initCountdown(saleEnd, "flash-countdown");
});

// ---------- SCROLL TO TOP ----------
function initScrollTop() {
  let btn = document.getElementById("scroll-top");
  if (!btn) {
    btn = document.createElement("button");
    btn.id = "scroll-top";
    btn.setAttribute("aria-label", "Scroll to top");
    btn.innerHTML = '<i class="bi bi-arrow-up"></i>';
    document.body.appendChild(btn);
  }

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---------- PAGE TRANSITIONS ----------
function initPageTransitions() {
  // Create overlay if it doesn't exist
  let overlay = document.getElementById("page-transition");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "page-transition";
    document.body.appendChild(overlay);
  }

  // Fade in on page load
  overlay.classList.remove("fade-in");
  overlay.classList.add("fade-out");

  // Intercept internal link clicks for smooth transition
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    const href = link.getAttribute("href");
    if (!href) return;

    // Skip: external links, anchors, javascript:, mailto:, tel:
    if (
      href.startsWith("http") ||
      href.startsWith("#") ||
      href.startsWith("javascript") ||
      href.startsWith("mailto") ||
      href.startsWith("tel") ||
      link.target === "_blank" ||
      e.ctrlKey || e.metaKey || e.shiftKey
    ) return;

    // Skip: same page
    const currentPage = window.location.pathname.split("/").pop();
    const targetPage  = href.split("?")[0].split("#")[0];
    if (currentPage === targetPage) return;

    e.preventDefault();

    // Fade out then navigate
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");

    setTimeout(() => {
      window.location.href = href;
    }, 320);
  });
}

