let cl = console.log;
let getRandomRPS = function () {
    let rps = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * rps.length);
    return rps [choice];
}

let getuserinput = function() {
    let us = ["rock", "paper", "scissors"]
    let pick = Math.floor(Math.random() * us.length);
    return us [pick];

}

let getWinner = function (user, computer) {
    if (user === computer) {
        return "tie";
    } else if (
        (user === "rock" && computer === "scissors") || 
        (user === "paper" && computer === "rock") || 
        (user === "scissor" && computer === "paper")
        ) {
        return "user";
    } else {
        return "computer";
    }
};
let congratualate = function(winner) {
  if (winner === "tie") {
    cl("nobody wins") } else if (winner === "computer") {
        cl("you lost to a computer")
    } else  {
        cl("congratulations", winner, "!")
}
}

   
///// connnect the game
let computerInput = getRandomRPS()
let userInput = getuserinput()
cl("user chooses:", userInput)
cl("computer chooses", computerInput)
let winner = getWinner(userInput, computerInput);
 congratualate(winner);