// js/include.js
document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll('[include-html]');
    includes.forEach(async (el) => {
      const file = el.getAttribute('include-html');
      const resp = await fetch(file);
      const text = await resp.text();
      el.innerHTML = text;
    });
  });
  