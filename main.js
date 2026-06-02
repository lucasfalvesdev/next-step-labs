/* ============================================
   LUCAS FERNANDES — PORTFOLIO JS
============================================ */

// ---------- DOWNLOAD CV ----------
function downloadCV() {
  // Substitua pela URL real do seu CV
  const cvUrl = 'assets/curriculo-lucas-fernandes.pdf';

  const a = document.createElement('a');
  a.href = cvUrl;
  a.download = 'Lucas-Fernandes-CV.pdf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// ---------- SCROLL TO TOP ----------
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- SCROLL REVEAL ----------
function initReveal() {
  const sections = document.querySelectorAll('.section, .skill-card, .project-card, .contact-card, .summary-block');

  sections.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger delay based on sibling index
          const siblings = [...entry.target.parentElement.children];
          const idx = siblings.indexOf(entry.target);
          const delay = Math.min(idx * 80, 400);

          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  sections.forEach(el => observer.observe(el));
}

// ---------- ACTIVE NAV LINK ----------
function initActiveNav() {
  const links = document.querySelectorAll('.topbar-links a');
  const sections = document.querySelectorAll('section[id], header[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.topbar-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => observer.observe(s));
}

// ---------- TOPBAR SCROLL EFFECT ----------
function initTopbarScroll() {
  const topbar = document.querySelector('.topbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      topbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.5)';
    } else {
      topbar.style.boxShadow = 'none';
    }
  }, { passive: true });
}

// ---------- TYPING EFFECT (hero-tag) ----------
function initTyping() {
  const el = document.querySelector('.hero-tag');
  if (!el) return;

  const text = el.textContent;
  el.textContent = '';
  el.style.opacity = '1';
  el.style.animation = 'none';

  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 60);
}

// ---------- CURSOR GLOW (desktop only) ----------
function initCursorGlow() {
  if (window.innerWidth < 768) return;

  const cursor = document.createElement('div');
  cursor.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: left 0.15s ease, top 0.15s ease;
  `;
  document.body.appendChild(cursor);

  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  }, { passive: true });
}

// ---------- SKILL BAR ANIMATION ON VIEW ----------
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');

  bars.forEach(bar => {
    bar.style.transform = 'scaleX(0)';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'scaleX(1)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(bar => observer.observe(bar));
}

// ---------- INIT ----------
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initActiveNav();
  initTopbarScroll();
  initTyping();
  initCursorGlow();
  initSkillBars();
});
