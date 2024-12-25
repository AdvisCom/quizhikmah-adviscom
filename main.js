const questions = [
    { // no 1
        question: "Al-Quran was revealed gradually in the month of Ramadhan, how long did it take for Al Quran to be sent down from heaven to earth?",
        answers: [
            {text: "A. 22 years, 3 month, 2 days", correct: false},
            {text: "B. 22 years, 2 month, 22 days", correct: true},
            {text: "C. 12 years, 5 month, 12 days", correct: false},
            {text: "D. 10 years, 10 month, 4 days", correct: false},
        ]
    },
    { // no 2
        question: "What is the total number of ayat in Al-Quran?",
        answers: [
            {text: "A. 6666 ayat or 6236 ayat", correct: true},
            {text: "B. 6966 ayat or 6326 ayat", correct: false},
            {text: "C. 5696 ayat or 6632 ayat", correct: false},
            {text: "D. 3656 ayat or 6362 ayat", correct: false},
        ]
    },
    { // no 3
        question: "All the words, actions, and decrees(taqrir) of Rasulullah SAW in accordance with Allah revelation, are called?",
        answers: [
            {text: "A. Mushaf", correct: false},
            {text: "B. Scripture", correct: false},
            {text: "C. Al-Quran", correct: false},
            {text: "D. Hadist", correct: true},
        ]
    },
    { // no 4
        question: "Kalamullah which was revealed to Nabi Muhammad SAW, which came to us in mutawatir, was written in Mushaf, starting with Surah Al-Fatihah and ending with Surah An-Nas, are called?",
        answers: [
            {text: "A. Hadist", correct: false},
            {text: "B. Al-Quran", correct: true},
            {text: "C. Interpretation", correct: false},
            {text: "D. Scripture", correct: false},
        ]
    },
    { // no 5
        question: "Saying the two sentences of syahadat, Offering prayer, Paying zakat, Fasting, Performing the Hajj if you are able. the 5 basic principles of islam, are called?",
        answers: [
            {text: "A. religious regulations", correct: false},
            {text: "B. Pillars of Faith", correct: false},
            {text: "C. Pillars of islam", correct: true},
            {text: "D. Islam regulations", correct: false},
        ]
    },
    { // no 6
        question: "Faith in Allah SWT, to angels, to the book, to Rasulullah, to the last day, to qada and qadar. the 6 basic beliefs in islam, are called?",
        answers: [
            {text: "A. Islam regulations", correct: false},
            {text: "B. Religious regulations", correct: false},
            {text: "C. Pillars of islam", correct: false},
            {text: "D. Pillars of faith", correct: true},
        ]
    },
    { // no 7
        question: "Wujud: there is, Qidam: earlier, Baqa': eternal, Mukhalafatuhu lil hawaditsi: different from the others, Qiyamuhu binafsihi: stand-alone, Wahdaniyah: one, Qudrat: dominate, Iradah: have an intention, Ilmu: cognize, Hayat: life, Sama': hear, Bashar: see, Kalam: said, Qadiran: almighty, Muridhan: very willing, 'Aaliman: omniscient, Hayyan: very alive, Sami'an: all-hearing, Bhasiran: all-seing, Mutakalliman: very talkative. is nature?",
        answers: [
            {text: "A. 20 mandatory characteristics of Allah", correct: true},
            {text: "B. 20 impossible characteristics of Allah", correct: false},
            {text: "C. the nature of Allah jaiz", correct: false},
            {text: "D. 15 mandatory characteristics of Allah", correct: false},
        ]
    },
    { // no 8
        question: "Intention, Washing face, Wash both hands up to the elbows, Rubbing part of the head, Wash both feet up to the ankles, Orderly. 6 things that must be done to make wudhu is valid, so that prayer is also valid, are called?",
        answers: [
            {text: "A. Pillars of islam", correct: false},
            {text: "B. Pillars of faith", correct: false},
            {text: "C. The harmony of wudhu", correct: true},
            {text: "D. Islam regulations", correct: false},
        ]
    },
    { // no 9
        question: "Intention, Takbiratul ihram, Draw oneself up, Read surah Al-Fatihah every rakaat, (Bow, I'tidal, Prostrate twice, Sitting between two prostrations, Sat down for the final tasyahud, Read the final tasyahud) with Tuma'ninah, Read shalawat, First greeting, Orderly. things that must be done during prayer, so that prayer is valid, are called?",
        answers: [
            {text: "A. The harmony of wudhu", correct: false},
            {text: "B. The harmony of prayer", correct: true},
            {text: "C. Islam regulations", correct: false},
            {text: "D. Pillars of islam", correct: false},
        ]
    },
    { // no 10
        question: "what is this called, (1) strive seriously and wholeheartedly to achieve your goals and objectives. and (2) Surrender all matters and the results of his efforts only to Allah.?",
        answers: [
            {text: "A. attitude to have", correct: false},
            {text: "B. (1) Tawakkal and (2) Ikhtiar", correct: false},
            {text: "C. (1) obedient and (2) good nature", correct: false},
            {text: "D. (1) Ikhtiar and (2) Tawakkal", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionScore = document.getElementById("question-score")


let currentQuestionIndex = 0;
let trues = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    trues = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
};

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
};

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
};

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        trues++;
        score += 10;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
};

function showScore() {
    resetState();
    questionElement.innerHTML = `Your Correct ${trues} out of ${questions.length} question!`;
    questionScore.innerHTML = "Your Score is " + score;
    nextButton.innerHTML = "Let's Try Again";
    nextButton.style.display = "block";
    nextButton.style.background = "#00712d";
};

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();