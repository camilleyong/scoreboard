// HOME SCORE AND CODE

let homeScoreBtnOne = document.getElementById("byOne")
let homeScoreBtnTwo = document.getElementById("byTwo")
let homeScoreBtnThree = document.getElementById("byThree")
let homeScore =document.getElementById("home-score")
let score = 0

function homeScoreOne(){
    score += 1
    homeScore.textContent = score
}

function homeScoreTwo(){
    score += 2
    homeScore.textContent = score
}

function homeScoreThree(){
    score += 3
    homeScore.textContent = score
}

// GUEST SCORE AND CODE

let guestScoreBtnOne = document.getElementById("guestByOne")
let guestScoreBtnTwo = document.getElementById("guestByTwo")
let guestScoreBtnThree = document.getElementById("guestByThree")
let guestScore = document.getElementById("guest-score")
let guest = 0

function guestScoreOne(){
    guest += 1
    guestScore.textContent = guest
}

function guestScoreTwo(){
    guest += 2
    guestScore.textContent = guest
}

function guestScoreThree(){
    guest += 3
    guestScore.textContent = guest
}


// RESET NEW GAME
let resetBtn = document.getElementById("resetBtn")

function resetGame() {
    homeScore.textContent = 0
    guestScore.textContent = 0
    score = 0
    guest = 0
    document.body.onclick = () => {
        clearTimeout(timer)
        timer = 31
        setTime()
    }
}

// TIMER
let time = document.getElementById("timer")
let timer = 31;

function setTime() {
  let timerInterval = setInterval(function() {
    timer--;
    time.textContent = "TIMER: " + timer + "s";

    if(timer === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000); // <---- time in miliseconds
}


function sendMessage () {
    time.textContent = "GAME OVER!"
}

setTime();