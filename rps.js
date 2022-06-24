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
    let computer = 0;
    for(let i = 0; i < 5; i++){
        let user = prompt("Choose: ");
        let result = playGround(user,computerPlay())

        if(result == "You Win!"){
            console.log("You win the round!")
            user++;
        }else if(result == "You Lose!"){
            console.log("Computer win the round!")
            computer++;
        }else{
            console.log("Its a draw!")
        }
    }

    user > computer? console.log("You win the game"): console.log("Computer win the game")
}

game() */

const rock = document.querySelector('rock')

function al(){
    alert("Hello World")
}