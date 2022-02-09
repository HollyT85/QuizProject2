const latestScore=localStorage.getItem('highscore');
const leaderboardScore=document.getElementById('leaderboardScore')

leaderboardScore.innerHTML=latestScore;