/* Ambient golden sparkles floating in the background. */

const SPARKLE_COUNT = 14;

export function initSparkles() {
  const layer = document.querySelector('.sparkles');
  if (!layer || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let html = '';
  for (let i = 0; i < SPARKLE_COUNT; i++) {
    const left = (i / (SPARKLE_COUNT - 1) * 100).toFixed(1);
    const duration = 13 + ((i * 37) % 8);
    const delay = (i * 53) % 12;
    const size = i % 3 === 0 ? 3 : 2;
    const color = i % 3 === 0 ? '#f3d78a' : '#e8c05a';
    html += '<i style="left:' + left + '%;width:' + size + 'px;height:' + size + 'px;box-shadow:0 0 6px ' + color + ';background:' + color
      + ';animation-duration:' + duration + 's;animation-delay:' + delay + 's"></i>';
  }
  layer.innerHTML = html;
}
