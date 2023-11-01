class Pikachu {
    constructor() {
      let currGrid;
      let pikachu = document.createElement("img");
      pikachu.src = "./img/pikachu.png";
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