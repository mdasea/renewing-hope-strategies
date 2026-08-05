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

export function initCountUp(): void {
  const nodes = document.querySelectorAll<HTMLElement>('[data-countup]');
  if (!nodes.length) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const runFor = (el: HTMLElement) => {
    const target = Number(el.dataset.countup || '0');
    if (prefersReduced) {
      el.textContent = el.dataset.countupDisplay || String(target);
      el.style.animation = 'none';
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
      else {
        const bar = el.parentElement?.querySelector<HTMLElement>('.impact-bar');
        if (bar) bar.classList.add('is-visible');
      }
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

export function initAccordions(): void {
  const triggers = document.querySelectorAll<HTMLButtonElement>('.accordion-trigger');
  triggers.forEach(trigger => {
    const panel = trigger.nextElementSibling as HTMLElement | null;
    if (!panel) return;
    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
    if (isOpen) panel.classList.add('is-open');
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      trigger.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        panel.classList.remove('is-open');
      } else {
        panel.classList.add('is-open');
      }
    });
  });
}

export function initBackToTop(): void {
  const btn = document.querySelector<HTMLElement>('.back-to-top');
  if (!btn) return;

  const sentinel = document.querySelector<HTMLElement>('.back-to-top-sentinel');
  if (!sentinel) return;

  const io = new IntersectionObserver(
    (entries) => {
      const visible = !entries[0].isIntersecting;
      btn.classList.toggle('is-visible', visible);
    },
    { threshold: 0 }
  );

  io.observe(sentinel);

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export function initFloatLabels(): void {
  document.querySelectorAll<HTMLDivElement>('.field-float').forEach(wrapper => {
    const input = wrapper.querySelector<HTMLInputElement | HTMLTextAreaElement>('.field-input');
    const label = wrapper.querySelector<HTMLElement>('.field-float-label');
    if (!input || !label) return;

    const check = () => {
      label.classList.toggle('is-floating', input.value.length > 0 || document.activeElement === input);
    };

    input.addEventListener('input', check);
    input.addEventListener('focus', check);
    input.addEventListener('blur', check);
    check();
  });
}

export function initCardTilt(): void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasHover = window.matchMedia('(hover: hover)').matches;
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;
  if (prefersReduced || !hasHover || !isDesktop) return;

  const cards = document.querySelectorAll<HTMLElement>('.card-tilt');
  cards.forEach(card => {
    const maxTilt = 3;

    card.addEventListener('mousemove', (e: Event) => {
      const me = e as MouseEvent;
      const rect = card.getBoundingClientRect();
      const x = (me.clientX - rect.left) / rect.width;
      const y = (me.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * maxTilt;
      const rotateX = (0.5 - y) * maxTilt;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(600px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
}

export function initScrollProgressFallback(): void {
  if (CSS.supports('animation-timeline', 'scroll()')) return;

  const bar = document.querySelector<HTMLElement>('.scroll-progress');
  if (!bar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const p = h > 0 ? Math.min(window.scrollY / h, 1) : 0;
        bar.style.transform = `scaleX(${p})`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

export function initParallaxFallback(): void {
  if (CSS.supports('animation-timeline', 'view()')) return;

  // Parallax gracefully degrades; nothing to polyfill.
}

export function initHamburgerMorph(): void {
  const btn = document.getElementById('menuBtn');
  if (!btn) return;

  const hamburgerInner = btn.querySelector<HTMLElement>('.hamburger');
  if (!hamburgerInner) return;

  btn.addEventListener('click', () => {
    hamburgerInner.classList.toggle('is-open');
  });
}

export function initLogoEntrance(): void {
  const logo = document.querySelector<HTMLElement>('[data-logo-entrance]');
  if (!logo) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    logo.style.opacity = '1';
    return;
  }

  logo.classList.add('animate-logo-enter');
  logo.addEventListener('animationend', () => {
    logo.classList.remove('animate-logo-enter');
    logo.style.opacity = '1';
  }, { once: true });
}

export function initFormAJAX(): void {
  document.querySelectorAll<HTMLFormElement>('form[data-ajax]').forEach(form => {
    if (form.dataset.ajaxInit) return;
    form.dataset.ajaxInit = 'true';

    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const label = btn?.querySelector<HTMLElement>('.btn-label');
    const dots = btn?.querySelector<HTMLElement>('.btn-dots');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (btn) {
        btn.classList.add('btn-loading');
        if (dots) dots.classList.remove('hidden');
        if (label) label.classList.add('invisible');
        btn.disabled = true;
      }

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' },
        });

        const data = await response.json();

        if (response.ok) {
          window.__toast?.('Message sent! We\'ll get back to you within one business day.', 'success');
          form.reset();

          // Reset float labels
          form.querySelectorAll<HTMLElement>('.field-float-label').forEach(l => {
            l.classList.remove('is-floating');
          });
        } else {
          const msg = data.error || 'Something went wrong. Please try again or call us.';
          window.__toast?.(msg, 'error');
        }
      } catch {
        window.__toast?.('Network error. Please check your connection and try again.', 'error');
      } finally {
        if (btn) {
          btn.classList.remove('btn-loading');
          if (dots) dots.classList.add('hidden');
          if (label) label.classList.remove('invisible');
          btn.disabled = false;
        }
      }
    });
  });
}

declare global {
  interface Window {
    __toast: (message: string, type: 'success' | 'error') => void;
  }
}

window.__toast = (message: string, type: 'success' | 'error') => {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');

  const icon = type === 'success'
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b2d143" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-5"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e89938" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>';

  toast.innerHTML = `${icon}<span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-exit');
    toast.addEventListener('animationend', () => toast.remove(), { once: true });
  }, 5000);
};

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initCountUp();
  initAccordions();
  initBackToTop();
  initFloatLabels();
  initCardTilt();
  initScrollProgressFallback();
  initParallaxFallback();
  initHamburgerMorph();
  initLogoEntrance();
  initFormAJAX();
});
