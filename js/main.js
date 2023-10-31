let points = 0;

let appearanceTimePikachu = 1600;
let appearanceTimeGengar = 1600;
let appearanceTimeGrimer = 1600;
let appearanceTimePikadont = 1600;

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

class Pikachu {
  constructor() {
    let currGrid;
    let pikachu = document.createElement("img");
    pikachu.src = "img/Pikachu.png";
    pikachu.isClickable = true; // solved the points problem

    let num = new randomSquare().square();
    currGrid = document.getElementById(num);

    const imgElement = currGrid.querySelector("img");
    if (!imgElement) {
      currGrid.appendChild(pikachu);

      setTimeout(() => {
        const imgElementToRemove = currGrid.querySelector("img");
        if (imgElementToRemove) {
          imgElementToRemove.remove();
        }
      }, 1500);

      // Add a click event to the Pikachu image
      pikachu.addEventListener("click", () => {
        if (pikachu.isClickable) {
          // this solved me the problem of 1 img giving points more than once
          increasePoints(10);
        }
        // Remove the clicked Pikachu
        if (imgElement) {
          imgElement.remove();
        }

        pikachu.isClickable = false;
      });
    }
  }
}

class Gengar {
  constructor() {
    let currGrid;
    let gengar = document.createElement("img");
    gengar.src = "img/gengar.png";
    gengar.isClickable = true; // solved the points problem

    let num = new randomSquare().square();
    currGrid = document.getElementById(num);

    const imgElement = currGrid.querySelector("img");
    if (!imgElement) {
      currGrid.appendChild(gengar);

      setTimeout(() => {
        const imgElementToRemove = currGrid.querySelector("img");
        if (imgElementToRemove) {
          imgElementToRemove.remove();
        }
      }, 1500); // Go down in this value to make it desappear faster

      // Add a click event to the Gengar image
      gengar.addEventListener("click", () => {
        if (gengar.isClickable) {
          // this solved me the problem of 1 img giving points more than once
          decreasePoints(10);
        }
        // Remove the clicked Gengar
        if (imgElement) {
          imgElement.remove();
        }
        gengar.isClickable = false; // this solved me the problem of 1 img giving points more than once
      });
    }
  }
}

class Grimer {
  constructor() {
    let currGrid;
    let grimer = document.createElement("img");
    grimer.src = "img/grimer.png";
    grimer.isClickable = true; // solved the points problem

    let num = new randomSquare().square();
    currGrid = document.getElementById(num);

    const imgElement = currGrid.querySelector("img");
    if (!imgElement) {
      currGrid.appendChild(grimer);

      setTimeout(() => {
        const imgElementToRemove = currGrid.querySelector("img");
        if (imgElementToRemove) {
          imgElementToRemove.remove();
        }
      }, 1500); // Go down in this value to make it desappear faster

      // Add a click event to the grimer image
      grimer.addEventListener("click", () => {
        if (grimer.isClickable) {
          // this solved me the problem of 1 img giving points more than once
          decreasePoints(10);
        }
        // Remove the clicked grimer
        if (imgElement) {
          imgElement.remove();
        }
        grimer.isClickable = false; // this solved me the problem of 1 img giving points more than once
      });
    }
  }
}

class Pikadont {
  constructor() {
    let currGrid;
    let pikadont = document.createElement("img");
    pikadont.src = "img/Pikadont.png";
    pikadont.isClickable = true; // solved the points problem

    let num = new randomSquare().square();
    currGrid = document.getElementById(num);

    const imgElement = currGrid.querySelector("img");
    if (!imgElement) {
      currGrid.appendChild(pikadont);

      setTimeout(() => {
        const imgElementToRemove = currGrid.querySelector("img");
        if (imgElementToRemove) {
          imgElementToRemove.remove();
        }
      }, 1500); // Go down in this value to make it desappear faster

      // click event
      pikadont.addEventListener("click", () => {
        if (pikadont.isClickable) {
          // this solved me the problem of 1 img giving points more than once
          decreasePoints(40);
        }
        // Remove the clicked img
        if (imgElement) {
          imgElement.remove();
        }
        pikadont.isClickable = false; // this solved me the problem of 1 img giving points more than once
      });
    }
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
}

CreateGameGrid();

// Create instances of the new classes with level conditions, solved the problem of not appearing normally
function levelUpConditionClass() {
  setInterval(() => {
    const newPikadont = new Pikadont();
  }, appearanceTimePikadont);
}

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

// Changing the appearance time of imgs
function changeAppearanceTime() {
  if (appearanceTimePikachu > 300) {
    appearanceTimePikachu -= 200;
  }

  if (appearanceTimeGengar > 300) {
    appearanceTimeGengar -= 200;
  }

  if (appearanceTimeGrimer > 300) {
    appearanceTimeGrimer -= 200;
  }

  if (appearanceTimePikadont > 300) {
    appearanceTimePikadont -= 200;
  }
}

function levelUp() {
  level++;
  changeAppearanceTime();
  updateLevelDisplay();

  if (level >= 2 && !levelUpCondition) {   // solved my problem of on each level up the code executed the condition many times and duplicated the imgs
    levelUpConditionClass();
    levelUpCondition = true;
  }
}
