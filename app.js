const userScore = document.querySelector(".user-score");
const cpuScore = document.querySelector(".cpu-score");
const scoreboard = document.querySelector(".scoreboard");
const result = document.querySelector(".result");
const choices = document.querySelectorAll(".choice");
const userBadge = document.querySelector(".user-badge");
const cpuBadge = document.querySelector(".cpu-badge");

let userCounter = 0;
let cpuCounter = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    const userChoice = event.currentTarget.id;
    decideOutcome(userChoice);
  });
});

const decideOutcome = (userChoice) => {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
};

const getComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * options.length);
  return options[randomNum];
};

const win = (userChoice, computerChoice) => {
  userCounter++;
  userScore.innerHTML = userCounter;
  result.innerHTML = `<h2><span class="winner user">USER WINS!</span> <br /> <span class="user-choice">${capitalize(
    userChoice
  )}</span> beats <span class="cpu-choice">${capitalize(
    computerChoice
  )}</span>.</h2>`;
  makeGlow(userChoice, "blue");
};

const lose = (userChoice, computerChoice) => {
  cpuCounter++;
  cpuScore.innerHTML = cpuCounter;
  result.innerHTML = `<h2><span class="winner cpu">CPU WINS!</span> <br /> <span class="user-choice">${capitalize(
    userChoice
  )}</span> loses to <span class="cpu-choice">${capitalize(
    computerChoice
  )}</span>.</h2>`;
  makeGlow(userChoice, "red");
};

const draw = (userChoice, computerChoice) => {
  result.innerHTML = `<h2><span class="winner tie">IT'S A TIE!</span> <br /> <span class="user-choice">${capitalize(
    userChoice
  )}</span> equals <span class="cpu-choice">${capitalize(
    computerChoice
  )}</span>.</h2>`;
  makeGlow(userChoice, "white");
};

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

const makeGlow = (userChoice, color) => {
  const userSelectedBtn = document.getElementById(userChoice);
  // make button glow based on who wins
  userSelectedBtn.classList.add(`${color}-glow`);
  setTimeout(() => {
    userSelectedBtn.classList.remove(`${color}-glow`);
  }, 300);
  // make badge glow based on who is winning
  if (userCounter > cpuCounter) {
    userBadge.style.boxShadow = "0 0 40px #778beb";
    userBadge.style.color = "white";
  } else if (cpuCounter > userCounter) {
    cpuBadge.style.boxShadow = "0 0 40px #ea8685";
    cpuBadge.style.color = "white";
  } else {
    userBadge.style.boxShadow = "none";
    userBadge.style.color = "#303952";
    cpuBadge.style.boxShadow = "none";
    cpuBadge.style.color = "#303952";
  }
};
