document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  const searchInput = document.querySelector('[data-topic-search]');
  const topicItems = document.querySelectorAll('[data-topic-item]');
  if (searchInput && topicItems.length) {
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.trim().toLowerCase();
      topicItems.forEach((item) => {
        const txt = item.textContent.toLowerCase();
        item.style.display = txt.includes(q) ? '' : 'none';
      });
    });
  }
});
