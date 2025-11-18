// Basic UI interactions: menu toggle, lightbox, year, simple form ack
document.addEventListener('DOMContentLoaded', function () {

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      // toggle display for small screens
      if (mainNav.style.display === 'block') mainNav.style.display = '';
      else mainNav.style.display = 'block';
    });
  }

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbClose = document.getElementById('lbClose');

  document.querySelectorAll('.card-image-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const src = btn.getAttribute('data-img');
      if (!src) return;
      lbImage.src = src;
      lbImage.alt = btn.querySelector('img')?.alt || 'Preview';
      lb.style.display = 'flex';
      lb.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLB() {
    lb.style.display = '';
    lb.setAttribute('aria-hidden', 'true');
    lbImage.src = '';
    document.body.style.overflow = '';
  }
  lbClose.addEventListener('click', closeLB);
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLB();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLB();
  });

  // Fake contact form submit (no backend)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks! Your message has been received.');
      contactForm.reset();
    });
  }

  // Simple "Add" buttons behavior (toast-like)
  document.querySelectorAll('.btn.add, .btn.small.add').forEach(b => {
    b.addEventListener('click', () => {
      b.textContent = 'Added';
      setTimeout(() => b.textContent = 'Add', 900);
    });
  });

});
