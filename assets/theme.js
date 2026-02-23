(function () {
  const header = document.querySelector('.site-header[data-sticky="true"]');
  if (header) {
    const sentinel = document.createElement('div');
    header.parentNode.insertBefore(sentinel, header);
    const observer = new IntersectionObserver(
      ([entry]) => {
        header.classList.toggle('is-scrolled', !entry.isIntersecting);
      },
      { threshold: [1] }
    );
    observer.observe(sentinel);
  }

  const promo = document.querySelector('.promo-strip[data-autoscroll="true"] .promo-strip__track');
  if (promo && promo.children.length < 4) {
    promo.innerHTML += promo.innerHTML;
  }

  if (!document.querySelector('.back-to-top')) {
    const btn = document.createElement('button');
    btn.className = 'back-to-top button button--secondary';
    btn.type = 'button';
    btn.textContent = '↑';
    btn.setAttribute('aria-label', 'Back to top');
    btn.style.position = 'fixed';
    btn.style.right = '1rem';
    btn.style.bottom = '5.25rem';
    btn.style.display = 'none';
    btn.style.zIndex = '39';
    document.body.appendChild(btn);

    window.addEventListener('scroll', function () {
      btn.style.display = window.scrollY > 360 ? 'inline-flex' : 'none';
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
