let points = 0;

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
  if (points === 0) {
    game0ver();
  }
}

function updatePointsDisplay() {
  // Update the points display on the game
  const pointsDisplay = document.getElementById("score-display");
  if (pointsDisplay) {
    pointsDisplay.textContent = `Points: ${points}`;
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
    pikachu.src = "img/pikachu.png";
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
      }, 3500);

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
      }, 3500);

      // Add a click event to the Gengar image
      gengar.addEventListener("click", () => {
        if (gengar.isClickable) {     // this solved me the problem of 1 img giving points more than once
          decreasePoints(10);
        }
        // Remove the clicked Gengar
        if (imgElement) {
          imgElement.remove();
        }
        gengar.isClickable = false;    // this solved me the problem of 1 img giving points more than once
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

  setInterval(() => {
    const newPikachu = new Pikachu();
  }, 4000);

  setInterval(() => {
    const newGengar = new Gengar();
  }, 4000);
}

CreateGameGrid();
