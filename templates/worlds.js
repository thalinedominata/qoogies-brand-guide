/* Qoogies worlds pop-up. Shared by every template; load it after crew.js.
   Any element with data-world="<id>" opens the pop-up for that place, ship or pilot moment.
   It borrows crew.js's skin colors (the <script> tag's data-skin), so both pop-ups match.
   Facts come from Brand Guide v2.0 (Ships and Pilot chapters) and the Episode 1 pilot frames. */
(() => {
  const me = document.currentScript;
  const IMG = (me && me.dataset.img) || '../img/hd/';
  const SKIN = (me && me.dataset.skin) || 'glass';

  const WORLDS = {
    sphere: {
      name: 'The Bubble Sphere', kind: 'Homeworld', group: 'Qoogie side', color: '#4FC3F0', deep: '#1F6FD1', art: 'sphere',
      tag: 'Where every Qoogie comes from.',
      blurb: 'The Qoogies are nomadic hydro-formers from the great bubble sphere. They have made rain for arid worlds for as long as anyone can remember, and saved many civilizations without meaning to.',
      facts: [['Who lives here', 'The Qoogies, and the Queen of the Qoogies'], ['Look', 'Aqua glow, iridescent glass, always a little wet'], ['Status', 'Not painted yet. The Queen appears in two episodes but has no design.']],
      crew: ['wisp', 'heelo', 'nonni', 'hydro', 'buoy'],
      swatches: [['Deep Space', '#071229'], ['Abyss', '#0B2F66'], ['Aqua Glow', '#4FC3F0'], ['Bubble Foam', '#E8F6FF']]
    },
    ship: {
      name: 'The Qoogie Ship', kind: 'Ship · Team Aero', group: 'Qoogie side', color: '#8B6CF6', deep: '#4B2FB8', img: 'ship-144', gallery: ['ship-144', 'pilot-56', 'ship-cutaway'],
      tag: 'Made of water and light.',
      blurb: 'A hydro-forming cruiser with a long, rounded glass hull you can see straight through. Crew pods, labs and water tanks glow inside, and three bubble-pod engines push it across the galaxy.',
      facts: [['Class', 'Hydro-forming cruiser'], ['Engines', 'Three bubble-pod engines at the back'], ['On top', 'A glass dome'], ['Inside', 'Command Center, Launch Bay 01, Hatch A and Dr. Nonni Nunu’s lab'], ['Rules', 'Round, soft and glowing. No hard edges, no rivets, no weapons.']],
      beat: ['2:24', 'The Qoogie ship arrives in orbit over Arridia.'],
      crew: ['wisp', 'heelo', 'nonni', 'hydro', 'buoy'],
      swatches: [['Glass Pearl', '#DDEBFF'], ['Thruster Aqua', '#4FC3F0'], ['Hull Sheen', '#8B6CF6'], ['Chrome', '#B9C4D6']]
    },
    command: {
      name: 'Command Center', kind: 'Ship room', group: 'Qoogie side', color: '#F0C64A', deep: '#A6750A', img: 'pilot-27',
      tag: 'Wisp’s chair and the big screen.',
      blurb: 'The bridge of the Qoogie ship. In the pilot, Doc Neon cuts in on the main screen with a video link, and the two leaders meet face to face: lime on one side, aqua on the other.',
      facts: [['In charge', 'Wisp, team leader'], ['Main screen', 'Video link and the target planet list'], ['Signage', 'Big single letters and numbers']],
      beat: ['5:00', 'Wisp and Doc Neon on the video link.'],
      crew: ['wisp', 'docneon'],
      swatches: [['Wisp Gold', '#F0C64A'], ['Aqua Glow', '#4FC3F0'], ['Neon Slime', '#A6D64A'], ['Abyss', '#0B2F66']]
    },
    launchbay: {
      name: 'Launch Bay 01', kind: 'Ship room', group: 'Qoogie side', color: '#FF8A1A', deep: '#C4560A', img: 'pilot-29',
      tag: '“Launch crew ready.”',
      blurb: 'The ground crew lines up here in red suits and gold hard hats before every mission. Spacesuits wait in bubble pods along the walls, and the Q mark is painted on the floor.',
      facts: [['Crew', 'Rows of hard-hat Qoogies'], ['Screen says', '“Launch crew ready”'], ['Marks', 'Q monogram on the floor and screens, Bay 01 on the walls']],
      beat: ['7:20', 'Heelo suits up for the drop to Arridia.'],
      crew: ['heelo', 'hydro', 'buoy'],
      swatches: [['Aero Red', '#C8161D'], ['Hard Hat Gold', '#F2B620'], ['Chrome', '#B9C4D6'], ['Aqua Glow', '#4FC3F0']]
    },
    hatch: {
      name: 'Hatch A', kind: 'Ship room', group: 'Qoogie side', color: '#46C2DB', deep: '#11788C', img: 'pilot-12',
      tag: 'The big round door.',
      blurb: 'A giant letter A marks the ship’s main hatch. Dr. Nonni Nunu floats out of it in a cloud of cool mist, arms crossed, ready for work.',
      facts: [['Signage', 'One huge “A”'], ['Next door', 'Dr. Nonni Nunu’s lab'], ['Feel', 'Clean chrome, cool mist, soft blue light']],
      crew: ['nonni'],
      swatches: [['Turquoise Gel', '#46C2DB'], ['Lab White', '#F4F7FB'], ['Chrome', '#B9C4D6'], ['Hydro Blue', '#1F6FD1']]
    },
    space: {
      name: 'Open Space', kind: 'Environment', group: 'Out there', color: '#5CE1E6', deep: '#2A1670', img: 'pilot-56', gallery: ['pilot-56', 'pilot-1'],
      tag: 'Deep blue with a nebula glow.',
      blurb: 'Between worlds, the ship cruises through deep blue space lit by pink and violet nebulas. About 80 percent of the pilot reads blue, so this is the show’s home color.',
      facts: [['Light', 'Cool blue, with nebula pinks and violets'], ['Rule', 'Keep warm light for conflict. Space stays calm and blue.']],
      crew: ['wisp', 'buoy'],
      swatches: [['Deep Space', '#071229'], ['Violet', '#8B6CF6'], ['Pink', '#FF5FA2'], ['Cyan', '#5CE1E6']]
    },
    arridia: {
      name: 'Arridia', kind: 'Planet · dry world', group: 'Out there', color: '#E2995E', deep: '#914B2F', img: 'pilot-2', gallery: ['pilot-2', 'ship-754', 'pilot-1'],
      tag: 'Dust storms on top. Doc Neon underneath.',
      blurb: 'An orange desert planet wrapped in swirling dust storms, and the target of the pilot. The Qoogies came to make rain. Somewhere under the sand, Doc Neon is waiting.',
      facts: [['Also called', 'Arridia Prime. The 2022 pitch spelled it “Aniridia”.'], ['Weather', 'Dust storms. No rain, yet.'], ['Light', 'Warm, dusty and orange, so the Qoogies’ blue reads as water arriving'], ['Underground', 'Doc Neon’s cavern']],
      beat: ['0:00', 'Cold open: the XBX sting over Arridia, then down into the cavern.'],
      crew: ['wisp', 'heelo', 'docneon', 'neonites'],
      swatches: [['Arridia Dust', '#E2995E'], ['Storm Rust', '#914B2F'], ['Sun Sand', '#F5D093'], ['Red Alert', '#FF2A4D']]
    },
    targets: {
      name: 'Target Worlds', kind: 'Planets', group: 'Out there', color: '#FF8A5C', deep: '#B8432A', art: 'planets',
      tag: 'Six dry planets waiting for rain.',
      blurb: 'The target list on the ship’s screens names six planets. Arridia is the first stop. The other five are named in the pilot but haven’t been designed yet, so they’re open for future episodes.',
      facts: [['On the list', 'Veldra, Terralis, Solen, Arridia, Kaelith, Nova-9'], ['Painted so far', 'Arridia only'], ['Doc Neon’s list', 'Project Aquafy tracks its own “Target worlds” too']],
      crew: ['wisp', 'docneon'],
      swatches: [['Arridia Dust', '#E2995E'], ['Sun Sand', '#F5D093'], ['Coral', '#FF8A5C'], ['Violet', '#8B6CF6']]
    },
    cavern: {
      name: 'Doc Neon’s Cavern', kind: 'Villain base', group: 'Neon side', color: '#A6D64A', deep: '#4F8A2E', img: 'neon-lab', gallery: ['neon-lab', 'pilot-53', 'pilot-27'], villain: true,
      tag: '“Clones for a dry galaxy.”',
      blurb: 'An underground base cut into the dark rock under Arridia, lit by blue holograms and bubbling lime tanks. Neonites in lab coats run the consoles while Doc Neon stomps between them.',
      facts: [['Where', 'Under the surface of Arridia'], ['His tools', 'The Neometer screen and the halo pad'], ['Staff', 'Neonites, plus brown wide-eyed caterpillars that carry the food trays'], ['Banners', '“Clones for a dry galaxy”, under the Neonite crest']],
      beat: ['6:30', 'The Neonite rally.'],
      crew: ['docneon', 'neonites'],
      swatches: [['Deep Space', '#071229'], ['Aqua Glow', '#4FC3F0'], ['Neon Slime', '#A6D64A'], ['Stripe Red', '#C0262D']]
    },
    aquafy: {
      name: 'Project Aquafy', kind: 'Villain control room', group: 'Neon side', color: '#4FE0F0', deep: '#0B2F66', img: 'aquafy', villain: true,
      tag: '“Water ruins everything.”',
      blurb: 'Doc Neon’s war room. A giant holo-globe floats over rows of consoles, with his four-step plan glowing beside it and a wall of target worlds on the right.',
      facts: [['The plan', 'Clone. Deploy. Convert. Complete.'], ['Screens', 'The holo-globe, Target worlds, and “Water ruins everything.”'], ['Banners', '“Arid worlds. Eternal conflict. No more water.” and “Science creates solutions.”']],
      crew: ['docneon'],
      swatches: [['Deep Space', '#071229'], ['Aqua Glow', '#4FC3F0'], ['Pink', '#FF5FA2'], ['Neon Slime', '#A6D64A']]
    },
    hangar: {
      name: 'Rocket Hangar', kind: 'Villain base', group: 'Neon side', color: '#8CFF3F', deep: '#3A4150', img: 'neon-hangar', gallery: ['neon-hangar', 'ship-700', 'ship-703'], villain: true,
      tag: 'Built in the dark. Launched straight up.',
      blurb: 'Rockets are built here under lime-lit tanks and red crest banners, then fired straight up out of a silo in the rock and through the canyon to the sky.',
      facts: [['Lighting', 'Lime light from inside the machines, never from the sky'], ['Exit', 'A silo straight up through the canyon'], ['Banners', 'Red, with Doc Neon’s gold crest']],
      beat: ['11:40', 'Rocket launch from the cavern.'],
      crew: ['docneon', 'neonites'],
      swatches: [['Rocket Green', '#4F8A2E'], ['Stripe Red', '#C0262D'], ['Booster Lime', '#8CFF3F'], ['Gunmetal', '#3A4150']]
    },
    rockets: {
      name: 'Doc Neon’s Rockets', kind: 'Ship · Neonite fleet', group: 'Neon side', color: '#4F8A2E', deep: '#2D5418', img: 'ship-700', gallery: ['ship-700', 'ship-721', 'ship-703'], villain: true,
      tag: 'Made of metal and smoke.',
      blurb: 'Retro 1950s rockets with a pointed nose, tail fins, a red band and Doc Neon’s gold crest. Pointed, vertical and hard: everything the Qoogie ship isn’t.',
      facts: [['Variants', 'Standard rocket, and the heavy launcher with four lime boosters'], ['Material', 'Opaque painted metal, rivets, smoke and dust. Never glass.'], ['Glow', 'Lime, only from engines and tanks'], ['Names', 'Not decided yet']],
      beat: ['11:40', 'The first rocket launches.'],
      crew: ['docneon', 'neonites'],
      swatches: [['Rocket Green', '#4F8A2E'], ['Stripe Red', '#C0262D'], ['Crest Gold', '#D9A93A'], ['Booster Lime', '#8CFF3F'], ['Gunmetal', '#3A4150']]
    },
    tether: {
      name: 'The Water Tether', kind: 'Pilot moment', group: 'Pilot', color: '#36C8F5', deep: '#1F6FD1', img: 'ship-754',
      tag: 'Water beats metal.',
      blurb: 'High over Arridia, Heelo catches a Neonite rocket with a stream of water bubbles. It’s the core of every ship fight in the show: soft water wins against hard metal.',
      facts: [['Who', 'Heelo, in a spacesuit'], ['What', 'A tether of water bubbles'], ['Then', 'Doc Neon gets wet and melts into lime slime']],
      beat: ['12:34', 'Heelo catches the rocket with water.'],
      crew: ['heelo', 'docneon'],
      swatches: [['Flame Orange', '#FF8A1A'], ['Bubble Aqua', '#3FB6E8'], ['Rocket Green', '#4F8A2E'], ['Arridia Dust', '#E2995E']]
    }
  };
  const ORDER = ['sphere', 'ship', 'command', 'launchbay', 'hatch', 'space', 'arridia', 'targets', 'cavern', 'aquafy', 'hangar', 'rockets', 'tether'];

  // Episode 1 beats, from the brand guide's color script. img is null where no clean frame exists yet.
  const PILOT = [
    { t: '0:00', title: 'Cold open', text: 'The XBX sting over Arridia, then down into Doc Neon’s cavern.', img: 'pilot-1', world: 'arridia', mood: '#E2995E' },
    { t: '2:24', title: 'Arrival', text: 'The Qoogie ship slides into orbit over the dust storms.', img: 'ship-144', world: 'ship', mood: '#4FC3F0' },
    { t: '5:00', title: 'The video link', text: 'Doc Neon cuts in on the Command Center screen. Wisp is not impressed.', img: 'pilot-27', world: 'command', mood: '#A6D64A', crew: 'docneon' },
    { t: '6:30', title: 'Neonite rally', text: '“Clones for a dry galaxy!” The Neonites line up in the cavern.', img: 'neon-lab', world: 'cavern', mood: '#7E9A3A', crew: 'neonites' },
    { t: '7:20', title: 'Suit up', text: 'Launch Bay 01. The ground crew is ready and Heelo suits up.', img: 'pilot-29', world: 'launchbay', mood: '#FF8A1A', crew: 'heelo' },
    { t: '9:00', title: 'Snack break', text: 'Doc Neon’s brown, wide-eyed caterpillars carry in the food trays.', img: null, art: 'caterpillar', world: 'cavern', mood: '#A7703D' },
    { t: '11:40', title: 'Launch', text: 'A rocket fires straight up out of the silo.', img: 'ship-700', world: 'hangar', mood: '#C0262D' },
    { t: '12:34', title: 'The catch', text: 'Heelo catches the rocket with a tether of water.', img: 'ship-754', world: 'tether', mood: '#36C8F5', crew: 'heelo' },
    { t: '13:10', title: 'Splash', text: 'Doc Neon gets wet and melts into lime slime.', img: null, art: 'slime', world: 'tether', mood: '#A6D64A', crew: 'docneon' },
    { t: '14:00', title: 'Red alert', text: 'Alarms. Lights. Vessel detected. To be continued.', img: null, art: 'alert', world: 'ship', mood: '#FF2A4D' }
  ];

  const css = `
.qw-dialog{position:fixed;inset:0;margin:0;padding:0;border:0;width:100%;height:100%;max-width:none;max-height:none;background:transparent;overflow:hidden;color:var(--qp-fg)}
.qw-dialog::backdrop{background:transparent}
.qw-scrim{position:absolute;inset:0;background:var(--qp-scrim);backdrop-filter:blur(10px) saturate(1.2);-webkit-backdrop-filter:blur(10px) saturate(1.2)}
.qw-card{position:absolute;left:50%;top:50%;width:min(1120px,calc(100vw - 32px));height:min(700px,calc(100vh - 40px - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px)));transform:translate(-50%,-50%);display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);background:var(--qp-bg);border-radius:var(--qp-radius);box-shadow:var(--qp-shadow);border:var(--qp-border);overflow:hidden}
.qw-stage{position:relative;overflow:hidden;background:var(--d);isolation:isolate}
.qw-stage>img.qw-main{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;animation:qw-drift 22s ease-in-out infinite alternate}
.qw-stage::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(0,0,0,.55));pointer-events:none}
.qw-kind{position:absolute;left:18px;top:16px;z-index:2;font:800 11px/1 var(--qp-label);letter-spacing:.18em;text-transform:uppercase;background:var(--c);color:var(--qp-on-c);padding:8px 12px;border-radius:999px}
.qw-gal{position:absolute;left:16px;bottom:16px;z-index:2;display:flex;gap:8px}
.qw-gal button{width:72px;aspect-ratio:16/10;border-radius:10px;border:2px solid rgba(255,255,255,.55);padding:0;overflow:hidden;cursor:pointer;background:#000;opacity:.75;transition:opacity .2s,transform .2s}
.qw-gal button[aria-pressed="true"]{opacity:1;border-color:#fff;transform:translateY(-3px)}
.qw-gal img{width:100%;height:100%;object-fit:cover}
.qw-art{position:absolute;inset:0;display:grid;place-items:center}
.qw-art .orb{width:62%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 32% 28%,rgba(255,255,255,.95) 0 6%,rgba(255,255,255,.15) 18%,transparent 40%),radial-gradient(circle,rgba(79,195,240,.35) 0 52%,rgba(92,225,230,.7) 66%,rgba(255,95,162,.55) 80%,rgba(139,108,246,.7) 92%,transparent 100%);box-shadow:0 0 90px rgba(79,195,240,.6);animation:qw-breathe 6s ease-in-out infinite}
.qw-art .mini{position:absolute;border-radius:50%;background:radial-gradient(circle at 30% 28%,#fff 0 10%,transparent 30%),radial-gradient(circle,transparent 55%,rgba(92,225,230,.7) 75%,rgba(139,108,246,.6) 92%,transparent);animation:qw-float 7s ease-in-out infinite}
.qw-art.planets{grid-template-columns:repeat(3,1fr);gap:6%;padding:10%;align-content:center}
.qw-art.planets div{display:grid;justify-items:center;gap:8px;font:800 12px/1 var(--qp-label);letter-spacing:.14em;text-transform:uppercase;color:#fff}
.qw-art.planets i{width:min(110px,18vw);aspect-ratio:1;border-radius:50%;box-shadow:inset -14px -10px 0 rgba(0,0,0,.25),0 10px 30px rgba(0,0,0,.3);animation:qw-float 6s ease-in-out infinite}
.qw-art.planets i.q{outline:3px dashed rgba(255,255,255,.6);outline-offset:6px}
.qw-body{position:relative;overflow-y:auto;overscroll-behavior:contain;padding:clamp(22px,3.2vw,38px);display:grid;gap:14px;align-content:start;min-width:0}
.qw-group{font:700 12px/1 var(--qp-label);letter-spacing:.18em;text-transform:uppercase;color:var(--qp-dim)}
.qw-name{font:400 clamp(36px,4.6vw,58px)/.95 var(--qp-display);margin:0;text-wrap:balance}
.qw-tag{font:800 clamp(17px,1.8vw,20px)/1.3 var(--qp-body);color:var(--qp-accent);margin:0}
.qw-blurb{margin:0;font:400 16px/1.6 var(--qp-body);color:var(--qp-fg2)}
.qw-facts{display:grid;grid-template-columns:auto 1fr;gap:8px 16px;margin:0;font:400 15px/1.45 var(--qp-body)}
.qw-facts dt{font:700 11px/1.9 var(--qp-label);letter-spacing:.16em;text-transform:uppercase;color:var(--qp-dim)}
.qw-facts dd{margin:0}
.qw-beat{display:flex;gap:12px;align-items:center;margin:0;padding:12px 14px;border-radius:14px;background:var(--qp-chip);font:700 14px/1.4 var(--qp-body)}
.qw-beat code{font:800 13px/1 var(--qp-label);background:var(--c);color:var(--qp-on-c);padding:7px 9px;border-radius:8px;letter-spacing:.06em}
.qw-seen{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.qw-seen span{font:700 11px/1 var(--qp-label);letter-spacing:.16em;text-transform:uppercase;color:var(--qp-dim);margin-right:4px}
.qw-seen button{width:44px;height:44px;border-radius:50%;padding:0;border:2px solid var(--cc);background:var(--qp-chip);overflow:hidden;cursor:pointer;transition:transform .15s}
.qw-seen button:hover{transform:translateY(-3px) scale(1.06)}
.qw-seen img{width:100%;height:100%;object-fit:cover;object-position:50% 8%}
.qw-sw{display:flex;flex-wrap:wrap;gap:10px}
.qw-sw div{display:flex;align-items:center;gap:8px;font:600 12px/1.2 var(--qp-label);color:var(--qp-dim)}
.qw-sw i{width:24px;height:24px;border-radius:50%;box-shadow:inset 0 0 0 2px rgba(255,255,255,.35),0 0 0 1px rgba(0,0,0,.15)}
.qw-nav{display:flex;align-items:center;gap:8px;padding-top:8px;border-top:1px solid var(--qp-rule);font:700 13px/1.2 var(--qp-label);color:var(--qp-dim)}
.qw-nav button{border:0;cursor:pointer;background:var(--qp-chip);color:var(--qp-fg);font:800 13px/1 var(--qp-label);padding:11px 14px;border-radius:12px;letter-spacing:.06em}
.qw-nav .sp{flex:1;text-align:center}
.qw-x{position:absolute;right:14px;top:14px;z-index:3;width:46px;height:46px;border-radius:50%;border:0;cursor:pointer;background:var(--qp-x);color:var(--qp-x-fg);font:700 22px/1 system-ui;display:grid;place-items:center;box-shadow:0 4px 14px rgba(0,0,0,.2)}
.qw-dialog :focus-visible{outline:3px solid var(--qp-focus);outline-offset:2px}
.qw-ripple{position:fixed;border-radius:50%;border:3px solid #fff;pointer-events:none;z-index:2147483647}
.qw-in{opacity:0}
@keyframes qw-drift{from{transform:scale(1.02) translate(0,0)}to{transform:scale(1.12) translate(-2%,-1.5%)}}
@keyframes qw-breathe{50%{transform:scale(1.04)}}
@keyframes qw-float{50%{transform:translateY(-12px)}}
[data-world]{cursor:pointer}
@media (max-width:760px){
  .qw-card{grid-template-columns:1fr;grid-template-rows:38% 1fr;height:calc(100vh - 24px - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px));width:calc(100vw - 20px)}
  .qw-gal button{width:56px}
  .qw-name{font-size:36px}
}
@media (prefers-reduced-motion:reduce){.qw-stage>img.qw-main,.qw-art .orb,.qw-art .mini,.qw-art.planets i{animation:none}}
.qp-skin-comic .qw-stage{border-right:4px solid #0E1A3A}
.qp-skin-comic .qw-name{-webkit-text-stroke:2px #0E1A3A;color:var(--c);paint-order:stroke fill;text-shadow:4px 4px 0 #0E1A3A}
.qp-skin-comic .qw-x{border:3px solid #0E1A3A;box-shadow:3px 3px 0 #0E1A3A}
.qp-skin-hud .qw-stage::before{content:"";position:absolute;inset:0;z-index:1;background:repeating-linear-gradient(0deg,rgba(255,255,255,.05) 0 1px,transparent 1px 4px);pointer-events:none}
.qp-skin-editorial .qw-tag{font-family:var(--qp-display);font-weight:400;font-size:clamp(22px,2.4vw,28px);border-left:6px solid var(--c);padding-left:14px;color:var(--qp-fg)}
.qp-skin-notebook .qw-stage{margin:16px;border-radius:6px;box-shadow:6px 8px 0 rgba(27,42,74,.18);transform:rotate(-1.2deg)}
.qp-skin-blueprint .qw-stage{border-right:2px solid rgba(255,255,255,.6)}
.qp-skin-tv .qw-stage{margin:14px;border-radius:28px;border:5px solid #2A1458}
`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const dlg = document.createElement('dialog');
  dlg.className = 'qw-dialog qp-skin-' + SKIN;
  dlg.setAttribute('aria-labelledby', 'qw-name');
  dlg.innerHTML = '<div class="qw-scrim"></div><div class="qw-card" role="document"><button class="qw-x" type="button" aria-label="Close">✕</button><div class="qw-stage"></div><div class="qw-body"></div></div>';
  const ready = () => document.body.appendChild(dlg);
  if (document.body) ready(); else document.addEventListener('DOMContentLoaded', ready);
  dlg.style.setProperty('--qp-display', '"Lilita One","Arial Rounded MT Bold",system-ui,sans-serif');
  dlg.style.setProperty('--qp-label', '"Exo 2","Trebuchet MS",system-ui,sans-serif');
  dlg.style.setProperty('--qp-body', '"Nunito","Segoe UI",system-ui,sans-serif');

  const card = dlg.querySelector('.qw-card'), stage = dlg.querySelector('.qw-stage'), body = dlg.querySelector('.qw-body'), scrim = dlg.querySelector('.qw-scrim');
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const crewData = () => (window.QoogiePopup && window.QoogiePopup.crew) || {};
  let current = null, origin = null, busy = false;

  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

  function artHTML(w) {
    if (w.art === 'sphere') {
      const minis = [[12, 18, 40], [78, 14, 26], [84, 70, 54], [8, 72, 34], [60, 86, 22], [30, 8, 18]].map(([x, y, s], i) => `<span class="mini" style="left:${x}%;top:${y}%;width:${s}px;height:${s}px;animation-delay:-${i * 1.3}s"></span>`).join('');
      return `<div class="qw-art" style="background:radial-gradient(60% 60% at 50% 45%,#1F6FD1,#071229)"><span class="orb"></span>${minis}<img src="${IMG}ship-icon.webp" alt="" style="position:absolute;width:24%;left:58%;top:62%;animation:qw-float 5s ease-in-out infinite"></div>`;
    }
    if (w.art === 'planets') {
      const P = [['Veldra', '#7FC8A9'], ['Terralis', '#C98A4B'], ['Solen', '#F5D093'], ['Arridia', '#E2995E'], ['Kaelith', '#B38AD9'], ['Nova-9', '#8FA3BF']];
      return `<div class="qw-art planets" style="background:radial-gradient(70% 70% at 50% 40%,#2A1670,#071229)">${P.map(([n, c], i) => `<div><i class="${n === 'Arridia' ? '' : 'q'}" style="background:${n === 'Arridia' ? `url(${IMG}pilot-2.jpg) 60% 40%/260% auto` : `radial-gradient(circle at 35% 30%,#fff6,transparent 45%),${c}`};animation-delay:-${i}s"></i>${n}</div>`).join('')}</div>`;
    }
    return '';
  }

  function show(src) {
    const img = stage.querySelector('.qw-main');
    if (!img) return;
    img.src = IMG + src + '.jpg';
    stage.querySelectorAll('.qw-gal button').forEach(b => b.setAttribute('aria-pressed', b.dataset.src === src));
    if (!reduce()) img.animate([{ opacity: 0, filter: 'blur(8px)' }, { opacity: 1, filter: 'blur(0)' }], { duration: 380, easing: 'ease-out' });
  }

  function render(id) {
    const w = WORLDS[id], C = crewData();
    current = id;
    card.style.setProperty('--c', w.color);
    card.style.setProperty('--d', w.deep);
    const gal = (w.gallery || []).map(g => `<button type="button" data-src="${g}" aria-pressed="${g === w.img}" aria-label="Show another view"><img src="${IMG}${g}.jpg" alt=""></button>`).join('');
    stage.innerHTML = (w.img ? `<img class="qw-main" src="${IMG}${w.img}.jpg" alt="${esc(w.name)}, from the pilot">` : artHTML(w)) + `<span class="qw-kind">${esc(w.kind)}</span>` + (gal ? `<div class="qw-gal">${gal}</div>` : '');
    const facts = w.facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('');
    const seen = (w.crew || []).filter(k => C[k]).map(k => `<button type="button" data-crew="${k}" style="--cc:${C[k].color}" aria-label="Open ${esc(C[k].name)}'s profile"><img src="${IMG}face-${k}.webp" alt=""></button>`).join('');
    const i = ORDER.indexOf(id), prev = WORLDS[ORDER[(i - 1 + ORDER.length) % ORDER.length]], next = WORLDS[ORDER[(i + 1) % ORDER.length]];
    body.innerHTML = `
      <div class="qw-group qw-in">${esc(w.group)}</div>
      <h2 class="qw-name qw-in" id="qw-name">${esc(w.name)}</h2>
      <p class="qw-tag qw-in">${esc(w.tag)}</p>
      <p class="qw-blurb qw-in">${esc(w.blurb)}</p>
      <dl class="qw-facts qw-in">${facts}</dl>
      ${w.beat ? `<p class="qw-beat qw-in"><code>${w.beat[0]}</code><span>In the pilot: ${esc(w.beat[1])}</span></p>` : ''}
      ${seen ? `<div class="qw-seen qw-in"><span>Seen here</span>${seen}</div>` : ''}
      <div class="qw-sw qw-in">${w.swatches.map(([n, h]) => `<div><i style="background:${h}"></i>${esc(n)}</div>`).join('')}</div>
      <div class="qw-nav qw-in"><button type="button" data-step="-1" aria-label="Previous: ${esc(prev.name)}">← ${esc(prev.name)}</button><span class="sp">${i + 1} / ${ORDER.length}</span><button type="button" data-step="1" aria-label="Next: ${esc(next.name)}">${esc(next.name)} →</button></div>`;
    body.scrollTop = 0;
  }

  function stagger() {
    const els = body.querySelectorAll('.qw-in');
    if (reduce()) { els.forEach(e => e.style.opacity = 1); return; }
    els.forEach((e, i) => e.animate([{ opacity: 0, transform: 'translateX(18px)' }, { opacity: 1, transform: 'none' }], { duration: 380, delay: 200 + i * 50, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }));
    const m = stage.querySelector('.qw-main, .qw-art');
    if (m) m.animate([{ transform: 'scale(1.25)', filter: 'blur(6px)' }, { transform: 'scale(1)', filter: 'blur(0)' }], { duration: 700, easing: 'cubic-bezier(.2,.8,.2,1)' });
  }

  // the card opens like a porthole: a circle of water spreading out from the tapped tile, then a ripple settles it
  function hole(r) {
    const c = card.getBoundingClientRect();
    const x = r ? r.left + r.width / 2 - c.left : c.width / 2, y = r ? r.top + r.height / 2 - c.top : c.height / 2;
    const start = r ? Math.max(r.width, r.height) / 2 : 30;
    return { x, y, start, end: Math.hypot(Math.max(x, c.width - x), Math.max(y, c.height - y)) + 20 };
  }

  function ripple(r, color) {
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    [0, 120].forEach(delay => {
      const p = document.createElement('span');
      p.className = 'qw-ripple';
      Object.assign(p.style, { left: cx - 40 + 'px', top: cy - 40 + 'px', width: '80px', height: '80px', borderColor: color });
      document.body.appendChild(p);
      p.animate([{ transform: 'scale(.3)', opacity: 1 }, { transform: 'scale(2.4)', opacity: 0 }], { duration: 520, delay, easing: 'ease-out', fill: 'backwards' }).onfinish = () => p.remove();
    });
  }

  function open(id, el) {
    if (!WORLDS[id] || busy) return;
    origin = el || null;
    render(id);
    dlg.showModal();
    document.documentElement.style.overflow = 'hidden';
    if (reduce()) { card.animate([{ opacity: 0 }, { opacity: 1 }], 200); stagger(); return; }
    busy = true;
    const r = el ? el.getBoundingClientRect() : null;
    const h = hole(r);
    if (r) ripple(r, WORLDS[id].color);
    scrim.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, fill: 'both' });
    const a = card.animate([
      { clipPath: `circle(${h.start}px at ${h.x}px ${h.y}px)`, transform: 'translate(-50%,-50%) scale(.94)' },
      { clipPath: `circle(${h.end}px at ${h.x}px ${h.y}px)`, transform: 'translate(-50%,-50%) scale(1.015)', offset: .7 },
      { clipPath: `circle(${h.end}px at ${h.x}px ${h.y}px)`, transform: 'translate(-50%,-50%) scale(1)' }
    ], { duration: 760, easing: 'cubic-bezier(.3,.7,.2,1)' });
    stagger();
    a.onfinish = () => { busy = false; };
    dlg.querySelector('.qw-x').focus({ preventScroll: true });
  }

  function close() {
    if (!dlg.open || busy) return;
    const done = () => { dlg.close(); if (!document.querySelector('dialog[open]')) document.documentElement.style.overflow = ''; busy = false; if (origin && document.contains(origin)) origin.focus({ preventScroll: true }); };
    if (reduce()) { card.animate([{ opacity: 1 }, { opacity: 0 }], 160).onfinish = done; return; }
    busy = true;
    const r0 = origin && document.contains(origin) ? origin.getBoundingClientRect() : null;
    const r = r0 && r0.bottom > 0 && r0.top < innerHeight ? r0 : null;
    const h = hole(r);
    scrim.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 440, fill: 'both' });
    // drains back into the tile it came from
    card.animate([
      { clipPath: `circle(${h.end}px at ${h.x}px ${h.y}px)`, transform: 'translate(-50%,-50%) scale(1)' },
      { clipPath: `circle(${h.start}px at ${h.x}px ${h.y}px)`, transform: 'translate(-50%,-50%) scale(.96)' }
    ], { duration: 460, easing: 'cubic-bezier(.6,0,.8,.4)', fill: 'forwards' }).onfinish = () => {
      if (r) ripple(r, WORLDS[current].color);
      card.getAnimations().forEach(x => x.cancel());
      done();
    };
  }

  function step(n) {
    const id = ORDER[(ORDER.indexOf(current) + n + ORDER.length) % ORDER.length];
    if (!reduce()) card.animate([{ transform: 'translate(-50%,-50%)' }, { transform: `translate(calc(-50% + ${n * -10}px),-50%)` }, { transform: 'translate(-50%,-50%)' }], { duration: 320, easing: 'ease-out' });
    render(id); stagger();
  }

  dlg.addEventListener('click', e => {
    if (e.target === scrim || e.target.closest('.qw-x')) return close();
    const g = e.target.closest('[data-src]'); if (g) return show(g.dataset.src);
    const s = e.target.closest('[data-step]'); if (s) return step(+s.dataset.step);
  });
  dlg.addEventListener('cancel', e => { e.preventDefault(); close(); });
  dlg.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });

  document.addEventListener('click', e => {
    const t = e.target.closest('[data-world]');
    if (!t || dlg.contains(t)) return;
    e.preventDefault();
    open(t.dataset.world, t);
  });
  document.addEventListener('keydown', e => {
    const t = e.target.closest && e.target.closest('[data-world]');
    if (t && (e.key === 'Enter' || e.key === ' ') && !/^(A|BUTTON)$/.test(t.tagName)) { e.preventDefault(); open(t.dataset.world, t); }
  });
  const prep = () => document.querySelectorAll('[data-world]').forEach(el => {
    if (!/^(A|BUTTON)$/.test(el.tagName)) { el.tabIndex = 0; el.setAttribute('role', 'button'); }
    if (!el.getAttribute('aria-label') && WORLDS[el.dataset.world]) el.setAttribute('aria-label', 'Explore ' + WORLDS[el.dataset.world].name);
  });
  if (document.readyState !== 'loading') prep(); else document.addEventListener('DOMContentLoaded', prep);

  window.QoogieWorlds = { open, close, worlds: WORLDS, order: ORDER, pilot: PILOT };
})();
