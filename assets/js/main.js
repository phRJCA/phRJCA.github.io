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
    bodyClass: "lang-en",
    navApps: "Apps",
    navHome: "Home",
    navSommelier: "Sommelier Certification Level 1",
    navQuizAll: "All [95]",
    navPartSelection: "(1) Wine Selection & Purchase [18]",
    navPartCellar: "(2) Wine Cellar Management [5]",
    navPartRecommend: "(3) Wine Recommendation & Sales [21]",
    navPartService: "(4) Wine Service [10]",
    navPartTasting: "(5) Wine Tasting [10]",
    navPartClassification: "(6) Wine Classification [26]",
    navPartManagement: "(7) Wine Business Management [5]",
    navEnglishCat: "English Cat",
    navCatTalk: "Talk",
    catTitle: "English Cat · RJCA",
    catLead: "Talk to the cat as it moves through the house. The words you use become words it can say, and its English opens up as it levels with you.",
    catSay: "Say",
    catPlaceholder: "Say something in English",
    catName: "Name",
    catLevel: "Level",
    catWords: "words",
    catLearned: "Learned",
    catRoomKitchen: "Kitchen",
    catRoomLiving: "Living room",
    catRoomGym: "Gym",
    catRoomStudy: "Study",
    catSkillFitness: "Working out",
    catSkillStudy: "Studying",
    catOpen: "Open",
    catChooseCourse: "Choose a course",
    catCourseCode: "Programming",
    catCourseData: "Data",
    catCourseNet: "Networks",
    catSceneKitchen: "Ordering. Ask for food or a drink.",
    catSceneA1: "Morning. It is hungry.",
    catSceneA2: "It is watching the window.",
    catSceneB1: "It wants to go to the park.",
    catSceneB2: "Evening. It is choosing.",
    catSceneC1: "It is thinking about the day.",
    catSceneC2: "The day has settled.",
    catSceneGym: "The gym. Talk about the workout.",
    catSceneStudy: "The university. Talk about the course.",
    catSceneChoose: "The university is open. Choose a course.",
    catGymLocked: "Say workout words to open the gym. Try run, lift, and stretch.",
    catStudyLocked: "Say study words to open the university. Try read, learn, and book.",
    catGymOpened: "The gym is open.",
    catUniOpened: "The university is open.",
    appBadge: "Apps",
    appLead: "Practice the written exam in shuffled quiz cards, or review explanations by section.",
    appRefLabel: "Reference",
    appRefOrg: "Korea Food & Beverage Education Association",
    appTitle: "Sommelier Certification Level 1 · RJCA"
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
    bodyClass: "lang-jp",
    navApps: "Apps",
    navHome: "ホーム",
    navSommelier: "ソムリエ1級",
    navQuizAll: "全問 [95問]",
    navPartSelection: "(1) ワイン選定・購入 [18問]",
    navPartCellar: "(2) ワインセラー管理 [5問]",
    navPartRecommend: "(3) ワイン推薦・販売 [21問]",
    navPartService: "(4) ワインサービス [10問]",
    navPartTasting: "(5) ワインテイスティング [10問]",
    navPartClassification: "(6) ワイン分類 [26問]",
    navPartManagement: "(7) 営業場の経営 [5問]",
    navEnglishCat: "英語の猫",
    navCatTalk: "話す",
    catTitle: "英語の猫 · RJCA",
    catLead: "家の中を動く猫に話しかけます。使った単語を猫が話せるようになり、レベルとともに英語が広がります。",
    catSay: "話す",
    catPlaceholder: "英語で話しかけてください",
    catName: "名前",
    catLevel: "レベル",
    catWords: "語",
    catLearned: "覚えた語",
    catRoomKitchen: "キッチン",
    catRoomLiving: "居間",
    catRoomGym: "ジム",
    catRoomStudy: "勉強部屋",
    catSkillFitness: "運動",
    catSkillStudy: "勉強",
    catOpen: "開放",
    catChooseCourse: "コースを選ぶ",
    catCourseCode: "プログラミング",
    catCourseData: "データ",
    catCourseNet: "ネットワーク",
    catSceneKitchen: "注文。食べ物か飲み物を頼んでください。",
    catSceneA1: "朝です。お腹がすいています。",
    catSceneA2: "窓を見ています。",
    catSceneB1: "公園に行きたがっています。",
    catSceneB2: "夕方です。どちらにするか迷っています。",
    catSceneC1: "今日のことを考えています。",
    catSceneC2: "一日が落ち着きました。",
    catSceneGym: "ジムです。運動について話してください。",
    catSceneStudy: "大学です。授業について話してください。",
    catSceneChoose: "大学が開きました。コースを選んでください。",
    catGymLocked: "運動の単語でジムが開きます。run、lift、stretch を試してください。",
    catStudyLocked: "勉強の単語で大学が開きます。read、learn、book を試してください。",
    catGymOpened: "ジムが開きました。",
    catUniOpened: "大学が開きました。",
    appBadge: "Apps",
    appLead: "問題順をシャッフルしたクイズか、分野ごとの解説で筆記試験を復習できます。",
    appRefLabel: "参考",
    appRefOrg: "韓国飲食料教育協会",
    appTitle: "ソムリエ1級 · RJCA"
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
    bodyClass: "lang-kr",
    navApps: "Apps",
    navHome: "홈",
    navSommelier: "소믈리에 1급",
    navQuizAll: "전체 [95문]",
    navPartSelection: "(1) 와인선정 · 구매 [18문]",
    navPartCellar: "(2) 와인셀러관리 [5문]",
    navPartRecommend: "(3) 와인 추천판매 [21문]",
    navPartService: "(4) 와인 서비스 [10문]",
    navPartTasting: "(5) 와인 테이스팅 [10문]",
    navPartClassification: "(6) 와인 분류 [26문]",
    navPartManagement: "(7) 와인 영업장 경영 [5문]",
    navEnglishCat: "영어 고양이",
    navCatTalk: "말하기",
    catTitle: "영어 고양이 · RJCA",
    catLead: "집 안을 다니는 고양이에게 말하세요. 당신이 쓴 단어를 고양이가 말하게 되고, 레벨과 함께 영어가 넓어집니다.",
    catSay: "말하기",
    catPlaceholder: "영어로 말해 보세요",
    catName: "이름",
    catLevel: "레벨",
    catWords: "단어",
    catLearned: "배운 단어",
    catRoomKitchen: "부엌",
    catRoomLiving: "거실",
    catRoomGym: "체육관",
    catRoomStudy: "공부방",
    catSkillFitness: "운동",
    catSkillStudy: "공부",
    catOpen: "열림",
    catChooseCourse: "과목 선택",
    catCourseCode: "프로그래밍",
    catCourseData: "데이터",
    catCourseNet: "네트워크",
    catSceneKitchen: "주문. 음식이나 음료를 말해 보세요.",
    catSceneA1: "아침입니다. 배가 고픕니다.",
    catSceneA2: "창밖을 보고 있습니다.",
    catSceneB1: "공원에 가고 싶어 합니다.",
    catSceneB2: "저녁입니다. 고르고 있습니다.",
    catSceneC1: "오늘 하루를 생각하고 있습니다.",
    catSceneC2: "하루가 가라앉았습니다.",
    catSceneGym: "체육관입니다. 운동에 대해 말해 보세요.",
    catSceneStudy: "대학입니다. 수업에 대해 말해 보세요.",
    catSceneChoose: "대학이 열렸습니다. 과목을 고르세요.",
    catGymLocked: "운동 단어로 체육관이 열립니다. run, lift, stretch를 말해 보세요.",
    catStudyLocked: "공부 단어로 대학이 열립니다. read, learn, book을 말해 보세요.",
    catGymOpened: "체육관이 열렸습니다.",
    catUniOpened: "대학이 열렸습니다.",
    appBadge: "Apps",
    appLead: "문제는 섞고 보기는 그대로 둔 카드 퀴즈와, 분야별 해설로 필기시험을 복습할 수 있습니다.",
    appRefLabel: "참고",
    appRefOrg: "사단법인 한국식음료교육협회",
    appTitle: "소믈리에 1급 · RJCA"
    }
  };

  const ALLOWED = { en: true, jp: true, kr: true };

  let photoClicks = 0;
  let photoBubbleHideTimer = null;
  let currentPhotoBubbleKey = null;

  /* First bubble on click 1, then every 5 clicks: 6, 11, 16, 21 */
  const PHOTO_MILESTONES = [1, 6, 11, 16, 21];
  const PHOTO_KEYS = [
    "photoBubble5",
    "photoBubble10",
    "photoBubble15",
    "photoBubble20",
    "photoBubble25"
  ];

  const PHOTO_MOBILE_MAX = window.matchMedia("(max-width: 899.98px)");

  function isPhotoMobileLayout() {
    return PHOTO_MOBILE_MAX.matches;
  }

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
    if (isPhotoMobileLayout()) {
      triggerPhotoWiggle();
    } else if ((photoClicks - 1) % 5 === 0) {
      /* Desktop: first wiggle on click 1, then every 5 clicks (6, 11, 16, …) */
      triggerPhotoWiggle();
    }
    const idx = PHOTO_MILESTONES.indexOf(photoClicks);
    if (idx !== -1) {
      showPhotoBubble(PHOTO_KEYS[idx]);
      return;
    }
    if (photoClicks > 21 && (photoClicks - 21) % 5 === 0) {
      showPhotoBubble("photoBubbleMore");
    }
  }

  function applyLang(lang) {
    const pack = STR[lang];
    if (!pack) return;

    document.documentElement.lang = pack.htmlLang;
    const titleKey = document.body.getAttribute("data-title-key");
    if (titleKey && pack[titleKey]) document.title = pack[titleKey];
    else if (document.body.classList.contains("page-app")) document.title = pack.appTitle;
    else document.title = pack.title;
    document.body.classList.remove("lang-en", "lang-jp", "lang-kr");
    document.body.classList.add(pack.bodyClass);

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
      const url = new URL(window.location.href);
      url.searchParams.set("lang", l);
      a.setAttribute("href", url.pathname + url.search);
      if (l === lang) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });

    document.querySelectorAll(".apps-nav a[href]").forEach((a) => {
      const url = new URL(a.getAttribute("href"), window.location.origin);
      url.searchParams.set("lang", lang);
      a.setAttribute("href", url.pathname + url.search);
    });

    const homeLink = document.querySelector(".apps-home-link");
    const currentPath = window.location.pathname.replace(/\/$/, "") || "/";
    if (homeLink) {
      if (currentPath === "/") homeLink.setAttribute("aria-current", "page");
      else homeLink.removeAttribute("aria-current");
    }
    const currentPart = new URLSearchParams(window.location.search).get("part");
    document.querySelectorAll(".apps-submenu a").forEach((a) => {
      const url = new URL(a.getAttribute("href"), window.location.origin);
      const linkPart = url.searchParams.get("part");
      const linkPath = url.pathname.replace(/\/$/, "") || "/";
      const onSommelier = currentPath.endsWith("/apps/sommelier-level-1");
      const currentLink = linkPart
        ? onSommelier && currentPart && linkPart === currentPart
        : linkPath === currentPath;
      if (currentLink) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });

    refreshPhotoBubbleIfVisible();
  }

  function setupAppsNav() {
    const nav = document.querySelector(".apps-nav");
    const btn = document.querySelector(".apps-root");
    const parents = [...document.querySelectorAll(".apps-item-parent")];
    if (!nav || !btn) return;

    const STORE = "rjca-apps-dock";
    const desktopQuery = window.matchMedia("(min-width: 900px)");
    const isDesktop = () => desktopQuery.matches;
    const pathNow = () => window.location.pathname.replace(/\/$/, "") || "/";

    const parentToggle = (parent) => parent.querySelector(".apps-parent-toggle");
    const parentId = (parent) => {
      const toggle = parentToggle(parent);
      return toggle ? toggle.getAttribute("aria-controls") : "";
    };
    const parentHasCurrent = (parent) =>
      [...parent.querySelectorAll(".apps-submenu a")].some((a) => {
        const url = new URL(a.getAttribute("href"), window.location.origin);
        return (url.pathname.replace(/\/$/, "") || "/") === pathNow();
      });

    const setSub = (parent, open, remember) => {
      const toggle = parentToggle(parent);
      if (!toggle) return;
      parent.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (remember && isDesktop()) {
        try { localStorage.setItem("rjca-apps-sub:" + parentId(parent), open ? "1" : "0"); } catch (err) { /* ignore */ }
      }
    };

    const storedSub = (parent) => {
      const id = parentId(parent);
      try {
        const v = localStorage.getItem("rjca-apps-sub:" + id);
        if (v === "1" || v === "0") return v === "1";
        if (id === "apps-submenu" && localStorage.getItem("rjca-apps-sub") === "1") return true;
      } catch (err) { /* ignore */ }
      return false;
    };

    const setOpen = (open, remember) => {
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("apps-docked", open && isDesktop());
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      if (remember && isDesktop()) {
        try { localStorage.setItem(STORE, open ? "1" : "0"); } catch (err) { /* ignore */ }
      }
      if (!open) parents.forEach((parent) => setSub(parent, false, false));
    };

    if (isDesktop()) {
      let docked = false;
      try { docked = localStorage.getItem(STORE) === "1"; } catch (err) { docked = false; }
      if (docked) {
        setOpen(true, false);
        parents.forEach((parent) => {
          setSub(parent, storedSub(parent) || parentHasCurrent(parent), false);
        });
      }
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = !nav.classList.contains("is-open");
      setOpen(open, true);
      if (open) parents.forEach((parent) => {
        if (parentHasCurrent(parent)) setSub(parent, true, true);
      });
    });

    parents.forEach((parent) => {
      const toggle = parentToggle(parent);
      if (!toggle) return;
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        setSub(parent, !parent.classList.contains("is-open"), true);
      });
    });

    document.addEventListener("click", (e) => {
      if (isDesktop()) return;
      if (!nav.contains(e.target)) setOpen(false, false);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false, true);
    });

    desktopQuery.addEventListener("change", () => {
      if (!nav.classList.contains("is-open")) {
        document.body.classList.remove("apps-docked");
        return;
      }
      document.body.classList.toggle("apps-docked", isDesktop());
    });
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

  setupAppsNav();

  document.querySelectorAll(".lang-switch a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const next = a.getAttribute("data-lang");
      if (!next || !ALLOWED[next]) return;
      const url = new URL(window.location.href);
      url.searchParams.set("lang", next);
      history.replaceState({}, "", url.pathname + url.search);
      applyLang(next);
      window.dispatchEvent(new CustomEvent("rjca:langchange"));
    });
  });

  applyLang(getLang());

  window.RJCA_I18N = {
    STR: STR,
    getLang: getLang,
    t: function (key) {
      const pack = STR[getLang()];
      return (pack && pack[key]) || key;
    }
  };
})();
