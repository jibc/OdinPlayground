function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerChoice;

  if (randomNumber == 1) {
    computerChoice = "rock";
  } else if (randomNumber == 2) {
    computerChoice = "paper"; 
  } else if (randomNumber == 3) {
    computerChoice = "cisor";
  }

  return computerChoice;
}

function playerSelection(){
   let userChoice = prompt("What is your choice ? Rock, Paper or Cisor ?").toLowerCase();

    if (userChoice === "rock") {
    userChoice = "rock"; 
    } else if ( userChoice === "paper") {
    userChoice = "paper"; 
    } else if ( userChoice === "cisor") {
    userChoice = "cisor"; 
    }

    return userChoice;
}


//play a turn of rock paper cisor, return the winner, this function is case unsensitive

function playRound (playerSelection, getComputerChoice){
    userChoice = playerSelection();
    computerChoice = getComputerChoice();

    if (userChoice == "rock" && computerChoice == "rock") {
      console.log("Draw"); 
    }
    else if (userChoice == "paper" && computerChoice == "paper")  {
      console.log("Draw"); 
    }
    else if (userChoice == "cisor" && computerChoice == "cisor") {
      console.log("Draw"); 
    }
    else if (userChoice == "rock" && computerChoice == "paper") {
      console.log("You win Rock beat Paper!"); 
    }
    else if (userChoice == "rock" && computerChoice == "cisor") {
      console.log("You win! Rock beat Cisor"); 
    }
    
    else if (userChoice == "paper" && computerChoice == "cisor") {
      console.log("You lose! Cisor beats Paper!"); 
    }
    
    else if (userChoice == "paper" && computerChoice == "rock") {
      console.log("You lose Rock beat Paper!"); 
    }
    
    else if (userChoice == "cisor" && computerChoice == "paper") {
      console.log("You lose! Cisor beat Paper"); 
    }
    else if(userChoice == "cisor" && computerChoice == "rock") {
      console.log("You lose! Rock beat Cisor!"); 
    }
    
}


// use prompt() to get info from the user


function game() {
  playRound(playerSelection, getComputerChoice);
  playRound(playerSelection, getComputerChoice);
  playRound(playerSelection, getComputerChoice);  
  playRound(playerSelection, getComputerChoice);
  playRound(playerSelection, getComputerChoice);
}

game();
