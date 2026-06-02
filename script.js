/* =========================================================
   ANDIAMO RISTORANTE — script.js
   ========================================================= */
(function () {
  "use strict";

  /* ---- Current year in footer ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Header shadow on scroll ---- */
  var header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Mobile nav toggle ---- */
  var toggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  toggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  // Close the menu when a link is tapped
  navLinks.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      navLinks.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---- Menu category tabs ---- */
  var tabs = document.querySelectorAll(".menu-tab");
  var panels = document.querySelectorAll(".menu-panel");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var cat = tab.getAttribute("data-cat");
      tabs.forEach(function (t) { t.classList.remove("is-active"); });
      tab.classList.add("is-active");
      panels.forEach(function (p) {
        p.classList.toggle("is-active", p.getAttribute("data-cat") === cat);
      });
    });
  });

  /* ---- Reveal-on-scroll ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Review carousel dots ---- */
  var track = document.getElementById("reviewTrack");
  var dotsWrap = document.getElementById("reviewDots");
  if (track && dotsWrap) {
    var reviews = track.querySelectorAll(".review");
    reviews.forEach(function (_, i) {
      var b = document.createElement("button");
      b.setAttribute("aria-label", "Go to review " + (i + 1));
      if (i === 0) b.classList.add("active");
      b.addEventListener("click", function () {
        reviews[i].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      });
      dotsWrap.appendChild(b);
    });
    var dots = dotsWrap.querySelectorAll("button");
    // Highlight the dot for whichever review is centered
    var rio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var idx = Array.prototype.indexOf.call(reviews, e.target);
          dots.forEach(function (d, di) { d.classList.toggle("active", di === idx); });
        }
      });
    }, { root: track, threshold: 0.6 });
    reviews.forEach(function (r) { rio.observe(r); });
  }
})();
