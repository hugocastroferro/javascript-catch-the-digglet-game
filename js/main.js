let points = 0;

let appearanceTimePikachu = 800;
let appearanceTimeGengar = 1000;
let appearanceTimeGrimer = 1000;
let appearanceTimePikadont = 1000;
let appearanceTimePsy = 1000;
let appearanceTimeSnorlax = 1000;
let appearanceTimeBulb = 1000;
let appearanceTimeAsh = 1000;
let appearanceTimeJames = 5000;

let timer = 10;
let timerInterval = setInterval(decreaseTimer, 1000);
let level = 1;
let levelUpCondition = false;

function increasePoints(amount) {
  points += amount; // Increase points after clicking
  updatePointsDisplay(); // after click, update display
}

function decreasePoints(amount) {
  points -= amount; // Increase points after clicking
  if (points < 0) {
    points = 0; // solved my problem with negative points
  }

  updatePointsDisplay(); // after click, update display
}

function updatePointsDisplay() {
  // Update the points display on the game
  const pointsDisplay = document.getElementById("score-display");
  if (pointsDisplay) {
    pointsDisplay.textContent = `Points: ${points}`;
  }
  if (points === 0) {
    game0ver();
  }
}

function game0ver() {
  location.href = "./gameover.html";
}

class randomSquare {
  constructor() {
    this.num = Math.floor(Math.random() * 25); // getting the random number of squares generated
  }

  square() {
    return this.num.toString();
  }
}

function CreateGameGrid() {
  // Prep for the grid squares
  for (let i = 0; i < 25; i++) {
    let cell = document.createElement("div"); // creates the 25 cells
    cell.id = i.toString();
    document.getElementById("board").appendChild(cell);
  }

  // Create instances of the new classes
  setInterval(() => {
    const newPikachu = new Pikachu();
  }, appearanceTimePikachu);

  setInterval(() => {
    const newGengar = new Gengar();
  }, appearanceTimeGengar);

  setInterval(() => {
    const newGrimer = new Grimer();
  }, appearanceTimeGrimer);

  setInterval(() => {
    const newPsy = new Psy();
  }, appearanceTimePsy);
 
  setInterval(() => {
    const newSnorlax = new Snorlax();
  }, appearanceTimeSnorlax);

  setInterval(() => {
    const newBulb = new Bulb();
  }, appearanceTimeBulb);

  setInterval(() => {
    const newJames = new James();
  }, appearanceTimeJames);
}

CreateGameGrid();

function updateTimerDisplay() {
  const timerDisplay = document.getElementById("timer-display");
  if (timerDisplay) {
    timerDisplay.textContent = `Timer: ${timer}`;
  }
}

function updateLevelDisplay() {
  const levelDisplay = document.getElementById("level-display");
  if (levelDisplay) {
    levelDisplay.textContent = `Level: ${level}`;
  }
}

// decreasing timer value and level up
function decreaseTimer() {
  timer--;
  updateTimerDisplay();
  if (timer <= 0) {
    levelUp();
    updateLevelDisplay(); // Update the level display when level increments
    timer = 10;
    changeAppearanceTime();
  }
}

// Changing the appearance time of imgs to make the game faster
function changeAppearanceTime() {
  if (appearanceTimePikachu > 100) {
    appearanceTimePikachu -= 300;
  }

  if (appearanceTimeGengar > 300) {
    appearanceTimeGengar -= 300;
  }

  if (appearanceTimeGrimer > 300) {
    appearanceTimeGrimer -= 300;
  }

  if (appearanceTimePsy > 300) {
    appearanceTimePsy -= 300;
  }

  if (appearanceTimePikadont > 300) {
    appearanceTimePikadont -= 300;
  }

  if (appearanceTimeBulb > 300) {
    appearanceTimeBulb -= 300;
  }

  if (appearanceTimeAsh > 300) {
    appearanceTimeAsh -= 300;
  }

  if (appearanceTimeJames > 300) {
    appearanceTimeJames -= 300;
  }
}

function levelUp() {
  level++;
  changeAppearanceTime();
  updateLevelDisplay();

  // solved my problem of the classes are working if they have a lvl condition
  if (level >= 2) {
    console.log(level)
    const newPikadont = new Pikadont();
  } 

if  (level === 5){
    const newAsh = new Ash();
  }
}

