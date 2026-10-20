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
    ["certain", "C2", "adj"]
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
  const ALIAS = {};
  RAW.forEach((row) => {
    const word = { id: row[0], band: row[1], pos: row[2], minLevel: BAND_MIN[row[1]] };
    WORDS.push(word);
    ALIAS[row[0]] = row[0];
    if (row[3]) row[3].split(" ").forEach((form) => { ALIAS[form] = row[0]; });
  });

  const speechEl = document.getElementById("cat-speech");
  const figureEl = document.getElementById("cat-figure");
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

  if (!speechEl || !formEl || !inputEl) return;

  let state = load();
  let lastLearned = [];

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
        lastText: typeof raw.lastText === "string" ? raw.lastText : ""
      };
    } catch (err) {
      return { totalXp: 0, heard: {}, name: "", lastText: "" };
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
    if (lastLearned.length) {
      learnedEl.hidden = false;
      learnedEl.textContent = t("catLearned") + ": " + lastLearned.join(", ");
    } else {
      learnedEl.hidden = true;
      learnedEl.textContent = "";
    }
    inputEl.placeholder = t("catPlaceholder");
    nameEl.value = state.name;
  }

  function perk() {
    figureEl.classList.remove("is-up");
    void figureEl.offsetWidth;
    figureEl.classList.add("is-up");
  }

  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = inputEl.value;
    const line = text.trim().toLowerCase().replace(/\s+/g, " ");
    if (!line) return;

    const beforeLevel = progress(state.totalXp).level;
    const beforeKnown = {};
    knownWords().forEach((word) => { beforeKnown[word.id] = true; });

    let gained = 0;
    if (line !== state.lastText) {
      const paid = {};
      let freshCount = 0;
      let repeatCount = 0;
      tokens(text).forEach((token) => {
        const id = ALIAS[token];
        if (!id || paid[id]) return;
        const word = WORDS.find((item) => item.id === id);
        if (!word) return;
        paid[id] = true;
        if (state.heard[id]) {
          if (repeatCount < REPEAT_CAP) {
            gained += 1;
            repeatCount += 1;
          }
          return;
        }
        if (freshCount >= NEW_CAP) return;
        state.heard[id] = true;
        gained += XP[word.band];
        freshCount += 1;
      });
    }

    state.totalXp += gained;
    state.lastText = line;
    const learned = knownWords().filter((word) => !beforeKnown[word.id]);
    lastLearned = learned.map((word) => word.id);
    const prefer = learned.slice().sort((a, b) => b.minLevel - a.minLevel)[0] || null;
    speechEl.textContent = speak(knownWords(), prefer);
    if (progress(state.totalXp).level > beforeLevel || learned.length) perk();
    save();
    renderStats();
    inputEl.value = "";
    inputEl.focus();
  });

  nameEl.addEventListener("input", () => {
    state.name = nameEl.value.slice(0, 24);
    save();
  });

  window.addEventListener("rjca:langchange", renderStats);

  speechEl.textContent = speak(knownWords(), null);
  renderStats();
})();
