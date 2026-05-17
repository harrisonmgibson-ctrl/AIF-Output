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

});
