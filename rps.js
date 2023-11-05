
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


function play(choice) {
    console.log(`You chose: ${choice}`);
    let compChoice=getComputerChoice();
    let result=playRound(choice, compChoice);
    console.log(result);
    let results=document.querySelector('div.results')
    let newDiv=document.createElement('div');
    newDiv.textContent=`You chose: ${choice}. Computer chose: ${compChoice}. ${result}`;
    results.appendChild(newDiv);

    if (result.includes('win')) resultPlayer++;
    if (result.includes('lose')) resultComputer++;

    if (resultPlayer===2 || resultComputer===2) {
        newDiv=document.createElement('h2');
        newDiv.textContent= (resultPlayer===5)?'You win the game!!!':'Computer wins the game!!!'
        results.appendChild(newDiv);
        resultPlayer = resultComputer = 0;
        
    }

}

let buttons=document.querySelectorAll('button');

buttons.forEach( button =>
        button.addEventListener('click',() => play(button.name))
);

let resultPlayer = resultComputer = 0;


