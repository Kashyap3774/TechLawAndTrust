// =====================================================
// Tech, Law & Trust — Interactive Script
// =====================================================

(function () {
  'use strict';

  // ====== CONFIG ======
  const WHATSAPP_NUMBER = '+919330628567';
  const EMAIL_PRIMARY   = 'contact@techlawandtrust.com';
  const EMAIL_SECONDARY = 'tamalisg@gmail.com';
  const AMAZON_URL      = 'https://www.amazon.in/dp/9356553289';

  // ====== HELPERS ======
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const encode = (str) => encodeURIComponent(str);

  function buildOrderMessage({ name, mobile, address, qty }) {
    return [
      'Order Request – Tech, Law & Trust',
      '─────────────────────',
      `Name:    ${name || '—'}`,
      `Mobile:  ${mobile || '—'}`,
      `Address: ${address || '—'}`,
      `Qty:     ${qty || 1}`,
      '─────────────────────',
      'Looking forward to receiving my copy!',
    ].join('\n');
  }

  function waLink(msg) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encode(msg)}`;
  }

  function mailtoLink(msg) {
    const subject = 'Book Order – Tech, Law & Trust';
    const body = msg + '\n\nPreferred contact emails:\n• ' + EMAIL_PRIMARY + '\n• ' + EMAIL_SECONDARY;
    return `mailto:${EMAIL_PRIMARY}?subject=${encode(subject)}&body=${encode(body)}`;
  }

  // ====== YEAR ======
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ====== DEFAULT ORDER LINKS ======
  const defaultMsg = buildOrderMessage({});
  ['whatsAppTop', 'whatsAppHero', 'whatsAppOrder', 'whatsAppMobile'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = waLink(defaultMsg);
  });
  ['emailTop', 'emailHero', 'emailOrder'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.href = mailtoLink(defaultMsg);
  });

  // ====== AMAZON LINKS ======
  // Any link with the .js-amazon-link class or these IDs gets the Amazon URL,
  // opens in a new tab, and is marked as a noreferrer external link.
  const amazonIds = ['amazonTop', 'amazonHero', 'amazonOrder', 'amazonMobile', 'amazonStrip', 'amazonEvent'];
  amazonIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.href = AMAZON_URL;
      el.target = '_blank';
      el.rel = 'noopener noreferrer';
    }
  });
  $$('.js-amazon-link').forEach((el) => {
    el.href = AMAZON_URL;
    el.target = '_blank';
    el.rel = 'noopener noreferrer';
  });

  // ====== MOBILE NAV ======
  const burger = $('#burgerBtn');
  const mobileNav = $('#mobileNav');

  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      const isOpen = burger.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(isOpen));
      mobileNav.classList.toggle('open', isOpen);
    });

    $$('a', mobileNav).forEach((a) => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('open');
      });
    });
  }

  // ====== HEADER SCROLL STATE ======
  const header = $('#siteHeader');

  function onHeaderScroll() {
    const y = window.scrollY;
    if (header) {
      header.classList.toggle('scrolled', y > 40);
    }
  }

  // ====== READING PROGRESS ======
  const progressBar = $('#readingProgress');
  function updateProgress() {
    if (!progressBar) return;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
    progressBar.style.width = pct + '%';
  }

  // ====== ACTIVE NAV HIGHLIGHT ======
  const sections = $$('section[id]');
  const navLinks = $$('.nav-link');

  function updateActiveNav() {
    const y = window.scrollY + 120;
    let current = '';
    sections.forEach((sec) => {
      if (sec.offsetTop <= y) current = sec.id;
    });
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      // Only auto-toggle for in-page anchors. Cross-page links keep their HTML-set 'active' state.
      if (href && href.startsWith('#')) {
        link.classList.toggle('active', href === '#' + current);
      }
    });
  }

  // ====== BACK TO TOP ======
  const btt = $('#backToTop');
  function updateBackToTop() {
    if (btt) btt.classList.toggle('show', window.scrollY > 600);
  }
  if (btt) {
    btt.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ====== SCROLL LISTENER (throttled via rAF) ======
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        onHeaderScroll();
        updateProgress();
        updateActiveNav();
        updateBackToTop();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // ====== SCROLL REVEAL (IntersectionObserver) ======
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay || 0, 10);
          setTimeout(() => entry.target.classList.add('visible'), delay);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  $$('.reveal').forEach((el) => revealObserver.observe(el));

  // ====== ANIMATED COUNTERS ======
  let countersAnimated = false;
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !countersAnimated) {
          countersAnimated = true;
          animateCounters();
          counterObserver.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsGrid = $('.stats-grid');
  if (statsGrid) counterObserver.observe(statsGrid);

  function animateCounters() {
    $$('.stat-number[data-target]').forEach((el) => {
      const target = parseInt(el.dataset.target, 10);
      const duration = target > 100 ? 1800 : 1200;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - (1 - progress) * (1 - progress);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    });
  }

  // ====== TIMELINE FILL ======
  const timelineFill = $('#timelineFill');
  const timelineTrack = $('.timeline-track');

  if (timelineFill && timelineTrack) {
    const timelineObserver = new IntersectionObserver(
      () => { updateTimelineFill(); },
      { threshold: Array.from({ length: 20 }, (_, i) => i / 19) }
    );

    const timelineSection = $('#roadmap');
    if (timelineSection) timelineObserver.observe(timelineSection);

    function updateTimelineFill() {
      const cards = $$('.timeline-card.visible');
      if (!cards.length) { timelineFill.style.height = '0'; return; }
      const lastCard = cards[cards.length - 1];
      const trackRect = timelineTrack.getBoundingClientRect();
      const markerRect = lastCard.querySelector('.tc-marker').getBoundingClientRect();
      const h = markerRect.top + markerRect.height / 2 - trackRect.top;
      timelineFill.style.height = Math.max(0, h) + 'px';
    }

    const tmMutObs = new MutationObserver(() => updateTimelineFill());
    $$('.timeline-card').forEach((el) => {
      tmMutObs.observe(el, { attributes: true, attributeFilter: ['class'] });
    });
  }

  // ====== ORDER FORM ======
  const form = $('#orderForm');
  const emailFromForm = $('#emailFromForm');

  function getFormData() {
    if (!form) return {};
    const fd = new FormData(form);
    return {
      name: fd.get('name'),
      mobile: fd.get('mobile'),
      address: fd.get('address'),
      qty: fd.get('qty'),
    };
  }

  function validateForm() {
    let valid = true;
    const fields = [
      { name: 'name', label: 'Name is required' },
      { name: 'mobile', label: 'Mobile number is required' },
      { name: 'address', label: 'Delivery address is required' },
    ];

    fields.forEach(({ name, label }) => {
      const input = form.querySelector(`[name="${name}"]`);
      const errorEl = input?.parentElement?.querySelector('.field-error');
      if (input && !input.value.trim()) {
        valid = false;
        input.style.borderColor = '#e85454';
        if (errorEl) errorEl.textContent = label;
      } else if (input) {
        input.style.borderColor = '';
        if (errorEl) errorEl.textContent = '';
      }
    });

    return valid;
  }

  if (form) {
    form.querySelectorAll('input, textarea').forEach((el) => {
      el.addEventListener('input', () => {
        el.style.borderColor = '';
        const errEl = el.parentElement?.querySelector('.field-error');
        if (errEl) errEl.textContent = '';
      });
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      const msg = buildOrderMessage(getFormData());
      window.open(waLink(msg), '_blank');
    });
  }

  if (emailFromForm && form) {
    emailFromForm.addEventListener('click', () => {
      if (!validateForm()) return;
      const msg = buildOrderMessage(getFormData());
      window.location.href = mailtoLink(msg);
    });
  }

  // ====== QUANTITY +/- BUTTONS ======
  $$('.qty-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const input = btn.closest('.qty-control')?.querySelector('input');
      if (!input) return;
      let val = parseInt(input.value, 10) || 1;
      if (btn.dataset.action === 'inc') val++;
      if (btn.dataset.action === 'dec' && val > 1) val--;
      input.value = val;
    });
  });

  // ====== SMOOTH SCROLL for in-page anchor links ======
  $$('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = header ? header.offsetHeight + 8 : 0;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  // =====================================================
  // EVENTS — Lite YouTube + GLightbox
  // =====================================================

  // Lite YouTube — load iframe only on click. Saves ~1.5MB on initial page load.
  $$('.lite-youtube').forEach((el) => {
    el.addEventListener('click', () => {
      if (el.classList.contains('activated')) return;
      const videoId = el.dataset.videoid;
      const title = el.dataset.title || 'YouTube video';
      if (!videoId) return;

      const iframe = document.createElement('iframe');
      iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0');
      iframe.setAttribute('title', title);
      iframe.setAttribute(
        'allow',
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      );
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('loading', 'lazy');

      el.appendChild(iframe);
      el.classList.add('activated');
    });
  });

  // GLightbox — click-to-zoom photo gallery.
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      autoplayVideos: false,
      openEffect: 'zoom',
      closeEffect: 'fade',
    });
  }

  // ====== INIT ======
  onHeaderScroll();
  updateProgress();
  updateActiveNav();
  updateBackToTop();
})();