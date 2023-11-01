class Psy {
    constructor() {
      let currGrid;
      let psy = document.createElement("img");
      psy.src = "./img/psy.png";
      psy.isClickable = true; // solved the points problem
  
      let num = new randomSquare().square();
      currGrid = document.getElementById(num);
  
      const imgElement = currGrid.querySelector("img");
      if (!imgElement) {
        currGrid.appendChild(psy);
  
        setTimeout(() => {
          const imgElementToRemove = currGrid.querySelector("img");
          if (imgElementToRemove) {
            imgElementToRemove.remove();
          }
        }, 1500); // Go down in this value to make it desappear faster
  
        // Add a click event to the image
        psy.addEventListener("click", () => {
          if (psy.isClickable) {
            // this solved me the problem of 1 img giving points more than once
            decreasePoints(10);
          } 
          // Remove the clicked 
          if (imgElement) {
            imgElement.remove();
          }
          psy.isClickable = false; // this solved me the problem of 1 img giving points more than once
        });
      }
    }
  }