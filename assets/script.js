const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
}

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const value = button.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(value);
      const old = button.textContent;
      button.textContent = 'Copied!';
      setTimeout(() => button.textContent = old, 1600);
    } catch (_) {
      window.prompt('Copy this value:', value);
    }
  });
});

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
