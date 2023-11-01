class Squad {
    constructor() {
      let currGrid;
      let squad = document.createElement("img");
      squad.src = "./img/squad.png";
      squad.isClickable = true; // solved the points problem
  
      let num = new randomSquare().square();
      currGrid = document.getElementById(num);
  
      const imgElement = currGrid.querySelector("img");
      if (!imgElement) {
        currGrid.appendChild(squad);
  
        setTimeout(() => {
          const imgElementToRemove = currGrid.querySelector("img");
          if (imgElementToRemove) {
            imgElementToRemove.remove();
          }
        }, 1500);
  
        // Add a click event to the image
        squad.addEventListener("click", () => {
          if (squad.isClickable) {
            // this solved me the problem of 1 img giving points more than once
            decreasePoints(20);
          }
          // Remove the clicked 
          if (imgElement) {
            imgElement.remove();
          }
  
          squad.isClickable = false;
        });
      }
    }
  }