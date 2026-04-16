(function () {
  const STR = {
    en: {
    badge: "Portfolio",
    heroName: "Reynald Joshua Albano",
    heroTitle: "I build things on the web.",
    heroLeadMain: "Multilingual software engineer",
    heroLeadLangs: "English, Japanese, and Korean",
    codeTitle: "I code",
    codeBody: "Built and shipped this site in a day.",
    learnTitle: "I learn fast",
    learnBody: "I pick up new tools quickly and put them to work.",
    aiTitle: "I adapt",
    aiBody: "I stay updated with AI and modern technologies.",
    sectionSkills: "Programming skills",
    skillJs: "JavaScript",
    skillMongo: "MongoDB",
    skillAi: "AI Tools",
    skillsMore: "…and more.",
    sectionLang: "Languages",
    langEnLabel: "English",
    langEnName: "English",
    langEnScore: "TOEIC L&R — 990",
    langJpLabel: "Japanese",
    langJpName: "日本語",
    langJpScore: "JLPT — N1",
    langKrLabel: "Korean",
    langKrName: "한국어",
    langKrScore: "TOPIK — Level 5",
    sectionAcademic: "Academic Background",
    acadGradTitle: "Graduated",
    acadGrad1School: "De La Salle University Manila",
    acadGrad1Rest: " — Bachelor Of Science In Accountancy",
    acadGrad2School: "Fukuoka Foreign Language College",
    acadGrad2Rest: " — Japanese Language Program (1-year)",
    acadCurrentTitle: "Current",
    acadDual: "Dual Degree Program (2+2)",
    acadCur1School: "Nagasaki University Of Foreign Studies",
    acadCur1Rest: " — International Communication Major (1st and 2nd year)",
    acadCur2School: "Busan University Of Foreign Studies",
    acadCur2Rest: " — International Studies, Diplomacy Major (3rd year, current)",
    acadOthersTitle: "Others",
    othersChinaTitle: "China",
    othersChina1School: "Dalian Neusoft University Of Information",
    othersChina1Rest: " — Chinese Short-Term Study Program (2 weeks)",
    othersRussiaTitle: "Russia",
    othersRussia1School: "St. Petersburg State University",
    othersRussia1Rest: " — Russian Language Program (3 months)",
    othersNeusoftUrl: "https://english.neusoft.edu.cn/",
    heroAlt: "Portrait of Reynald Joshua Albano",
    photoBubble5: "Hello!",
    photoBubble10: "Anything I can help you with?",
    photoBubble15: "If you need anything, feel free to message me directly.",
    photoBubble20: "???",
    photoBubble25:
      "Unfortunately, the developer has no further text. Apologies.",
    photoBubbleMore: "...",
    photoImgAria: "Profile photo — click for a surprise",
    htmlLang: "en",
    title: "Reynald Joshua Albano · Portfolio",
    bodyClass: "lang-en"
    },
    jp: {
    badge: "ポートフォリオ",
    heroName: "アルバノ レイナルド・ジョシュア",
    heroTitle: "ソフトウェアエンジニア",
    heroLeadMain: "多言語に対応できるソフトウェアエンジニア",
    heroLeadLangs: "英語・日本語・韓国語",
    codeTitle: "開発力",
    codeBody: "このサイトは一日で企画から公開まで完成させました。",
    learnTitle: "吸収力",
    learnBody: "新しい技術や環境にもすぐ慣れて、学んだことをすぐ仕事に活かせます。",
    aiTitle: "適応力",
    aiBody: "AIや新しい技術も普段から学び、仕事に取り入れています。",
    sectionSkills: "プログラミングスキル",
    skillJs: "JavaScript",
    skillMongo: "MongoDB",
    skillAi: "AIツール",
    skillsMore: "…など",
    sectionLang: "言語スキル",
    langEnLabel: "英語",
    langEnName: "English",
    langEnScore: "TOEIC L&R — 990点",
    langJpLabel: "日本語",
    langJpName: "日本語",
    langJpScore: "日本語能力試験 (JLPT) — N1",
    langKrLabel: "韓国語",
    langKrName: "韓国語",
    langKrScore: "韓国語能力試験 (TOPIK) — 5級",
    sectionAcademic: "学歴",
    acadGradTitle: "卒業",
    acadGrad1School: "デ・ラ・サール大学マニラ校",
    acadGrad1Rest: " — 会計学学士",
    acadGrad2School: "福岡外語専門学校",
    acadGrad2Rest: " — 日本語プログラム（1年）",
    acadCurrentTitle: "現在",
    acadDual: "二重学位プログラム（2+2）",
    acadCur1School: "長崎外国語大学",
    acadCur1Rest: " — 国際コミュニケーション学科（1・2年次）",
    acadCur2School: "釜山外国語大学",
    acadCur2Rest: " — 国際学部 外交専攻（3年次・在籍中）",
    acadOthersTitle: "その他（短期プログラム）",
    othersChinaTitle: "中国",
    othersChina1School: "大連東軟情報学院",
    othersChina1Rest: " — 中国語短期プログラム（2週間）",
    othersRussiaTitle: "ロシア",
    othersRussia1School: "サンクトペテルブルク国立大学",
    othersRussia1Rest: " — ロシア語プログラム（3か月）",
    othersNeusoftUrl: "https://www.neusoft.edu.cn/",
    heroAlt: "アルバノ レイナルド・ジョシュアのポートレート",
    photoBubble5: "こんにちは！",
    photoBubble10: "何かご用ですか？",
    photoBubble15: "何かあれば、気軽に直接連絡して\nください。",
    photoBubble20: "???",
    photoBubble25: "残念ながら、この先のテキストは\nありません。申し訳ありません。",
    photoBubbleMore: "...",
    photoImgAria: "プロフィール写真 — クリックでひとこと",
    htmlLang: "ja",
    title: "アルバノ レイナルド・ジョシュア｜ポートフォリオ",
    bodyClass: "lang-jp"
    },
    kr: {
    badge: "포트폴리오",
    heroName: "알바노 레이날드 죠슈아",
    heroTitle: "소프트웨어 엔지니어",
    heroLeadMain: "다국어 가능한 소프트웨어 엔지니어",
    heroLeadLangs: "영어, 일본어, 한국어",
    codeTitle: "구현력",
    codeBody: "이 사이트는 하루 만에 기획부터 배포까지 끝냈습니다.",
    learnTitle: "흡수력",
    learnBody: "새 기술이나 환경에도 빠르게 적응하고, 배운 것을 바로 업무에 활용합니다.",
    aiTitle: "적응력",
    aiBody: "AI와 새로운 기술도 꾸준히 배우고, 업무에 적용합니다.",
    sectionSkills: "프로그래밍 스킬",
    skillJs: "JavaScript",
    skillMongo: "MongoDB",
    skillAi: "AI 도구",
    skillsMore: "…등",
    sectionLang: "언어 스킬",
    langEnLabel: "영어",
    langEnName: "English",
    langEnScore: "TOEIC L&R — 990점",
    langJpLabel: "일본어",
    langJpName: "日本語",
    langJpScore: "JLPT — N1",
    langKrLabel: "한국어",
    langKrName: "한국어",
    langKrScore: "TOPIK — 5급",
    sectionAcademic: "학력",
    acadGradTitle: "졸업",
    acadGrad1School: "데 라 살 대학교 마닐라",
    acadGrad1Rest: " — 회계학 학사",
    acadGrad2School: "후쿠오카 외어전문학교",
    acadGrad2Rest: " — 일본어 프로그램 (1년)",
    acadCurrentTitle: "재학 중",
    acadDual: "복수학위 프로그램 (2+2)",
    acadCur1School: "나가사키 외국어대학",
    acadCur1Rest: " — 국제커뮤니케이션학과 (1·2학년)",
    acadCur2School: "부산외국어대학교",
    acadCur2Rest: " — 국제학부 외교전공 (3학년, 현재)",
    acadOthersTitle: "기타 (단기 프로그램)",
    othersChinaTitle: "중국",
    othersChina1School: "대련동연정보학원",
    othersChina1Rest: " — 중국어 단기 연수 프로그램 (2주)",
    othersRussiaTitle: "러시아",
    othersRussia1School: "상트페테르부르크 국립대학교",
    othersRussia1Rest: " — 러시아어 프로그램 (3개월)",
    othersNeusoftUrl: "https://www.neusoft.edu.cn/",
    heroAlt: "알바노 레이날드 죠슈아 프로필 사진",
    photoBubble5: "안녕!",
    photoBubble10: "뭘 도와드릴까요?",
    photoBubble15: "필요한 게 있으면 편하게 연락해주세요.",
    photoBubble20: "???",
    photoBubble25: "아쉽지만, 이후 메시지는 없습니다.\n죄송합니다.",
    photoBubbleMore: "...",
    photoImgAria: "프로필 사진 — 클릭하면 메시지가 나와요",
    htmlLang: "ko",
    title: "알바노 레이날드 죠슈아 · 포트폴리오",
    bodyClass: "lang-kr"
    }
  };

  const ALLOWED = { en: true, jp: true, kr: true };

  let photoClicks = 0;
  let photoBubbleHideTimer = null;
  let currentPhotoBubbleKey = null;

  const PHOTO_MILESTONES = [5, 10, 15, 20, 25];
  const PHOTO_KEYS = [
    "photoBubble5",
    "photoBubble10",
    "photoBubble15",
    "photoBubble20",
    "photoBubble25"
  ];

  function getLang() {
    const q = new URLSearchParams(window.location.search).get("lang");
    if (q && ALLOWED[q]) return q;
    return "en";
  }

  function refreshPhotoBubbleIfVisible() {
    if (!currentPhotoBubbleKey) return;
    const el = document.getElementById("photo-speech-text");
    const pack = STR[getLang()];
    if (el && pack && pack[currentPhotoBubbleKey] !== undefined) {
      el.textContent = pack[currentPhotoBubbleKey];
    }
  }

  function showPhotoBubble(key) {
    const el = document.getElementById("photo-speech");
    const textEl = document.getElementById("photo-speech-text");
    const pack = STR[getLang()];
    if (!el || !textEl || !pack || pack[key] === undefined) return;
    currentPhotoBubbleKey = key;
    textEl.textContent = pack[key];
    el.classList.add("is-visible");
    el.setAttribute("aria-hidden", "false");
    clearTimeout(photoBubbleHideTimer);
    photoBubbleHideTimer = setTimeout(() => {
      el.classList.remove("is-visible");
      el.setAttribute("aria-hidden", "true");
      currentPhotoBubbleKey = null;
    }, 4500);
  }

  function triggerPhotoWiggle() {
    const img = document.querySelector(".hero-photo-img");
    if (!img) return;
    img.classList.remove("is-wiggling");
    void img.offsetWidth;
    img.classList.add("is-wiggling");
    const done = () => {
      img.classList.remove("is-wiggling");
    };
    img.addEventListener("animationend", done, { once: true });
    window.setTimeout(done, 700);
  }

  function onPhotoInteract() {
    photoClicks += 1;
    if (photoClicks % 5 === 0) {
      triggerPhotoWiggle();
    }
    const idx = PHOTO_MILESTONES.indexOf(photoClicks);
    if (idx !== -1) {
      showPhotoBubble(PHOTO_KEYS[idx]);
      return;
    }
    if (photoClicks > 25 && photoClicks % 5 === 0) {
      showPhotoBubble("photoBubbleMore");
    }
  }

  function applyLang(lang) {
    const pack = STR[lang];
    if (!pack) return;

    document.documentElement.lang = pack.htmlLang;
    document.title = pack.title;
    document.body.className = pack.bodyClass;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (pack[key] !== undefined) el.textContent = pack[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (pack[key] !== undefined) el.setAttribute("alt", pack[key]);
    });

    document.querySelectorAll("[data-i18n-href]").forEach((el) => {
      const key = el.getAttribute("data-i18n-href");
      if (pack[key] !== undefined) el.setAttribute("href", pack[key]);
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      if (pack[key] !== undefined) el.setAttribute("aria-label", pack[key]);
    });

    document.querySelectorAll(".lang-switch a").forEach((a) => {
      const l = a.getAttribute("data-lang");
      a.setAttribute("aria-current", l === lang ? "true" : "false");
    });

    refreshPhotoBubbleIfVisible();
  }

  const photoImg = document.querySelector(".hero-photo-img");
  if (photoImg) {
    photoImg.addEventListener("click", onPhotoInteract);
    photoImg.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onPhotoInteract();
      }
    });
  }

  applyLang(getLang());
})();
