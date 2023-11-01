class Snorlax {
    constructor() {
      let currGrid;
      let snorlax = document.createElement("img");
      snorlax.src = "img/snorlax.png";
      snorlax.isClickable = true; // solved the points problem
  
      let num = new randomSquare().square();
      currGrid = document.getElementById(num);
  
      const imgElement = currGrid.querySelector("img");
      if (!imgElement) {
        currGrid.appendChild(snorlax);
  
        setTimeout(() => {
          const imgElementToRemove = currGrid.querySelector("img");
          if (imgElementToRemove) {
            imgElementToRemove.remove();
          }
        }, 1500); // Go down in this value to make it desappear faster
  
        // Add a click event to the image
        snorlax.addEventListener("click", () => {
          if (snorlax.isClickable) {
            // this solved me the problem of 1 img giving points more than once
            decreasePoints(30);
          } 
          // Remove the clicked 
          if (imgElement) {
            imgElement.remove();
          }
          snorlax.isClickable = false; // this solved me the problem of 1 img giving points more than once
        });
      }
    }
  }