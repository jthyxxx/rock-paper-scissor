
const startButton = document.querySelector(".startButton");
const buttons = document.querySelectorAll(".choices");
const computer = document.querySelector('.computer')
const h1 = document.querySelector('h1')


let computerPlay = () => {
  let random = ["rock", "paper", "scissor"];
  return random[Math.floor(Math.random() * 3)];
};

let playerScore = 0;
let computerScore = 0;

let player = () => {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            startGame(button.id,computerPlay())
            if(playerScore == 5 || computerScore == 5){
                buttons.forEach((button) => {
                    button.disabled = true
                })
                if(playerScore == 5){
                    h1.innerText = 'You win the round'
                }else{
                    h1.innerText = 'Computer win the round'
                }
                startButton.disabled = true
                startButton.innerText = 'Reload'
            }
        });
    });
};



let startGame = (playerSelection, computerSelection) => {
    if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++;
        document.querySelector('.playerScore').innerText = playerScore
        computer.innerText = computerSelection
        h1.innerText = 'You Win'
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        document.querySelector('.playerScore').innerText = playerScore
        computer.innerText = computerSelection
        h1.innerText = 'You Win'
    }else if(playerSelection === 'scissor' && computerSelection == 'paper'){
        playerScore++;
        document.querySelector('.playerScore').innerText = playerScore
        computer.innerText = computerSelection
        h1.innerText = 'You Win'
    }else if(playerSelection === computerSelection){
        computer.innerText = computerSelection
        h1.innerText = 'Draw'
    }else{
        computerScore++;
        document.querySelector('.computerScore').innerText = computerScore
        computer.innerText = computerSelection
        h1.innerText = 'You Lose'
        
    }
}

let game = () => {
    startButton.disabled = true
    computer.innerText = 'Bot'
    document.querySelector("h1").innerText = "Choose your weapon";
    startButton.innerText = 'Battling'
    startButton.style.width = '300px'
    player();
}




let choose = () => {
    game()
}
