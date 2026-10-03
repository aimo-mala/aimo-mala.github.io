// Molingo companions: fluffy SVG stand-ins until the 3D renders are ready.
// Usage: <span class="ch" data-ch="dot"></span>  (o · opeek · dot · puff · bo · lo)

(function () {
  const INK = '#1e1f2b';
  const COL = { o: '--o', opeek: '--o', dot: '--dot', puff: '--puff', bo: '--bo', lo: '--lo' };

  const FUR = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <filter id="fur" x="-20%" y="-20%" width="140%" height="140%" color-interpolation-filters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency="1.1" numOctaves="3" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="4.5" xChannelSelector="R" yChannelSelector="G" result="fuzzy"/>
      <feDiffuseLighting in="noise" surfaceScale="1.6" lighting-color="#fff" result="light"><feDistantLight azimuth="235" elevation="60"/></feDiffuseLighting>
      <feComponentTransfer in="light" result="soft"><feFuncR type="linear" slope=".28" intercept=".74"/><feFuncG type="linear" slope=".28" intercept=".74"/><feFuncB type="linear" slope=".28" intercept=".74"/></feComponentTransfer>
      <feBlend in="fuzzy" in2="soft" mode="multiply" result="tex"/>
      <feComposite in="tex" in2="fuzzy" operator="in"/>
    </filter></defs></svg>`;

  const eye = (x, y, r = 1) =>
    `<ellipse cx="${x}" cy="${y}" rx="${4.6 * r}" ry="${6.2 * r}" fill="${INK}"/>` +
    `<ellipse cx="${x - 1.4 * r}" cy="${y - 2.4 * r}" rx="${1.5 * r}" ry="${1.9 * r}" fill="#fff" opacity=".9"/>`;

  const BODY = {
    o: g => `<path fill-rule="evenodd" d="M60 14a46 46 0 1 1 0 92a46 46 0 1 1 0-92Zm0 27a19 19 0 1 0 0 38a19 19 0 1 0 0-38Z" fill="${g}"/>`,
    opeek: g => BODY.o(g),
    dot: g => `<path d="M60 16C70 16 76 26 84 40L102 74C110 90 101 106 83 106H37C19 106 10 90 18 74L36 40C44 26 50 16 60 16Z" fill="${g}"/>`,
    puff: g => `<g fill="${g}"><circle cx="40" cy="64" r="25"/><circle cx="63" cy="48" r="27"/><circle cx="85" cy="66" r="23"/><circle cx="60" cy="82" r="24"/><circle cx="34" cy="84" r="17"/><circle cx="86" cy="86" r="17"/></g>`,
    bo: g => `<path d="M60 104C30 86 12 68 12 46C12 30 24 18 39 18C49 18 56 24 60 32C64 24 71 18 81 18C96 18 108 30 108 46C108 68 90 86 60 104Z" fill="${g}"/>`,
    lo: g => `<g fill="${g}"><circle cx="40" cy="40" r="15"/><circle cx="80" cy="40" r="15"/><ellipse cx="60" cy="72" rx="44" ry="36"/></g>`
  };

  const FACE = {
    o: '',
    opeek: eye(53, 60, .8) + eye(67, 60, .8),
    dot: `<circle cx="49" cy="70" r="10.5" fill="#fff"/><circle cx="72" cy="70" r="10.5" fill="#fff"/>
      <circle cx="53" cy="71" r="4.4" fill="${INK}"/><circle cx="76" cy="71" r="4.4" fill="${INK}"/>
      <g fill="none" stroke="${INK}" stroke-width="3.2"><circle cx="49" cy="70" r="11.5"/><circle cx="72" cy="70" r="11.5"/><path d="M37.5 68l-6-2M83.5 68l6-2"/></g>
      <g transform="rotate(38 88 36)"><rect x="80" y="30" width="26" height="6" rx="2" fill="#f2c94c"/><path d="M106 30l7 3l-7 3Z" fill="#e8c9a0"/><rect x="77" y="30" width="4" height="6" rx="1.5" fill="#f08aa0"/></g>`,
    puff: eye(54, 64) + eye(72, 64) +
      `<path d="M24 64C24 26 96 26 96 64" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>
       <rect x="14" y="56" width="14" height="22" rx="7" fill="${INK}"/><rect x="92" y="56" width="14" height="22" rx="7" fill="${INK}"/>`,
    bo: eye(48, 56) + eye(72, 56) + `<path d="M18 36Q60 22 102 36L104 44Q60 31 16 44Z" fill="${INK}"/>`,
    lo: eye(40, 40, .95) + eye(80, 40, .95) +
      `<path d="M38 72C40 86 42 96 44 104M82 72C80 86 78 96 76 104" stroke="${INK}" stroke-width="5" stroke-linecap="round" fill="none"/>
       <path d="M52 66q8 5 16 0" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/>`
  };

  const LABEL = { o: 'Molingo O', opeek: 'Molingo O with eyes', dot: 'Dot', puff: 'Puff', bo: 'Bo', lo: 'Lo' };

  // SVG stop-color can't take color-mix()/var() everywhere, so resolve to a concrete colour first
  function resolve(v) {
    const p = document.createElement('i');
    p.style.color = v;
    document.body.appendChild(p);
    const c = getComputedStyle(p).color;
    p.remove();
    return c;
  }

  document.body.insertAdjacentHTML('afterbegin', FUR);
  let uid = 0;
  document.querySelectorAll('[data-ch]').forEach(el => {
    const k = el.dataset.ch, id = ++uid, c = `var(${COL[k]})`;
    const hi = resolve(`color-mix(in oklch, ${c}, white 35%)`), mid = resolve(c), lo = resolve(`color-mix(in oklch, ${c}, black 14%)`);
    if (!el.hasAttribute('aria-hidden')) { el.setAttribute('role', 'img'); el.setAttribute('aria-label', LABEL[k]); }
    el.innerHTML = `<svg viewBox="0 0 120 120"><defs><radialGradient id="g${id}" cx="36%" cy="26%" r="85%">
      <stop offset="0" stop-color="${hi}"/><stop offset=".5" stop-color="${mid}"/><stop offset="1" stop-color="${lo}"/></radialGradient></defs>
      <g filter="url(#fur)">${BODY[k](`url(#g${id})`)}</g>${FACE[k]}</svg>`;
  });
})();
