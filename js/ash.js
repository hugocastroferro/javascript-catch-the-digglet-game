class Ash {
    constructor() {
      let currGrid;
      let ash = document.createElement("img");
      ash.src = "./img/ash.png";
      ash.isClickable = true; // solved the points problem
  
      let num = new randomSquare().square();
      currGrid = document.getElementById(num);
  
      const imgElement = currGrid.querySelector("img");
      if (!imgElement) {
        currGrid.appendChild(ash);
  
        setTimeout(() => {
          const imgElementToRemove = currGrid.querySelector("img");
          if (imgElementToRemove) {
            imgElementToRemove.remove();
          }
        }, 1000); // Go down in this value to make it desappear faster
  
        // Add a click event to the Gengar image
        ash.addEventListener("click", () => {
          if (ash.isClickable) {
            // this solved me the problem of 1 img giving points more than once
            decreasePoints(100);
          }
          // Remove the clicked Gengar
          if (imgElement) {
            imgElement.remove();
          }
          ash.isClickable = false; // this solved me the problem of 1 img giving points more than once
        });
      }
    }
  }