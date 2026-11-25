const els = {
  sidebar: document.getElementById("sidebar"),
  overlay: document.getElementById("overlay"),
  openSideBtn: document.getElementById("openSideBtn"),
  closeSideBtn: document.getElementById("closeSideBtn"),
  uploadFolderBtn: document.getElementById("uploadFolderBtn"),
  uploadFilesBtn: document.getElementById("uploadFilesBtn"),
  folderInput: document.getElementById("folderInput"),
  filesInput: document.getElementById("filesInput"),
  filesInfo: document.getElementById("filesInfo"),
  filesList: document.getElementById("filesList"),
  sidePodcastBtn: document.getElementById("sidePodcastBtn"),
  clearFilesBtn: document.getElementById("clearFilesBtn"),
  brandTitle: document.getElementById("brandTitle"),
  sideTitle: document.getElementById("sideTitle"),
  langSwitchBtn: document.getElementById("langSwitchBtn"),
  topQuizBtn: document.getElementById("topQuizBtn"),
  topPodBtn: document.getElementById("topPodBtn"),
  resetChatBtn: document.getElementById("resetChatBtn"),
  podPlayer: document.getElementById("podPlayer"),
  podTag: document.getElementById("podTag"),
  podName: document.getElementById("podName"),
  podToggleBtn: document.getElementById("podToggleBtn"),
  podStopBtn: document.getElementById("podStopBtn"),
  podRateBtn: document.getElementById("podRateBtn"),
  podHideBtn: document.getElementById("podHideBtn"),
  podBarFill: document.getElementById("podBarFill"),
  statusBanner: document.getElementById("statusBanner"),
  chatFeed: document.getElementById("chatFeed"),
  attachBadge: document.getElementById("attachBadge"),
  chatForm: document.getElementById("chatForm"),
  quickFileBtn: document.getElementById("quickFileBtn"),
  userInput: document.getElementById("userInput"),
  submitBtn: document.getElementById("submitBtn")
};

if (window.pdfjsLib) {
  window.pdfjsLib.GlobalWorkerOptions.workerSrc =
    "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";
}

const STORAGE_KEY = "lakhkhasli_state_v2";

const dictMap = {
  ar: {
    brand: "لخّص لي",
    sideTitle: "المصادر والملفات",
    uploadFolder: "رفع فولدر",
    uploadFiles: "رفع ملف / PDF",
    noFiles: "لا توجد ملفات مرفوعة",
    sidePodcast: "بودكاست",
    clearFiles: "مسح الملفات",
    langToggle: "EN",
    topQuiz: "كويز",
    topPod: "بودكاست",
    resetChat: "محادثة جديدة",
    podTag: "بودكاست",
    defaultPodName: "لخّص لي",
    play: "تشغيل",
    pause: "إيقاف مؤقت",
    resume: "استكمال",
    stop: "إيقاف",
    placeholder: "اسأل أي حاجة أو ارفع ملف...",
    send: "إرسال",
    you: "أنت",
    bot: "لخّص لي",
    listenAction: "بودكاست",
    copyAction: "نسخ",
    copiedAction: "تم النسخ",
    sourcesAction: "المصادر",
    questionsAction: "مقترحات",
    speechLang: "ar-SA",
    pageWord: "صـ",
    readingFiles: "جاري قراءة الملفات واستخراج المحتوى...",
    analyzingContent: "جاري تحليل المحتوى وإعداد الرد...",
    welcome:
      "بماذا يمكنني مساعدتك اليوم؟\nلخّص نصوصاً أو ملفات PDF، اشرح بالتفصيل، أنشئ كويز، أو حوّل المحتوى لبودكاست.",
    suggestions: [
      "اشرح بالتفصيل",
      "أهم النقط",
      "كويز",
      "بودكاست"
    ],
    noSources: "لا توجد ملفات مرفقة.",
    noExtractable:
      "تم استلام الملف، لكن لا يوجد نص قابل للاستخراج مباشرة (قد يكون ممسوحاً ضوئياً). انسخ النص هنا أو اكتب سؤالك وسأشرحه لك.",
    simpleTitle: "شرح مبسّط:",
    overviewTitle: "نظرة عامة والشرح:",
    keyPointsTitle: "أهم النقاط:",
    detailsTitle: "تفاصيل إضافية من المحتوى:",
    podIntro: (title) => `مرحباً بكم في بودكاست لخّص لي حول ${title}. `,
    quizTitle: "إعداد الكويز",
    quizTypesLabel: "نوع الأسئلة:",
    typeMcq: "اختيارات (MCQ)",
    typeTf: "صح وخطأ (True / False)",
    typeWritten: "كتابي / مقالي (Written)",
    quizCountLabel: "عدد الأسئلة:",
    customNumPlaceholder: "رقم",
    quizModeLabel: "طريقة التصحيح:",
    modePerQuestion: "سؤال بسؤال",
    modeEndResult: "النتيجة النهائية في الآخر",
    startQuizBtn: "ابدأ الكويز",
    questionOf: (cur, total) => `سؤال ${cur} من ${total}`,
    trueLabel: "صح (True)",
    falseLabel: "خطأ (False)",
    writtenPlaceholder: "اكتب إجابتك هنا...",
    checkAnswerBtn: "تصحيح السؤال",
    nextQuestionBtn: "السؤال التالي",
    finishQuizBtn: "إنهاء وعرض النتيجة",
    correctMsg: "إجابة صحيحة.",
    wrongMsg: (ans) => `إجابة غير صحيحة. الإجابة الصحيحة: ${ans}`,
    writtenFeedback: (ans) => `تم تسجيل إجابتك. النقطة النموذجية: ${ans}`,
    finalScoreTitle: (score, total) => `النتيجة النهائية: ${score} من ${total}`,
    yourAnswerLabel: "إجابتك:",
    modelAnswerLabel: "الإجابة النموذجية:",
    restartQuizBtn: "كويز جديد",
    needSelectWarning: "اختر إجابة أو اكتب إجابتك أولاً."
  },
  en: {
    brand: "Lakhkhasli",
    sideTitle: "Sources & Files",
    uploadFolder: "Upload Folder",
    uploadFiles: "Upload File / PDF",
    noFiles: "No files uploaded",
    sidePodcast: "Podcast",
    clearFiles: "Clear Files",
    langToggle: "عربي",
    topQuiz: "Quiz",
    topPod: "Podcast",
    resetChat: "New Chat",
    podTag: "Podcast",
    defaultPodName: "Lakhkhasli",
    play: "Play",
    pause: "Pause",
    resume: "Resume",
    stop: "Stop",
    placeholder: "Ask anything or upload a file...",
    send: "Send",
    you: "You",
    bot: "Lakhkhasli",
    listenAction: "Podcast",
    copyAction: "Copy",
    copiedAction: "Copied",
    sourcesAction: "Sources",
    questionsAction: "Prompts",
    speechLang: "en-US",
    pageWord: "p.",
    readingFiles: "Reading files and extracting content...",
    analyzingContent: "Analyzing content and preparing response...",
    welcome:
      "How can I help you today?\nSummarize text or PDFs, explain in detail, generate a quiz, or turn content into a podcast.",
    suggestions: [
      "Explain in detail",
      "Key points",
      "Quiz",
      "Podcast"
    ],
    noSources: "No attached files.",
    noExtractable:
      "File received, but no selectable text could be extracted (it may be scanned). Paste the text or ask your question here.",
    simpleTitle: "Simple Explanation:",
    overviewTitle: "Overview & Explanation:",
    keyPointsTitle: "Key Points:",
    detailsTitle: "Detailed Breakdown:",
    podIntro: (title) => `Welcome to the Lakhkhasli podcast on ${title}. `,
    quizTitle: "Quiz Setup",
    quizTypesLabel: "Question Types:",
    typeMcq: "MCQ",
    typeTf: "True / False",
    typeWritten: "Written",
    quizCountLabel: "Number of Questions:",
    customNumPlaceholder: "Custom",
    quizModeLabel: "Grading Mode:",
    modePerQuestion: "Question by Question",
    modeEndResult: "Final Result at the End",
    startQuizBtn: "Start Quiz",
    questionOf: (cur, total) => `Question ${cur} of ${total}`,
    trueLabel: "True",
    falseLabel: "False",
    writtenPlaceholder: "Write your answer here...",
    checkAnswerBtn: "Check Answer",
    nextQuestionBtn: "Next Question",
    finishQuizBtn: "Finish & Show Result",
    correctMsg: "Correct answer.",
    wrongMsg: (ans) => `Incorrect. Correct answer: ${ans}`,
    writtenFeedback: (ans) => `Answer recorded. Key reference: ${ans}`,
    finalScoreTitle: (score, total) => `Final Result: ${score} out of ${total}`,
    yourAnswerLabel: "Your answer:",
    modelAnswerLabel: "Model answer:",
    restartQuizBtn: "New Quiz",
    needSelectWarning: "Please choose or write an answer first."
  }
};

const state = {
  lang: "ar",
  files: [],
  messages: [],
  lastBotText: "",
  podScript: "",
  podTitle: "",
  hasCustomPodTitle: false,
  playing: false,
  paused: false,
  speedIdx: 0,
  podPct: 0,
  timer: null
};

const speeds = [1, 1.25, 1.5, 0.85];
const textExts = ["txt", "md", "csv", "json", "html", "css", "js", "ts", "py", "xml", "log"];

function L() {
  return dictMap[state.lang];
}

function setStatus(msg = "") {
  if (!msg) {
    els.statusBanner.hidden = true;
    els.statusBanner.textContent = "";
    return;
  }
  els.statusBanner.hidden = false;
  els.statusBanner.textContent = msg;
}

function saveToStorage() {
  try {
    const serializableFiles = state.files.map((f) => ({
      id: f.id,
      name: f.name,
      path: f.path,
      size: f.size,
      pages: f.pages || [],
      text: f.text || ""
    }));
    const safeMessages = state.messages
      .filter((m) => m.kind !== "quiz")
      .slice(-35);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        lang: state.lang,
        speedIdx: state.speedIdx,
        messages: safeMessages,
        files: serializableFiles
      })
    );
  } catch {}
}

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    if (parsed.lang === "ar" || parsed.lang === "en") state.lang = parsed.lang;
    if (typeof parsed.speedIdx === "number" && speeds[parsed.speedIdx]) {
      state.speedIdx = parsed.speedIdx;
    }
    if (Array.isArray(parsed.files)) state.files = parsed.files;
    if (Array.isArray(parsed.messages) && parsed.messages.length) {
      state.messages = parsed.messages;
      return true;
    }
  } catch {}
  return false;
}

function getExt(name = "") {
  const idx = name.lastIndexOf(".");
  return idx > -1 ? name.slice(idx + 1).toLowerCase() : "";
}

function formatBytes(bytes = 0) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function cleanText(raw = "") {
  return raw
    .replace(/\r\n/g, "\n")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function splitSentences(raw = "") {
  const cleaned = cleanText(raw);
  if (!cleaned) return [];
  return cleaned
    .split(/(?<=[.!؟\n])\s+/)
    .map((s) => s.replace(/^[-•*▪▶]+\s*/, "").trim())
    .filter((s) => s.length >= 14);
}

function detectIntent(text = "") {
  const low = text.trim().toLowerCase();
  const isQuiz =
    low === "كويز" ||
    low === "quiz" ||
    low.includes("كويز") ||
    low.includes("quiz") ||
    low.includes("اختبار");

  const isPodcast =
    low === "بودكاست" ||
    low === "podcast" ||
    low.includes("بودكاست") ||
    low.includes("podcast") ||
    low.includes("audio");

  const isSimple =
    low.includes("ببساطة") ||
    low.includes("سهل") ||
    low.includes("simply") ||
    low.includes("simple");

  const isKeyPoints =
    low.includes("أهم النقط") ||
    low.includes("أهم نقاط") ||
    low.includes("نقاط") ||
    low.includes("key point") ||
    low.includes("key points") ||
    low.includes("bullet") ||
    low.includes("takeaway");

  const isExplain =
    low.includes("اشرح") ||
    low.includes("شرح") ||
    low.includes("تفاصيل") ||
    low.includes("explain") ||
    low.includes("detail") ||
    low.includes("breakdown");

  const isSummarize =
    low.includes("لخّص") ||
    low.includes("لخص") ||
    low.includes("ملخص") ||
    low.includes("summar");

  return { isQuiz, isPodcast, isSimple, isKeyPoints, isExplain, isSummarize };
}

function getCombinedCorpus() {
  const fileText = state.files
    .map((f) => {
      if (f.pages && f.pages.length) {
        return f.pages.map((p) => p.text).join("\n\n");
      }
      return f.text || "";
    })
    .filter(Boolean)
    .join("\n\n");

  if (fileText.trim()) return fileText;

  const chatTexts = state.messages
    .filter((m) => m.role === "user" && m.text && !detectIntent(m.text).isQuiz)
    .map((m) => m.text)
    .join("\n");

  return chatTexts;
}

function buildStructuredAnalysis(sourceText, userQuery = "") {
  const sentences = splitSentences(sourceText);
  if (!sentences.length) {
    return { overview: "", keyPoints: [], details: [] };
  }

  const words = userQuery
    .toLowerCase()
    .split(/\s+/)
    .map((w) => w.replace(/[^\p{L}\p{N}_-]/gu, ""))
    .filter(
      (w) =>
        w.length >= 3 &&
        ![
          "explain", "simply", "simple", "detail", "details", "summarize",
          "summary", "key", "points", "point", "podcast", "quiz", "اشرح",
          "بالتفصيل", "ببساطة", "لخص", "لخّص", "أهم", "النقط", "نقاط",
          "بودكاست", "كويز", "الملف", "المحتوى"
        ].includes(w)
    );

  let ordered = sentences;
  if (words.length) {
    const scored = sentences.map((s) => {
      const low = s.toLowerCase();
      const hits = words.reduce((acc, w) => acc + (low.includes(w) ? 1 : 0), 0);
      return { s, hits };
    });
    const matched = scored.filter((x) => x.hits > 0);
    if (matched.length) {
      ordered = [
        ...matched.map((x) => x.s),
        ...scored.filter((x) => x.hits === 0).map((x) => x.s)
      ];
    }
  }

  const unique = [];
  const seen = new Set();
  for (const s of ordered) {
    const key = s.toLowerCase().slice(0, 90);
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(s);
    }
  }

  return {
    overview: unique.slice(0, 3).join(" "),
    keyPoints: unique.slice(0, 8),
    details: unique.slice(3, 15)
  };
}

// توليد أسئلة الكويز (MCQ / True-False / Written)
function generateQuizItems(count, types, isEnglish) {
  const activeTypes = types && types.length ? types : ["mcq"];
  const corpus = getCombinedCorpus();
  const baseSentences = splitSentences(corpus);

  const fallbackPool = isEnglish
    ? [
        "Summarizing complex topics helps extract main ideas clearly without losing essential context.",
        "Breaking a document into key points makes review faster and more structured.",
        "Audio podcasts allow reviewing study material while moving or multitasking.",
        "Testing understanding with quizzes reinforces active recall and long-term retention."
      ]
    : [
        "تلخيص المحتوى المعقد يساعد على استخراج الأفكار الرئيسية بوضوح دون الإخلال بالمعنى.",
        "تقسيم المادة إلى نقاط أساسية يجعل المراجعة أسرع وأكثر تنظيماً.",
        "الاستماع إلى المحتوى ك بودكاست يسهّل المراجعة أثناء التنقل أو الراحة.",
        "اختبار الفهم عبر الأسئلة يعزّز التذكّر النشط وتثبيت المعلومات."
      ];

  const pool = baseSentences.length ? baseSentences : fallbackPool;
  const items = [];

  for (let i = 0; i < count; i++) {
    const type = activeTypes[i % activeTypes.length];
    const base = pool[i % pool.length];
    const shortFact = base.length > 155 ? `${base.slice(0, 152)}...` : base;

    if (type === "tf") {
      const isTrue = i % 2 === 0;
      const other = pool[(i + 1) % pool.length];
      const statement = isTrue
        ? shortFact
        : other.length > 155
        ? `${other.slice(0, 152)}...`
        : other;
      const qPrompt = isTrue
        ? isEnglish
          ? `True or False: "${statement}" matches a core idea in the material.`
          : `صح أم خطأ: العبارة التالية تعبّر عن فكرة واردة في المحتوى: "${statement}"`
        : isEnglish
        ? `True or False: "${statement}" is the exact opposite of the main point.`
        : `صح أم خطأ: العبارة التالية تناقض الفكرة الأساسية تماماً: "${statement}"`;

      items.push({
        type: "tf",
        question: qPrompt,
        options: [L().trueLabel, L().falseLabel],
        correctIndex: isTrue ? 0 : 1,
        explanation: shortFact
      });
    } else if (type === "written") {
      const qPrompt = isEnglish
        ? `Explain in your own words the main idea behind: "${shortFact}"`
        : `اشرح بأسلوبك الفكرة الأساسية في العبارة التالية: "${shortFact}"`;

      items.push({
        type: "written",
        question: qPrompt,
        modelAnswer: shortFact,
        explanation: shortFact
      });
    } else {
      const distractorA = pool[(i + 1) % pool.length];
      const distractorB = pool[(i + 2) % pool.length];
      const distractorC = isEnglish
        ? "An unrelated topic not covered in the provided content."
        : "موضوع غير مرتبط بما ورد في المحتوى.";

      const rawOptions = [
        shortFact,
        distractorA.slice(0, 130),
        distractorB.slice(0, 130),
        distractorC
      ];

      // تدوير موضع الإجابة الصحيحة بشكل طبيعي
      const rot = i % 4;
      const rotated = rawOptions.map((_, idx) => rawOptions[(idx + rot) % 4]);
      const correctIndex = rotated.indexOf(shortFact);

      const qPrompt = isEnglish
        ? `Which statement best reflects the content?`
        : `أي عبارة تعبّر بشكل أدق عن المحتوى؟`;

      items.push({
        type: "mcq",
        question: qPrompt,
        options: rotated,
        correctIndex,
        explanation: shortFact
      });
    }
  }

  return items;
}

function createQuizRecord() {
  return {
    role: "bot",
    kind: "quiz",
    hasExtras: false,
    quiz: {
      stage: "setup", // "setup" | "playing" | "finished"
      selectedTypes: ["mcq"],
      presetCount: 5,
      customCount: "",
      gradingMode: "per_question", // "per_question" | "end_result"
      items: [],
      currentIndex: 0,
      userAnswers: [], // { answer, isCorrect, feedback }
      tempSelection: null,
      tempWritten: ""
    }
  };
}

function renderQuizCard(rec) {
  const qz = rec.quiz;
  const card = document.createElement("div");
  card.className = "quiz-card";

  if (qz.stage === "setup") {
    const title = document.createElement("div");
    title.className = "quiz-heading";
    title.textContent = L().quizTitle;
    card.appendChild(title);

    // نوع الأسئلة بزراير
    const typeGroup = document.createElement("div");
    typeGroup.className = "quiz-group";
    const typeLbl = document.createElement("div");
    typeLbl.className = "quiz-label";
    typeLbl.textContent = L().quizTypesLabel;
    typeGroup.appendChild(typeLbl);

    const typeRow = document.createElement("div");
    typeRow.className = "quiz-btn-row";

    const typeOptions = [
      { id: "mcq", label: L().typeMcq },
      { id: "tf", label: L().typeTf },
      { id: "written", label: L().typeWritten }
    ];

    typeOptions.forEach((opt) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-opt-btn" + (qz.selectedTypes.includes(opt.id) ? " active" : "");
      btn.textContent = opt.label;
      btn.addEventListener("click", () => {
        if (qz.selectedTypes.includes(opt.id)) {
          if (qz.selectedTypes.length > 1) {
            qz.selectedTypes = qz.selectedTypes.filter((x) => x !== opt.id);
          }
        } else {
          qz.selectedTypes.push(opt.id);
        }
        renderFeed();
      });
      typeRow.appendChild(btn);
    });
    typeGroup.appendChild(typeRow);
    card.appendChild(typeGroup);

    // عدد الأسئلة 5، 10، 15، 20 + رقم مخصص
    const countGroup = document.createElement("div");
    countGroup.className = "quiz-group";
    const countLbl = document.createElement("div");
    countLbl.className = "quiz-label";
    countLbl.textContent = L().quizCountLabel;
    countGroup.appendChild(countLbl);

    const countRow = document.createElement("div");
    countRow.className = "quiz-btn-row";

    [5, 10, 15, 20].forEach((num) => {
      const btn = document.createElement("button");
      btn.type = "button";
      const isSelected = qz.customCount === "" && qz.presetCount === num;
      btn.className = "quiz-opt-btn" + (isSelected ? " active" : "");
      btn.textContent = String(num);
      btn.addEventListener("click", () => {
        qz.customCount = "";
        qz.presetCount = num;
        renderFeed();
      });
      countRow.appendChild(btn);
    });

    const numInput = document.createElement("input");
    numInput.type = "number";
    numInput.min = "1";
    numInput.max = "50";
    numInput.className = "quiz-custom-num";
    numInput.placeholder = L().customNumPlaceholder;
    numInput.value = qz.customCount;
    numInput.addEventListener("input", (e) => {
      qz.customCount = e.target.value;
    });

    countRow.appendChild(numInput);
    countGroup.appendChild(countRow);
    card.appendChild(countGroup);

    // طريقة التصحيح: سؤال بسؤال أو النتيجة النهائية في الآخر
    const modeGroup = document.createElement("div");
    modeGroup.className = "quiz-group";
    const modeLbl = document.createElement("div");
    modeLbl.className = "quiz-label";
    modeLbl.textContent = L().quizModeLabel;
    modeGroup.appendChild(modeLbl);

    const modeRow = document.createElement("div");
    modeRow.className = "quiz-btn-row";

    [
      { id: "per_question", label: L().modePerQuestion },
      { id: "end_result", label: L().modeEndResult }
    ].forEach((m) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "quiz-opt-btn" + (qz.gradingMode === m.id ? " active" : "");
      btn.textContent = m.label;
      btn.addEventListener("click", () => {
        qz.gradingMode = m.id;
        renderFeed();
      });
      modeRow.appendChild(btn);
    });

    modeGroup.appendChild(modeRow);
    card.appendChild(modeGroup);

    const startBtn = document.createElement("button");
    startBtn.type = "button";
    startBtn.className = "quiz-start-btn";
    startBtn.textContent = L().startQuizBtn;
    startBtn.addEventListener("click", () => {
      const parsedCustom = parseInt(qz.customCount, 10);
      const finalCount =
        !Number.isNaN(parsedCustom) && parsedCustom > 0
          ? Math.min(parsedCustom, 50)
          : qz.presetCount || 5;

      qz.items = generateQuizItems(finalCount, qz.selectedTypes, state.lang === "en");
      qz.currentIndex = 0;
      qz.userAnswers = [];
      qz.tempSelection = null;
      qz.tempWritten = "";
      qz.stage = "playing";
      renderFeed();
    });

    card.appendChild(startBtn);
    return card;
  }

  if (qz.stage === "playing") {
    const item = qz.items[qz.currentIndex];
    const existingAns = qz.userAnswers[qz.currentIndex];

    const meta = document.createElement("div");
    meta.className = "quiz-meta-line";
    meta.textContent = L().questionOf(qz.currentIndex + 1, qz.items.length);
    card.appendChild(meta);

    const qText = document.createElement("div");
    qText.className = "quiz-q-text";
    qText.textContent = item.question;
    card.appendChild(qText);

    if (item.type === "mcq" || item.type === "tf") {
      const choicesBox = document.createElement("div");
      choicesBox.className = "quiz-choices";

      item.options.forEach((optText, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quiz-choice-btn";
        btn.textContent = optText;

        if (existingAns) {
          if (idx === item.correctIndex) btn.classList.add("correct");
          else if (idx === existingAns.answerIndex && !existingAns.isCorrect) {
            btn.classList.add("wrong");
          }
          btn.disabled = true;
        } else if (qz.tempSelection === idx) {
          btn.classList.add("selected");
        }

        btn.addEventListener("click", () => {
          if (existingAns) return;
          qz.tempSelection = idx;
          renderFeed();
        });

        choicesBox.appendChild(btn);
      });

      card.appendChild(choicesBox);
    } else {
      const ta = document.createElement("textarea");
      ta.className = "quiz-written-input";
      ta.placeholder = L().writtenPlaceholder;
      ta.value = existingAns ? existingAns.answerText : qz.tempWritten;
      ta.disabled = Boolean(existingAns);
      ta.addEventListener("input", (e) => {
        qz.tempWritten = e.target.value;
      });
      card.appendChild(ta);
    }

    if (existingAns && existingAns.feedback) {
      const fb = document.createElement("div");
      fb.className = "quiz-feedback";
      fb.textContent = existingAns.feedback;
      card.appendChild(fb);
    }

    const footerRow = document.createElement("div");
    footerRow.className = "quiz-btn-row";

    const isLast = qz.currentIndex === qz.items.length - 1;

    if (qz.gradingMode === "per_question") {
      if (!existingAns) {
        const checkBtn = document.createElement("button");
        checkBtn.type = "button";
        checkBtn.className = "quiz-start-btn";
        checkBtn.textContent = L().checkAnswerBtn;
        checkBtn.addEventListener("click", () => {
          if (item.type === "written") {
            const val = qz.tempWritten.trim();
            if (!val) return;
            qz.userAnswers[qz.currentIndex] = {
              answerText: val,
              isCorrect: true,
              feedback: L().writtenFeedback(item.modelAnswer)
            };
            qz.tempWritten = "";
          } else {
            if (qz.tempSelection === null) return;
            const ok = qz.tempSelection === item.correctIndex;
            const rightText = item.options[item.correctIndex];
            qz.userAnswers[qz.currentIndex] = {
              answerIndex: qz.tempSelection,
              answerText: item.options[qz.tempSelection],
              isCorrect: ok,
              feedback: ok ? L().correctMsg : L().wrongMsg(rightText)
            };
            qz.tempSelection = null;
          }
          renderFeed();
        });
        footerRow.appendChild(checkBtn);
      } else {
        const nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "quiz-start-btn";
        nextBtn.textContent = isLast ? L().finishQuizBtn : L().nextQuestionBtn;
        nextBtn.addEventListener("click", () => {
          if (isLast) {
            qz.stage = "finished";
          } else {
            qz.currentIndex += 1;
            qz.tempSelection = null;
            qz.tempWritten = "";
          }
          renderFeed();
        });
        footerRow.appendChild(nextBtn);
      }
    } else {
      // التصحيح في الآخر (النتيجة النهائية في الآخر)
      if (qz.currentIndex > 0) {
        const prevBtn = document.createElement("button");
        prevBtn.type = "button";
        prevBtn.className = "quiz-opt-btn";
        prevBtn.textContent = state.lang === "ar" ? "السابق" : "Previous";
        prevBtn.addEventListener("click", () => {
          qz.currentIndex -= 1;
          qz.tempSelection = null;
          renderFeed();
        });
        footerRow.appendChild(prevBtn);
      }

      const saveAndMoveBtn = document.createElement("button");
      saveAndMoveBtn.type = "button";
      saveAndMoveBtn.className = "quiz-start-btn";
      saveAndMoveBtn.textContent = isLast ? L().finishQuizBtn : L().nextQuestionBtn;
      saveAndMoveBtn.addEventListener("click", () => {
        if (item.type === "written") {
          const val = (qz.tempWritten || (existingAns && existingAns.answerText) || "").trim();
          if (!val) return;
          qz.userAnswers[qz.currentIndex] = {
            answerText: val,
            isCorrect: true,
            feedback: L().writtenFeedback(item.modelAnswer)
          };
          qz.tempWritten = "";
        } else {
          const chosen =
            qz.tempSelection !== null
              ? qz.tempSelection
              : existingAns
              ? existingAns.answerIndex
              : null;
          if (chosen === null) return;
          const ok = chosen === item.correctIndex;
          const rightText = item.options[item.correctIndex];
          qz.userAnswers[qz.currentIndex] = {
            answerIndex: chosen,
            answerText: item.options[chosen],
            isCorrect: ok,
            feedback: ok ? L().correctMsg : L().wrongMsg(rightText)
          };
          qz.tempSelection = null;
        }

        if (isLast) {
          qz.stage = "finished";
        } else {
          qz.currentIndex += 1;
        }
        renderFeed();
      });
      footerRow.appendChild(saveAndMoveBtn);
    }

    card.appendChild(footerRow);
    return card;
  }

  // النتيجة النهائية
  const score = qz.userAnswers.filter((a) => a && a.isCorrect).length;
  const heading = document.createElement("div");
  heading.className = "quiz-heading";
  heading.textContent = L().finalScoreTitle(score, qz.items.length);
  card.appendChild(heading);

  qz.items.forEach((item, idx) => {
    const ans = qz.userAnswers[idx] || {};
    const box = document.createElement("div");
    box.className = "quiz-review-item";

    const qLine = document.createElement("div");
    qLine.textContent = `${idx + 1}. ${item.question}`;
    box.appendChild(qLine);

    const uLine = document.createElement("div");
    uLine.className = "quiz-meta-line";
    uLine.textContent = `${L().yourAnswerLabel} ${ans.answerText || "-"}`;
    box.appendChild(uLine);

    const mText = item.type === "written" ? item.modelAnswer : item.options[item.correctIndex];
    const mLine = document.createElement("div");
    mLine.className = "quiz-meta-line";
    mLine.textContent = `${L().modelAnswerLabel} ${mText}`;
    box.appendChild(mLine);

    card.appendChild(box);
  });

  const retryBtn = document.createElement("button");
  retryBtn.type = "button";
  retryBtn.className = "quiz-start-btn";
  retryBtn.textContent = L().restartQuizBtn;
  retryBtn.addEventListener("click", () => {
    qz.stage = "setup";
    qz.items = [];
    qz.currentIndex = 0;
    qz.userAnswers = [];
    qz.tempSelection = null;
    qz.tempWritten = "";
    renderFeed();
  });
  card.appendChild(retryBtn);

  return card;
}

function formatReplyText(rec) {
  if (rec.kind === "welcome") return L().welcome;
  if (rec.kind === "no_files") return L().noFiles;
  if (rec.kind === "no_text") return L().noExtractable;
  if (rec.kind === "podcast_reply") {
    return rec.podText || getPodcastScriptFromFilesOrChat();
  }

  const analysis = rec.analysis || { overview: "", keyPoints: [], details: [] };
  if (!analysis.keyPoints.length) return L().welcome;

  const intent = detectIntent(rec.query || "");
  const parts = [];

  if (intent.isSimple) {
    parts.push(L().simpleTitle);
    parts.push(analysis.overview);
    parts.push("");
    analysis.keyPoints.slice(0, 4).forEach((pt, idx) => {
      parts.push(`${idx + 1}. ${pt}`);
    });
    return parts.join("\n");
  }

  if (intent.isKeyPoints && !intent.isExplain) {
    parts.push(L().keyPointsTitle);
    analysis.keyPoints.slice(0, 8).forEach((pt, idx) => {
      parts.push(`${idx + 1}. ${pt}`);
    });
    return parts.join("\n");
  }

  if (intent.isSummarize && !intent.isExplain) {
    parts.push(L().overviewTitle);
    parts.push(analysis.overview);
    parts.push("");
    parts.push(L().keyPointsTitle);
    analysis.keyPoints.slice(0, 5).forEach((pt, idx) => {
      parts.push(`${idx + 1}. ${pt}`);
    });
    return parts.join("\n");
  }

  parts.push(L().overviewTitle);
  parts.push(analysis.overview);
  parts.push("");
  parts.push(L().keyPointsTitle);
  analysis.keyPoints.slice(0, 6).forEach((pt, idx) => {
    parts.push(`${idx + 1}. ${pt}`);
  });

  if (analysis.details.length) {
    parts.push("");
    parts.push(L().detailsTitle);
    analysis.details.slice(0, 8).forEach((dt) => {
      parts.push(`• ${dt}`);
    });
  }

  return parts.join("\n");
}

function clearPodTimer() {
  if (state.timer) {
    clearInterval(state.timer);
    state.timer = null;
  }
}

function stopPod() {
  if ("speechSynthesis" in window) {
    try {
      window.speechSynthesis.cancel();
    } catch {}
  }
  state.playing = false;
  state.paused = false;
  state.podPct = 0;
  els.podBarFill.style.width = "0%";
  els.podToggleBtn.textContent = L().play;
  clearPodTimer();
}

function playPod(text, title = "") {
  const clean = (text || "").trim();
  if (!clean) return;
  stopPod();

  state.podScript = clean;
  state.hasCustomPodTitle = Boolean(title);
  state.podTitle = title || L().defaultPodName;
  els.podPlayer.hidden = false;
  els.podName.textContent = state.podTitle;

  state.timer = setInterval(() => {
    if (!state.playing || state.paused) return;
    state.podPct = Math.min(state.podPct + 1.4, 98);
    els.podBarFill.style.width = `${state.podPct}%`;
  }, 300);

  if ("speechSynthesis" in window) {
    try {
      const utter = new SpeechSynthesisUtterance(clean);
      utter.lang = L().speechLang;
      utter.rate = speeds[state.speedIdx];
      utter.onend = () => {
        state.playing = false;
        state.paused = false;
        state.podPct = 100;
        els.podBarFill.style.width = "100%";
        els.podToggleBtn.textContent = L().play;
        clearPodTimer();
      };
      utter.onerror = () => {
        state.playing = false;
        state.paused = false;
        els.podToggleBtn.textContent = L().play;
        clearPodTimer();
      };
      state.playing = true;
      els.podToggleBtn.textContent = L().pause;
      window.speechSynthesis.speak(utter);
      return;
    } catch {}
  }

  state.playing = true;
  els.podToggleBtn.textContent = L().pause;
}

function getPodcastScriptFromFilesOrChat() {
  const corpus = getCombinedCorpus();
  if (corpus) {
    const analysis = buildStructuredAnalysis(corpus);
    const label = state.files.map((f) => f.name).join(", ");
    const spokenBody = [analysis.overview, ...analysis.keyPoints.slice(0, 6)]
      .filter(Boolean)
      .join(" ");
    return (L().podIntro(label) + spokenBody).slice(0, 1600);
  }
  if (state.lastBotText) {
    return state.lastBotText.slice(0, 1600);
  }
  return L().welcome;
}

async function extractPdfText(file) {
  if (!window.pdfjsLib) return { pages: [], text: "" };
  try {
    const buffer = await file.arrayBuffer();
    const pdf = await window.pdfjsLib.getDocument({ data: buffer }).promise;
    const pages = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      const pageText = content.items
        .map((item) => item.str || "")
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
      if (pageText) pages.push({ page: i, text: pageText });
    }
    return { pages, text: pages.map((p) => p.text).join("\n\n") };
  } catch {
    return { pages: [], text: "" };
  }
}

async function readFileList(fileList) {
  const arr = Array.from(fileList || []);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const file = arr[i];
    const id = `${Date.now()}_${i}_${Math.random().toString(36).slice(2, 7)}`;
    const ext = getExt(file.name);
    if (ext === "pdf") {
      const parsed = await extractPdfText(file);
      result.push({
        id,
        name: file.name,
        path: file.webkitRelativePath || file.name,
        size: file.size,
        pages: parsed.pages,
        text: parsed.text
      });
    } else if (textExts.includes(ext) || (file.type && file.type.startsWith("text/"))) {
      let text = "";
      try {
        text = await file.text();
      } catch {
        text = "";
      }
      result.push({
        id,
        name: file.name,
        path: file.webkitRelativePath || file.name,
        size: file.size,
        pages: text.trim() ? [{ page: 1, text }] : [],
        text
      });
    } else {
      result.push({
        id,
        name: file.name,
        path: file.webkitRelativePath || file.name,
        size: file.size,
        pages: [],
        text: ""
      });
    }
  }
  return result;
}

function renderFilesUI() {
  if (!state.files.length) {
    els.filesInfo.textContent = L().noFiles;
    els.filesList.innerHTML = "";
    els.attachBadge.hidden = true;
    els.attachBadge.textContent = "";
    return;
  }

  const totalBytes = state.files.reduce((sum, f) => sum + f.size, 0);
  els.filesInfo.textContent = `${state.files.length} • ${formatBytes(totalBytes)}`;
  els.filesList.innerHTML = "";

  state.files.forEach((f) => {
    const li = document.createElement("li");
    li.className = "file-row";
    li.title = f.path;

    const meta = document.createElement("div");
    meta.className = "file-row-meta";

    const nameEl = document.createElement("span");
    nameEl.className = "file-row-name";
    nameEl.textContent = f.name;

    const pagesCount = f.pages && f.pages.length ? ` • ${f.pages.length} ${L().pageWord}` : "";
    const sizeEl = document.createElement("span");
    sizeEl.className = "file-row-size";
    sizeEl.textContent = `${formatBytes(f.size)}${pagesCount}`;

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.className = "file-remove-btn";
    delBtn.textContent = "✕";
    delBtn.addEventListener("click", () => {
      state.files = state.files.filter((item) => item.id !== f.id);
      renderFilesUI();
      saveToStorage();
    });

    meta.appendChild(nameEl);
    meta.appendChild(sizeEl);
    li.appendChild(meta);
    li.appendChild(delBtn);
    els.filesList.appendChild(li);
  });

  const sep = state.lang === "ar" ? "، " : ", ";
  els.attachBadge.hidden = false;
  els.attachBadge.textContent = state.files.map((f) => f.name).slice(0, 4).join(sep);
}

function buildSources(query = "") {
  if (!state.files.length) return L().noSources;
  const q = query.trim().toLowerCase();
  return state.files
    .map((f) => {
      if (f.pages && f.pages.length) {
        const hits = q ? f.pages.filter((p) => p.text.toLowerCase().includes(q)) : f.pages;
        const list = hits.length ? hits : f.pages;
        const refs = list.slice(0, 10).map((h) => `${L().pageWord} ${h.page}`).join(", ");
        return `• ${f.path} (${refs})`;
      }
      return `• ${f.path}`;
    })
    .join("\n");
}

function createReplyRecord(userText, isFromUpload = false) {
  const clean = userText.trim();
  const intent = detectIntent(clean);

  if (intent.isQuiz) {
    return createQuizRecord();
  }

  if (intent.isPodcast) {
    const podText = getPodcastScriptFromFilesOrChat();
    return {
      role: "bot",
      kind: "podcast_reply",
      podText,
      query: clean,
      hasExtras: true
    };
  }

  const corpus = getCombinedCorpus();
  if (corpus) {
    const analysis = buildStructuredAnalysis(corpus, isFromUpload ? "" : clean);
    if (!analysis.keyPoints.length) {
      return { role: "bot", kind: "no_text", query: clean, hasExtras: true };
    }
    return { role: "bot", kind: "analysis", analysis, query: clean, hasExtras: true };
  }

  if (state.files.length) {
    return { role: "bot", kind: "no_text", query: clean, hasExtras: true };
  }

  const analysis = buildStructuredAnalysis(clean, clean);
  if (analysis.keyPoints.length) {
    return { role: "bot", kind: "analysis", analysis, query: clean, hasExtras: true };
  }

  return { role: "bot", kind: "welcome", query: clean, hasExtras: true };
}

function copyTextToClipboard(text, btnEl) {
  if (!text) return;
  const done = () => {
    const prev = btnEl.textContent;
    btnEl.textContent = L().copiedAction;
    setTimeout(() => {
      btnEl.textContent = prev || L().copyAction;
    }, 1200);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(() => {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(ta);
      done();
    });
  }
}

function renderFeed() {
  els.chatFeed.innerHTML = "";

  state.messages.forEach((rec) => {
    const turn = document.createElement("div");
    turn.className = `turn ${rec.role}`;

    const who = document.createElement("div");
    who.className = "turn-who";
    who.textContent = rec.role === "user" ? L().you : L().bot;
    turn.appendChild(who);

    if (rec.role === "bot" && rec.kind === "quiz") {
      turn.appendChild(renderQuizCard(rec));
      els.chatFeed.appendChild(turn);
      return;
    }

    const text = rec.role === "bot" ? formatReplyText(rec) : rec.text;
    if (rec.role === "bot") {
      state.lastBotText = text;
    }

    const bubble = document.createElement("div");
    bubble.className = "msg-bubble";
    bubble.textContent = text;
    turn.appendChild(bubble);

    if (rec.role === "bot" && rec.hasExtras) {
      const bar = document.createElement("div");
      bar.className = "extras-bar";

      const podBtn = document.createElement("button");
      podBtn.type = "button";
      podBtn.className = "extra-btn";
      podBtn.textContent = L().listenAction;

      const copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "extra-btn";
      copyBtn.textContent = L().copyAction;

      const srcBtn = document.createElement("button");
      srcBtn.type = "button";
      srcBtn.className = "extra-btn";
      srcBtn.textContent = L().sourcesAction;

      const qBtn = document.createElement("button");
      qBtn.type = "button";
      qBtn.className = "extra-btn";
      qBtn.textContent = L().questionsAction;

      const panel = document.createElement("div");
      panel.className = "extra-panel";
      panel.hidden = true;

      const qList = document.createElement("div");
      qList.className = "q-list";
      qList.hidden = true;

      podBtn.addEventListener("click", () => playPod(text, L().defaultPodName));
      copyBtn.addEventListener("click", () => copyTextToClipboard(text, copyBtn));

      srcBtn.addEventListener("click", () => {
        panel.textContent = buildSources(rec.query || "");
        panel.hidden = !panel.hidden;
      });

      qBtn.addEventListener("click", () => {
        qList.hidden = !qList.hidden;
      });

      L().suggestions.forEach((qText) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "q-chip";
        chip.textContent = qText;
        chip.addEventListener("click", () => sendMessage(qText));
        qList.appendChild(chip);
      });

      bar.appendChild(podBtn);
      bar.appendChild(copyBtn);
      bar.appendChild(srcBtn);
      bar.appendChild(qBtn);
      turn.appendChild(bar);
      turn.appendChild(panel);
      turn.appendChild(qList);
    }

    els.chatFeed.appendChild(turn);
  });

  els.chatFeed.scrollTop = els.chatFeed.scrollHeight;
}

function applyLanguage(nextLang) {
  state.lang = nextLang;
  const d = L();

  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
  document.title = d.brand;

  els.brandTitle.textContent = d.brand;
  els.sideTitle.textContent = d.sideTitle;
  els.uploadFolderBtn.textContent = d.uploadFolder;
  els.uploadFilesBtn.textContent = d.uploadFiles;
  els.sidePodcastBtn.textContent = d.sidePodcast;
  els.clearFilesBtn.textContent = d.clearFiles;
  els.langSwitchBtn.textContent = d.langToggle;
  els.topQuizBtn.textContent = d.topQuiz;
  els.topPodBtn.textContent = d.topPod;
  els.resetChatBtn.textContent = d.resetChat;
  els.podTag.textContent = d.podTag;
  if (!state.hasCustomPodTitle) els.podName.textContent = d.defaultPodName;
  els.podStopBtn.textContent = d.stop;
  els.podRateBtn.textContent = `${speeds[state.speedIdx]}x`;
  if (!state.playing) els.podToggleBtn.textContent = d.play;
  els.userInput.placeholder = d.placeholder;
  els.submitBtn.textContent = d.send;

  renderFilesUI();
  renderFeed();
  saveToStorage();
}

function setSidebarOpen(open) {
  if (window.innerWidth <= 820) {
    els.sidebar.classList.toggle("closed", !open);
    els.overlay.classList.toggle("show", open);
  } else {
    els.sidebar.classList.toggle("closed", !open);
  }
}

async function handleFileUpload(fileList) {
  const arr = Array.from(fileList || []);
  if (!arr.length) return;

  setStatus(L().readingFiles);
  const parsed = await readFileList(arr);
  state.files = parsed;
  renderFilesUI();

  const sep = state.lang === "ar" ? "، " : ", ";
  const names = parsed.map((f) => f.name).slice(0, 4).join(sep);
  state.messages.push({ role: "user", text: names });
  state.messages.push(createReplyRecord(names, true));
  renderFeed();
  saveToStorage();
  setStatus("");
}

function sendMessage(raw) {
  const text = raw.trim();
  if (!text) return;

  setStatus(L().analyzingContent);
  const intent = detectIntent(text);
  state.messages.push({ role: "user", text });
  els.userInput.value = "";
  els.userInput.style.height = "auto";

  const reply = createReplyRecord(text, false);
  state.messages.push(reply);
  renderFeed();
  saveToStorage();
  setStatus("");

  if (intent.isPodcast) {
    playPod(reply.podText || getPodcastScriptFromFilesOrChat(), L().defaultPodName);
  }
}

function openQuizSetup() {
  state.messages.push({ role: "user", text: L().topQuiz });
  state.messages.push(createQuizRecord());
  renderFeed();
}

els.langSwitchBtn.addEventListener("click", () => {
  applyLanguage(state.lang === "ar" ? "en" : "ar");
});

els.topQuizBtn.addEventListener("click", openQuizSetup);

els.openSideBtn.addEventListener("click", () => {
  setSidebarOpen(els.sidebar.classList.contains("closed"));
});
els.closeSideBtn.addEventListener("click", () => setSidebarOpen(false));
els.overlay.addEventListener("click", () => setSidebarOpen(false));

els.uploadFolderBtn.addEventListener("click", () => els.folderInput.click());
els.uploadFilesBtn.addEventListener("click", () => els.filesInput.click());
els.quickFileBtn.addEventListener("click", () => els.filesInput.click());

els.folderInput.addEventListener("change", (e) => {
  handleFileUpload(e.target.files);
  e.target.value = "";
});

els.filesInput.addEventListener("change", (e) => {
  handleFileUpload(e.target.files);
  e.target.value = "";
});

els.clearFilesBtn.addEventListener("click", () => {
  state.files = [];
  renderFilesUI();
  state.messages.push({ role: "bot", kind: "no_files", hasExtras: false });
  renderFeed();
  saveToStorage();
});

els.sidePodcastBtn.addEventListener("click", () => {
  const script = getPodcastScriptFromFilesOrChat();
  state.messages.push({ role: "user", text: L().sidePodcast });
  state.messages.push({ role: "bot", kind: "podcast_reply", podText: script, hasExtras: true });
  renderFeed();
  saveToStorage();
  playPod(script, L().sidePodcast);
  if (window.innerWidth <= 820) setSidebarOpen(false);
});

els.topPodBtn.addEventListener("click", () => {
  playPod(getPodcastScriptFromFilesOrChat(), L().defaultPodName);
});

els.resetChatBtn.addEventListener("click", () => {
  stopPod();
  state.messages = [{ role: "bot", kind: "welcome", hasExtras: true }];
  renderFeed();
  saveToStorage();
});

els.podToggleBtn.addEventListener("click", () => {
  if (!state.podScript) {
    playPod(getPodcastScriptFromFilesOrChat(), L().defaultPodName);
    return;
  }
  if ("speechSynthesis" in window) {
    if (state.playing && !state.paused) {
      window.speechSynthesis.pause();
      state.paused = true;
      els.podToggleBtn.textContent = L().resume;
    } else if (state.paused) {
      window.speechSynthesis.resume();
      state.paused = false;
      els.podToggleBtn.textContent = L().pause;
    } else {
      playPod(state.podScript, state.podTitle);
    }
  } else {
    state.paused = !state.paused;
    els.podToggleBtn.textContent = state.paused ? L().resume : L().pause;
  }
});

els.podStopBtn.addEventListener("click", stopPod);

els.podRateBtn.addEventListener("click", () => {
  state.speedIdx = (state.speedIdx + 1) % speeds.length;
  els.podRateBtn.textContent = `${speeds[state.speedIdx]}x`;
  saveToStorage();
  if (state.playing && state.podScript) {
    playPod(state.podScript, state.podTitle);
  }
});

els.podHideBtn.addEventListener("click", () => {
  stopPod();
  els.podPlayer.hidden = true;
});

els.userInput.addEventListener("input", () => {
  els.userInput.style.height = "auto";
  els.userInput.style.height = `${Math.min(els.userInput.scrollHeight, 140)}px`;
});

els.userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    els.chatForm.requestSubmit();
  }
});

els.chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage(els.userInput.value);
});

const restored = loadFromStorage();
if (!restored) {
  state.messages = [{ role: "bot", kind: "welcome", hasExtras: true }];
}
applyLanguage(state.lang);