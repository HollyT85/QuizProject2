/* https://www.youtube.com/watch?v=QU6z69P5BrU&t=0s*/



/*Array of objects for hard level questions*/

const hardQuestions= [
    {
        Question: "What immense structure is referred to in Norse mythology as the Yggdrasil?",
        Options:['Upper Sacred Tree', 'Lower Sacred Tree','Central Sacred Tree' ],    
        correctAnswer: 2
    },
    {
        Question: "Nidhogg is a mythical creature from which mythological era?",
        Options: ['Norse','Greek','Polynesian','Roman'],    
        correctAnswer: 0
    },
    {
        Question: "Who is the daughter of King Minos?",
        Options: ['Hela','Helen','Mina','Ariadne'],
        correctAnswer: 3
    },
    {
        Question: "Which of the following Mesopotamin mythological figures was not a deity?",
        Options: ['Enlil','Sumer','Sin', 'Enko'] ,     
        correctAnswer: 1
    },
    {
        Question: "What was one of the elements of the chain that bound Fenrir made of?",
        Options: ['Breath of a fish','Scale of a snake','Tooth of a dragon','Skin of a siren'],
        correctAnswer: 0
    },
    {
        Question: "Nefertum is the Egyptian goddes of what?",
        Options: ['Soap', 'Eyelashes', 'Hair', 'Perfume'],
        correctAnswer: 3
    },
    {
        Question: "The Graeve sisters lived in a can under a rock shaped like what?",
        Options:['A fish','A weasel','A star','A rabbit'],      
        correctAnswer: 1
    },
    ]


/*Extracting IDs from Hard level game*/

const updateQuestionNumber = document.getElementById('questionNumber');
const question=document.getElementById('question');
const answers=document.getElementById('answer-container');
const finalScore=document.getElementById('finalScore')

let questionCounter=0;
let numberOfQuestions=10;
let currentQuestion;
let availableQuestions=[];
let availableAnswers=[];
let score=0;

function setAvailableQuestions () {

   
    const allQuestions=hardQuestions.length;
    for (let i=0; i<allQuestions; i++){
        availableQuestions.push(hardQuestions[i]);
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

