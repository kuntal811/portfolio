document.documentElement.classList.add("js");
document.getElementById("year").textContent = new Date().getFullYear();

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Agent console replay ---------- */

const script = [
  { type: "user", text: "Set up Global Partner Summit for 10,000 people, with face check-in and a dietary field for in-person guests." },
  { type: "think", text: "Routing across 117 tools: 5 matched" },
  { type: "tool", fn: "events.create", arg: "Global Partner Summit, cap 10000", ms: 212 },
  { type: "tool", fn: "registration.add_field", arg: "dietary, when attendance = in_person", ms: 148 },
  { type: "tool", fn: "badges.generate", arg: "template: summit-2026", ms: 1840 },
  { type: "tool", fn: "checkin.enable_face", arg: "zones: main_hall, expo", ms: 390 },
  { type: "tool", fn: "registrations.delete_all", arg: "clean up test data", blocked: true },
  { type: "think", text: "Destructive call blocked. Asking first." },
  { type: "agent", html: "Done. The summit is live with face check-in on 2 zones and <strong>10,000 badges</strong> ready. I left the test registrations alone. Want me to delete them?" },
];

const consoleEl = document.getElementById("console");
const replayBtn = document.getElementById("replay");
const wait = (ms) => new Promise((r) => setTimeout(r, reduceMotion ? 0 : ms));
let runId = 0;

function line(cls) {
  const el = document.createElement("p");
  el.className = `msg ${cls}${reduceMotion ? "" : " enter"}`;
  consoleEl.appendChild(el);
  // keep the newest lines in view; older ones scroll off the top
  while (consoleEl.scrollHeight > consoleEl.clientHeight && consoleEl.children.length > 1) {
    consoleEl.firstElementChild.remove();
  }
  return el;
}

async function typeInto(el, text, id) {
  if (reduceMotion) { el.textContent = text; return; }
  el.classList.add("caret");
  for (let i = 1; i <= text.length; i++) {
    if (id !== runId) return;
    el.textContent = text.slice(0, i);
    await wait(18 + Math.random() * 28);
  }
  el.classList.remove("caret");
}

async function play() {
  const id = ++runId;
  consoleEl.innerHTML = "";
  replayBtn.hidden = true;
  await wait(500);

  for (const step of script) {
    if (id !== runId) return;
    if (step.type === "user") {
      await typeInto(line("user"), step.text, id);
      await wait(450);
    } else if (step.type === "think") {
      line("think").textContent = step.text;
      await wait(700);
    } else if (step.type === "tool") {
      const el = line("tool");
      el.innerHTML = `<span class="fn"></span><span class="arg"></span><span class="ok pending">…</span>`;
      el.querySelector(".fn").textContent = step.fn;
      el.querySelector(".arg").textContent = step.arg;
      await wait(step.blocked ? 600 : Math.min(step.ms, 900));
      const ok = el.querySelector(".ok");
      ok.classList.remove("pending");
      if (step.blocked) {
        ok.classList.add("blocked");
        ok.textContent = "blocked";
      } else {
        ok.textContent = `✓ ${step.ms}ms`;
      }
      await wait(250);
    } else if (step.type === "agent") {
      line("agent").innerHTML = step.html;
    }
  }
  replayBtn.hidden = false;
}

replayBtn.addEventListener("click", play);

// only start when the console is on screen, so mobile users don't miss it
new IntersectionObserver((entries, obs) => {
  if (entries[0].isIntersecting) { play(); obs.disconnect(); }
}, { threshold: 0.35 }).observe(consoleEl);

/* ---------- Impact bars shrink into view ---------- */

const barObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("shrunk");
      barObserver.unobserve(entry.target);
    }
  }
}, { threshold: 0.4 });

document.querySelectorAll(".bar").forEach((bar) => barObserver.observe(bar));
