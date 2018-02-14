var userOption = document.getElementById('user');

function startGame(PRS) {
  var userChoice = PRS.target.id

  var computerChoice = Math.random()
    if(computerChoice < .34) {
      computerChoice = "rock"
    }
    else if(computerChoice > .34 && computerChoice <= .66) {
      computerChoice = "paper"
    }
    else {
      computerChoice = "scissors"
    }
  assess(userChoice, computerChoice)
  userOption.innerHTML = computerChoice
}

function assess(userChoice, computerChoice) {
  if (computerChoice === userChoice) {
    console.log("It's a tie!")
  }
  else if(computerChoice === "paper" && userChoice === "rock"){
    console.log("Computer is the winner")
  }
  else if(computerChoice === "paper" && userChoice === "scissors"){
    console.log("You are the winner!")
  }
  else if(computerChoice === "rock" && userChoice === "paper"){
    console.log("You are the winner!")
  }
  else if(computerChoice === "rock" && userChoice === "scissors"){
    console.log("Computer is the winner!")
  }
  else if(computerChoice === "scissors" && userChoice === "paper"){
    console.log("Computer is the winner!")
  }
  else {
    console.log("You are the winner!")
  }
}

var userChoice = document.getElementsByClassName('choice')
for (var i in userChoice) {
  try{
  userChoice[i].addEventListener('click', startGame)
  } catch(err) {
    //First load
  }
}