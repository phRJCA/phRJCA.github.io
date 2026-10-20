(function () {
  const root = document.getElementById("app-root");
  if (!root || !window.SOMMELIER_BANK) return;

  const CHOICE_KEYS = ["A", "B", "C", "D"];
  const PART_IDS = window.SOMMELIER_BANK.parts.map(function (p) {
    return p.id;
  });

  const UI = {
    en: {
      quiz: "Quiz",
      explain: "Explanation",
      questionOf: "Question {n} of {total}",
      next: "Next question",
      results: "See results",
      retry: "Shuffle and retry",
      correct: "Correct",
      incorrect: "Incorrect",
      finished: "Quiz complete",
      youScored: "You scored {score} / {total}.",
      items: "{n} questions",
      allQuiz: "All",
      allLead: "Every written-exam question, shuffled. Choices stay in order.",
      allLeadExplain: "Study every section. Use the part tabs to switch sections.",
      partLeadQuiz: "Questions are shuffled. Choose A–D to check the answer.",
      partLeadExplain: "Study the marked answers and a short explanation for each question.",
      sourceNo: "No. {n}",
      backHub: "All sections",
      startQuiz: "Start quiz",
      openExplain: "Open explanations",
      imageNote: "*Note: Images not verified"
    },
    jp: {
      quiz: "クイズ",
      explain: "解説",
      questionOf: "{n} / {total} 問",
      next: "次の問題",
      results: "結果を見る",
      retry: "シャッフルして再挑戦",
      correct: "正解",
      incorrect: "不正解",
      finished: "終了",
      youScored: "得点 {score} / {total}",
      items: "{n}問",
      allQuiz: "全問",
      allLead: "筆記の全問をシャッフルします。選択肢の順はそのままです。",
      allLeadExplain: "全分野の解説です。上のタブで分野を切り替えます。",
      partLeadQuiz: "問題順だけ入れ替えます。A〜Dを選ぶと正誤が分かります。",
      partLeadExplain: "正解と短い解説を分野ごとに確認できます。",
      sourceNo: "第{n}問",
      backHub: "分野一覧",
      startQuiz: "クイズを始める",
      openExplain: "解説を見る",
      imageNote: "*注: 画像は未確認です"
    },
    kr: {
      quiz: "퀴즈",
      explain: "해설",
      questionOf: "{n} / {total}문",
      next: "다음 문제",
      results: "결과 보기",
      retry: "다시 섞어 풀기",
      correct: "정답",
      incorrect: "오답",
      finished: "완료",
      youScored: "{score} / {total}점",
      items: "{n}문",
      allQuiz: "전체",
      allLead: "필기 문제를 모두 섞습니다. 보기 순서는 그대로입니다.",
      allLeadExplain: "전 분야의 해설입니다. 위 탭에서 분야를 바꿉니다.",
      partLeadQuiz: "문제만 섞입니다. A–D를 고르면 정오가 표시됩니다.",
      partLeadExplain: "표시된 정답과 짧은 해설을 분야별로 볼 수 있습니다.",
      sourceNo: "{n}번",
      backHub: "분야 목록",
      startQuiz: "퀴즈 시작",
      openExplain: "해설 보기",
      imageNote: "*참고: 이미지는 확인되지 않았습니다"
    }
  };

  const state = {
    part: null,
    mode: "quiz",
    queue: [],
    index: 0,
    selected: null,
    answers: [],
    score: 0,
    finished: false
  };

  function lang() {
    return window.RJCA_I18N ? window.RJCA_I18N.getLang() : "en";
  }

  function t(key, vars) {
    const pack = UI[lang()] || UI.en;
    let s = pack[key] || UI.en[key] || key;
    if (vars) {
      Object.keys(vars).forEach(function (k) {
        s = s.replace("{" + k + "}", String(vars[k]));
      });
    }
    return s;
  }

  function siteT(key) {
    return window.RJCA_I18N ? window.RJCA_I18N.t(key) : key;
  }

  function partMeta(id) {
    return window.SOMMELIER_BANK.parts.find(function (p) {
      return p.id === id;
    });
  }

  function partLabel(id) {
    const part = partMeta(id);
    if (!part) return id;
    return part.keys[lang()] || part.keys.en;
  }

  function partIndex(id) {
    return PART_IDS.indexOf(id) + 1;
  }

  function countBracket(n) {
    if (lang() === "kr") return "[" + n + "문]";
    if (lang() === "jp") return "[" + n + "問]";
    return "[" + n + "]";
  }

  function questionsFor(part) {
    const all = window.SOMMELIER_BANK.questions;
    if (part === "all") return all.slice();
    return all.filter(function (q) {
      return q.part === part;
    });
  }

  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }
    return a;
  }

  function currentParams() {
    return new URLSearchParams(window.location.search);
  }

  function appHref(extra) {
    const url = new URL(window.location.href);
    const next = new URLSearchParams();
    const currentLang = currentParams().get("lang");
    if (currentLang) next.set("lang", currentLang);
    Object.keys(extra).forEach(function (k) {
      if (extra[k] != null && extra[k] !== "") next.set(k, extra[k]);
    });
    const q = next.toString();
    return url.pathname + (q ? "?" + q : "");
  }

  function parseRoute() {
    const q = currentParams();
    const part = q.get("part");
    const mode = q.get("mode") === "quiz" ? "quiz" : "explain";
    const section = q.get("section");
    if (part === "all") {
      return {
        part: "all",
        mode: mode,
        section: PART_IDS.indexOf(section) !== -1 ? section : PART_IDS[0]
      };
    }
    if (PART_IDS.indexOf(part) !== -1) return { part: part, mode: mode, section: null };
    return { part: null, mode: "hub", section: null };
  }

  function setHeader(route) {
    const title = document.getElementById("app-title");
    const lead = document.getElementById("app-lead");
    if (!title || !lead) return;

    if (!route.part) {
      title.textContent = siteT("navSommelier");
      lead.textContent = siteT("appLead");
      return;
    }
    if (route.part === "all") {
      title.textContent = t("allQuiz") + " " + countBracket(questionsFor("all").length);
      lead.textContent = route.mode === "explain" ? t("allLeadExplain") : t("allLead");
      return;
    }
    title.textContent =
      "(" +
      partIndex(route.part) +
      ") " +
      partLabel(route.part) +
      " " +
      countBracket(questionsFor(route.part).length);
    lead.textContent = route.mode === "explain" ? t("partLeadExplain") : t("partLeadQuiz");
  }

  function imageNoteHtml() {
    return '<p class="image-note">' + escapeHtml(t("imageNote")) + "</p>";
  }

  function toolbarHtml(route) {
    const bits = [];
    bits.push(
      '<a class="quiz-btn" href="' +
        appHref({}) +
        '">' +
        t("backHub") +
        "</a>"
    );
    if (route.part) {
      const explainExtra =
        route.part === "all" ? { part: "all", mode: "explain", section: route.section || PART_IDS[0] } : { part: route.part, mode: "explain" };
      bits.push('<div class="mode-tabs">');
      bits.push(
        '<a href="' +
          appHref(explainExtra) +
          '"' +
          (route.mode === "explain" ? ' aria-current="true"' : "") +
          ">" +
          t("explain") +
          "</a>"
      );
      bits.push(
        '<a href="' +
          appHref({ part: route.part, mode: "quiz" }) +
          '"' +
          (route.mode === "quiz" ? ' aria-current="true"' : "") +
          ">" +
          t("quiz") +
          "</a>"
      );
      bits.push("</div>");
    }
    return '<div class="app-toolbar">' + bits.join("") + "</div>";
  }

  function allPartTabsHtml(route) {
    if (route.part !== "all" || route.mode !== "explain") return "";
    const tabs = PART_IDS.map(function (id, i) {
      const count = questionsFor(id).length;
      return (
        '<a href="' +
        appHref({ part: "all", mode: "explain", section: id }) +
        '"' +
        (route.section === id ? ' aria-current="true"' : "") +
        ">" +
        "(" +
        (i + 1) +
        ") " +
        escapeHtml(partLabel(id)) +
        " " +
        escapeHtml(countBracket(count)) +
        "</a>"
      );
    }).join("");
    return '<div class="part-tabs" role="tablist">' + tabs + "</div>";
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function packFor(q) {
    return (window.SOMMELIER_I18N && window.SOMMELIER_I18N[q.id]) || {};
  }

  function choicePair(q, index) {
    const original = q.choices[index];
    const L = lang();
    const pack = window.SOMMELIER_CHOICES && window.SOMMELIER_CHOICES[q.id];
    const translated = pack && pack[L] && pack[L][index];
    const main = L === "kr" || !translated ? original : translated;
    return {
      main: main,
      original: main === original ? "" : original
    };
  }

  function choiceHtml(q, index) {
    const pair = choicePair(q, index);
    let html =
      '<span class="choice-key">' +
      CHOICE_KEYS[index] +
      '</span><span class="choice-copy"><span class="choice-main">' +
      escapeHtml(pair.main) +
      "</span>";
    if (pair.original) {
      html +=
        '<span class="choice-original">(' + escapeHtml(pair.original) + ")</span>";
    }
    return html + "</span>";
  }

  function questionInLang(q) {
    const L = lang();
    if (L === "kr") return q.q;
    const pack = packFor(q);
    return (pack.qt && pack.qt[L]) || q.q;
  }

  function expInLang(q) {
    const L = lang();
    const pack = packFor(q);
    if (pack.exp && pack.exp[L]) return pack.exp[L];
    return q.exp;
  }

  function originalQuestionHtml(q) {
    const localized = questionInLang(q);
    if (localized === q.q) return "";
    return '<p class="explain-original">(' + escapeHtml(q.q) + ")</p>";
  }

  function googleImagesUrl(query) {
    return "https://www.google.com/search?tbm=isch&q=" + encodeURIComponent(query);
  }

  const photoCache = {};

  function textHasTerm(text, key) {
    const latin = /[A-Za-z]/.test(key) && !/[가-힣ぁ-んァ-ン一-龯]/.test(key);
    if (!latin) return text.toLowerCase().indexOf(key.toLowerCase()) !== -1;
    const re = new RegExp(
      "(^|[^A-Za-z])" + key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "(?![A-Za-z])",
      "i"
    );
    return re.test(text);
  }

  function termsInText(text, seen) {
    const out = [];
    wineTerms().forEach(function (term) {
      if (out.length >= 2 || seen[term.q]) return;
      if (!textHasTerm(String(text), term.key)) return;
      seen[term.q] = true;
      out.push({ label: term.key, query: term.q });
    });
    return out;
  }

  function isSizeQuestion(q) {
    const text = [q.q].concat(q.choices).join(" ");
    const aboutSize = /용량|도량|liter|리터|\d+(?:\.\d+)?\s*l\b/i.test(text);
    const namedSize = /nebuchadnezzar|balthazar|salmanazar|methuselah|jeroboam|rehoboam|magnum|imperial|매그넘|임페리얼|네부카드네자르|발타자르|살마나자르|메투살라|제로보암/i.test(text);
    return aboutSize && namedSize;
  }

  function photosForQuestion(q) {
    if (isSizeQuestion(q)) {
      return [{ label: "Bottle sizes", query: "wine bottle size chart" }];
    }
    const seen = {};
    const groups = [
      [q.choices[q.a]],
      q.choices.filter(function (_choice, index) {
        return index !== q.a;
      }),
      [q.q]
    ];
    for (let g = 0; g < groups.length; g++) {
      const found = [];
      groups[g].forEach(function (blob) {
        if (found.length >= 2) return;
        termsInText(blob, seen).forEach(function (item) {
          if (found.length < 2) found.push(item);
        });
      });
      if (found.length) return found;
    }
    return [];
  }

  function photosHtml(q) {
    const list = photosForQuestion(q);
    if (!list.length) return "";
    return (
      '<div class="quiz-photos" data-photos="' +
      encodeURIComponent(JSON.stringify(list)) +
      '"></div>'
    );
  }

  const PHOTO_GENERIC = {
    wine: true,
    wines: true,
    bottle: true,
    bottles: true,
    grape: true,
    grapes: true,
    glass: true,
    sparkling: true,
    beer: true,
    german: true,
    germany: true,
    french: true,
    france: true,
    italian: true,
    italy: true,
    spanish: true,
    spain: true,
    pairing: true,
    storage: true,
    cru: true,
    grand: true,
    special: true,
    size: true,
    white: true,
    red: true,
    sweet: true,
    dry: true,
    chateau: true,
    domaine: true,
    clos: true
  };

  const PHOTO_OBJECT = {
    wine: true,
    wines: true,
    vino: true,
    wein: true,
    grape: true,
    grapes: true,
    bottle: true,
    botella: true,
    bouteille: true,
    flasche: true,
    glass: true,
    sherry: true,
    champagne: true,
    sparkling: true,
    beer: true,
    cask: true,
    barrel: true,
    label: true,
    aszu: true,
    aszú: true
  };

  const PHOTO_CONTEXT = {
    champagne: true,
    sherry: true,
    bordeaux: true,
    burgundy: true,
    beaujolais: true,
    german: true,
    germany: true,
    sparkling: true
  };

  const PHOTO_AMBIGUOUS = {
    nebuchadnezzar: true,
    balthazar: true,
    salmanazar: true,
    methuselah: true,
    jeroboam: true,
    rehoboam: true,
    magnum: true,
    imperial: true
  };

  function foldPhoto(value) {
    return String(value)
      .replace(/^File:/i, "")
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  function photoWords(value) {
    return foldPhoto(value)
      .split(/[^a-z0-9]+/)
      .filter(Boolean);
  }

  const PHOTO_SUBJECT = {
    sherry: true,
    port: true,
    champagne: true,
    grape: true,
    wine: true,
    bottle: true
  };

  function photoTokens(query) {
    const seen = {};
    return photoWords(query).filter(function (word) {
      if (word.length < 3 || PHOTO_GENERIC[word] || seen[word]) return false;
      seen[word] = true;
      return true;
    });
  }

  function requiredPhotoTokens(query) {
    const tokens = photoTokens(query).filter(function (word) {
      return !PHOTO_CONTEXT[word];
    });
    const base = tokens.length ? tokens : photoTokens(query);
    if (base.length <= 1) return base;
    const longest = base.reduce(function (best, word) {
      return word.length > best.length ? word : best;
    });
    if (PHOTO_SUBJECT[longest]) {
      const specific = base.filter(function (word) {
        return !PHOTO_SUBJECT[word];
      });
      if (specific.some(function (word) { return word.length <= 5; })) return base;
      if (specific.length) return specific;
    }
    if (longest.length <= 5) return base;
    return base.filter(function (word) {
      return word.length === longest.length;
    });
  }

  function pageAboutSubject(text) {
    return /wine|grape|champagne|bottle|beer|sherry|cognac|brandy|spirit|vineyard|fortified|brewery|caviar|foie|roe|riddl|disgorg|dosage|cuvee/.test(text);
  }

  function wikiPageScore(page, query) {
    const title = page.title || "";
    const desc = ((page.terms && page.terms.description) || []).join(" ");
    const blob = foldPhoto(title + " " + desc);
    if (/disambiguation|stain|cheese|television|drama series|actor|singer|\balbum\b|ziggurat|bible|babylon|judith|novel|\bfilm\b|\bking of\b/.test(blob)) {
      return -1;
    }
    const titleSet = {};
    photoWords(title).forEach(function (word) {
      titleSet[word] = true;
    });
    const need = requiredPhotoTokens(query);
    if (!need.length) return -1;
    for (let i = 0; i < need.length; i++) {
      if (!titleSet[need[i]]) return -1;
    }
    if (!pageAboutSubject(blob)) return -1;
    if (!page.thumbnail || !page.thumbnail.source) return -1;
    return 20 - (page.index || 10);
  }

  function bottleSizeFile(query) {
    if (foldPhoto(query).indexOf("size chart") === -1) return "";
    return "File:Sizes of bottles.jpg";
  }

  function photoScore(title, query) {
    const folded = foldPhoto(title);
    if (/\.(pdf|djvu|svg|gif|ogg|webm|tiff?)$/.test(folded)) return -1;
    if (/stain|jelly|tonic|truck|cobra|cockpit|replica|portrait|flag|logo|icon|diagram|signature|borealis|coin|currency|monk|inventor|benedictine|statue|painting|engraving|illustration|newspaper|babylon|relief|stele|cylinder|\bking\b|\bmap\b/.test(folded)) {
      return -1;
    }
    const words = photoWords(title);
    const wordSet = {};
    words.forEach(function (word) {
      wordSet[word] = true;
    });
    const need = requiredPhotoTokens(query);
    if (!need.length) return -1;
    for (let i = 0; i < need.length; i++) {
      if (!wordSet[need[i]]) return -1;
    }
    const hasObject = words.some(function (word) {
      return PHOTO_OBJECT[word];
    });
    const longest = need.reduce(function (best, word) {
      return word.length > best ? word.length : best;
    }, 0);
    const ambiguous = need.some(function (word) {
      return PHOTO_AMBIGUOUS[word];
    });
    if ((ambiguous || (need.length === 1 && longest <= 6)) && !hasObject) return -1;
    let score = 12 + need.length * 3;
    if (hasObject) score += 6;
    if (/vineyard|landscape|village|church|castle/.test(folded)) score -= 5;
    return score;
  }

  function wikiPageThumb(query) {
    const url =
      "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*" +
      "&generator=search&gsrlimit=8&gsrsearch=" +
      encodeURIComponent(query) +
      "&prop=pageimages|pageterms&piprop=thumbnail&pithumbsize=800&wbptterms=description";
    return fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        const pages = (data.query && data.query.pages) || {};
        let best = "";
        let bestScore = 0;
        Object.keys(pages).forEach(function (id) {
          const page = pages[id];
          const score = wikiPageScore(page, query);
          if (score > bestScore) {
            bestScore = score;
            best = page.thumbnail.source;
          }
        });
        return best;
      });
  }

  function commonsSearchThumb(query) {
    const url =
      "https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*" +
      "&generator=search&gsrnamespace=6&gsrlimit=12&gsrsearch=" +
      encodeURIComponent(query + " filetype:bitmap") +
      "&prop=imageinfo&iiprop=url|mime&iiurlwidth=800";
    return fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        const pages = (data.query && data.query.pages) || {};
        let best = "";
        let bestScore = 0;
        Object.keys(pages).forEach(function (id) {
          const page = pages[id];
          const score = photoScore(page.title || "", query);
          const info = page.imageinfo && page.imageinfo[0];
          const src = info && (info.thumburl || info.url);
          if (src && score > bestScore) {
            bestScore = score;
            best = src;
          }
        });
        return best;
      });
  }

  function commonsFileThumb(title) {
    const url =
      "https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*" +
      "&titles=" + encodeURIComponent(title) +
      "&prop=imageinfo&iiprop=url&iiurlwidth=800";
    return fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        const pages = (data.query && data.query.pages) || {};
        const page = pages[Object.keys(pages)[0]];
        const info = page && page.imageinfo && page.imageinfo[0];
        return (info && (info.thumburl || info.url)) || "";
      });
  }

  function wikiThumb(query) {
    if (Object.prototype.hasOwnProperty.call(photoCache, query)) {
      return Promise.resolve(photoCache[query]);
    }
    const chart = bottleSizeFile(query);
    const pending = chart ? commonsFileThumb(chart) : wikiPageThumb(query).then(function (src) {
      return src || commonsSearchThumb(query);
    });
    return pending
      .then(function (src) {
        photoCache[query] = src || "";
        return photoCache[query];
      })
      .catch(function () {
        photoCache[query] = "";
        return "";
      });
  }

  function mountPhotos(scope) {
    scope.querySelectorAll(".quiz-photos[data-photos]").forEach(function (box) {
      let list = [];
      try {
        list = JSON.parse(decodeURIComponent(box.getAttribute("data-photos") || ""));
      } catch (err) {
        list = [];
      }
      box.removeAttribute("data-photos");
      list.forEach(function (item) {
        wikiThumb(item.query).then(function (src) {
          if (!src || !box.isConnected) return;
          const link = document.createElement("a");
          link.href = googleImagesUrl(item.query);
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          const img = document.createElement("img");
          img.src = src;
          img.alt = item.label;
          const cap = document.createElement("span");
          cap.textContent = item.label;
          link.appendChild(img);
          link.appendChild(cap);
          box.appendChild(link);
        });
      });
    });
  }

  function wineTerms() {
    const raw = window.SOMMELIER_IMAGE_TERMS || [];
    const flat = [];
    raw.forEach(function (term) {
      const keys = term.keys || [term.key];
      keys.forEach(function (key) {
        if (key) flat.push({ key: key, q: term.q });
      });
    });
    flat.sort(function (a, b) {
      return b.key.length - a.key.length;
    });
    return flat;
  }

  function renderHub() {
    const cards = [
      '<article class="hub-card hub-all"><a class="hub-card-link" href="' +
        appHref({ part: "all", mode: "explain", section: PART_IDS[0] }) +
        '"><span class="hub-kicker">' +
        t("allQuiz") +
        '</span><span class="hub-title">' +
        siteT("navSommelier") +
        '</span><span class="hub-meta">' +
        t("items", { n: window.SOMMELIER_BANK.questions.length }) +
        '</span></a><div class="quiz-actions"><a class="quiz-btn primary" href="' +
        appHref({ part: "all", mode: "explain", section: PART_IDS[0] }) +
        '">' +
        t("openExplain") +
        '</a><a class="quiz-btn" href="' +
        appHref({ part: "all", mode: "quiz" }) +
        '">' +
        t("startQuiz") +
        "</a></div></article>"
    ];
    window.SOMMELIER_BANK.parts.forEach(function (part, i) {
      const count = questionsFor(part.id).length;
      cards.push(
        '<article class="hub-card"><a class="hub-card-link" href="' +
          appHref({ part: part.id, mode: "explain" }) +
          '"><span class="hub-kicker">(' +
          (i + 1) +
          ")</span><span class=\"hub-title\">" +
          escapeHtml(partLabel(part.id)) +
          '</span><span class="hub-meta">' +
          t("items", { n: count }) +
          '</span></a><div class="quiz-actions"><a class="quiz-btn primary" href="' +
          appHref({ part: part.id, mode: "explain" }) +
          '">' +
          t("openExplain") +
          '</a><a class="quiz-btn" href="' +
          appHref({ part: part.id, mode: "quiz" }) +
          '">' +
          t("startQuiz") +
          "</a></div></article>"
      );
    });
    root.innerHTML = imageNoteHtml() + '<div class="hub-grid">' + cards.join("") + "</div>";
  }

  function startQuiz(part, reshuffle) {
    if (reshuffle || state.queue.length === 0 || state.part !== part) {
      state.part = part;
      state.queue = shuffle(questionsFor(part));
      state.index = 0;
      state.selected = null;
      state.answers = [];
      state.score = 0;
      state.finished = false;
    }
  }

  function renderQuiz(route) {
    startQuiz(route.part, false);
    if (state.finished) {
      root.innerHTML =
        toolbarHtml(route) +
        imageNoteHtml() +
        '<section class="quiz-card quiz-result"><p class="hero-badge">' +
        t("finished") +
        '</p><p class="score-num">' +
        state.score +
        " / " +
        state.queue.length +
        "</p><p>" +
        t("youScored", { score: state.score, total: state.queue.length }) +
        '</p><button type="button" class="quiz-btn primary" data-action="retry">' +
        t("retry") +
        "</button></section>";
      return;
    }

    const q = state.queue[state.index];
    const total = state.queue.length;
    const n = state.index + 1;
    const answered = state.selected !== null;
    const choices = q.choices
      .map(function (text, i) {
        let cls = "quiz-choice";
        if (answered && i === q.a) cls += " is-correct";
        if (answered && i === state.selected && i !== q.a) cls += " is-wrong";
        return (
          '<button type="button" class="' +
          cls +
          '" data-choice="' +
          i +
          '"' +
          (answered ? " disabled" : "") +
          '><span class="choice-key">' +
          CHOICE_KEYS[i] +
          "</span><span>" +
          escapeHtml(text) +
          "</span></button>"
        );
      })
      .join("");

    let feedback = "";
    if (answered) {
      const ok = state.selected === q.a;
      feedback =
        '<div class="quiz-feedback ' +
        (ok ? "is-correct" : "is-wrong") +
        '" role="status"><div class="feedback-label">' +
        (ok ? t("correct") : t("incorrect")) +
        '</div><p class="explain-main">' +
        escapeHtml(expInLang(q)) +
        "</p>" +
        originalQuestionHtml(q) +
        photosHtml(q) +
        "</div>";
    }

    const nextLabel = n === total ? t("results") : t("next");
    const partTag =
      route.part === "all"
        ? '<div class="quiz-part-tag">' +
          "(" +
          partIndex(q.part) +
          ") " +
          escapeHtml(partLabel(q.part)) +
          " · " +
          t("sourceNo", { n: q.n }) +
          "</div>"
        : '<div class="quiz-part-tag">' + t("sourceNo", { n: q.n }) + "</div>";

    root.innerHTML =
      toolbarHtml(route) +
      imageNoteHtml() +
      '<section class="quiz-card">' +
      '<div class="quiz-progress"><span>' +
      t("questionOf", { n: n, total: total }) +
      "</span><span>" +
      state.score +
      (answered || n > 1 ? " / " + (answered ? n : n - 1) : "") +
      "</span></div>" +
      '<div class="quiz-progress-bar" aria-hidden="true"><span style="width:' +
      (n / total) * 100 +
      '%"></span></div>' +
      partTag +
      '<p class="quiz-question">' +
      escapeHtml(q.q) +
      '</p><div class="quiz-choices" role="group">' +
      choices +
      "</div>" +
      '<div class="quiz-actions"><button type="button" class="quiz-btn primary" data-action="next"' +
      (answered ? "" : " disabled") +
      ">" +
      nextLabel +
      "</button></div>" +
      feedback +
      "</section>";
    mountPhotos(root);
  }

  function renderExplain(route) {
    const explainPart = route.part === "all" ? route.section : route.part;
    const list = questionsFor(explainPart).slice().sort(function (a, b) {
      return a.n - b.n;
    });
    const cards = list
      .map(function (q) {
        const choices = q.choices
          .map(function (_, i) {
            return (
              "<li" +
              (i === q.a ? ' class="is-answer"' : "") +
              ">" +
              choiceHtml(q, i) +
              "</li>"
            );
          })
          .join("");
        return (
          '<article class="explain-card"><h2>' +
          t("sourceNo", { n: q.n }) +
          ". " +
          escapeHtml(questionInLang(q)) +
          "</h2>" +
          originalQuestionHtml(q) +
          '<ul class="explain-choices">' +
          choices +
          '</ul><p class="explain-body">' +
          escapeHtml(expInLang(q)) +
          "</p>" +
          photosHtml(q) +
          "</article>"
        );
      })
      .join("");
    root.innerHTML =
      toolbarHtml(route) +
      imageNoteHtml() +
      allPartTabsHtml(route) +
      '<div class="explain-list">' +
      cards +
      "</div>";
    mountPhotos(root);
  }

  function revealFeedback() {
    const next = root.querySelector("[data-action=next]");
    if (next) next.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  function render() {
    const route = parseRoute();
    setHeader(route);
    if (!route.part) {
      state.queue = [];
      renderHub();
      return;
    }
    if (route.mode === "explain") {
      renderExplain(route);
      return;
    }
    renderQuiz(route);
  }

  root.addEventListener("click", function (e) {
    const retry = e.target.closest("[data-action=retry]");
    if (retry) {
      startQuiz(state.part, true);
      render();
      return;
    }
    const next = e.target.closest("[data-action=next]");
    if (next && state.selected !== null) {
      goNext();
      return;
    }
    const choice = e.target.closest("[data-choice]");
    if (!choice || state.selected !== null || state.finished) return;
    const i = Number(choice.getAttribute("data-choice"));
    if (Number.isNaN(i)) return;
    rememberAnswer(i);
    render();
    revealFeedback();
  });

  function rememberAnswer(choice) {
    state.selected = choice;
    state.answers[state.index] = choice;
    if (state.queue[state.index] && choice === state.queue[state.index].a) state.score += 1;
  }

  function restoreAnswer() {
    const saved = state.answers[state.index];
    state.selected = saved === undefined ? null : saved;
  }

  function goNext() {
    if (state.selected === null) return;
    if (state.index >= state.queue.length - 1) {
      state.finished = true;
    } else {
      state.index += 1;
      restoreAnswer();
    }
    render();
  }

  function goPrev() {
    if (state.index === 0) return;
    state.index -= 1;
    restoreAnswer();
    render();
    if (state.selected !== null) revealFeedback();
  }

  document.addEventListener("keydown", function (e) {
    if (state.finished || !state.queue.length || parseRoute().mode !== "quiz") return;
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    if (e.key === "ArrowLeft") {
      if (state.index === 0) return;
      e.preventDefault();
      goPrev();
      return;
    }
    if (state.selected === null) {
      const map = { a: 0, b: 1, c: 2, d: 3, "1": 0, "2": 1, "3": 2, "4": 3 };
      const key = e.key.toLowerCase();
      if (map[key] !== undefined) {
        rememberAnswer(map[key]);
        render();
        revealFeedback();
      }
      return;
    }
    if (e.key === "Enter" || e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    }
  });

  function sameAppLink(anchor) {
    if (!anchor || anchor.target === "_blank" || !anchor.href) return false;
    const url = new URL(anchor.href, window.location.href);
    return url.origin === window.location.origin && url.pathname === window.location.pathname;
  }

  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const anchor = e.target.closest("a");
    if (!sameAppLink(anchor)) return;
    const url = new URL(anchor.href, window.location.href);
    const next = url.pathname + url.search;
    if (next === window.location.pathname + window.location.search) return;
    e.preventDefault();
    history.pushState(null, "", next);
    const route = parseRoute();
    if (route.part !== state.part) {
      state.queue = [];
      state.finished = false;
    }
    render();
  });

  window.addEventListener("popstate", function () {
    state.queue = [];
    state.finished = false;
    render();
  });

  window.addEventListener("rjca:langchange", render);
  render();
})();
