/* let computerPlay = () => {
    let random = ['rock','paper','scissor'];
    return random[Math.floor(Math.random()*3)];
}

let playGround = (playerSelection, computerSelection) => {
    if(playerSelection.toLowerCase() == "scissor" && computerSelection == "paper"){
        return "You Win!"
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        return "You Win!"
    }else if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissor"){
        return "You Win!"
    }else if(playerSelection.toLowerCase() == computerSelection){
        return "Draw"
    }else{
        return "You Lose!"
    }
}

let game = () => { 
    let user = 0;
    let computerSelection = 0;
    for(let i = 0; i < 5; i++){
        let user = prompt("Choose: ");
        let result = playGround(user,computerPlay())

        if(result == "You Win!"){
            console.log("You win the round!")
            user++;
        }else if(result == "You Lose!"){
            console.log("Computer win the round!")
            computerSelection++;
        }else{
            console.log("Its a draw!")
        }
    }

    user > computerSelection? console.log("You win the game"): console.log("Computer win the game")
}

game() */

const startButton = document.querySelector(".startButton");
const buttons = document.querySelectorAll(".choices");

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
        document.querySelector('')
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('You Win')
    }else if(playerSelection === 'scissor' && computerSelection == 'paper'){
        console.log('You Win')
    }else if(playerSelection === computerSelection){
        console.log('Draw')
    }else{
        console.log('You Lose')
    }
}

let game = () => {
    document.querySelector("h1").innerText = "Choose your weapon";
    player();
}




let choose = () => {
    game()
}
