(() => {
  const slides = [...document.querySelectorAll('.slide')];
  let current = 0;
  const hud = {
    slide: document.getElementById('hud-slide'),
    target: document.getElementById('hud-alvo'),
    now: document.getElementById('hud-agora'),
    delta: document.getElementById('hud-delta')
  };
  const visible = () => slides.filter((slide) => slide.offsetParent !== null);
  const clockMinutes = (text) => {
    const match = String(text || '').match(/(\d{1,2}):(\d{2})/);
    return match ? Number(match[1]) * 60 + Number(match[2]) : null;
  };
  const update = () => {
    const list = visible();
    if (!list.length) return;
    current = Math.max(0, Math.min(current, list.length - 1));
    const active = list[current];
    active.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (hud.slide) hud.slide.textContent = active.dataset.slide || `${current + 1}/${list.length}`;
    const target = active.dataset.alvo || '--:--';
    if (hud.target) hud.target.textContent = target;
    const now = new Date();
    const nowText = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    if (hud.now) hud.now.textContent = nowText;
    const targetMinutes = clockMinutes(target);
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    if (hud.delta && targetMinutes !== null) {
      const difference = nowMinutes - targetMinutes;
      const label = difference === 0 ? 'em dia' : difference > 0 ? `+${difference} min` : `${difference} min`;
      hud.delta.textContent = label;
      hud.delta.classList.toggle('late', difference > 2);
      hud.delta.classList.toggle('ahead', difference < -2);
    }
  };
  const move = (step) => { current += step; update(); };
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (['arrowright', 'arrowdown', 'pagedown', ' '].includes(key)) { event.preventDefault(); move(1); }
    else if (['arrowleft', 'arrowup', 'pageup'].includes(key)) { event.preventDefault(); move(-1); }
    else if (key === 'home') { event.preventDefault(); current = 0; update(); }
    else if (key === 'end') { event.preventDefault(); current = visible().length - 1; update(); }
    else if (key === 'g') { document.body.classList.toggle('mostrar-gabarito'); }
    else if (key === 'n') { document.body.classList.toggle('mostrar-notas'); }
    else if (key === 'o') { document.body.classList.toggle('hide-optional'); current = 0; update(); }
    else if (key === 'm') { document.body.classList.remove('mostrar-gabarito', 'mostrar-notas', 'hide-optional'); document.body.classList.add('sem-marcas'); current = 0; update(); }
    else if (key === 'h') { document.body.classList.toggle('hud-off'); }
    else if (key === 'f') { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen(); }
  });
  window.setInterval(update, 30000);
  update();
})();
