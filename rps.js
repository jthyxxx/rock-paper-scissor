
const startButton = document.querySelector(".startButton");
const buttons = document.querySelectorAll(".choices");
const computer = document.querySelector('.computer')
const h1 = document.querySelector('h1')


let computerPlay = () => {
  let random = ["rock", "paper", "scissor"];
  return random[Math.floor(Math.random() * 3)];
};

let player = () => {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            startGame(button.id,computerPlay())
        });
    });
};



let startGame = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        computer.innerText = computerSelection
        h1.innerText = 'You Win'
        startButton.innerText = 'Play Again'
        startButton.style.width = '300px'
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        computer.innerText = computerSelection
        h1.innerText = 'You Win'
        startButton.innerText = 'Play Again'
        startButton.style.width = '300px'
    }else if(playerSelection === 'scissor' && computerSelection == 'paper'){
        computer.innerText = computerSelection
        h1.innerText = 'You Win'
        startButton.innerText = 'Play Again'
        startButton.style.width = '300px'
    }else if(playerSelection === computerSelection){
        computer.innerText = computerSelection
        h1.innerText = 'Draw'
        startButton.innerText = 'Play Again'
        startButton.style.width = '300px'
    }else{
        computer.innerText = computerSelection
        h1.innerText = 'You Lose'
        startButton.innerText = 'Play Again'
        startButton.style.width = '300px'
    }
}

let game = () => {
    computer.innerText = '?'
    document.querySelector("h1").innerText = "Choose your weapon";
    player();
}




let choose = () => {
    game()
}
