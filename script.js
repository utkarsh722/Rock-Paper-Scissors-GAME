let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let user= document.querySelector("#userscore")
let comp= document.querySelector("#compscore")

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random()*3);    
  return options[randIdx]
};

const drawGame = () => {
console.log("DRAW");
msg.innerText = ("DRAW GAME, PLAY AGAIN");
msg.style.backgroundColor = "#081B31"
};

const showWinner = (userWin) => {
if (userWin === true) {
  console.log("U WIN");
  msg.innerText = ("YOU WIN");
  msg.style.backgroundColor = "green";
  userscore++;
  user.innerText= userscore
  
} else {
  console.log("U LOSE");
  msg.innerText = ("YOU LOSE");
  msg.style.backgroundColor = "red";
  compscore++;
  comp.innerText = compscore;
}
}

const playGame = (userChoice) => {
console.log("user clicked",userChoice)
const compChoice = genCompChoice();
console.log("comp clicked",compChoice);


  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
      showWinner(userWin);
}
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id"); 
playGame(userChoice)
  });
});


