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
        }, 1500); // Go down in this value to make it desappear faster
  
        // Add a click event to the Gengar image
        gengar.addEventListener("click", () => {
          if (gengar.isClickable) {
            // this solved me the problem of 1 img giving points more than once
            decreasePoints(30);
          }
          // Remove the clicked Gengar
          if (imgElement) {
            imgElement.remove();
          }
          gengar.isClickable = false; // this solved me the problem of 1 img giving points more than once
        });
      }
    }
  }