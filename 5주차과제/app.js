const myHandText = document.getElementById('my-hand-text');
const myHandIcon = document.getElementById('my-hand-icon');

const computerText = document.getElementById('computer-hand-text');
const computerIcon = document.getElementById('computer-hand-icon');

const result = document.getElementById('display-result');

const rockBtn = document.getElementById('rock')
const scissorsBtn = document.getElementById('scissors')
const paperBtn = document.getElementById('paper')
const resetBtn = document.getElementById('reset-button')
let userScore = document.querySelector('.my-score');
let comScore = document.querySelector('.computer-score');
let usercount=0;
let comcount=0;
//2. 선언한 dom 요소에 클릭이벤트 주기
rockBtn.addEventListener('click', displayMyChoice);
scissorsBtn.addEventListener('click', displayMyChoice);
paperBtn.addEventListener('click', displayMyChoice);
resetBtn.addEventListener('click', initialize);
//3. 함수가 실행될 때, 이벤트가 발생한 dom 객체에 접근하기(e.target)
function initialize(e){
    userScore.innerText = 0;
    comScore.innerText = 0;
}
function displayMyChoice(e){
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target;
    
    //4)-1 innerHTML 실습할 때 typeof 사용해서 객체 타입 보여주기
    //console.log(clickedBtn);
    //console.log(clickedIcon);

    //4. innerHTML, innerText 실습
    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon.className;
    console.log(clickedIcon.className);
    startGame(clickedBtn);  
}

function getComChoice(){
    //배열의 [0]에는 text, [1]에는 className
    const randomValue = {
        0: ["rock", "fa-regular fa-hand-back-fist"],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2: ["paper", "fa-regular fa-hand"],
    };

    const randomIndex=Math.floor(Math.random()*3);

    return randomValue[randomIndex];
}

function displayComChoice(result){
    computerText.innerText = result[0];
    computerIcon.className = result[1];

    console.log(computerIcon.className);

}


function startGame(myChoice) {
    let resultArr = getComChoice();
    let comChoiceText = resultArr[0];
    
    switch (myChoice[0]+comChoiceText[0][0]){
        case "rs":
        case 'sp':
        case 'pr':
            result.innerText='win';
            changeScore();
            break;
        
        case "rr":
        case 'ss':
        case 'pp':
            result.innerText='tie';
            
            break;
        
        case "rp":
        case "sr":
        case "ps":
            result.innerText='lose';
            changeScore();
            break;
    }

    displayComChoice(resultArr);

}
function changeScore(){
    if (result.innerText == 'win'){
        usercount++;
        userScore.innerText = usercount;
    }else if (result.innerText == 'lose'){
        comcount++;
        comScore.innerText = comcount;       
    }
}
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }
