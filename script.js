const timeEl = document.querySelector(".time");
const timerEl = document.getElementById('countdown-container');
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
const scoreBoard = document.getElementById("score-board");
const inputScore = document.getElementById("input-score");
const endMessage = document.getElementById("Game-over");
const title = document.getElementById("score-title");
const first = document.getElementById("1");
const second = document.getElementById("2");
const third = document.getElementById("3");
const forth = document.getElementById("4");
const fifth = document.getElementById("5");
const againButton = document.getElementById("again");
const highScoreList = document.getElementById("high-scores-list");


let currentQuestionIndex = 0

let timeLeft = 10;

let score = 0;



const questions = [
    {
        question: "What is the window object?",
        choices: ["An open window in the browser. The window object also has a property called document, which represents an open webpage.", "bannana", "cat", "dog"],
        answer: "An open window in the browser. The window object also has a property called document, which represents an open webpage.",
    },
    {
        question: "How do you link an HTML file to an external JavaScript file?",
        choices: ["apple", "boy", "car", "Use <script> tags and set the src attribute to the path of the external JavaScript file."],
        answer: "Use <script> tags and set the src attribute to the path of the external JavaScript file.",
    },
    {
        question: "What does the console.log() function do?",
        choices: ["aliens", "bike", " It logs a message to the console.", "dog"],
        answer: " It logs a message to the console.",
    },
    {
        question: "Which keywords declares a variable?",
        choices: ["var", "let", "const", "All of the above"],
        answer: "All of the above",
    },
    {
        question: "How do you access the value assigned to a variable?",
        choices: ["a", "b", "Use the variable's name.", "d"],
        answer: "Use the variable's name.",
    },
    {
        question: " What is the only primitive type that must be surrounded by quotes?",
        choices: ["a", "Strings", "c", "d"],
        answer: "Strings",
    },
    {
        question: "Which primitive type would we use if we wanted to store a decimal or an integer?",
        choices: ["Numbers", "b", "c", "d"],
        answer: "Numbers",
    }, {
        question: "What does an expression using a logical or comparison operator evaluate to?",
        choices: ["a", "b", "c", "true or false."],
        answer: "true or false.",
    },
    {
        question: "What is the difference between && and ||?",
        choices: ["a", " The logical operator && returns true if both expressions are true, while the logical operator || returns true if just one expression or the other returns true.", "c", "d"],
        answer: " The logical operator && returns true if both expressions are true, while the logical operator || returns true if just one expression or the other returns true.",
    },
    {
        question: "By default, flexbox runs in rows, left to right. Which other directions could it run in?",
        choices: ["a", "b", "Flexbox can also run from top to bottom in columns", "d"],
        answer: "Flexbox can also run from top to bottom in columns",
    },
    {
        question: "What is the flex-wrap property?",
        choices: ["a", "b", "c", "It specifies whether the flex items should wrap or not. The value can be set to nowrap, wrap-reverse, or wrap."],
        answer: "It specifies whether the flex items should wrap or not. The value can be set to nowrap, wrap-reverse, or wrap.",
    },
    {
        question: "What does the justify-content property do?",
        choices: ["a", "It aligns the flex items and distributes the empty space between them.", "c", "d"],
        answer: "It aligns the flex items and distributes the empty space between them.",
    },
    {
        question: "How do we add structure to a webpage?",
        choices: ["a", "b", "We use semantic elements to define different areas of the webpage.", "d"],
        answer: "We use semantic elements to define different areas of the webpage.",
    },
    {
        question: "Why is using a percentage for font sizes helpful?",
        choices: ["a", "b", "c", "We only need to change the base font size to scale other elements accordingly."],
        answer: "We only need to change the base font size to scale other elements accordingly.",
    },
    {
        question: "How do we use global attributes to set up the HTML elements to connect with CSS",
        choices: ["We use class and id attributes to identify elements that we want to style.", "b", "c", "d"],
        answer: "We use class and id attributes to identify elements that we want to style.",
    },
    {
        question: "What do pseudo-classes allow you to do?",
        choices: ["a", "Style the different states of an element.", "c", "d"],
        answer: "Style the different states of an element.",
    },
    {
        question: "What primitive type has only two values?",
        choices: ["a", "b", "A Boolean has only two values: true or false.", "d"],
        answer: "A Boolean has only two values: true or false.",
    },
    {
        question: "How can we access an element in the array",
        choices: ["We use the array name and the index.", "b", "c", "d"],
        answer: "We use the array name and the index.",
    },
    {
        question: "What property can we use to determine the total number of elements in an array?",
        choices: ["a", "b", "c", " The array's length property."],
        answer: " The array's length property.",
    },
    {
        question: " What are array methods useful for?",
        choices: ["a", "They give us access to a wide range of functionality when writing code.", "c", "d"],
        answer: "They give us access to a wide range of functionality when writing code.",
    },
    {
        question: "How are key-value pairs used in objects?",
        choices: [" The key is a unique identifier used to access the value. In objects, key-value pairs define the properties of an object.", "b", "c", "d"],
        answer: " The key is a unique identifier used to access the value. In objects, key-value pairs define the properties of an object.",
    },
    {
        question: "What does the keyword this refer to inside an object?",
        choices: ["a", "b", "The keyword this refers to the object.", "d"],
        answer: "The keyword this refers to the object.",
    },
    {
        question: " How do we access a webpage's content?",
        choices: ["We access a webpage's content through the document", "b", "c", "d"],
        answer: "We access a webpage's content through the document",
    },
    {
        question: "How can we use an element's id to access that element?",
        choices: ["a", "b", " We can access elements directly by their id using the method getElementbyId().", "d"],
        answer: " We can access elements directly by their id using the method getElementbyId().",
    },
    {
        question: "What two parameters does the method setAttribute() take?",
        choices: ["a", "b", "c", "The method setAttribute() takes two parameters: first, the name of the attribute that we want to set or change (like src or style), and second, the value you want to set."],
        answer: "The method setAttribute() takes two parameters: first, the name of the attribute that we want to set or change (like src or style), and second, the value you want to set.",
    },
    {
        question: " How can we set an element's attribute?",
        choices: ["a", "We use setAttribute() methods to set or change attributes, like style and src, all using JavaScript.", "c", "d"],
        answer: "We use setAttribute() methods to set or change attributes, like style and src, all using JavaScript.",
    },
    {
        question: " How do we access the value of a pressed key?",
        choices: ["a", "b", "c", "We use the event object's properties. Two commonly used properties are key and code."],
        answer: "We use the event object's properties. Two commonly used properties are key and code.",
    },
    {
        question: "What do we need to do to stop event bubbling?",
        choices: ["To stop an event from traversing up the DOM tree, we use event.stopPropagation().", "b", "c", "d"],
        answer: "To stop an event from traversing up the DOM tree, we use event.stopPropagation().",
    },
    {
        question: "How do we store information in an HTML elemen",
        choices: ["a", "We use a data attribute, and we start the attribute name with data-.", "c", "d"],
        answer: "We use a data attribute, and we start the attribute name with data-.",
    },
    {
        question: "Where is the data in localStorage stored?",
        choices: ["a", "b", "Values in localStorage are stored locally in the user's browser as key-value pairs.", "d"],
        answer: "Values in localStorage are stored locally in the user's browser as key-value pairs.",
    },
    {
        question: "How do we get stored data to appear on the page when we open a browser window?",
        choices: ["We retrieve the data using getItem() and then render it to the page using DOM manipulation.", "b", "c", "d"],
        answer: "We retrieve the data using getItem() and then render it to the page using DOM manipulation.",
    },
    {
        question: "What is a method?",
        choices: ["a", " A method is a function associated with an object. It is also a property of the object.", "c", "d"],
        answer: " A method is a function associated with an object. It is also a property of the object.",
    },
    {
        question: "How do we use keys to access an object's properties",
        choices: ["a", "b", "We first use the object's name. Then we use the key to identify the data we want to access.", "d"],
        answer: "We first use the object's name. Then we use the key to identify the data we want to access.",
    },
    {
        question: "What is the global object?",
        choices: ["a", "b", "c", " The global object is the object that exists in the global scope. The window object is the global object."],
        answer: " The global object is the object that exists in the global scope. The window object is the global object.",
    },
    {
        question: "What is an array method?",
        choices: ["a", "An array method is a built-in method that we can use to manipulate arrays and the elements stored in them.", "c", "d"],
        answer: "An array method is a built-in method that we can use to manipulate arrays and the elements stored in them.",
    },
    {
        question: " What does it mean when a variable is globally scoped?",
        choices: ["A global variable is accessible to any function or script in the code.", "b", "c", "d"],
        answer: "A global variable is accessible to any function or script in the code.",
    },
    {
        question: " How do we execute a function?",
        choices: ["a", "b", "c", " Declaring a function only gives a block of code a name. To execute it, we have to call it every time we want the action performed."],
        answer: " Declaring a function only gives a block of code a name. To execute it, we have to call it every time we want the action performed.",
    },
    {
        question: "Why would we want to use a loop in the code?",
        choices: ["a", "b", "We can execute a block of code over and over again.", "d"],
        answer: "We can execute a block of code over and over again.",
    },
    {
        question: "What does it mean that arrays are zero-indexed?",
        choices: ["a", "b", "c", "The first element of the array has an index of 0, not 1."],
        answer: "The first element of the array has an index of 0, not 1.",
    },
    {
        question: "What happens if an if statement evaluates to true?",
        choices: ["The action contained in the curly brackets is performed.", "b", "c", "d"],
        answer: "The action contained in the curly brackets is performed.",
    },
    {
        question: "What is the difference between an if statement and an else statement?",
        choices: ["a", "b", "c", "An if statement executes an action only if the expression evaluates to true. An else statement executes an action only if the condition evaluates to false."],
        answer: "An if statement executes an action only if the expression evaluates to true. An else statement executes an action only if the condition evaluates to false.",
    },
    {
        question: "a",
        choices: ["a", "b", "c", "d"],
        answer: "a",
    },
];

let answers = []

let timeInterval;


function startGame(event) {
    // reset global variables
    // show start button and hide end screen
    startButton.style.display = 'none';

    displayQuestion(currentQuestionIndex);
    countdown();
    displayScore()
}

startButton.addEventListener("click", startGame);


function countdown() {


    timeInterval = setInterval(function () {
        console.log("timeLeft", timeLeft);
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else if (timeLeft === 0) {

            endGame();

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
}

choiceA.addEventListener("click", selectAnswer)
choiceB.addEventListener("click", selectAnswer)
choiceC.addEventListener("click", selectAnswer)
choiceD.addEventListener("click", selectAnswer)

function endGame() {
    questionContainer.style.display = 'none';

    clearInterval(timeInterval);
    timerEl.style.display = 'none';
    endMessage.textContent = 'Game Over';
    endMessage.style.display = 'block';
    scoreTotal.style.display = 'none';
    inputScore.style.display = `block`;
    displayScoreBoard();
}

function selectAnswer(event) {
    answers.push(event.target.textContent);
    if (!checkAnswer(currentQuestionIndex)) {
        console.log('the answer is incorrect');
        if (timeLeft <= 5) {
            console.log('time is less than 5...ending game');
            endGame();
            return;
        } else {
            console.log('subtracting 5 from time');
            timeLeft -= 5;
        }
    } else {
        score += 1;
    }
    currentQuestionIndex += 1;
    if (currentQuestionIndex === questions.length) {
        // if on last question and answered in time, display end screen 
        endGame();
        return;
    }

    displayQuestion(currentQuestionIndex);
    displayScore();
}


function checkAnswer(index) {
    if (questions[index].answer === answers[index]) {
        return true;
    }
    return false;
}
function displayScore() {
    scoreTotal.textContent = "Current Score " + score;
    scoreTotal.style.display = "block";


}

function displayScoreBoard() {
    title.textContent = "High scores";
    inputScore.textContent = "Submit score " + score;
    inputScore.style.display = "block";

    scoreBoard.style.display = "block";
    const currentHighScores = JSON.parse(localStorage.getItem('highscores'));
    // call from local storage array 
    if (!currentHighScores) return;
    console.log(currentHighScores);

    
    currentHighScores.sort(function(a, b) {
        return b - a;
      });
    console.log(currentHighScores);
    currentHighScores.forEach(function (highscore, index, ) {
        console.log(document.getElementById(index))
        if (document.getElementById(index)) return;
        const el = document.createElement("li");
        console.log("list item")

        el.setAttribute("id", index);
        el.textContent = index + 1 + ". " + highscore;
        highScoreList.appendChild(el);
        console.log("highscore");
    });

}
// if arr.length > 5 { arr.splice 0 , 1}

function submitScore(event) {

    //get current highscore in local storage
    const currentHighScores = JSON.parse(localStorage.getItem('highscores'));

    // iff current high score is not defined add current score to storage and return
    if (!currentHighScores) {
        localStorage.setItem('highscores', JSON.stringify([score]))
        displayScoreBoard();
        inputScore.style.display = `none`;
        return;
    }
    //otherwise push current score to array and set the array in local storage
    currentHighScores.push(score);
    
    localStorage.setItem('highscores', JSON.stringify(currentHighScores))
    // currentHighScores.sort(function (a, b) { return a - b; });
    // currentHighScores.slice(Math.max(currentHighScores.length - 5, 0))
    displayScoreBoard();
    inputScore.style.display = `none`;
}
inputScore.addEventListener("click", submitScore);



function playAgain() {

    startButton.style.display = 'none';
    answers = []
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 15;
    countdown();
    displayScore();
    displayQuestion(currentQuestionIndex);
    scoreBoard.style.display = 'none';
    endMessage.style.display = 'none';
    timerEl.style.display = 'block';
}


againButton.addEventListener("click", playAgain);

// function submitScore(event) {
//     highScore.push(event.target.textContent);
// }

// submitbutton.addEventListener("click", submitScore);

// // reset variables first
// timeLeft = 10;
// currentQuestionIndex = 0;
// score = 0;

// // then trigger timer and display question
// countdown();
// displayScore();
// displayQuestion(currentQuestionIndex);

// make try again button
// local storage to save score
////show high score lisy

// functions displayEnd()