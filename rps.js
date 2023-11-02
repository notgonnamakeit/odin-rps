
// Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!

function getComputerChoice() {
    q=Math.floor(Math.random()*3)

    switch(q) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "Error";
    }
}

console.log("Hello");

// for(let i=0; i<100; i++) {
//     console.log(getComputerChoice());
// }

// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase()==computerSelection.toLowerCase()) return "Tie!";
    if (playerSelection.toLowerCase()=="rock") {
        if (computerSelection.toLowerCase()=="paper") return "You lose! Rock was beaten by paper.";
        if (computerSelection.toLowerCase()=="scissors") return "You win! Rock has beaten scissors.";
    };
    if (playerSelection.toLowerCase()=="paper") {
        if (computerSelection.toLowerCase()=="scissors") return "You lose! Paper was beaten by scissors.";
        if (computerSelection.toLowerCase()=="rock") return "You win! Paper has beaten rock.";
    };
    if (playerSelection.toLowerCase()=="scissors") {
        if (computerSelection.toLowerCase()=="paper") return "You win! Scissors have beaten paper.";
        if (computerSelection.toLowerCase()=="rock") return "You lose! Rock was beaten by scissors.";
    };
    return "Error";
}


// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
//At this point you should be using console.log() to display the results of each round and the winner at the end.


function play() {
    let choice=prompt("Play RPS: (1) Rock, (2) Paper, (3) Scissors.");
    console.log(`You chose: ${choice}`);
    console.log(playRound(choice, getComputerChoice()));
}


for (let i=0;i<3; i++) {
    play();
}

