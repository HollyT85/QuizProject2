/* https://www.youtube.com/watch?v=QU6z69P5BrU&t=0s*/

//Array of objects for medium level questions

const mediumQuestions= [
    {
        Question: "What animal did Queen Pasiphae sleep with before she gave birth to the minotaur?",
        
            option1: 'A white bull',
            option2: 'A black cow',
            option3: 'A golden ram',
            option4: 'A brown goat',
    
        correctAnswer: 1
    },
    {
        Question: "Who is the God of War in Polynesian mythology?",
        
            option1: 'Ares',
            option2: 'Ku',
            option3: 'Zeus',
            option4: 'Kratos',
    
        correctAnswer: 2
    },
    {
        Question: "In African mythology, Anansi is a trickster and storyteller who takes the shape of which animal?",
        
            option1: 'Spider',
            option2: 'Rabbit',
            option3: 'Lizard',
            option4: 'Dog',
    
        correctAnswer: 1
    },
    {
        Question: "In Greek mythology, who killed Achilles?",
        
            option1: 'Troy',
            option2: 'Hera',
            option3: 'Paris',
            option4: 'Hermes',
        
        correctAnswer: 3
    },
    {
        Question: "Which of these Roman gods or goddesses doesn't have a Greek counterpart?",
        
            option1: 'Venus',
            option2: 'Mars',
            option3: 'Jupiter',
            option4: 'Janus',
        
        correctAnswer: 4
    },
    {
        Question: "Hel was the daughter of which Norse god?",
        
            option1: 'Zeus',
            option2: 'Loki',
            option3: 'Thor',
            option4: 'Tyr',
        
        correctAnswer: 2
    },
    {
        Question: "What are the names of the first humans in Norse mythology?",
        
            option1: 'Adam & Eve',
            option2: 'Shu & Tefnut',
            option3: 'Askr & Embla',
            option4: 'Prometheus & Athena',
        
        correctAnswer: 3
    }, 
    {
        Question: "According to the Egyptian myth of Osiris, who murdered Osiris?",
        
            option1: 'Anubis',
            option2: 'Mina',
            option3: 'Sekmet',
            option4: 'Seth',
        
        correctAnswer: 4
    },
    {
        Question: "Which of these is Hera goddess of?",
        
            option1: 'Rivers',
            option2: 'Fishing',
            option3: 'Women',
            option4: 'Children',
        
        correctAnswer: 3
    },
    {
        Question: "In Chinese mythology, Changxi is the mother of what?",
        
            option1: 'Twelve moons',
            option2: 'Twelve stars',
            option3: 'Twelve planets',
            option4: 'Twelve meteors',
        
        correctAnswer: 1
    },
    ]


//Extracting IDs from medium level game

const updateQuestionNumber = document.getElementById('questionNumber');
const question=document.getElementById('question');
const answerContainers=Array.from(document.getElementsByClassName("answer-text"));

//General quiz features
let questionCounter=0;
let numberOfQuestions=10;
let currentQuestion;
let availableQuestions=[];
let availableAnswers=[];

//Push available questions into an array
function setAvailableQuestions () {
    const allQuestions=mediumQuestions.length;
    for (let i=0; i<allQuestions; i++){
        availableQuestions.push(mediumQuestions[i]);
        } 
}

//set new questions, ensure they're not repeated, set answers and increase question counter
function newQuestion () {
    //questions
    const questionIndex=availableQuestions[Math.floor(Math.random()*availableQuestions.length)];
    currentQuestion=questionIndex;
    question.innerHTML=currentQuestion.Question;
    const index=availableQuestions.indexOf(questionIndex)
    availableQuestions.splice(index, 1);

    //answers
    answerContainers.forEach(option => {
        const number = option.dataset['number']
        option.innerHTML = currentQuestion['option' + number]
    })

    //increase question counter and user display
    questionCounter++;
    updateQuestionNumber.innerText = `${questionCounter} / ${numberOfQuestions}`;
}


//next button and what to do when clicked
function next () {
    if (questionCounter == numberOfQuestions){
    return window.location.assign('endgame.html')
    }
    else {
        newQuestion()
    }
}


//run functions
setAvailableQuestions();
newQuestion();
