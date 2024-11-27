let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let yoursScore = document.querySelector("#yours");
let computerScore = document.querySelector("#computer");
let button = document.querySelector("#startBtn");

let userSCore = 0;
let compScore = 0;

let userChoice;
let compChoice;

const checkWinner = (userChoice,) => {
    compChoice = Math.floor(Math.random() *3);
    if(userChoice === compChoice){
        button.innerText = "Game was Draw";
        button.style.backgroundColor = "black";
    }
    else if(userChoice !== compChoice){
        if(userChoice === 0){
            if(compChoice === 1){
                button.innerText = "You Lose";
                button.style.backgroundColor = "red";
                compScore++;
            }
            else{
                button.innerText = "You Won!";
                button.style.backgroundColor = "green";
                userSCore++;
            }
        }
        else if(userChoice === 1){
            if(compChoice === 0){
                button.innerText = "You Won!";
                button.style.backgroundColor = "green";
                userSCore++;
            }
            else{
                button.innerText = "You Lose";
                button.style.backgroundColor = "red";
                compScore++;
            }
        }
        else if(userChoice === 2){
            if(compChoice === 0){
                button.innerText = "You Lose";
                button.style.backgroundColor = "red";
                compScore++;
            }
            else{
                button.innerText = "You Won!";
                button.style.backgroundColor = "green";
                userSCore++;
            }
        }
    }
    yoursScore.innerText = userSCore;
    computerScore.innerText = compScore;
}

rock.addEventListener("click", () => {
        console.log("rock clicked");
        userChoice = 0;
        console.log(compChoice);
        checkWinner(userChoice, compChoice);
        userChoice = null;
});

paper.addEventListener("click", () => {
        console.log("paper clicked");
        userChoice = 1;
        console.log(compChoice);
        checkWinner(userChoice);
        userChoice = null;
});

scissor.addEventListener("click", () => {
        console.log("scissor clicked");
        userChoice = 2;
        console.log(compChoice);
        checkWinner(userChoice);
        userChoice = null;
});

