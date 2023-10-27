let currGrid

function gameGrid() {
  // Prep for the grid squares
  for (let i = 0; i < 25; i++) {
    let grid = document.createElement("div");
    grid.id = i.toString();
    document.getElementById("board").appendChild(grid);
  }

  setInterval(() => {
const newDiglett = new setDiglett()
  }, 2000);
}

gameGrid();

class randomSquare {
    constructor() {
        this.num = Math.floor(Math.random() * 25); //  getting the random number of squares generated  
    }
    
    square(){
        return this.num.toString();
    }
  } 

class setDiglett {
  constructor() {

    let diglett = document.createElement("img");
    diglett.src = 'img/diglett.png'

    let num = new randomSquare().square();
    currGrid = document.getElementById(num);
    
    let child = currGrid.getElementsByTagName('img')[0]
    if(!child){
        currGrid.appendChild(diglett);

        
        setTimeout(() => {
            child = currGrid.getElementsByTagName('img')[0]; // Get the child again
            if (child !== null && child.parentNode === currGrid) {
              currGrid.removeChild(child);
            }
          }, 2500);
        }
      }
    }
class setBadDig {
  constructor() {
    this.setbadDig = document.createElement("imgBD");
  }
}



