 
import { Question } from './questionExport.js'

import { Quiz } from './quizeExport.js'

import { Exam } from './Exam.js'

 

function populateQuiz() {


    //Display QUIZ
    if (!quiz.isEnded()) {
        let questionObj = quiz.getCurrentQuestion();
        document.getElementById("buts").innerHTML = "";
        var elementPQuestion = document.getElementById("question");//p
        elementPQuestion.innerHTML = questionObj.text;
        let json = JSON.stringify(quiz.questions);
        questionObj.choices.forEach((ChoiseText, i) => {

            let elementBtn = `   <button  onclick="btnChoiceElemen()" class="but" id="btn${i}"><span id="choice${i}">${ChoiseText}</span></button>   `;

            //var spanChoise = document.getElementById("choice" + i); //span   
            //spanChoise.innerHTML = ChoiseText;
            document.getElementById("buts").innerHTML += elementBtn;



        });
        questionObj.choices.forEach((ChoiseText, i) => {
            var btnChoiceElemen = document.getElementById("btn" + i);

            btnChoiceElemen.onclick = function (evt) {
                var but = evt.target;
                let choisedClick = but.innerText;
                quiz.guessAnswer(choisedClick);
                populateQuiz();

            }
        });
        showCurrentPagePograss();

    }
    else {
        showScore();
    }



}

// func to sort arry by random
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


function showScore() {
    var x = document.getElementById("selectExam");
    document.getElementById("hfName").value = x.options[x.selectedIndex].value;

   
    document.getElementById("LblNameExam").innerText = x.options[x.selectedIndex].value;


    document.getElementById("divf").style.display = "block";
    document.getElementById("LblScore").innerText = quiz.customScoreAll;
    document.getElementById("hfScore").value = quiz.customScoreAll;

    var divQ = document.getElementById("quiz");
    divQ.innerHTML =
        `<h1> result </h> 
         <h2>${quiz.score} of ${quiz.questions.length}</h2>   `;

}


function showCurrentPagePograss() {
    let qun = quiz.currentIndex + 1;
    let pEl = document.getElementById("progress");
    pEl.innerHTML = ` שאלה ${qun} מתוך ${quiz.questions.length}`;
}

let questions = [];
 

let ex = [];
 




function getData(callBack) {

    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let exn = JSON.parse(this.responseText);
            
            console.log(exn);
            exn.forEach((el, i) => {
                    el.questions.forEach((que, ii) => {

                        questions.push(
                            new Question(que.text, que.choices, que.answer, que.customScore)
                        );
                    });

                ex.push(
                    new Quiz(questions, el.name)
                );

                questions = null;
                questions = [];

            });     
            callBack();
        }
    };
    oReq.open("GET", "https://localhost:44373/Data/Exams.json");
    oReq.send();
}





let quiz;
let exam; //= new Exam(ex);
function start() {
    getData(function () {
        // sort questions by random
        exam = new Exam(ex);


        let all = exam.getAllQuizQuestionsName();

        var x = document.getElementById("selectExam");
        all.forEach((el, i) => {
             var option = document.createElement("option");
            option.text = el.name;
             x.add(option);

        });
     
        var strUser = x.options[x.selectedIndex].value;
            document.getElementById("selectExam").onchange = function () {
                strUser = x.options[x.selectedIndex].value;
                alert(strUser);
                let q = exam.getQuizQuestionsByName(strUser);
                q.questions = shuffle(q.questions);

            
                let allstring = JSON.stringify(all);
                console.log(allstring);
                quiz = new Quiz(q.questions, q.name);
                populateQuiz();
        };

      
        let q = exam.getQuizQuestionsByName(strUser);
        q.questions = shuffle(q.questions);

        
        let allstring = JSON.stringify(all);
        console.log(allstring);
        quiz = new Quiz(q.questions, q.name);
        populateQuiz();
    });

}

start();

function goPrev() {
    if (quiz.currentIndex > 0) {
        quiz.currentIndex--;
        populateQuiz();
    }
}
function goTo() {
    if (quiz.currentIndex < quiz.questions.length) {
        quiz.currentIndex++;
        populateQuiz();
    }

}

function toTregisterToEvtBtnGo() {
    document.getElementById("goPrev").onclick = function () { goPrev() };
    document.getElementById("goTo").onclick = function () { goTo() };
}

toTregisterToEvtBtnGo();

//1)  Go NEXT 
//2)  GO PREV
//3)  set custom score for each question
//4)  do it for any length of question (dymnamic HTML BUTTONS)
//5)  CHANGE QUESTIONS ORDER
//6)  Do It In Classes not in function constractors
//7)  Read JSON OBJECT FROM LOCAL STORAGE AND INITIATE QUIZ
//8)  LET USER CHOOSE MULTIPLE EXAMS FROM DROPDOWN
//9)  Create form that user will put ID And Email and Score wil be Updated In SQL  


// 1) לך קדימה
// 2) GO PREV
// 3) הגדר ציון מותאם אישית לכל שאלה
// 4) עשה זאת לכל אורך שאלה (כפתורי HTML דינמיים)
// 5) שינוי סדר שאלות
// 6) עשה זאת בשיעורים שלא במבני פונקציות
// 7) קרא את מטרת JSON מאחסון מקומי וחידון יזמי
// 8) תן למשתמש לבחור בחינות מרובות מטיפה
// 9) צור טופס שמשתמש ישים מזהה ודואר אלקטרוני וציון יעודכנו ב- SQL

