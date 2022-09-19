//var body = document.body;
//var h1 = document.createElement("h1");
//var h1 = document.querySelector("h1");
//h1.textContent = "Coding Assesment";
//var h2 =document.createElement("h2");
var timeEl = document.querySelector(".time");

var mainEl = document.getElementById("main");


//var questions = document.querySelector(h2);

//const button =document.querySelector("button")
//button.setAttribute("name", Start)
//button.setAttribute("style", "font-size:20px")
//var h2. textContent = "question";

var secondsLeft = 10;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Seconds till Game Over";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "Game-over.jpg");
    mainEl.appendChild(imgEl);
}

setTime();