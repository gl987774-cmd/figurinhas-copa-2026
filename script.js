// ===========================
// Figurinhas Copa 2026 - Clone
// Interactive Logic
// ===========================

const CHECKOUT_URL = 'https://ggcheckout.app/checkout/v2/z7pkbFon9goeJvqdAgvZ';

/**
 * Redirect to the GG Checkout page
 */
function goToCheckout() {
  window.location.href = CHECKOUT_URL;
}

/**
 * Open the details modal
 */
function openModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Close the details modal
 */
function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

/**
 * Close modal when clicking outside the modal card
 */
function handleOverlayClick(event) {
  if (event.target === event.currentTarget) {
    closeModal();
  }
}

/**
 * Close modal on Escape key
 */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

/**
 * Scroll-reveal: animate elements into view as user scrolls
 */
document.addEventListener('DOMContentLoaded', function () {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach(function (el) {
    observer.observe(el);
  });
});
