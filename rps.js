function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random()*3);
    return choices[choice]; 
}

function playRound(pSelection, cSelection){
    
}

const playerSelection = prompt("Enter your choice: Rock, Paper or Scissors"); 

const computerSelection = getComputerChoice(); 
