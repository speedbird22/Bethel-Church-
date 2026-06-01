// BETHEL CHRISTIAN FELLOWSHIP — script.js

/* ---- Burger / Nav Overlay ---- */
var burger = document.getElementById('burgerBtn');
var overlay = document.getElementById('navOverlay');
var closeBtn = document.getElementById('navClose');

function openNav() {
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
burger.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
overlay.querySelectorAll('.nav-ol-link').forEach(function (link) {
  link.addEventListener('click', closeNav);
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeNav();
});

/* ---- Smooth Scroll ---- */
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    var offset = document.getElementById('siteHeader').offsetHeight;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
  });
});

/* ---- Header shrink on scroll ---- */
var header = document.getElementById('siteHeader');
window.addEventListener('scroll', function () {
  if (window.scrollY > 60) {
    header.style.background = 'rgba(5,5,5,0.97)';
  } else {
    header.style.background = 'rgba(10,10,10,0.92)';
  }
  // back to top
  var btn = document.getElementById('backTop');
  if (window.scrollY > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});

/* ---- Back to top ---- */
document.getElementById('backTop').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ---- Hero bg subtle zoom ---- */
var heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  setTimeout(function () { heroBg.style.transform = 'scale(1)'; }, 100);
}

/* ---- Reveal on scroll ---- */
document.querySelectorAll('.section-white > .container > *, .section-dark > .container > *, .about-layout, .services-grid, .contact-cards, .reviews-grid, .location-layout, .overall-rating').forEach(function (el) {
  el.classList.add('reveal');
});
var revealObs = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });

/* ---- Active nav link ---- */
var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-ol-link');
window.addEventListener('scroll', function () {
  var scrollY = window.pageYOffset;
  var current = 'hero';
  sections.forEach(function (sec) {
    if (scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  navLinks.forEach(function (link) {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active-link');
  });
});
