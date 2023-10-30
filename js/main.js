function CreateGameGrid() {
  // Prep for the grid squares
  for (let i = 0; i < 25; i++) {
    let cell = document.createElement("div"); // creates the 25 cells
    cell.id = i.toString();
    document.getElementById("board").appendChild(cell);
  }

  setInterval(() => {
    const newDiglett = new Diglett();
  }, 4000);
}

CreateGameGrid();

class randomSquare {
  constructor() {
    this.num = Math.floor(Math.random() * 25); //  getting the random number of squares generated
  }

  square() {
    return this.num.toString();
  }
}

class Diglett {
  constructor() {
    let currGrid;
    let diglett = document.createElement("img");
    diglett.src = "img/diglett.png";

    let num = new randomSquare().square();
    currGrid = document.getElementById(num);

    const imgElement = currGrid.querySelector("img");
    if (!imgElement) {
      currGrid.appendChild(diglett);

      setTimeout(() => {
        const imgElementToRemove = currGrid.querySelector("img");
        if (imgElementToRemove) {
          imgElementToRemove.remove();
        }
      }, 3500);

      // Add a click event to the Diglett image
      diglett.addEventListener("click", () => {
        // Implement logic to increase the user's points
        increasePoints(10);

        // Remove the clicked Diglett
        if (imgElement) {
          imgElement.remove();
        }
      });
    }
  }
}

function increasePoints(amount){
  points+= amount
  updatePointsDisplay();
}

function updatePointsDisplay() {
  // Update the points display on the game
  const pointsDisplay = document.getElementById("score-display");
  if (pointsDisplay) {
    pointsDisplay.textContent = `Points: ${points}`;
  }
}

class BadDig {
  constructor() {
    this.setbadDig = document.createElement("imgBD");
  }
}
