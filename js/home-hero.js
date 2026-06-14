(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var heroTitle = document.querySelector('[data-typewriter]');
    if (!heroTitle) return;

    var text = heroTitle.getAttribute('data-typewriter') || '';
    var index = 0;
    heroTitle.textContent = '';

    function typeNext() {
      if (index >= text.length) {
        heroTitle.classList.add('is-complete');
        return;
      }

      heroTitle.textContent += text.charAt(index);
      index += 1;
      window.setTimeout(typeNext, index === 1 ? 360 : 180);
    }

    window.setTimeout(typeNext, 260);
  });
})();
