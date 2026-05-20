document.addEventListener('DOMContentLoaded', () => {

  // Scroll fade-in / fade-out for elements with .fade-in-section
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.fade-in-section').forEach(el => fadeObserver.observe(el));

  // Nav: add shadow when user scrolls down from top
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('nav-scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  // Hamburger menu toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('nav-open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is tapped
    navLinks.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navLinks.classList.remove('nav-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

});

// Progress indicator
const indicator = document.getElementById('progressIndicator');
if (indicator) {
  const steps = indicator.querySelectorAll('.progress-step');
  const sections = [...steps].map(s => document.querySelector('.' + s.dataset.section));
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const idx = sections.indexOf(entry.target);
      if (idx !== -1) steps[idx].classList.toggle('active', entry.isIntersecting);
    });
  }, { threshold: 0.15 });
  sections.forEach(s => s && io.observe(s));
  window.addEventListener('scroll', () => {
    indicator.classList.toggle('visible', window.scrollY > 200);
  }, { passive: true });
}

// Back to top
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
