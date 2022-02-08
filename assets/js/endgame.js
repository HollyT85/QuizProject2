//publish high score on endgame Page
const latestScore=localStorage.getItem('highscore');
const score=document.getElementById('score');
const username=document.getElementById('username');

const highScores=JSON.parse(localStorage.getItem('highscore'));

score.innerHTML=latestScore;

//Creating high-score list

const saveScore=document.getElementById('saveScore');

function saveHighScore (){
    const score= {
        Username: username.value,
        Score:score
    };
    
    highScores.push(score);

    highScores.sort((a,b) =>{
        return b.score-a.score
    })
    
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores))
    window.location.assign('leaderboard.html')
}