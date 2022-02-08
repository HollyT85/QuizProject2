/* https://www.youtube.com/watch?v=QU6z69P5BrU&t=0s*/



/*Array of objects for easy level questions*/

const easyQuestions= [
    {
        Question: "Which mythological eras does the god Apollo come from?",
        Options:['Greek & Roman','Roman & Norse', 'Norse & Greek','Celtic & Norse' ],    
        correctAnswer: 0
    },
    {
        Question: "Baron Samedi is the voodoo god of the dead",
        Options:['True','False'],      
        correctAnswer: 0
    },
    {
        Question: "What was Atlas, the Olympian god, known as?",
        Options: ['Bearer of bad news','Bearer of heavens','Bearer of good news','Bearer of fear'],    
        correctAnswer: 1
    },
    {
        Question: "In Greek mythology, who is the godddess of wine?",
        Options: ['Dionysus','Artemis','Hermes','Demeter'],
        correctAnswer: 0
    },
    {
        Question: "Who travelled to the underworld to save his wife, Eurydice?",
        Options: ['Troy','Minos','Orpheus', 'Theseus'] ,     
        correctAnswer: 2
    },
    {
        Question: "Who was the 'King of Gods' in Ancient Greek mythology?",
        Options: ['Hades','Poseidon','Odin','Zeus'],
        correctAnswer: 3
    },
    {
        Question: "Pandora had a box",
        Options: ['True', 'False'],
        correctAnswer: 0
    },
    {
        Question: "Who led the Argonauts in search of the Golden Fleece?",
        Options:['John','Jason','Mark','Clive'],      
        correctAnswer: 1
    },
    {
        Question: "Which creature is said to be half man, half horse?",
        Options: ['Siren','Satyr','Centaur','Minotaur'],      
        correctAnswer: 2
    }, 
    {
        Question: "What did Medusa have for hair?",
        Options: ['Hair','Eels','Curls','Snakes'],
        correctAnswer: 3
    },
    {
        Question: "Which of these is Hera goddess of?",
        Options: ['Rivers','Fishing','Women','Children'],
        correctAnswer: 2
    },
    {
        Question: "Nike is the Greek goddess of family",
        Options: ['True','False'],
        correctAnswer: 1
    },
    {
        Question: "Cetus was sent to bring terror to Aethiopia",
        Options: ['True', 'False'],
        correctAnswer: 0
    },
    {
        Question: "How did sirens lure sailors to their death?",
        Options:['Singing to them', 'Shouting hello', 'Prending to drown', 'Waving'],
        correctAnswer:0
    },
    {
        Question: "Valhalla is for anyone who dies",
        Options:['False', 'True'],      
        correctAnswer: 0
    },
    {
        Question: "What did Cronus do to his children?",
        Options:['Teach them','Love them','Abandon them','Eat them'],      
        correctAnswer:3
    },
    {
        Question: "Ragnarok is the world-ending battle between gods",
        Options:['True', 'False'],      
        correctAnswer: 0
    },
    {
        Question: "Who ruled the world before the Olympians?",
        Options:['No-one','Titans','Primordials','Immortals'],      
        correctAnswer: 1
    },
    {
        Question: "Which is not a preferred offering of the Hawaiian volcano Goddess?",
        Options:['Gin','Flowers','Food','Candles'],      
        correctAnswer: 3
    },
    {
        Question: "When one of the Learnean Hydra's twelve heads were chopped off, how many replaced it?",
        Options:['None','Two','Ten','Five'],      
        correctAnswer: 1
    },
    ]


/*Extracting IDs from easy level game*/

const updateQuestionNumber = document.getElementById('questionNumber');
const question=document.getElementById('question');
const answers=document.getElementById('answer-container');
const finalScore=document.getElementById('finalScore')

let questionCounter=0;
let numberOfQuestions=15;
let currentQuestion;
let availableQuestions=[];
let availableAnswers=[];
let score=0;

function setAvailableQuestions () {

   
    const allQuestions=easyQuestions.length;
    for (let i=0; i<allQuestions; i++){
        availableQuestions.push(easyQuestions[i]);
        } 
}

function newQuestion () {

    if (questionCounter == numberOfQuestions){
        return window.location.assign('endgame.html')
    }
     
    const questionIndex=availableQuestions[Math.floor(Math.random()*availableQuestions.length)];
    currentQuestion=questionIndex;
    question.innerHTML=currentQuestion.Question;
    const index=availableQuestions.indexOf(questionIndex)
    availableQuestions.splice(index, 1);

    //answers
    const allOptions=currentQuestion.Options.length;
    for (let i=0; i<allOptions; i++){
        availableAnswers.push(i);
    }

    answers.innerHTML='';
    for(let i=0; i<allOptions; i++){
        const optionIndex=availableAnswers[Math.floor(Math.random()*availableAnswers.length)];
        
        const index2=availableAnswers.indexOf(optionIndex);
        availableAnswers.splice(index2,1);
        const option=document.createElement('div');
        option.innerHTML=currentQuestion.Options[optionIndex]; 
        option.id=optionIndex;
        option.className='btn';
        answers.appendChild(option);
        option.setAttribute('onclick', 'checkResult(this)');
    }
    

    questionCounter++;
    updateQuestionNumber.innerText = `${questionCounter} / ${numberOfQuestions}`;
}

function checkResult (element){
    const userAnswer=element.id;
    if (userAnswer==currentQuestion.correctAnswer){
        element.classList.add('correct')
        score++;
        localStorage.setItem('highscore',score)
        
    } 
    else {
        element.classList.add('incorrect')
    }
    
    setTimeout(function() {
        newQuestion()
    }, 900)
}

setAvailableQuestions();
newQuestion();

