class James {
    constructor() {
      let currGrid;
      let james = document.createElement("img");
      james.src = "img/james.png";
      james.isClickable = true; // solved the points problem
  
      let num = new randomSquare().square();
      currGrid = document.getElementById(num);
  
      const imgElement = currGrid.querySelector("img");
      if (!imgElement) {
        currGrid.appendChild(james);
  
        setTimeout(() => {
          const imgElementToRemove = currGrid.querySelector("img");
          if (imgElementToRemove) {
            imgElementToRemove.remove();
          }
        }, 600); // Go down in this value to make it desappear faster
  
        // Add a click event to the Gengar image
        james.addEventListener("click", () => {
          if (james.isClickable) {
            // this solved me the problem of 1 img giving points more than once
            increasePoints(100);
          }
          // Remove the clicked Gengar
          if (imgElement) {
            imgElement.remove();
          }
          james.isClickable = false; // this solved me the problem of 1 img giving points more than once
        });
      }
    }
  }