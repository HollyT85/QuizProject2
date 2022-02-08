//publish high score on endgame Page
const latestScore=localStorage.getItem('highscore');
const userScore=document.getElementById('score');
const username=document.getElementById('username');

userScore.innerHTML=latestScore;
