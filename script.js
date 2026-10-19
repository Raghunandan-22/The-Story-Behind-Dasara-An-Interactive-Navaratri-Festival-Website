"use strict";

/* ---------- Original SVG artwork ---------- */
const artwork = {
  buffalo: `<svg viewBox="0 0 200 140" role="img" aria-label="Stylised buffalo head"><path class="sg" d="M67 47Q22 47 25 12q23 8 48 33M133 47q45 0 42-35-23 8-48 33"/><path class="sg" d="M63 45Q44 60 48 91q5 28 52 30 47-2 52-30 4-31-15-46"/><ellipse class="fg" cx="100" cy="82" rx="39" ry="34"/><ellipse fill="#5a0f1e" cx="84" cy="77" rx="4" ry="5"/><ellipse fill="#5a0f1e" cx="116" cy="77" rx="4" ry="5"/><path class="sg" d="M89 98q11 8 22 0M93 110h14"/></svg>`,
  durga: `<svg viewBox="0 0 200 140" role="img" aria-label="Decorative illustration representing Goddess Durga"><circle class="sg" cx="100" cy="66" r="43"/><path class="sg" d="M100 9v24M70 17l13 25M130 17l-13 25M42 43l25 10M158 43l-25 10M39 83l27-3M161 83l-27-3M58 112l23-21M142 112l-23-21"/><path class="fg" d="M77 58q23-24 46 0l-5 37H82z"/><circle fill="#5a0f1e" cx="88" cy="66" r="3"/><circle fill="#5a0f1e" cx="112" cy="66" r="3"/><path class="sg" d="M91 79q9 7 18 0M74 119h52"/><path class="sg" d="M65 47l-14-17M135 47l14-17M61 70l-20 0M139 70h20"/></svg>`,
  bow: `<svg viewBox="0 0 200 140" role="img" aria-label="Bow and arrow"><path class="sg" d="M70 14Q137 70 70 126M70 14v112M34 70h130M150 56l16 14-16 14"/><path class="sg" d="M82 30l-12-16M82 110l-12 16"/></svg>`,
  diya: `<svg viewBox="0 0 200 140" role="img" aria-label="Decorative oil lamp"><path class="fg" d="M48 88q52 44 104 0z"/><path class="sg" d="M38 104h124M62 91q38 14 76 0"/><g class="flame"><path class="ff" d="M100 84q-24-28 0-61 24 33 0 61z"/></g><path class="sg" d="M100 88v8"/><circle class="fg" cx="43" cy="76" r="4"/><circle class="fg" cx="157" cy="76" r="4"/></svg>`
};

/* Stories are presented as selected traditional accounts; details vary by region. */
const chapters = [
  {
    title: "Chapter 1: The Legend of Mahishasura",
    art: "buffalo",
    text: [
      "The Devi Mahatmya, a sacred text included in the Markandeya Purana, tells of Mahishasura, a powerful asura associated with buffalo form. In a well-known version of the story, he received a boon that made him believe he could not be defeated by a man.",
      "Mahishasura challenged the gods and drove them from heaven. The gods' combined divine energies took the form of Goddess Durga. The gods gave her weapons, and she rode a lion to confront Mahishasura. Details differ among tellings of the legend."
    ],
    lesson: "Power without humility can become arrogance. Cooperation can bring strength to face a difficult challenge."
  },
  {
    title: "Chapter 2: The Victory of Goddess Durga",
    art: "durga",
    text: [
      "In the popular account, Durga fought Mahishasura and his forces. Mahishasura changed forms during the battle, including taking the form of a buffalo. The Goddess ultimately defeated him.",
      "Many communities connect this victory with Navaratri and Vijayadashami, the tenth day. Durga Puja is especially prominent in Bengal, while Mysuru Dasara is known for its royal traditions and procession. Customs and interpretations vary by region."
    ],
    lesson: "Courage, patience and a clear sense of purpose can help people stand against injustice."
  },
  {
    title: "Chapter 3: The Story of Rama and Ravana",
    art: "bow",
    text: [
      "The Rama–Ravana story is a separate tradition from the Durga–Mahishasura legend. In the Ramayana, Prince Rama lives in exile with Sita and his brother Lakshmana. Ravana, the king of Lanka, carries Sita away, and Rama sets out to bring her back.",
      "With help from Hanuman and an army of vanaras, Rama reaches Lanka and battles Ravana. Rama's victory is remembered in many places on Vijayadashami. In parts of northern India, Ramlila performances retell episodes from the Ramayana, and some celebrations include burning effigies of Ravana."
    ],
    lesson: "Loyalty, friendship and commitment to dharma are important themes in this tradition."
  },
  {
    title: "Chapter 4: The Meaning of Dasara",
    art: "diya",
    text: [
      "Dasara, also called Dussehra or Vijayadashami, is associated with different sacred traditions across India. In many traditions, it celebrates Goddess Durga's victory over Mahishasura or Rama's victory over Ravana. These are distinct stories, often connected by the theme of good triumphing over evil.",
      "Celebrations vary by region. Mysuru is famous for its royal Dasara procession, Bengal for Durga Puja, and parts of northern India for Ramlila performances. During the wider Navaratri season, people also observe traditions such as Golu in Tamil Nadu and Bommala Koluvu in Andhra Pradesh. Bathukamma is a distinctive floral festival of Telangana celebrated around this season; it has its own cultural meaning."
    ],
    lesson: "Dasara and the wider Navaratri season invite reflection on courage, righteousness and cultural diversity. Different communities express these values through their own traditions."
  }
];

const quizQuestions = [
  { question: "In the Mahishasura legend presented here, how did Goddess Durga come into being?", options: ["She was born to a king", "The gods' combined divine energy took form", "She was sent by Ravana", "She was created by Hanuman"], answer: 1, explain: "In this account, the combined divine energies of the gods took the form of Durga." },
  { question: "In the popular tradition described here, how many nights are associated with Navaratri?", options: ["Three", "Seven", "Nine", "Twelve"], answer: 2, explain: "Navaratri means a period associated with nine nights; customs and stories differ by region." },
  { question: "Who is the king of Lanka in the Ramayana story?", options: ["Ravana", "Hanuman", "Lakshmana", "Mahishasura"], answer: 0, explain: "Ravana is the king of Lanka in the Ramayana tradition." },
  { question: "What is burned in some Dussehra celebrations in northern India?", options: ["Lotus garlands", "Effigies of Ravana", "Paper boats", "Harvest baskets"], answer: 1, explain: "Some celebrations end with the burning of Ravana effigies, often following Ramlila performances." },
  { question: "Which city is especially famous for its royal Dasara procession?", options: ["Mysuru", "Jaipur", "Pune", "Chennai"], answer: 0, explain: "Mysuru in Karnataka is well known for its Dasara traditions and procession." }
];

/* ---------- State: kept in memory only; nothing is stored ---------- */
const state = { name: "", chapter: 0, question: 0, score: 0, navaratriDay: 0 };
const $ = (id) => document.getElementById(id);
const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach((screen) => { screen.hidden = screen.id !== id; });
  const heading = $(id).querySelector("h1, h2");
  if (heading) heading.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
}

function createEmbers() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const container = $("embers");
  for (let i = 0; i < 16; i++) {
    const ember = document.createElement("span");
    ember.style.left = `${Math.random() * 100}%`;
    ember.style.animationDuration = `${9 + Math.random() * 9}s`;
    ember.style.animationDelay = `${Math.random() * 10}s`;
    container.appendChild(ember);
  }
}


/* ---------- Nine days of Navaratri: one widely followed Navadurga tradition ---------- */
const navaratriDays = [
  {
    name: "Maa Shailaputri",
    theme: "New beginnings and steadiness",
    story: "Shailaputri means “daughter of the mountain.” In this tradition, she is worshipped as the first form of Navadurga and is commonly shown with a trident and lotus, riding a bull.",
    reflection: "Start with one good intention and take the first step with steadiness."
  },
  {
    name: "Maa Brahmacharini",
    theme: "Devotion and perseverance",
    story: "Brahmacharini is associated with devotion, discipline and penance. She is often depicted carrying a rosary and a water pot.",
    reflection: "Choose one useful habit and practise it patiently, a little each day."
  },
  {
    name: "Maa Chandraghanta",
    theme: "Courage and alertness",
    story: "Chandraghanta is named for the crescent-moon shape associated with her forehead. Her form is often understood as courageous and protective.",
    reflection: "Face a challenge calmly, and ask for help when you need it."
  },
  {
    name: "Maa Kushmanda",
    theme: "Creation and energy",
    story: "In popular devotional accounts, Kushmanda is associated with the creation of the universe and with life-giving energy and light.",
    reflection: "Use your energy to create something helpful, however small."
  },
  {
    name: "Maa Skandamata",
    theme: "Care and compassion",
    story: "Skandamata is worshipped as the mother of Skanda, also known as Kartikeya. Her form highlights motherhood, care and protection.",
    reflection: "Show care through one thoughtful action toward another person."
  },
  {
    name: "Maa Katyayani",
    theme: "Determination and protection",
    story: "Katyayani is a warrior form of the Goddess. In devotional traditions, she is associated with strength and the struggle against harmful forces.",
    reflection: "Stand up for what is right while treating others with respect."
  },
  {
    name: "Maa Kalaratri",
    theme: "Fearlessness in difficult times",
    story: "Kalaratri has a fierce appearance and is understood in this tradition as a protective form that confronts darkness and danger.",
    reflection: "Name one fear you can face safely, one small step at a time."
  },
  {
    name: "Maa Mahagauri",
    theme: "Peace and renewal",
    story: "Mahagauri is commonly portrayed as a serene form of the Goddess. Devotional interpretations associate her with peace, purity and renewal.",
    reflection: "Make room for a fresh start by letting go of one unhelpful thought or habit."
  },
  {
    name: "Maa Siddhidatri",
    theme: "Wisdom and fulfilment",
    story: "Siddhidatri is the ninth form in the widely followed Navadurga sequence. Her name is associated with granting siddhis, or spiritual accomplishments, in devotional tradition.",
    reflection: "Look back at what you learned and choose one lesson to carry forward."
  }
];

function buildNavaratriCards() {
  const grid = $("navaratri-grid");
  grid.replaceChildren();
  navaratriDays.forEach((day, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "nav-day-card";
    button.setAttribute("aria-pressed", String(index === state.navaratriDay));
    button.innerHTML = `<span class="nav-day-number">Day ${index + 1}</span><span class="nav-day-name"></span><span class="nav-day-theme"></span>`;
    button.querySelector(".nav-day-name").textContent = day.name;
    button.querySelector(".nav-day-theme").textContent = day.theme;
    button.addEventListener("click", () => {
      state.navaratriDay = index;
      renderNavaratriDay();
    });
    grid.appendChild(button);
  });
}

function renderNavaratriDay() {
  const index = state.navaratriDay;
  const day = navaratriDays[index];
  $("navaratri-progress-text").textContent = `Day ${index + 1} of ${navaratriDays.length}`;
  $("navaratri-progress-bar").style.width = `${((index + 1) / navaratriDays.length) * 100}%`;
  $("navaratri-day-label").textContent = `DAY ${index + 1}`;
  $("navaratri-goddess-title").textContent = day.name;
  $("navaratri-theme").textContent = `Theme: ${day.theme}`;
  $("navaratri-story").textContent = day.story;
  $("navaratri-reflection").textContent = day.reflection;
  [...$("navaratri-grid").children].forEach((button, buttonIndex) => {
    button.setAttribute("aria-pressed", String(buttonIndex === index));
  });
  $("navaratri-prev").disabled = index === 0;
  $("navaratri-next").textContent = index === navaratriDays.length - 1 ? "Return to Day 1" : "Next Day";
}

function openNavaratri() {
  state.navaratriDay = 0;
  buildNavaratriCards();
  renderNavaratriDay();
  showScreen("screen-navaratri");
}

function goToNextNavaratriDay() {
  state.navaratriDay = state.navaratriDay === navaratriDays.length - 1 ? 0 : state.navaratriDay + 1;
  renderNavaratriDay();
  const selected = $("navaratri-grid").children[state.navaratriDay];
  if (selected) selected.focus({ preventScroll: true });
}

function goToPreviousNavaratriDay() {
  if (state.navaratriDay > 0) {
    state.navaratriDay--;
    renderNavaratriDay();
    const selected = $("navaratri-grid").children[state.navaratriDay];
    if (selected) selected.focus({ preventScroll: true });
  }
}

function handleNameSubmit(event) {
  event.preventDefault();
  const name = $("name-input").value.trim();
  if (!name) {
    $("name-error").textContent = "Please enter your name to begin your journey.";
    $("name-input").focus();
    return;
  }
  $("name-error").textContent = "";
  state.name = name;
  $("greeting-title").textContent = `Welcome, ${state.name}! Your journey into the traditions of Dasara begins here.`;
  showScreen("screen-greeting");
}

function buildDots() {
  $("chapter-dots").replaceChildren();
  chapters.forEach((chapter, index) => {
    const dot = document.createElement("li");
    dot.setAttribute("aria-label", `Chapter ${index + 1}: ${chapter.title}`);
    $("chapter-dots").appendChild(dot);
  });
}

function renderChapter() {
  const chapter = chapters[state.chapter];
  const total = chapters.length;
  $("chapter-art").innerHTML = artwork[chapter.art];
  $("chapter-title").textContent = chapter.title;
  const textBox = $("chapter-text");
  textBox.replaceChildren();
  chapter.text.forEach((paragraph) => {
    const p = document.createElement("p");
    p.textContent = paragraph;
    textBox.appendChild(p);
  });
  $("chapter-count").textContent = `Chapter ${state.chapter + 1} of ${total}`;
  $("progress-bar").style.width = `${((state.chapter + 1) / total) * 100}%`;
  $("progress-track").setAttribute("aria-valuenow", String(state.chapter + 1));
  $("lesson-box").hidden = true;
  $("lesson-box").textContent = chapter.lesson;
  $("lesson-btn").setAttribute("aria-expanded", "false");
  $("lesson-btn").textContent = "Reveal the lesson";

  [...$("chapter-dots").children].forEach((dot, index) => {
    dot.className = index < state.chapter ? "done" : index === state.chapter ? "current" : "";
    if (index === state.chapter) dot.setAttribute("aria-current", "step");
    else dot.removeAttribute("aria-current");
  });
  $("prev-btn").disabled = state.chapter === 0;
  $("next-btn").textContent = state.chapter === total - 1 ? "Take the Quiz" : "Next";
  const card = $("chapter-card");
  card.classList.remove("fade");
  void card.offsetWidth;
  card.classList.add("fade");
  $("chapter-title").focus({ preventScroll: true });
}

function toggleLesson() {
  const box = $("lesson-box");
  box.hidden = !box.hidden;
  $("lesson-btn").setAttribute("aria-expanded", String(!box.hidden));
  $("lesson-btn").textContent = box.hidden ? "Reveal the lesson" : "Hide the lesson";
}

function goNext() {
  if (state.chapter < chapters.length - 1) {
    state.chapter++;
    renderChapter();
  } else startQuiz();
}
function goPrevious() {
  if (state.chapter > 0) {
    state.chapter--;
    renderChapter();
  }
}

function startQuiz() {
  state.question = 0;
  state.score = 0;
  $("quiz-card").hidden = false;
  $("quiz-result").hidden = true;
  showScreen("screen-quiz");
  renderQuestion();
}

function renderQuestion() {
  const item = quizQuestions[state.question];
  $("quiz-count").textContent = `Question ${state.question + 1} of ${quizQuestions.length}`;
  $("quiz-question").textContent = item.question;
  $("quiz-feedback").textContent = "";
  $("quiz-next").hidden = true;
  const optionsBox = $("quiz-options");
  optionsBox.replaceChildren();
  item.options.forEach((optionText, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.textContent = optionText;
    button.addEventListener("click", () => checkAnswer(index));
    optionsBox.appendChild(button);
  });
}

function checkAnswer(chosenIndex) {
  const item = quizQuestions[state.question];
  const buttons = [...$("quiz-options").children];
  const isCorrect = chosenIndex === item.answer;
  if (isCorrect) state.score++;
  buttons.forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add("correct");
    else if (index === chosenIndex) button.classList.add("wrong");
  });
  $("quiz-feedback").textContent = `${isCorrect ? "Correct! " : "Not quite. "}${item.explain}`;
  $("quiz-next").textContent = state.question === quizQuestions.length - 1 ? "See my score" : "Next question";
  $("quiz-next").hidden = false;
  $("quiz-next").focus();
}

function goToNextQuestion() {
  if (state.question < quizQuestions.length - 1) {
    state.question++;
    renderQuestion();
  } else showResult();
}

function showResult() {
  const total = quizQuestions.length;
  let message;
  if (state.score === total) message = "Brilliant! You answered every question correctly.";
  else if (state.score >= 3) message = "Well done! You understand many of the traditions covered here.";
  else message = "Good start! Revisit the chapters and try the quiz again.";
  $("score-text").textContent = `${state.name}, you scored ${state.score} out of ${total}`;
  $("score-message").textContent = message;
  $("quiz-card").hidden = true;
  $("quiz-result").hidden = false;
  $("finish-btn").focus();
}

function showFinal() {
  $("final-title").textContent = `Happy Dasara, ${state.name}!`;
  showScreen("screen-final");
}

function restart() {
  state.name = "";
  state.chapter = 0;
  state.question = 0;
  state.score = 0;
  $("name-input").value = "";
  $("name-error").textContent = "";
  $("quiz-card").hidden = false;
  $("quiz-result").hidden = true;
  showScreen("screen-welcome");
}

function init() {
  $("art-greeting").innerHTML = artwork.diya;
  $("art-final").innerHTML = artwork.diya;
  buildDots();
  createEmbers();
  $("name-form").addEventListener("submit", handleNameSubmit);
  $("discover-btn").addEventListener("click", () => { state.chapter = 0; showScreen("screen-story"); renderChapter(); });
  $("navaratri-btn").addEventListener("click", openNavaratri);
  $("navaratri-prev").addEventListener("click", goToPreviousNavaratriDay);
  $("navaratri-next").addEventListener("click", goToNextNavaratriDay);
  $("navaratri-back").addEventListener("click", () => showScreen("screen-greeting"));
  $("navaratri-stories").addEventListener("click", () => { state.chapter = 0; showScreen("screen-story"); renderChapter(); });
  $("lesson-btn").addEventListener("click", toggleLesson);
  $("next-btn").addEventListener("click", goNext);
  $("prev-btn").addEventListener("click", goPrevious);
  $("quiz-next").addEventListener("click", goToNextQuestion);
  $("finish-btn").addEventListener("click", showFinal);
  $("restart-btn").addEventListener("click", restart);
  showScreen("screen-welcome");
}

init();
