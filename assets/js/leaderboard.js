//Leaderboard
const highScores=JSON.parse(localStorage.getItem('highscores'));
const highScoresList=document.getElementById('highScoresList');

highScoresList.innerHTML=
highScores.map (score =>{
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')

