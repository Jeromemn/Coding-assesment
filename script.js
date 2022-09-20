const timeEl = document.querySelector(".time");
const timerEl = document.getElementById('countdown');
const startButton = document.getElementById('start');
const mainEl = document.getElementById("main");
const mainHeader = document.getElementsByClassName(".main header");
const question = document.getElementById("question");
const choiceA = document.getElementById("a");
const choiceB = document.getElementById("b");
const choiceC = document.getElementById("c");
const choiceD = document.getElementById("d");
const scoreContainer = document.getElementById("score-Container");
const questionContainer = document.getElementById("question-container");
const scoreTotal = document.getElementById("score");

let currentQuestionIndex = 0

let timeLeft = 10;

let score = 0;



const questions = [
    {
        question: "question 1",
        choices: ["a", "b", "c", "d"],
        answer: "a",
    },
    {
        question: "question 2",
        choices: ["a", "b", "c", "d"],
        answer: "a",
    },
    {
        question: "question 3",
        choices: ["a", "b", "c", "d"],
        answer: "a",
    },
    {
        question: "question 4",
        choices: ["a", "b", "c", "d"],
        answer: "a",
    },
    {
        question: "question 5",
        choices: ["a", "b", "c", "d"],
        answer: "a",
    },
];

const answers = []

const points = []

function start(event) {
    // reset global variables
    // show start button and hide end screen
    startButton.style.display = 'none';

    displayQuestion(currentQuestionIndex);
    countdown();
    displayScore()
}

startButton.addEventListener("click", start);


function countdown() {


    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + 'second remaining';
            timeLeft--;
        } else if (timeLeft === 0) {
            timerEl.textContent = 0 + ' seconds remaining';
            timeLeft--;
            var imgEl = document.createElement("img");
            imgEl.setAttribute("src", "gameover-text.jpg");
            mainEl.appendChild(imgEl);
            questionContainer.style.display = 'none';
            // if time is 0 then show score 
            // sutract time when answer is wrong 
        }
    }, 1000);
}
function displayQuestion(index) {

    question.textContent = questions[index].question;
    choiceA.textContent = questions[index].choices[0];
    choiceB.textContent = questions[index].choices[1];
    choiceC.textContent = questions[index].choices[2];
    choiceD.textContent = questions[index].choices[3];
    questionContainer.style.display = 'block';

    choiceA.addEventListener("click", selectAnswer)
    choiceB.addEventListener("click", selectAnswer)
    choiceC.addEventListener("click", selectAnswer)
    choiceD.addEventListener("click", selectAnswer)

}

function selectAnswer(event) {
    console.log(event.target.textContent);
    answers.push(event.target.textContent);
    if (!checkAnswer(currentQuestionIndex)) {
        timeLeft -= 5;
    }
    currentQuestionIndex += 1;
    console.log(currentQuestionIndex);

    if (currentQuestionIndex === questions.length) {
        // if on last question and answered in time, display end screen 
        questionContainer.style.display = 'none';
        console.log(answers)
        return;
    }

    displayQuestion(currentQuestionIndex);


}


function checkAnswer(index) {
    if (questions[index].answer === answers[index]) {
        return true;
    }
    return false;
}
function displayScore() {
        scoreContainer.textContent = score;
    scoreContainer.style.display = "block";

    Total();
}
function Total() {
    if (checkAnswer(currentQuestionIndex)) {
        score += 1;
    }

}






// make try again button
// local storage to save score
////show high score lisy

// functions displayEnd()