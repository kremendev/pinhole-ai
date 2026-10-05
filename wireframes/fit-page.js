// Size the printed PDF page to the full wireframe so it exports as one continuous page.
window.addEventListener('load', () => {
  const frame = document.querySelector('.frame');
  const style = document.createElement('style');
  style.textContent = `@page { size: ${frame.offsetWidth}px ${frame.offsetHeight}px; margin: 0; }`;
  document.head.appendChild(style);
});
