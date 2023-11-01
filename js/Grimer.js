class Grimer {
    constructor() {
      let currGrid;
      let grimer = document.createElement("img");
      grimer.src = "./img/grimer.png";
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