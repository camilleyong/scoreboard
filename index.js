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