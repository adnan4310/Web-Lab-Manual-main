const questions = [
    {
        q: "HTML stands for?",
        options: ["Hyper Text Markup Language", "Home Tool Marking Language", "Hyperlinks Text Management Language"],
        answer: 0
    },
    {
        q: "CSS is used for?",
        options: ["Styling", "Programming Logic", "Database"],
        answer: 0
    },
    {
        q: "True or False: JavaScript can change HTML content dynamically.",
        options: ["True", "False"],
        answer: 0
    },
    {
        q: "Which is a JS event?",
        options: ["onclick", "color-red", "break"],
        answer: 0
    },
    {
        q: "Which operator compares values?",
        options: ["=", "==", "$"],
        answer: 1
    }
];

let currentIndex = 0;
let score = 0;

const welcomeScreen = document.getElementById("welcomeScreen");
const quizScreen = document.getElementById("quizScreen");
const resultScreen = document.getElementById("resultScreen");

const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");
const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");

function startQuiz() {
    welcomeScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    nextBtn.classList.add("hidden");
    questionText.innerText = questions[currentIndex].q;
    optionsContainer.innerHTML = "";

    questions[currentIndex].options.forEach((opt, idx) => {
        let btn = document.createElement("button");
        btn.innerText = opt;
        btn.classList.add("optionBtn");
        btn.onclick = () => checkAnswer(idx, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selected, btnElement) {
    const correctAnswer = questions[currentIndex].answer;

    if (selected === correctAnswer) {
        btnElement.classList.add("correct");
        score++;
    } else {
        btnElement.classList.add("wrong");
    }

    disableOptions();
    nextBtn.classList.remove("hidden");
}

function disableOptions() {
    document.querySelectorAll(".optionBtn").forEach(btn => btn.disabled = true);
}

function nextQuestion() {
    currentIndex++;

    if (currentIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    finalScore.innerText = `${score} / ${questions.length}`;

    finalMessage.innerText =
        score >= 4 ? "Great Job!" :
        score === 3 ? "Good Try!" :
        "Try Again!";
}

function restartQuiz() {
    currentIndex = 0;
    score = 0;

    resultScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    loadQuestion();
}
