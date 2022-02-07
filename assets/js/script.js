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
        Question: "In Chinese mythology, Changxi is the mother of what?",
        Options: ['Twelve moons', 'Twelve stars','Twelve planets','Twelve meteors'],
        correctAnswer: 0
    },
    ]


/*Extracting IDs from medium level game*/

const updateQuestionNumber = document.getElementById('questionNumber');
const question=document.getElementById('question');
const answers=document.getElementById('questionAnswers');

let questionCounter=0;
let numberOfQuestions=10;
let currentQuestion;
let availableQuestions=[];

function setAvailableQuestions () {
    const allQuestions=mediumQuestions.length;
    for (let i=0; i<allQuestions; i++){
        availableQuestions.push(mediumQuestions[i]);
        } 
}

function newQuestion () {

    const questionIndex=availableQuestions[Math.floor(Math.random()*availableQuestions.length)];
    currentQuestion=questionIndex;
    question.innerHTML=currentQuestion.Question;

    questionCounter++;
    updateQuestionNumber.innerText = `${questionCounter} / ${numberOfQuestions}`;
}

function next () {
    if (questionCounter == numberOfQuestions){
    return window.location.assign('endgame.html')
    }
    else {
        newQuestion()
    }
}

window.onload=function() {
    setAvailableQuestions();
    newQuestion();
}