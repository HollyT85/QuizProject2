/* https://www.youtube.com/watch?v=QU6z69P5BrU&t=0s*/



/*Array of objects for medium level questions*/

const mediumQuestions= [
    {
        Question: "What animal did Queen Pasiphae sleep with before she gave birth to the minotaur?",
        Options:['A white bull','A black cow', 'A golden ram','A brown goat' ],    
        correctAnswer: 0
    },
    {
        Question: "Who is the God of War in Polynesian mythology?",
        Options: ['Ares','Ku','Zeus','Kratos'],    
        correctAnswer: 1
    },
    {
        Question: "In African mythology, Anansi is a trickster and storyteller who takes the shape of which animal?",
        Options: ['Spider','Rabbit','Lizard','Dog'],
        correctAnswer: 0
    },
    {
        Question: "In Greek mythology, who killed Achilles?",
        Options: ['Troy','Hera','Paris', 'Hermes'] ,     
        correctAnswer: 2
    },
    {
        Question: "Which of these Roman gods or goddesses doesn't have a Greek counterpart?",
        Options: ['Venus','Mars','Jupiter','Janus'],
        correctAnswer: 3
    },
    {
        Question: "Hodur is blind",
        Options: ['True', 'False'],
        correctAnswer: 0
    },
    {
        Question: "Hel was the daughter of which Norse god?",
        Options:['Odin','Loki','Thor','Tyr'],      
        correctAnswer: 1
    },
    {
        Question: "What are the names of the first humans in Norse mythology?",
        Options: ['Adam & Eve','Shu & Tefnut','Askr & Embla','Prometheus & Athena'],      
        correctAnswer: 2
    }, 
    {
        Question: "According to the Egyptian myth of Osiris, who murdered Osiris?",
        Options: ['Anubis','Mina','Sekmet','Seth'],
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
        Question: "In Chinese mythology, Changxi is the mother of what?",
        Options: ['Twelve moons', 'Twelve stars','Twelve planets','Twelve meteors'],
        correctAnswer: 0
    },
    {
        Question: "Sekmhet is the Egyptian goddess of war",
        Options:['True', 'False'],
        correctAnswer:0
    }
    ]


/*Extracting IDs from medium level game*/

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

   
    const allQuestions=mediumQuestions.length;
    for (let i=0; i<allQuestions; i++){
        availableQuestions.push(mediumQuestions[i]);
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

