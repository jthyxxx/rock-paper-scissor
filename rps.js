let computerPlay = () => {
    let random = ['rock','paper','scissor']
    return random[Math.floor(Math.random()*3)]
}

let playGroud = (playerSelection, computerSelection) => {
    if(playerSelection.toLowerCase() == "scissor" && computerSelection == "paper"){
        return `${playerSelection.toLowerCase()} beats ${computerSelection}. You win!!!`
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock"){
        return `${playerSelection.toLowerCase()} beats ${computerSelection}. You win!!!`
    }else if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissor"){
        return `${playerSelection.toLowerCase()} beats ${computerSelection}. You win!!!`
    }else if(playerSelection.toLowerCase() == computerSelection){
        return `${playerSelection.toLowerCase()} and ${computerSelection} are the same. It's a DRAW.`
    }else{
        return `${playerSelection.toLowerCase()} is weak agains ${computerSelection}. You lose!!!`
    }
}