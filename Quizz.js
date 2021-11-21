const questionsDB=[
    {
        ques: "1: If 5 wheels consist of 25 spokes, find the no. of spokes in 13 such wheels.",
        a: "36",
        b: "65",
        c: "40",
        d: "81",
        correctAnswer: "ans2"
    },

    {
        ques: "2: Which of the numbers are perfect squares",
        a: "4",
        b: "3",
        c: "6",
        d: "5",
        correctAnswer: "ans1"
    },
    {
        ques: "3: Which is the sqare root of 100,",
        a: "74",
        b: "02",
        c: "11",
        d: "10",
        correctAnswer: "ans4"
    },
    {
        ques: "4: Find the value of 102x394.",
        a: "40188",
        b: "84621",
        c: "98753",
        d: "98655",
        correctAnswer: "ans1"
    },
    {
        ques: "5: Solve the problem: 2*5/10+80-76.",
        a: "39",
        b: "65",
        c: "05",
        d: "74",
        correctAnswer: "ans3"
    }
]


const questions=document.querySelector('.questions');
const opt1=document.querySelector('#opt1');
const opt2=document.querySelector('#opt2');
const opt3=document.querySelector('#opt3');
const opt4=document.querySelector('#opt4');
const submit=document.querySelector('#btn1');
let quesCount=0;
let score=0;
const ScoreBoard=document.querySelector('#scroreBoard')
const answers=document.querySelectorAll('.answer');

const loadques= () => {
    const queslist=questionsDB[quesCount];
    questions.innerText=queslist.ques;
    opt1.innerText=queslist.a;
    opt2.innerText=queslist.b;
    opt3.innerText=queslist.c;
    opt4.innerText=queslist.d;
}
loadques();


const getMarkedAnswer= () =>{
    let ans;
    answers.forEach((curAnsElem) =>{
    if (curAnsElem.checked) {
        ans=curAnsElem.id;
    }
});
return ans;

};

submit.addEventListener('click',() =>{
const checkedAns = getMarkedAnswer();
console.log(checkedAns)
if (checkedAns==questionsDB[quesCount].correctAnswer) {
    score++;
}

quesCount++;

if (quesCount<questionsDB.length) {
    loadques();

}

    



else{

    if (score==5) {
        ScoreBoard.innerHTML=`
        <h3> You scored ${score}/${questionsDB.length} ✌✌ 🎉 </h3>
        <button class="reloadButton" onclick="location.reload()"> Retake Quizz </button>
        `;
        ScoreBoard.classList.remove('scroreBoard');       
    }

    else if (score<5 && score>0) {
        ScoreBoard.innerHTML=`
 <h3> You scored ${score}/${questionsDB.length} ✌✌ </h3>
 <button class="reloadButton" onclick="location.reload()"> Retake Quizz </button>
 `;
 ScoreBoard.classList.remove('scroreBoard');
    }

    else{
        ScoreBoard.innerHTML=`
 <h3> You scored 0/${questionsDB.length} 😢 </h3>
 <button class="reloadButton" onclick="location.reload()"> Retake Quizz </button>
 `;
 ScoreBoard.classList.remove('scroreBoard');
    }
 
}

});


