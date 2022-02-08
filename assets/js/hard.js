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
    {
        Question: "Where did Scylla, the six headed monster, live?",
        Options:['The Tyrrhenian Sea','The Messina Strait','The Indian Ocean','The Adriatic Sea'],      
        correctAnswer: 1
    },
    {
        Question: "From which part of the body was Amaterasu born?",
        Options:['Left eye','Right eye','Nose','Mouth'],      
        correctAnswer: 0
    },
    {
        Question: "Which group of people believed the world was created by a hare?",
        Options:['Powhatan','Pima','Sioux','Ojibwa'],      
        correctAnswer: 0
    },
    {
        Question: "What was Endymion's punishment for achievement immortality?",
        Options:['Eternal sleep','Eternal hunger','Eternal restlessness','Eternal happiness'],      
        correctAnswer: 0
    },
    {
        Question: "who is believed to have split heaven and earth in Sumerian mythology?",
        Options:['Ninmah','Gilgamesh','Enki','Enlil'],      
        correctAnswer: 3
    },
    {
        Question: "Who was the founder of Incan civilization?",
        Options:['Pizarro','Machu Pichu','Manco Capac','Cusco'],      
        correctAnswer: 2
    },
    {
        Question: "What did the Pima believe created the world?",
        Options:['A butterfly','A hare','A bird','A dog'],      
        correctAnswer: 1
    },
    {
        Question: "Who beheaded Medusa?",
        Options:['Andromeda','Perseus','Poseidon','Cetus'],      
        correctAnswer: 1
    },
    {
        Question: "Who ruled the Celtic Otherworld?",
        Options:['Badb','Arawn','Dagda','Brigid'],      
        correctAnswer: 1
    },
    {
        Question: "Who is the only god to be physically ugly?",
        Options:['Erebus','Hephaestus','Zeus','Dionysus'],      
        correctAnswer: 1
    },
    {
        Question: "The demi-god, Kamapua, was said to be half-man and half what?",
        Options:['Horse','Rat','Pig','Dog'],      
        correctAnswer: 2
    },
    {
        Question: "Who is known as one of the most evil Yokai?",
        Options:['Kappa','Bake-danuki','Tamamo no Mae','Kitsune'],      
        correctAnswer: 2
    },
    {
        Question: "Circe is the daughter of Helios",
        Options:['False', 'True'],      
        correctAnswer: 1
    },
    ]


/*Extracting IDs from Hard level game*/

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

