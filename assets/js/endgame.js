const latestScore=localStorage.getItem('highscore')
const score=document.getElementById('score')

score.innerHTML=latestScore;
console.log(latestScore)