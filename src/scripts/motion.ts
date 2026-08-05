// Lightweight scroll-reveal using IntersectionObserver; no framework.
// Adds .is-visible to .reveal elements when they enter the viewport.
// Stagger handled via inline style transition-delay set in markup.
export function initReveal(): void {
  const els = document.querySelectorAll<HTMLElement>('.reveal');
  if (!els.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
  );

  els.forEach(el => io.observe(el));
}

// Count-up for [data-countup] numeric stats.
export function initCountUp(): void {
  const nodes = document.querySelectorAll<HTMLElement>('[data-countup]');
  if (!nodes.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const runFor = (el: HTMLElement) => {
    const target = Number(el.dataset.countup || '0');
    if (prefersReduced) {
      el.textContent = el.dataset.countupDisplay || String(target);
      return;
    }
    const duration = 1100;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = el.dataset.countupDisplay
        ? (el.dataset.countupDisplay as string).replace('{n}', String(val))
        : String(val);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        runFor(e.target as HTMLElement);
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.4 });

  nodes.forEach(n => io.observe(n));
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initCountUp();
});