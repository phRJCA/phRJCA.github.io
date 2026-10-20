(function () {
  const KEY = "rjca-english-cat";
  const NEW_CAP = 8;
  const REPEAT_CAP = 4;

  const BANDS = [
    { id: "A1", min: 1, ielts: "under 4", toeic: "120–220" },
    { id: "A2", min: 17, ielts: "under 4", toeic: "225–545" },
    { id: "B1", min: 49, ielts: "4.0–5.0", toeic: "550–780" },
    { id: "B2", min: 112, ielts: "5.5–6.5", toeic: "785–940" },
    { id: "C1", min: 239, ielts: "7.0–8.0", toeic: "945–990" },
    { id: "C2", min: 493, ielts: "8.5–9.0", toeic: "n/a" }
  ];

  const XP = { A1: 10, A2: 16, B1: 36, B2: 70, C1: 120, C2: 200 };

  const RAW = [
    ["water", "A1", "noun", "waters"],
    ["food", "A1", "noun"],
    ["fish", "A1", "noun", "fishes"],
    ["milk", "A1", "noun"],
    ["sun", "A1", "noun"],
    ["bird", "A1", "noun", "birds"],
    ["box", "A1", "noun", "boxes"],
    ["lap", "A1", "noun", "laps"],
    ["nap", "A1", "noun", "naps"],
    ["cat", "A1", "noun", "cats"],
    ["eat", "A1", "verb", "eats ate eating eaten"],
    ["sleep", "A1", "verb", "sleeps slept sleeping"],
    ["play", "A1", "verb", "plays played playing"],
    ["sit", "A1", "verb", "sits sat sitting"],
    ["see", "A1", "verb", "sees saw seen seeing"],
    ["come", "A1", "verb", "comes came coming"],
    ["hungry", "A1", "adj"],
    ["sleepy", "A1", "adj"],
    ["happy", "A1", "adj"],
    ["warm", "A1", "adj", "warmer"],
    ["small", "A1", "adj", "smaller"],
    ["good", "A1", "adj"],
    ["window", "A2", "noun", "windows"],
    ["morning", "A2", "noun", "mornings"],
    ["room", "A2", "noun", "rooms"],
    ["chair", "A2", "noun", "chairs"],
    ["door", "A2", "noun", "doors"],
    ["tree", "A2", "noun", "trees"],
    ["rain", "A2", "noun"],
    ["bowl", "A2", "noun", "bowls"],
    ["street", "A2", "noun", "streets"],
    ["home", "A2", "noun", "homes"],
    ["walk", "A2", "verb", "walks walked walking"],
    ["watch", "A2", "verb", "watches watched watching"],
    ["stay", "A2", "verb", "stays stayed staying"],
    ["look", "A2", "verb", "looks looked looking"],
    ["hear", "A2", "verb", "hears heard hearing"],
    ["wait", "A2", "verb", "waits waited waiting"],
    ["open", "A2", "verb", "opens opened opening"],
    ["quiet", "A2", "adj", "quieter"],
    ["cold", "A2", "adj", "colder"],
    ["tired", "A2", "adj"],
    ["soft", "A2", "adj", "softer"],
    ["nice", "A2", "adj", "nicer"],
    ["afternoon", "B1", "noun", "afternoons"],
    ["park", "B1", "noun", "parks"],
    ["story", "B1", "noun", "stories"],
    ["sound", "B1", "noun", "sounds"],
    ["light", "B1", "noun", "lights"],
    ["place", "B1", "noun", "places"],
    ["time", "B1", "noun", "times"],
    ["friend", "B1", "noun", "friends"],
    ["remember", "B1", "verb", "remembers remembered remembering"],
    ["listen", "B1", "verb", "listens listened listening"],
    ["follow", "B1", "verb", "follows followed following"],
    ["wonder", "B1", "verb", "wonders wondered wondering"],
    ["share", "B1", "verb", "shares shared sharing"],
    ["start", "B1", "verb", "starts started starting"],
    ["calm", "B1", "adj", "calmer"],
    ["gentle", "B1", "adj", "gentler"],
    ["curious", "B1", "adj"],
    ["ready", "B1", "adj"],
    ["evening", "B2", "noun", "evenings"],
    ["weather", "B2", "noun"],
    ["corner", "B2", "noun", "corners"],
    ["habit", "B2", "noun", "habits"],
    ["breeze", "B2", "noun", "breezes"],
    ["company", "B2", "noun"],
    ["choice", "B2", "noun", "choices"],
    ["prefer", "B2", "verb", "prefers preferred preferring"],
    ["notice", "B2", "verb", "notices noticed noticing"],
    ["mind", "B2", "verb", "minds minded minding"],
    ["suppose", "B2", "verb", "supposes supposed supposing"],
    ["enjoy", "B2", "verb", "enjoys enjoyed enjoying"],
    ["pleasant", "B2", "adj"],
    ["careful", "B2", "adj"],
    ["bright", "B2", "adj", "brighter"],
    ["slow", "B2", "adj", "slower"],
    ["silence", "C1", "noun", "silences"],
    ["pause", "C1", "noun", "pauses"],
    ["detail", "C1", "noun", "details"],
    ["mood", "C1", "noun", "moods"],
    ["reason", "C1", "noun", "reasons"],
    ["language", "C1", "noun", "languages"],
    ["word", "C1", "noun", "words"],
    ["idea", "C1", "noun", "ideas"],
    ["appreciate", "C1", "verb", "appreciates appreciated appreciating"],
    ["recall", "C1", "verb", "recalls recalled recalling"],
    ["settle", "C1", "verb", "settles settled settling"],
    ["think", "C1", "verb", "thinks thought thinking"],
    ["believe", "C1", "verb", "believes believed believing"],
    ["understand", "C1", "verb", "understands understood understanding"],
    ["explain", "C1", "verb", "explains explained explaining"],
    ["realize", "C1", "verb", "realizes realised realized realizing realising"],
    ["particular", "C1", "adj"],
    ["slight", "C1", "adj", "slighter"],
    ["different", "C1", "adj"],
    ["important", "C1", "adj"],
    ["interesting", "C1", "adj"],
    ["clear", "C1", "adj", "clearer"],
    ["stillness", "C2", "noun"],
    ["boredom", "C2", "noun"],
    ["shade", "C2", "noun", "shades"],
    ["nuance", "C2", "noun", "nuances"],
    ["trace", "C2", "noun", "traces"],
    ["hush", "C2", "noun"],
    ["tone", "C2", "noun", "tones"],
    ["sense", "C2", "noun", "senses"],
    ["distinction", "C2", "noun", "distinctions"],
    ["linger", "C2", "verb", "lingers lingered lingering"],
    ["distinguish", "C2", "verb", "distinguishes distinguished distinguishing"],
    ["resemble", "C2", "verb", "resembles resembled resembling"],
    ["hesitate", "C2", "verb", "hesitates hesitated hesitating"],
    ["consider", "C2", "verb", "considers considered considering"],
    ["imply", "C2", "verb", "implies implied implying"],
    ["reflect", "C2", "verb", "reflects reflected reflecting"],
    ["subtle", "C2", "adj"],
    ["faint", "C2", "adj", "fainter"],
    ["exact", "C2", "adj"],
    ["measured", "C2", "adj"],
    ["precise", "C2", "adj"],
    ["certain", "C2", "adj"],
    ["soup", "A1", "noun", "", "order"],
    ["rice", "A1", "noun", "", "order"],
    ["tea", "A1", "noun", "", "order"],
    ["menu", "A1", "noun", "menus", "order"],
    ["plate", "A1", "noun", "plates", "order"],
    ["bill", "A1", "noun", "bills", "order"],
    ["order", "A1", "verb", "orders ordered ordering", "order"],
    ["salad", "A2", "noun", "salads", "order"],
    ["coffee", "A2", "noun", "", "order"],
    ["chicken", "A2", "noun", "", "order"],
    ["taste", "A2", "verb", "tastes tasted tasting", "order"],
    ["dessert", "B1", "noun", "desserts", "order"],
    ["run", "A1", "verb", "runs ran running", "", "fitness"],
    ["lift", "A1", "verb", "lifts lifted lifting", "", "fitness"],
    ["strong", "A1", "adj", "stronger", "", "fitness"],
    ["stretch", "A2", "verb", "stretches stretched stretching", "", "fitness"],
    ["set", "A2", "noun", "sets", "gym", "fitness"],
    ["squat", "A2", "noun", "squats", "gym", "fitness"],
    ["muscle", "A2", "noun", "muscles", "gym", "fitness"],
    ["coach", "B1", "noun", "coaches", "gym", "fitness"],
    ["treadmill", "B1", "noun", "treadmills", "gym", "fitness"],
    ["book", "A1", "noun", "books", "", "study"],
    ["read", "A2", "verb", "reads reading", "", "study"],
    ["learn", "A2", "verb", "learns learned learnt learning", "", "study"],
    ["page", "A2", "noun", "pages", "", "study"],
    ["code", "A2", "noun", "codes", "course:code"],
    ["function", "A2", "noun", "functions", "course:code"],
    ["variable", "A2", "noun", "variables", "course:code"],
    ["bug", "A2", "noun", "bugs", "course:code"],
    ["server", "B1", "noun", "servers", "course:code"],
    ["chart", "A2", "noun", "charts", "course:data"],
    ["number", "A2", "noun", "numbers", "course:data"],
    ["pattern", "A2", "noun", "patterns", "course:data"],
    ["model", "B1", "noun", "models", "course:data"],
    ["row", "A2", "noun", "rows", "course:data"],
    ["cable", "A2", "noun", "cables", "course:net"],
    ["signal", "A2", "noun", "signals", "course:net"],
    ["route", "A2", "noun", "routes", "course:net"],
    ["packet", "B1", "noun", "packets", "course:net"],
    ["node", "B1", "noun", "nodes", "course:net"]
  ];

  const FRAMES = {
    A1: {
      noun: ["I want the {slot}."],
      verb: ["I want to {slot}."],
      adj: ["I am {slot}."]
    },
    A2: {
      noun: ["I want the {slot} today."],
      verb: ["I like to {slot} now."],
      adj: ["I am {slot} today."]
    },
    B1: {
      noun: ["I want the {slot} again because I like it."],
      verb: ["I like to {slot}, so I want to again."],
      adj: ["I am {slot} because I like this."]
    },
    B2: {
      noun: ["I would rather have the {slot}, although I still like this."],
      verb: ["I would rather {slot}, although I still like to sit."],
      adj: ["I feel {slot}, though I would rather stay here."]
    },
    C1: {
      noun: ["It is less that I want the {slot}, and more that I already like this."],
      verb: ["I tend to {slot} when I already like this."],
      adj: ["I am {slot} in a particular way."]
    },
    C2: {
      noun: ["There is a particular quiet in the {slot}. Not boredom, exactly. More like the day has settled."],
      verb: ["I linger when I {slot}. It is a faint calm, not boredom exactly."],
      adj: ["I am {slot}, merely. A subtle hush, and the day has settled."]
    }
  };

  const BAND_MIN = {};
  BANDS.forEach((band) => { BAND_MIN[band.id] = band.min; });

  const WORDS = [];
  const BY_ID = {};
  const ALIAS = {};
  const SKILL_NEED = 3;
  let catX = 28;
  let catLift = 16;
  let catDepth = 0.7;
  RAW.forEach((row) => {
    const word = {
      id: row[0],
      band: row[1],
      pos: row[2],
      minLevel: BAND_MIN[row[1]],
      place: row[4] || "",
      skill: row[5] || ""
    };
    WORDS.push(word);
    BY_ID[word.id] = word;
    ALIAS[row[0]] = row[0];
    if (row[3]) row[3].split(" ").forEach((form) => { ALIAS[form] = row[0]; });
  });

  const speechEl = document.getElementById("cat-speech");
  const houseCat = document.getElementById("house-cat");
  const houseBody = document.getElementById("house-body");
  const catFlip = document.getElementById("cat-flip");
  const sceneEl = document.getElementById("house-scene");
  const nameEl = document.getElementById("cat-name");
  const levelEl = document.getElementById("cat-level");
  const examsEl = document.getElementById("cat-exams");
  const barEl = document.getElementById("cat-xp-bar");
  const xpTextEl = document.getElementById("cat-xp-text");
  const countEl = document.getElementById("cat-word-count");
  const learnedEl = document.getElementById("cat-learned");
  const formEl = document.getElementById("cat-form");
  const inputEl = document.getElementById("cat-input");
  const xpMeter = document.getElementById("cat-xp");
  const fitnessBar = document.getElementById("fitness-bar");
  const studyBar = document.getElementById("study-bar");
  const fitnessText = document.getElementById("fitness-text");
  const studyText = document.getElementById("study-text");
  const coursesEl = document.getElementById("cat-courses");

  if (!speechEl || !formEl || !inputEl) return;

  let state = load();
  let lastLearned = [];
  let lastNote = "";

  function t(key) {
    return window.RJCA_I18N ? window.RJCA_I18N.t(key) : key;
  }

  function cost(level) {
    if (level < 17) return 2;
    if (level < 49) return 6;
    if (level < 112) return 12;
    if (level < 239) return 20;
    if (level < 493) return Math.max(6, Math.round(6 * Math.pow(1.006, level - 239)));
    return Math.max(28, Math.round(28 * Math.pow(1.012, level - 493)));
  }

  function progress(totalXp) {
    let level = 1;
    let left = Math.max(0, Math.floor(totalXp) || 0);
    let steps = 0;
    while (steps < 20000) {
      const need = cost(level);
      if (left < need) return { level: level, into: left, need: need };
      left -= need;
      level += 1;
      steps += 1;
    }
    return { level: level, into: 0, need: cost(level) };
  }

  function bandFor(level) {
    let current = BANDS[0];
    BANDS.forEach((band) => {
      if (level >= band.min) current = band;
    });
    return current;
  }

  function knownWords() {
    const level = progress(state.totalXp).level;
    return WORDS.filter((word) => state.heard[word.id] && level >= word.minLevel);
  }

  function isStarter(word) {
    return word.skill && word.place !== "gym" && word.place.indexOf("course:") !== 0;
  }

  function starterCount(skill) {
    return WORDS.filter((word) => word.skill === skill && isStarter(word) && state.heard[word.id]).length;
  }

  function gymOpen() {
    return starterCount("fitness") >= SKILL_NEED;
  }

  function uniOpen() {
    return starterCount("study") >= SKILL_NEED;
  }

  function canLearn(word) {
    if (word.place === "gym") return gymOpen();
    if (word.place.indexOf("course:") === 0) return uniOpen() && state.course === word.place.slice(7);
    return true;
  }

  function roomOpen(room) {
    if (room === "gym") return gymOpen();
    if (room === "study") return uniOpen();
    return true;
  }

  function sceneKey() {
    if (state.room === "kitchen") return "catSceneKitchen";
    if (state.room === "gym") return "catSceneGym";
    if (state.room === "study") return state.course ? "catSceneStudy" : "catSceneChoose";
    const band = bandFor(progress(state.totalXp).level).id;
    return "catScene" + band;
  }

  function speak(known, prefer) {
    if (!known.length) return "Hello.";
    const order = BANDS.map((band) => band.id);
    const start = order.indexOf(bandFor(progress(state.totalXp).level).id);
    const poses = ["noun", "verb", "adj"];
    for (let i = start; i >= 0; i -= 1) {
      const frames = FRAMES[order[i]];
      const tryPos = prefer ? [prefer.pos].concat(poses.filter((pos) => pos !== prefer.pos)) : poses;
      for (let p = 0; p < tryPos.length; p += 1) {
        const pos = tryPos[p];
        const pool = known.filter((word) => word.pos === pos);
        if (!pool.length || !frames[pos]) continue;
        const chosen = prefer && prefer.pos === pos && pool.some((word) => word.id === prefer.id)
          ? prefer
          : pool[Math.floor(Math.random() * pool.length)];
        const options = frames[pos];
        return options[Math.floor(Math.random() * options.length)].replace("{slot}", chosen.id);
      }
    }
    return "Hello.";
  }

  function tokens(text) {
    return text.toLowerCase().replace(/[^a-z'\s-]/g, " ").replace(/'/g, "").split(/[\s-]+/).filter(Boolean);
  }

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(KEY) || "null");
      if (!raw || typeof raw !== "object") throw new Error("empty");
      return {
        totalXp: Number(raw.totalXp) || 0,
        heard: raw.heard && typeof raw.heard === "object" ? raw.heard : {},
        name: typeof raw.name === "string" ? raw.name.slice(0, 24) : "",
        lastText: typeof raw.lastText === "string" ? raw.lastText : "",
        room: raw.room === "living" || raw.room === "gym" || raw.room === "study" || raw.room === "kitchen" ? raw.room : "kitchen",
        course: raw.course === "code" || raw.course === "data" || raw.course === "net" ? raw.course : ""
      };
    } catch (err) {
      return { totalXp: 0, heard: {}, name: "", lastText: "", room: "kitchen", course: "" };
    }
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (err) { /* ignore */ }
  }

  function renderStats() {
    const now = progress(state.totalXp);
    const band = bandFor(now.level);
    const known = knownWords();
    levelEl.textContent = "";
    levelEl.append(document.createTextNode(t("catLevel") + " " + now.level + " · "));
    const bandEl = document.createElement("span");
    bandEl.className = "cat-band";
    bandEl.textContent = band.id;
    levelEl.append(bandEl);
    examsEl.textContent = "IELTS " + band.ielts + " · TOEIC " + band.toeic;
    const pct = now.need ? Math.max(0, Math.min(100, (now.into / now.need) * 100)) : 0;
    barEl.style.width = pct + "%";
    xpMeter.setAttribute("role", "progressbar");
    xpMeter.setAttribute("aria-valuemin", "0");
    xpMeter.setAttribute("aria-valuemax", String(now.need));
    xpMeter.setAttribute("aria-valuenow", String(now.into));
    xpTextEl.textContent = now.into + " / " + now.need;
    countEl.textContent = known.length + " " + t("catWords");
    const learnedBits = [];
    if (lastNote) learnedBits.push(lastNote);
    if (lastLearned.length) learnedBits.push(t("catLearned") + ": " + lastLearned.join(", "));
    learnedEl.hidden = learnedBits.length === 0;
    learnedEl.textContent = learnedBits.join(" ");
    inputEl.placeholder = t("catPlaceholder");
    nameEl.value = state.name;

    const fit = Math.min(SKILL_NEED, starterCount("fitness"));
    const study = Math.min(SKILL_NEED, starterCount("study"));
    fitnessBar.style.width = (fit / SKILL_NEED) * 100 + "%";
    studyBar.style.width = (study / SKILL_NEED) * 100 + "%";
    fitnessText.textContent = gymOpen() ? t("catOpen") : fit + "/" + SKILL_NEED;
    studyText.textContent = uniOpen() ? t("catOpen") : study + "/" + SKILL_NEED;

    const gymProp = document.getElementById("prop-gym");
    const studyProp = document.getElementById("prop-study");
    if (gymProp) gymProp.hidden = !gymOpen();
    if (studyProp) studyProp.hidden = !uniOpen();
    coursesEl.hidden = !uniOpen();
    coursesEl.querySelectorAll("[data-course]").forEach((btn) => {
      const on = btn.getAttribute("data-course") === state.course;
      btn.classList.toggle("primary", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    if (sceneEl) sceneEl.textContent = t(sceneKey());
  }

  function spots() {
    const list = [
      { id: "kitchen", x: 14, depth: 0.9, lift: 8 },
      { id: "living", x: 28, depth: 0.7, lift: 16 },
      { id: "living", x: 36, depth: 0.55, lift: 34 },
      { id: "living", x: 40, depth: 0.4, lift: 52 },
      { id: "living", x: 58, depth: 0.32, lift: 42 },
      { id: "living", x: 66, depth: 0.24, lift: 56 }
    ];
    if (gymOpen()) list.push({ id: "gym", x: 84, depth: 0.72, lift: 14 });
    if (uniOpen()) list.push({ id: "study", x: 68, depth: 0.3, lift: 50 });
    return list;
  }

  function placeCat(next) {
    const dx = Math.abs(next.x - catX);
    const dy = Math.abs(next.lift - catLift);
    catFlip.classList.toggle("face-left", next.x < catX);
    houseCat.classList.toggle("is-climb", dy > 10 && dy > dx * 0.45);
    houseCat.classList.add("is-walking");
    const scale = 0.26 + next.depth * 1.64;
    houseCat.style.left = next.x + "%";
    houseCat.style.bottom = next.lift + "%";
    houseCat.style.transform = "scale(" + scale.toFixed(3) + ")";
    houseCat.style.zIndex = String(3 + Math.round(next.depth * 5));
    catX = next.x;
    catLift = next.lift;
    catDepth = next.depth;
    state.room = next.id;
    if (sceneEl) sceneEl.textContent = t(sceneKey());
  }

  function wander() {
    const list = spots();
    placeCat(list[Math.floor(Math.random() * list.length)]);
  }

  function roomAt(x, lift) {
    if (lift < 22 && x < 24) return "kitchen";
    if (gymOpen() && lift < 28 && x > 72) return "gym";
    if (uniOpen() && lift > 40 && x > 55) return "study";
    return "living";
  }

  function perk() {
    catFlip.classList.remove("is-up");
    void catFlip.offsetWidth;
    catFlip.classList.add("is-up");
  }

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = inputEl.value;
    const line = text.trim().toLowerCase().replace(/\s+/g, " ");
    if (!line) return;

    const beforeLevel = progress(state.totalXp).level;
    const gymBefore = gymOpen();
    const uniBefore = uniOpen();
    const beforeKnown = {};
    knownWords().forEach((word) => { beforeKnown[word.id] = true; });

    let gained = 0;
    if (line !== state.lastText) {
      const paid = {};
      let freshCount = 0;
      let repeatCount = 0;
      const ids = [];
      tokens(text).forEach((token) => {
        const id = ALIAS[token];
        if (!id || paid[id] || !BY_ID[id]) return;
        paid[id] = true;
        ids.push(id);
      });
      ids.sort((a, b) => {
        const aLate = BY_ID[a].place === "gym" || BY_ID[a].place.indexOf("course:") === 0;
        const bLate = BY_ID[b].place === "gym" || BY_ID[b].place.indexOf("course:") === 0;
        return (aLate ? 1 : 0) - (bLate ? 1 : 0);
      });
      ids.forEach((id) => {
        const word = BY_ID[id];
        if (state.heard[id]) {
          if (repeatCount < REPEAT_CAP) {
            gained += 1;
            repeatCount += 1;
          }
          return;
        }
        if (!canLearn(word) || freshCount >= NEW_CAP) return;
        state.heard[id] = true;
        gained += XP[word.band];
        freshCount += 1;
      });
    }

    state.totalXp += gained;
    state.lastText = line;
    const learned = knownWords().filter((word) => !beforeKnown[word.id]);
    const notices = [];
    if (!gymBefore && gymOpen()) notices.push(t("catGymOpened"));
    if (!uniBefore && uniOpen()) notices.push(t("catUniOpened"));
    lastNote = notices.join(" ");
    lastLearned = learned.map((word) => word.id);
    const prefer = learned.slice().sort((a, b) => b.minLevel - a.minLevel)[0] || null;
    speechEl.textContent = speak(knownWords(), prefer);
    if (progress(state.totalXp).level > beforeLevel || learned.length || notices.length) perk();
    save();
    renderStats();
    inputEl.value = "";
    inputEl.focus();
  });

  nameEl.addEventListener("input", () => {
    state.name = nameEl.value.slice(0, 24);
    save();
  });

  coursesEl.querySelectorAll("[data-course]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.course = btn.getAttribute("data-course");
      save();
      renderStats();
    });
  });

  houseCat.addEventListener("transitionend", (e) => {
    if (e.propertyName === "left" || e.propertyName === "bottom" || e.propertyName === "transform") {
      houseCat.classList.remove("is-walking");
    }
  });

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let wanderTimer = 0;
  let wanderInterval = 0;

  function scheduleWander(delay) {
    window.clearTimeout(wanderTimer);
    window.clearInterval(wanderInterval);
    wanderInterval = 0;
    if (reduceMotion) return;
    wanderTimer = window.setTimeout(() => {
      wander();
      wanderInterval = window.setInterval(wander, 4800);
    }, delay);
  }

  houseBody.addEventListener("click", (e) => {
    const rect = houseBody.getBoundingClientRect();
    const x = Math.max(10, Math.min(90, ((e.clientX - rect.left) / rect.width) * 100));
    const lift = Math.max(6, Math.min(62, ((rect.bottom - e.clientY) / rect.height) * 100));
    const climb = Math.max(0, Math.min(1, (lift - 6) / 56));
    placeCat({
      id: roomAt(x, lift),
      x: x,
      lift: lift,
      depth: 0.9 - climb * 0.66
    });
    scheduleWander(4800);
  });

  window.addEventListener("rjca:langchange", renderStats);

  if (!roomOpen(state.room)) state.room = "living";
  houseCat.classList.add("no-move");
  houseCat.style.left = catX + "%";
  houseCat.style.bottom = "16%";
  houseCat.style.transform = "scale(" + (0.26 + catDepth * 1.64).toFixed(3) + ")";
  speechEl.textContent = speak(knownWords(), null);
  renderStats();
  window.requestAnimationFrame(() => houseCat.classList.remove("no-move"));
  scheduleWander(1400);
})();
