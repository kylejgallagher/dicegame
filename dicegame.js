const score0El = document.querySelector("#score--0")
const score1El = document.getElementById("score--1")
const dice1 = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const player1 = document.querySelector(".player--0");
const player2 = document.querySelector(".player--1");

let scores = [0,0]
let currentScore = 0
let activePlayer = 0
let playing = true;

score0El.textContent = 0;
score1El.textContent = 0;

dice1.classList.add("hidden");
document.querySelector(".reo").classList.add("hidden");


const changePlayers = function () {
currentScore = 0;
document.getElementById(`current--${activePlayer}`).textContent = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
player1.classList.toggle("player--active");
player2.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function(){
    if (playing){
    const dice = Math.trunc(Math.random() * 6) + 1;
    dice1.classList.remove("hidden")
    dice1.src = `dice-${dice}.png` 
    if (dice !== 1){
    document.getElementById(`current--${activePlayer}`).textContent = currentScore += dice;
    } 
   else {
    changePlayers()
}}
});

btnHold.addEventListener("click", function(){
    if(playing){
    scores[activePlayer] = scores[activePlayer] + currentScore; 
    document.getElementById((`score--${activePlayer}`)).textContent = scores[activePlayer];
if (scores[activePlayer] >= 50){
    playing = false;
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    document.getElementById(`name--${activePlayer}`).textContent = "You win!";
    dice1.classList.add("hidden");
} else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    console.log(scores);
    changePlayers(); }
}});

btnNew.addEventListener("click", function(){
    playing = true;
    currentScore = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    scores = [0,0];
    console.log(scores);
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
    document.querySelector(`.player--${activePlayer}`).classList.add("player--active");
    document.getElementById(`current--${activePlayer}`).textContent = 0
    document.querySelector(".reo").classList.add("hidden");
});
