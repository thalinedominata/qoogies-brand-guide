/* Qoogies character pop-up. Shared by every template.
   Any element with data-crew="<id>" opens the pop-up for that character.
   The <script> tag's data-skin picks the look: glass, comic, hud, pop, space, editorial.
   Character facts come from the 2026 character sheets and Brand Guide v2.0. */
(() => {
  const IMG = (document.currentScript && document.currentScript.dataset.img) || '../img/hd/';
  const SKIN = (document.currentScript && document.currentScript.dataset.skin) || 'glass';

  const CREW = {
    wisp: {
      name: 'Wisp', role: 'Team Leader', side: 'Team Aero', color: '#F0C64A', deep: '#A6750A',
      quote: 'Bigger waves. Brighter worlds.', quote2: 'Lead today. Brighter tomorrows ahead.',
      motto: ['Lead.', 'Explore.', 'Protect.', 'A brighter tomorrow.'],
      bio: 'Wisp is the natural leader of the Qoogies. Brave, strategic and always ready for the next mission, he guides the team as they travel the galaxy bringing water and life to arid worlds.',
      facts: [['Species', 'A vaporous humanoid in bubble form'], ['Strengths', 'Strategy, leadership, exploration, quick thinking'], ['Goal', 'Bring water, life and hope to arid worlds']],
      traits: ['Confident', 'Brave', 'Optimistic', 'Inspirational'],
      look: 'Blond swoop hair and red goggles. The only Qoogie whose hair reads as metallic gold.',
      swatches: [['Wisp Gold', '#F0C64A'], ['Goggle Red', '#E2262B'], ['Aero Red', '#C8161D'], ['Bubble Aqua', '#3FA9E8']],
      heads: 2.5
    },
    heelo: {
      name: 'Heelo', role: 'Tension Specialist', side: 'Team Aero', color: '#FF8A1A', deep: '#C4560A',
      quote: "Keep it together. That's the power.", quote2: 'Tension turns challenges into opportunities.',
      motto: ['Tension creates balance.', 'Balance creates brighter worlds.'],
      bio: "Heelo knows tension isn't a bad thing. It can create stability, strength and balance. Fearless and inventive, he keeps everyone grounded, even when things get wobbly.",
      facts: [['Species', 'Qoogie (bubble form)'], ['Strengths', 'Problem-solving, focus, stability, quick thinking'], ['Method', 'Science, teamwork, innovation']],
      traits: ['Confident', 'Energetic', 'Witty', 'Dependable'],
      look: 'Flame-spike orange hair and a yellow hi-vis jacket with red stripes.',
      fun: 'Read in Japanese, “Heelo” sounds like ヒーロー: hero.',
      swatches: [['Flame Orange', '#FF8A1A'], ['Hi-Vis Yellow', '#F6B92A'], ['Stripe Red', '#D0262A'], ['Bubble Aqua', '#3FB6E8']],
      heads: 2.6
    },
    nonni: {
      name: 'Dr. Nonni Nunu', short: 'Nonni', role: 'Hyper Wave Specialist', side: 'Team Aero', color: '#46C2DB', deep: '#11788C',
      quote: 'Every wave has a story to tell.', quote2: 'Waves bring worlds together.',
      motto: ['Water creates life.', 'Waves connect worlds.'],
      bio: 'A brilliant and kind scientist who studies hyper waves. Her inventions help the Qoogies bring water to arid worlds, proving that even the smallest wave can make a massive difference.',
      facts: [['Species', 'Qoogie (bubble form)'], ['Intelligence', 'Genius'], ['Method', 'Hyper wave technology']],
      traits: ['Kind', 'Intelligent', 'Curious', 'Optimistic'],
      look: 'Chestnut bob, gold round glasses and a white lab coat. The only lead in white.',
      swatches: [['Chestnut', '#7A3E26'], ['Lens Gold', '#E8B830'], ['Lab White', '#F4F7FB'], ['Turquoise Gel', '#46C2DB']],
      heads: 2.5
    },
    hydro: {
      name: 'Hydro', role: 'Mixologist', side: 'Team Aero', color: '#36C8F5', deep: '#1F6FD1',
      quote: 'A better tomorrow can be brewed.', quote2: 'Different elements. Brighter possibilities.',
      motto: ['Different elements.', 'Brighter possibilities.'],
      bio: 'Hydro mixes elements and experiments with new solutions. Calm and optimistic, he believes every challenge can be improved with the right mix.',
      facts: [['Species', 'Qoogie (bubble form)'], ['Strengths', 'Creativity, experimentation, teamwork'], ['Method', 'Science, experimentation, mixing elements']],
      traits: ['Calm', 'Optimistic', 'Resourceful', 'Friendly'],
      look: 'Gold hard hat, round blue specs and a bubbling flask.',
      swatches: [['Hard Hat Gold', '#F2B620'], ['Spec Blue', '#2E7FE0'], ['Aero Red', '#C8161D'], ['Flask Cyan', '#36C8F5']],
      heads: 2.5
    },
    buoy: {
      name: 'Buoy', role: 'Interface Specialist', side: 'Team Aero', color: '#8E6FD8', deep: '#6440B8',
      quote: 'Different worlds. Same connection.', quote2: 'Connect today. Brighter worlds tomorrow.',
      motto: ['Systems connect.', 'Worlds communicate.', 'A brighter tomorrow floats.'],
      bio: 'Buoy builds and maintains the connections that link people, places and planets. With a sharp mind and steady focus, she makes sure every system works together.',
      facts: [['Species', 'Qoogie (bubble form)'], ['Strengths', 'Communication, problem-solving, systems thinking'], ['Method', 'Technology, teamwork, innovation']],
      traits: ['Smart', 'Confident', 'Focused', 'Dependable'],
      look: 'Gold hard hat over violet hair, frosted visor and a holo-tablet.',
      swatches: [['Buoy Violet', '#8E6FD8'], ['Hard Hat Gold', '#F2B620'], ['Visor Frost', '#CFE3F5'], ['Lip Rose', '#E0457B']],
      heads: 2.5
    },
    docneon: {
      name: 'Doc Neon', role: 'Super-Intelligent Nemesis', side: 'Villain', color: '#A6D64A', deep: '#5F9A2C', villain: true,
      quote: 'Water ruins everything.', quote2: 'Different worlds. A drier tomorrow.',
      motto: ['Arid worlds.', 'Eternal conflict.', 'No more water.'],
      bio: 'A brilliant but irritable scientist who believes it is his duty to keep worlds dry. He creates clones of himself and commands the Neonites to stop the Qoogies.',
      facts: [['Species', 'Neonian (bubble form)'], ['Intelligence', 'Genius'], ['Method', 'Science, clones, Neonites']],
      traits: ['Brilliant', 'Irritable', 'Ruthless', 'Determined'],
      look: 'Lime gel skin, antenna ears, bushy blue brows and an orange turtleneck under a lab coat.',
      fun: 'When he gets wet, he melts into lime slime.',
      swatches: [['Neon Slime', '#A6D64A'], ['Slime Shadow', '#5F9A2C'], ['Brow Blue', '#2FA8E8'], ['Turtleneck', '#D2601A']],
      heads: 2.7
    },
    neonites: {
      name: 'Neonites', role: 'Clones created to serve Doc Neon', side: 'Villain', color: '#7E9A3A', deep: '#556B2F', villain: true,
      quote: 'No more water.', quote2: 'Dry worlds. Stronger tomorrow.',
      motto: ['Loyal.', 'Ruthless.', 'Highly adaptable.', 'Built for a dry galaxy.'],
      bio: "Clones made by Doc Neon. Their mission is to stop the Qoogies from hydro-forming planets and keep every world dry.",
      facts: [['Variants', 'Standard, Scientist, Commander, Heavy'], ['Gear', 'Neonite rifle, spiral backpack, science vial, armor plating']],
      traits: ['Loyal', 'Ruthless', 'Adaptable'],
      look: 'Moss-scaled lizard troopers with laser-red eyes, brass spiral backpacks and violet power gems.',
      swatches: [['Neonite Moss', '#556B2F'], ['Laser Red', '#FF2A12'], ['Brass', '#C9A13B'], ['Power Gem', '#A646D9']],
      heads: 2.4, wide: true
    }
  };
  const ORDER = ['wisp', 'heelo', 'nonni', 'hydro', 'buoy', 'docneon', 'neonites'];

  const css = `
.qp-dialog{position:fixed;inset:0;margin:0;padding:0;border:0;width:100%;height:100%;max-width:none;max-height:none;background:transparent;overflow:hidden;color:var(--qp-fg)}
.qp-dialog::backdrop{background:transparent}
.qp-scrim{position:absolute;inset:0;background:var(--qp-scrim);backdrop-filter:blur(10px) saturate(1.2);-webkit-backdrop-filter:blur(10px) saturate(1.2)}
.qp-card{position:absolute;left:50%;top:50%;width:min(1040px,calc(100vw - 32px));height:min(680px,calc(100vh - 40px - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px)));transform:translate(-50%,-50%);display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.08fr);background:var(--qp-bg);border-radius:var(--qp-radius);box-shadow:var(--qp-shadow);border:var(--qp-border);overflow:hidden;will-change:transform,opacity,border-radius}
.qp-stage{position:relative;overflow:hidden;background:radial-gradient(70% 60% at 50% 42%,color-mix(in srgb,var(--c) 70%,#fff) 0,var(--c) 45%,var(--d) 100%);isolation:isolate}
.qp-stage::before{content:"";position:absolute;inset:-20%;background:conic-gradient(from 0deg,#5CE1E6,#B6F03C,#FFE14A,#FF8A5C,#FF5FA2,#8B6CF6,#5CE1E6);opacity:.18;mix-blend-mode:overlay;animation:qp-spin 18s linear infinite;z-index:-1}
.qp-ring{position:absolute;border-radius:50%;border:2px solid rgba(255,255,255,.45);box-shadow:inset 0 0 30px rgba(255,255,255,.25)}
.qp-ring.r1{width:78%;aspect-ratio:1;left:11%;top:12%}
.qp-ring.r2{width:110%;aspect-ratio:1;left:-5%;top:-4%;opacity:.4}
.qp-fig{position:absolute;left:50%;bottom:-2%;height:94%;width:auto;max-width:none;transform:translateX(-50%);filter:drop-shadow(0 24px 30px rgba(0,0,0,.35));animation:qp-bob 4.5s ease-in-out infinite;transform-origin:50% 100%}
.qp-fig.wide{height:auto;width:104%;bottom:4%}
.qp-big{position:absolute;left:18px;top:14px;font:400 clamp(64px,10vw,128px)/.82 var(--qp-display);color:rgba(255,255,255,.22);letter-spacing:-.01em;pointer-events:none;text-transform:uppercase;max-width:90%;overflow-wrap:anywhere}
.qp-bub{position:absolute;border-radius:50%;background:radial-gradient(circle at 32% 28%,rgba(255,255,255,.95) 0 8%,rgba(255,255,255,.12) 22%,transparent 46%),radial-gradient(circle,transparent 58%,rgba(92,225,230,.55) 72%,rgba(255,95,162,.45) 84%,rgba(139,108,246,.5) 94%,transparent);animation:qp-rise linear infinite}
.qp-heads{position:absolute;right:14px;bottom:14px;display:flex;align-items:end;gap:8px;background:rgba(7,18,41,.55);color:#fff;padding:8px 12px;border-radius:14px;font:700 11px/1.2 var(--qp-label);letter-spacing:.14em;text-transform:uppercase}
.qp-heads i{display:block;width:10px;border-radius:5px 5px 2px 2px;background:#fff}
.qp-body{position:relative;overflow-y:auto;overscroll-behavior:contain;padding:clamp(22px,3.4vw,40px);display:grid;gap:16px;align-content:start;min-width:0}
.qp-side{display:flex;gap:10px;align-items:center;flex-wrap:wrap;font:700 12px/1 var(--qp-label);letter-spacing:.18em;text-transform:uppercase;color:var(--qp-dim)}
.qp-side b{color:var(--qp-on-c);background:var(--c);padding:6px 10px;border-radius:999px;letter-spacing:.14em}
.qp-name{font:400 clamp(40px,5.4vw,66px)/.95 var(--qp-display);margin:0;text-wrap:balance}
.qp-role{font:700 14px/1.2 var(--qp-label);letter-spacing:.2em;text-transform:uppercase;color:var(--qp-accent)}
.qp-quote{position:relative;margin:4px 0 6px;padding:16px 20px;border-radius:22px;background:var(--qp-bubble);color:var(--qp-bubble-fg);font:800 clamp(18px,2vw,22px)/1.3 var(--qp-body);border:var(--qp-bubble-border)}
.qp-quote::after{content:"";position:absolute;left:28px;bottom:-12px;width:22px;height:22px;background:inherit;border:inherit;border-top:0;border-left:0;transform:rotate(45deg)}
.qp-motto{display:flex;flex-wrap:wrap;gap:4px 14px;font:700 13px/1.4 var(--qp-label);letter-spacing:.14em;text-transform:uppercase;color:var(--qp-dim)}
.qp-bio{margin:0;font:400 16px/1.6 var(--qp-body);color:var(--qp-fg2)}
.qp-facts{display:grid;grid-template-columns:auto 1fr;gap:8px 16px;margin:0;font:400 15px/1.45 var(--qp-body)}
.qp-facts dt{font:700 11px/1.9 var(--qp-label);letter-spacing:.16em;text-transform:uppercase;color:var(--qp-dim)}
.qp-facts dd{margin:0}
.qp-traits{display:flex;flex-wrap:wrap;gap:6px}
.qp-traits span{font:800 13px/1 var(--qp-body);padding:8px 12px;border-radius:999px;background:var(--qp-chip);color:var(--qp-fg)}
.qp-sw{display:flex;flex-wrap:wrap;gap:10px}
.qp-sw div{display:flex;align-items:center;gap:8px;font:600 12px/1.2 var(--qp-label);color:var(--qp-dim)}
.qp-sw i{width:26px;height:26px;border-radius:50%;box-shadow:inset 0 0 0 2px rgba(255,255,255,.35),0 0 0 1px rgba(0,0,0,.15)}
.qp-fun{margin:0;padding:12px 14px;border-radius:14px;background:var(--qp-chip);font:700 14px/1.45 var(--qp-body)}
.qp-fun b{font:800 11px/1 var(--qp-label);letter-spacing:.16em;text-transform:uppercase;color:var(--qp-accent);display:block;margin-bottom:6px}
.qp-nav{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding-top:6px;border-top:1px solid var(--qp-rule)}
.qp-nav button.qp-dot{width:40px;height:40px;border-radius:50%;padding:0;border:2px solid transparent;background:var(--qp-chip);overflow:hidden;cursor:pointer}
.qp-nav button.qp-dot img{width:100%;height:100%;object-fit:cover;object-position:50% 8%}
.qp-nav button.qp-dot[aria-current="true"]{border-color:var(--c);box-shadow:0 0 0 3px color-mix(in srgb,var(--c) 35%,transparent)}
.qp-x{position:absolute;right:14px;top:14px;z-index:3;width:46px;height:46px;border-radius:50%;border:0;cursor:pointer;background:var(--qp-x);color:var(--qp-x-fg);font:700 22px/1 system-ui;display:grid;place-items:center;box-shadow:0 4px 14px rgba(0,0,0,.2)}
.qp-x:hover{transform:scale(1.06)}
.qp-arrows{margin-left:auto;display:flex;gap:6px}
.qp-arrows button{width:40px;height:40px;border-radius:12px;border:0;cursor:pointer;background:var(--qp-chip);color:var(--qp-fg);font:700 18px/1 system-ui}
.qp-dialog :focus-visible{outline:3px solid var(--qp-focus);outline-offset:2px}
.qp-pop{position:fixed;border-radius:50%;border:3px solid #fff;pointer-events:none;z-index:2147483647}
.qp-in{opacity:0}
@keyframes qp-bob{0%,100%{transform:translateX(-50%) translateY(0) scale(1,1)}50%{transform:translateX(-50%) translateY(-10px) scale(.99,1.01)}}
@keyframes qp-spin{to{transform:rotate(360deg)}}
@keyframes qp-rise{from{transform:translateY(0)}to{transform:translateY(-760px)}}
[data-crew]{cursor:pointer}
@media (max-width:760px){
  .qp-card{grid-template-columns:1fr;grid-template-rows:42% 1fr;height:calc(100vh - 24px - env(safe-area-inset-top,0px) - env(safe-area-inset-bottom,0px));width:calc(100vw - 20px)}
  .qp-big{font-size:64px}
  .qp-name{font-size:40px}
}
@media (prefers-reduced-motion:reduce){.qp-fig,.qp-stage::before,.qp-bub{animation:none}}
/* skins */
.qp-skin-glass{--qp-bg:linear-gradient(180deg,#0E2A5C,#071229);--qp-fg:#E8F6FF;--qp-fg2:#CFE3F5;--qp-dim:#8FB3D6;--qp-accent:var(--c);--qp-scrim:rgba(4,10,26,.62);--qp-radius:34px;--qp-shadow:0 40px 100px rgba(0,0,0,.6),inset 0 0 0 1px rgba(79,195,240,.3);--qp-border:0;--qp-bubble:rgba(232,246,255,.1);--qp-bubble-fg:#fff;--qp-bubble-border:1px solid rgba(232,246,255,.2);--qp-chip:rgba(232,246,255,.09);--qp-rule:rgba(232,246,255,.12);--qp-x:#E8F6FF;--qp-x-fg:#071229;--qp-on-c:#071229;--qp-focus:#E6F52F}
.qp-skin-comic{--qp-bg:#fff;--qp-fg:#0E1A3A;--qp-fg2:#25335A;--qp-dim:#4A5A80;--qp-accent:var(--d);--qp-scrim:rgba(232,246,255,.7);--qp-radius:10px;--qp-shadow:12px 12px 0 #0E1A3A;--qp-border:4px solid #0E1A3A;--qp-bubble:#fff;--qp-bubble-fg:#0E1A3A;--qp-bubble-border:3px solid #0E1A3A;--qp-chip:#E8F6FF;--qp-rule:#0E1A3A;--qp-x:#E6F52F;--qp-x-fg:#0E1A3A;--qp-on-c:#0E1A3A;--qp-focus:#FF5FA2}
.qp-skin-comic .qp-stage{border-right:4px solid #0E1A3A;background-image:radial-gradient(circle,rgba(14,26,58,.18) 1.6px,transparent 1.8px),radial-gradient(70% 60% at 50% 42%,color-mix(in srgb,var(--c) 70%,#fff) 0,var(--c) 45%,var(--d) 100%);background-size:14px 14px,auto}
.qp-skin-comic .qp-x{border:3px solid #0E1A3A;box-shadow:3px 3px 0 #0E1A3A}
.qp-skin-comic .qp-name{-webkit-text-stroke:2px #0E1A3A;color:var(--c);paint-order:stroke fill;text-shadow:4px 4px 0 #0E1A3A}
.qp-skin-hud{--qp-bg:linear-gradient(180deg,rgba(255,255,255,.03),transparent 40%),#0A2350;--qp-fg:#E8F6FF;--qp-fg2:#CFE3F5;--qp-dim:#8FB3D6;--qp-accent:var(--c);--qp-scrim:rgba(6,18,43,.72);--qp-radius:16px;--qp-shadow:0 0 0 1px rgba(79,195,240,.5),0 0 60px rgba(79,195,240,.25) inset,0 30px 80px rgba(0,0,0,.6);--qp-border:0;--qp-bubble:rgba(79,195,240,.1);--qp-bubble-fg:#E8F6FF;--qp-bubble-border:1px solid rgba(79,195,240,.4);--qp-chip:rgba(255,255,255,.07);--qp-rule:rgba(79,195,240,.25);--qp-x:#FF2A4D;--qp-x-fg:#fff;--qp-on-c:#06122B;--qp-focus:#F2B620}
.qp-skin-hud .qp-stage::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.05) 0 1px,transparent 1px 4px);pointer-events:none}
.qp-skin-pop{--qp-bg:#fff;--qp-fg:#0B2F66;--qp-fg2:#2B4A7A;--qp-dim:#5E7BA6;--qp-accent:var(--d);--qp-scrim:rgba(243,250,255,.72);--qp-radius:40px;--qp-shadow:0 40px 90px rgba(11,47,102,.25);--qp-border:0;--qp-bubble:#F3FAFF;--qp-bubble-fg:#0B2F66;--qp-bubble-border:0;--qp-chip:#EEF6FD;--qp-rule:rgba(11,47,102,.1);--qp-x:#0B2F66;--qp-x-fg:#fff;--qp-on-c:#0B2F66;--qp-focus:#FF5FA2}
.qp-skin-space{--qp-bg:linear-gradient(180deg,#2A1670,#140C3E);--qp-fg:#F1ECFF;--qp-fg2:#D8CFF7;--qp-dim:#B5A9E0;--qp-accent:var(--c);--qp-scrim:rgba(20,12,62,.66);--qp-radius:999px 999px 34px 34px;--qp-shadow:0 40px 100px rgba(0,0,0,.55),inset 0 0 0 1px rgba(181,169,224,.25);--qp-border:0;--qp-bubble:rgba(241,236,255,.1);--qp-bubble-fg:#fff;--qp-bubble-border:1px solid rgba(241,236,255,.2);--qp-chip:rgba(241,236,255,.09);--qp-rule:rgba(241,236,255,.14);--qp-x:#FFE14A;--qp-x-fg:#140C3E;--qp-on-c:#140C3E;--qp-focus:#FFE14A}
.qp-skin-space .qp-card{border-radius:34px}
.qp-skin-editorial{--qp-bg:#FAFDFF;--qp-fg:#071229;--qp-fg2:#22324F;--qp-dim:#4A5A78;--qp-accent:var(--d);--qp-scrim:rgba(7,18,41,.55);--qp-radius:30px;--qp-shadow:0 40px 100px rgba(7,18,41,.35);--qp-border:0;--qp-bubble:transparent;--qp-bubble-fg:#071229;--qp-bubble-border:0;--qp-chip:#EEF4FB;--qp-rule:rgba(7,18,41,.12);--qp-x:#071229;--qp-x-fg:#fff;--qp-on-c:#071229;--qp-focus:#FF8A1A}
.qp-skin-editorial .qp-quote{padding:0 0 0 18px;border-left:6px solid var(--c);border-radius:0;font-size:clamp(22px,2.4vw,28px);font-family:var(--qp-display);font-weight:400}
.qp-skin-editorial .qp-quote::after{display:none}
.qp-skin-editorial .qp-stage::before{display:none}
.qp-skin-editorial .qp-stage{background:var(--c)}
.qp-skin-cinema{--qp-bg:linear-gradient(180deg,#1A1226,#0B0812);--qp-fg:#FFF4E6;--qp-fg2:#F1E2CF;--qp-dim:#C3AE96;--qp-accent:var(--c);--qp-scrim:rgba(5,3,10,.78);--qp-radius:22px;--qp-shadow:0 40px 110px rgba(0,0,0,.7),inset 0 0 0 1px rgba(255,225,74,.25);--qp-border:0;--qp-bubble:rgba(255,244,230,.08);--qp-bubble-fg:#FFF4E6;--qp-bubble-border:1px solid rgba(255,225,74,.3);--qp-chip:rgba(255,244,230,.08);--qp-rule:rgba(255,244,230,.14);--qp-x:#FFE14A;--qp-x-fg:#0B0812;--qp-on-c:#0B0812;--qp-focus:#FFE14A}
.qp-skin-notebook{--qp-bg:repeating-linear-gradient(180deg,transparent 0 31px,rgba(63,169,232,.22) 31px 32px),#FFFBEF;--qp-fg:#1B2A4A;--qp-fg2:#2E3F63;--qp-dim:#5B6B8C;--qp-accent:var(--d);--qp-scrim:rgba(255,251,239,.72);--qp-radius:8px;--qp-shadow:10px 12px 0 rgba(27,42,74,.16),0 30px 70px rgba(27,42,74,.25);--qp-border:2px solid #1B2A4A;--qp-bubble:#FFF0A0;--qp-bubble-fg:#1B2A4A;--qp-bubble-border:0;--qp-chip:#EAF4FF;--qp-rule:rgba(27,42,74,.15);--qp-x:#FF5FA2;--qp-x-fg:#fff;--qp-on-c:#1B2A4A;--qp-focus:#FF5FA2}
.qp-skin-notebook .qp-quote{transform:rotate(-1deg);box-shadow:4px 6px 0 rgba(27,42,74,.12)}
.qp-skin-blueprint{--qp-bg:linear-gradient(rgba(255,255,255,.07) 1px,transparent 1px) 0 0/28px 28px,linear-gradient(90deg,rgba(255,255,255,.07) 1px,transparent 1px) 0 0/28px 28px,#1350A8;--qp-fg:#fff;--qp-fg2:#E3EEFF;--qp-dim:#B9D3FF;--qp-accent:#FFE14A;--qp-scrim:rgba(8,30,70,.66);--qp-radius:20px;--qp-shadow:0 40px 100px rgba(0,0,0,.45);--qp-border:2px solid rgba(255,255,255,.7);--qp-bubble:rgba(255,255,255,.1);--qp-bubble-fg:#fff;--qp-bubble-border:1.5px dashed rgba(255,255,255,.6);--qp-chip:rgba(255,255,255,.12);--qp-rule:rgba(255,255,255,.25);--qp-x:#FFE14A;--qp-x-fg:#0D3274;--qp-on-c:#0D3274;--qp-focus:#FFE14A}
.qp-skin-tv{--qp-bg:#fff;--qp-fg:#2A1458;--qp-fg2:#43307A;--qp-dim:#7462A6;--qp-accent:var(--d);--qp-scrim:rgba(42,20,88,.55);--qp-radius:36px;--qp-shadow:0 14px 0 #2A1458,0 40px 80px rgba(42,20,88,.35);--qp-border:6px solid #2A1458;--qp-bubble:#FFE14A;--qp-bubble-fg:#2A1458;--qp-bubble-border:0;--qp-chip:#F1EAFF;--qp-rule:rgba(42,20,88,.12);--qp-x:#FF5FA2;--qp-x-fg:#fff;--qp-on-c:#2A1458;--qp-focus:#FF5FA2}
.qp-skin-tv .qp-stage{border-right:6px solid #2A1458}
.qp-skin-arcade{--qp-bg:linear-gradient(180deg,#1A0B3B,#0B0420);--qp-fg:#F6F0FF;--qp-fg2:#E0D4FF;--qp-dim:#A99BD6;--qp-accent:#5CE1E6;--qp-scrim:rgba(8,3,24,.78);--qp-radius:8px;--qp-shadow:0 0 0 3px #FF5FA2,0 0 0 6px #0B0420,0 0 0 9px #5CE1E6,0 40px 100px rgba(0,0,0,.7);--qp-border:0;--qp-bubble:rgba(92,225,230,.1);--qp-bubble-fg:#fff;--qp-bubble-border:2px solid #5CE1E6;--qp-chip:rgba(255,255,255,.08);--qp-rule:rgba(255,95,162,.35);--qp-x:#FF5FA2;--qp-x-fg:#fff;--qp-on-c:#0B0420;--qp-focus:#FFE14A}
.qp-skin-quest{--qp-bg:#FFFDF3;--qp-fg:#16365C;--qp-fg2:#2D4E78;--qp-dim:#5F7A9C;--qp-accent:var(--d);--qp-scrim:rgba(22,54,92,.5);--qp-radius:30px;--qp-shadow:0 10px 0 #16365C,0 40px 80px rgba(22,54,92,.3);--qp-border:5px solid #16365C;--qp-bubble:#E8F7D8;--qp-bubble-fg:#16365C;--qp-bubble-border:3px solid #16365C;--qp-chip:#EAF4FF;--qp-rule:rgba(22,54,92,.15);--qp-x:#FFB020;--qp-x-fg:#16365C;--qp-on-c:#16365C;--qp-focus:#FF5FA2}
.qp-skin-cards{--qp-bg:linear-gradient(160deg,#FFFFFF,#F3EEFF);--qp-fg:#24124F;--qp-fg2:#3C2A70;--qp-dim:#7262A0;--qp-accent:var(--d);--qp-scrim:rgba(24,10,60,.66);--qp-radius:26px;--qp-shadow:0 0 0 8px var(--c),0 0 0 12px #24124F,0 40px 100px rgba(0,0,0,.5);--qp-border:0;--qp-bubble:#24124F;--qp-bubble-fg:#fff;--qp-bubble-border:0;--qp-chip:#EFE9FF;--qp-rule:rgba(36,18,79,.12);--qp-x:#24124F;--qp-x-fg:#fff;--qp-on-c:#24124F;--qp-focus:#FF5FA2}
.qp-skin-game{--qp-bg:linear-gradient(180deg,#0E2A5C,#071229);--qp-fg:#FFF6E6;--qp-fg2:#F2E4CC;--qp-dim:#C9B48F;--qp-accent:#FFB020;--qp-scrim:rgba(40,16,8,.7);--qp-radius:24px;--qp-shadow:0 0 0 4px #FFB020,0 40px 100px rgba(0,0,0,.6);--qp-border:0;--qp-bubble:rgba(255,176,32,.12);--qp-bubble-fg:#fff;--qp-bubble-border:2px solid #FFB020;--qp-chip:rgba(255,255,255,.08);--qp-rule:rgba(255,176,32,.3);--qp-x:#FFB020;--qp-x-fg:#071229;--qp-on-c:#071229;--qp-focus:#FFE14A}
`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const dlg = document.createElement('dialog');
  dlg.className = 'qp-dialog qp-skin-' + SKIN;
  dlg.setAttribute('aria-labelledby', 'qp-name');
  dlg.innerHTML = '<div class="qp-scrim"></div><div class="qp-card" role="document"><button class="qp-x" type="button" aria-label="Close">✕</button><div class="qp-stage" aria-hidden="true"></div><div class="qp-body"></div></div>';
  const ready = () => document.body.appendChild(dlg);
  if (document.body) ready(); else document.addEventListener('DOMContentLoaded', ready);
  dlg.style.setProperty('--qp-display', '"Lilita One","Arial Rounded MT Bold",system-ui,sans-serif');
  dlg.style.setProperty('--qp-label', '"Exo 2","Trebuchet MS",system-ui,sans-serif');
  dlg.style.setProperty('--qp-body', '"Nunito","Segoe UI",system-ui,sans-serif');

  const card = dlg.querySelector('.qp-card'), stage = dlg.querySelector('.qp-stage'), body = dlg.querySelector('.qp-body'), scrim = dlg.querySelector('.qp-scrim');
  const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = null, origin = null, busy = false;

  // preload the figures so the pop-up opens instantly
  addEventListener('load', () => ORDER.forEach(id => { const i = new Image(); i.src = IMG + id + '.webp'; }));

  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

  function render(id) {
    const m = CREW[id];
    current = id;
    card.style.setProperty('--c', m.color);
    card.style.setProperty('--d', m.deep);
    const bubbles = Array.from({ length: 7 }, (_, i) => {
      const s = 14 + ((i * 37) % 40);
      return `<span class="qp-bub" style="width:${s}px;height:${s}px;left:${(i * 29 + 7) % 92}%;bottom:-${s + 10}px;animation-duration:${9 + (i % 4) * 3}s;animation-delay:-${i * 1.7}s"></span>`;
    }).join('');
    const headBars = [1, 1.5].map(h => `<i style="height:${h * 18}px;opacity:${h === 1 ? 1 : .55}"></i>`).join('');
    stage.innerHTML = `<span class="qp-big">${esc(m.short || m.name)}</span><span class="qp-ring r2"></span><span class="qp-ring r1"></span>${bubbles}<img class="qp-fig${m.wide ? ' wide' : ''}" src="${IMG}${id}.webp" alt=""><span class="qp-heads">${headBars}<span>${m.heads} heads tall</span></span>`;
    const facts = m.facts.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('');
    const team = ORDER.filter(k => !!CREW[k].villain === !!m.villain);
    body.innerHTML = `
      <div class="qp-side qp-in"><b>${esc(m.side)}</b><span>${esc(m.role)}</span></div>
      <h2 class="qp-name qp-in" id="qp-name">${esc(m.name)}</h2>
      <p class="qp-quote qp-in">“${esc(m.quote)}”</p>
      <div class="qp-motto qp-in">${m.motto.map(x => `<span>${esc(x)}</span>`).join('')}</div>
      <p class="qp-bio qp-in">${esc(m.bio)}</p>
      <div class="qp-traits qp-in">${m.traits.map(x => `<span>${esc(x)}</span>`).join('')}</div>
      <dl class="qp-facts qp-in">${facts}<dt>Look</dt><dd>${esc(m.look)}</dd></dl>
      ${m.fun ? `<p class="qp-fun qp-in"><b>Fun fact</b>${esc(m.fun)}</p>` : `<p class="qp-fun qp-in"><b>Also says</b>“${esc(m.quote2)}”</p>`}
      <div class="qp-sw qp-in">${m.swatches.map(([n, h]) => `<div><i style="background:${h}"></i>${esc(n)}</div>`).join('')}</div>
      <div class="qp-nav qp-in" role="group" aria-label="${m.villain ? 'Villains' : 'Team Aero'}">
        ${team.map(k => `<button class="qp-dot" type="button" data-go="${k}" aria-label="${esc(CREW[k].name)}" aria-current="${k === id}" style="--c:${CREW[k].color}"><img src="${IMG}face-${k}.webp" alt=""></button>`).join('')}
        <span class="qp-arrows"><button type="button" data-step="-1" aria-label="Previous character">←</button><button type="button" data-step="1" aria-label="Next character">→</button></span>
      </div>`;
    body.scrollTop = 0;
  }

  function stagger() {
    const els = [stage.querySelector('.qp-fig'), ...body.querySelectorAll('.qp-in')];
    if (reduce()) { els.forEach(e => e && (e.style.opacity = 1)); return; }
    const fig = els.shift();
    if (fig) fig.animate([
      { transform: 'translateX(-50%) translateY(60%) scale(.7,1.3)', opacity: 0 },
      { transform: 'translateX(-50%) translateY(-4%) scale(1.12,.88)', opacity: 1, offset: .55 },
      { transform: 'translateX(-50%) translateY(0) scale(.96,1.05)', offset: .78 },
      { transform: 'translateX(-50%) translateY(0) scale(1,1)', opacity: 1 }
    ], { duration: 620, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'backwards' });
    els.forEach((e, i) => e.animate([{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }], { duration: 360, delay: 140 + i * 45, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }));
  }

  function fromRect(r) {
    const c = card.getBoundingClientRect();
    const cx = r.left + r.width / 2 - (c.left + c.width / 2), cy = r.top + r.height / 2 - (c.top + c.height / 2);
    const s = Math.max(r.width, r.height) / Math.max(c.width, c.height);
    return `translate(calc(-50% + ${cx}px), calc(-50% + ${cy}px)) scale(${Math.max(s, .06)})`;
  }

  function open(id, el) {
    if (!CREW[id] || busy) return;
    origin = el || null;
    render(id);
    dlg.showModal();
    document.documentElement.style.overflow = 'hidden';
    if (reduce()) {
      card.animate([{ opacity: 0 }, { opacity: 1 }], 200); stagger(); return;
    }
    busy = true;
    const r = el ? el.getBoundingClientRect() : { left: innerWidth / 2 - 30, top: innerHeight / 2 - 30, width: 60, height: 60 };
    scrim.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: 'both' });
    // the card is blown like a bubble: forms round at the tapped icon, pops, overshoots, wobbles to rest
    const a = card.animate([
      { transform: fromRect(r), borderRadius: '50%', opacity: .2 },
      { transform: 'translate(-50%,-50%) scale(1.04,.95)', borderRadius: '60px', opacity: 1, offset: .58 },
      { transform: 'translate(-50%,-50%) scale(.985,1.02)', offset: .8 },
      { transform: 'translate(-50%,-50%) scale(1,1)', opacity: 1 }
    ], { duration: 720, easing: 'cubic-bezier(.22,.9,.3,1)' });
    stagger();
    a.onfinish = () => { busy = false; };
    dlg.querySelector('.qp-x').focus({ preventScroll: true });
  }

  function popRing(r) {
    const p = document.createElement('span');
    p.className = 'qp-pop';
    Object.assign(p.style, { left: r.left + r.width / 2 - 30 + 'px', top: r.top + r.height / 2 - 30 + 'px', width: '60px', height: '60px', borderColor: getComputedStyle(card).getPropertyValue('--c') });
    document.body.appendChild(p);
    p.animate([{ transform: 'scale(.4)', opacity: 1 }, { transform: 'scale(2.2)', opacity: 0 }], { duration: 420, easing: 'ease-out' }).onfinish = () => p.remove();
  }

  function close() {
    if (!dlg.open || busy) return;
    const done = () => { dlg.close(); document.documentElement.style.overflow = ''; busy = false; if (origin && document.contains(origin)) origin.focus({ preventScroll: true }); };
    if (reduce()) { card.animate([{ opacity: 1 }, { opacity: 0 }], 160).onfinish = done; return; }
    busy = true;
    const r = origin && document.contains(origin) ? origin.getBoundingClientRect() : null;
    const visible = r && r.bottom > 0 && r.top < innerHeight;
    scrim.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 380, fill: 'both' });
    const end = visible ? { transform: fromRect(r), borderRadius: '50%', opacity: 0 } : { transform: 'translate(-50%,-50%) scale(.6)', borderRadius: '50%', opacity: 0 };
    // squash in, then shrink back into the icon and pop
    card.animate([
      { transform: 'translate(-50%,-50%) scale(1,1)', opacity: 1 },
      { transform: 'translate(-50%,-50%) scale(1.03,.96)', opacity: 1, offset: .25 },
      end
    ], { duration: 420, easing: 'cubic-bezier(.5,0,.75,0)', fill: 'forwards' }).onfinish = () => {
      if (visible) popRing(r);
      card.getAnimations().forEach(x => x.cancel());
      done();
    };
  }

  function step(n) {
    const m = CREW[current];
    const team = ORDER.filter(k => !!CREW[k].villain === !!m.villain);
    go(team[(team.indexOf(current) + n + team.length) % team.length]);
  }
  function go(id) {
    if (id === current) return;
    if (reduce()) { render(id); stagger(); return; }
    card.animate([{ transform: 'translate(-50%,-50%) scale(1)' }, { transform: 'translate(-50%,-50%) scale(.97,1.02)' }, { transform: 'translate(-50%,-50%) scale(1)' }], { duration: 320, easing: 'ease-out' });
    render(id); stagger();
  }

  dlg.addEventListener('click', e => {
    if (e.target === scrim || e.target.closest('.qp-x')) return close();
    const d = e.target.closest('[data-go]'); if (d) return go(d.dataset.go);
    const s = e.target.closest('[data-step]'); if (s) return step(+s.dataset.step);
  });
  dlg.addEventListener('cancel', e => { e.preventDefault(); close(); });
  dlg.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  });

  document.addEventListener('click', e => {
    const t = e.target.closest('[data-crew]');
    if (!t || dlg.contains(t)) return;
    e.preventDefault();
    open(t.dataset.crew, t);
  });
  document.addEventListener('keydown', e => {
    const t = e.target.closest && e.target.closest('[data-crew]');
    if (t && (e.key === 'Enter' || e.key === ' ') && !/^(A|BUTTON)$/.test(t.tagName)) { e.preventDefault(); open(t.dataset.crew, t); }
  });
  const prep = () => document.querySelectorAll('[data-crew]').forEach(el => {
    if (!/^(A|BUTTON)$/.test(el.tagName)) { el.tabIndex = 0; el.setAttribute('role', 'button'); }
    if (!el.getAttribute('aria-label') && CREW[el.dataset.crew]) el.setAttribute('aria-label', 'Open ' + CREW[el.dataset.crew].name + "'s profile");
  });
  if (document.readyState !== 'loading') prep(); else document.addEventListener('DOMContentLoaded', prep);

  window.QoogiePopup = { open, close, crew: CREW };
})();
