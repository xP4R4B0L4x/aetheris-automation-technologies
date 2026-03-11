/* ══════════════════════════════════════════
   ÆTHERIS — Shared Site Scripts
══════════════════════════════════════════ */

/* ── STARFIELD ── */
(function () {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [], particles = [];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }

  function initStars() {
    stars = [];
    for (let i = 0; i < 220; i++) {
      stars.push({
        x: Math.random() * W, y: Math.random() * H,
        r: Math.random() * 1.0 + 0.1,
        o: Math.random() * 0.5 + 0.08,
        sp: Math.random() * 0.01 + 0.003,
        ph: Math.random() * Math.PI * 2
      });
    }
    particles = [];
    const cols = ['rgba(177,31,42,', 'rgba(46,168,168,', 'rgba(77,163,255,', 'rgba(217,164,0,'];
    for (let i = 0; i < 14; i++) {
      const col = cols[Math.floor(Math.random() * cols.length)];
      particles.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.4 + 0.4,
        o: Math.random() * 0.25 + 0.05,
        col, life: 0, max: 500 + Math.random() * 400
      });
    }
  }

  function spawnParticle() {
    const cols = ['rgba(177,31,42,', 'rgba(46,168,168,', 'rgba(77,163,255,', 'rgba(217,164,0,'];
    const col = cols[Math.floor(Math.random() * cols.length)];
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.4 + 0.4, o: Math.random() * 0.25 + 0.05,
      col, life: 0, max: 500 + Math.random() * 400
    });
  }

  let t = 0;
  function draw() {
    ctx.clearRect(0, 0, W, H);
    t += 0.01;

    // faint grid
    ctx.strokeStyle = 'rgba(177,31,42,0.02)'; ctx.lineWidth = 1;
    for (let x = 0; x < W; x += 120) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    for (let y = 0; y < H; y += 120) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

    // stars
    for (const s of stars) {
      const o = s.o * (0.35 + 0.65 * Math.abs(Math.sin(t * s.sp + s.ph)));
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(242,245,247,${o})`; ctx.fill();
    }

    // color particles
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx; p.y += p.vy; p.life++;
      if (p.life > p.max) { particles.splice(i, 1); spawnParticle(); continue; }
      const f = Math.min(p.life / 80, 1) * Math.min((p.max - p.life) / 80, 1);
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.col + (p.o * f) + ')'; ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  resize(); initStars(); draw();
  window.addEventListener('resize', () => { resize(); initStars(); });
})();

/* ── MOBILE NAV ── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', () => menu.classList.toggle('open'));
})();

/* ── ACTIVE NAV LINK ── */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ── SCROLL REVEAL ── */
(function () {
  const els = document.querySelectorAll('.fade-up');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // If this element is also a stat-animate, fire counters after fade-in delay
        if (e.target.classList.contains('stat-animate')) {
          const delay = parseFloat(getComputedStyle(e.target).transitionDelay) * 1000 || 0;
          setTimeout(() => e.target.querySelectorAll('[data-target]').forEach(window._animateStat), delay + 50);
        }
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
})();

/* ── ANIMATED COUNTERS ── */
(function () {
  function animate(el) {
    if (el.dataset.animated) return; // prevent double-fire
    el.dataset.animated = '1';
    const target = parseFloat(el.dataset.target);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const dur = 1600;
    const start = performance.now();
    (function step(now) {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const val = target * ease;
      el.textContent = prefix + (Number.isInteger(target) ? Math.round(val) : val.toFixed(1)) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('[data-target]').forEach(animate);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.05 });
  window._animateStat = animate;
  // Observe ALL stat-animate elements — the animate() fn is idempotent (data-animated guard)
  document.querySelectorAll('.stat-animate').forEach(el => io.observe(el));
})();
