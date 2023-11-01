class Bulb {
    constructor() {
      let currGrid;
      let bulb = document.createElement("img");
      bulb.src = "./img/bulba.png";
      bulb.isClickable = true; // solved the points problem
  
      let num = new randomSquare().square();
      currGrid = document.getElementById(num);
  
      const imgElement = currGrid.querySelector("img");
      if (!imgElement) {
        currGrid.appendChild(bulb);
  
        setTimeout(() => {
          const imgElementToRemove = currGrid.querySelector("img");
          if (imgElementToRemove) {
            imgElementToRemove.remove();
          }
        }, 1500); // Go down in this value to make it desappear faster
  
        // Add a click event to the Gengar image
        bulb.addEventListener("click", () => {
          if (gengar.isClickable) {
            // this solved me the problem of 1 img giving points more than once
            decreasePoints(20);
          }
          // Remove the clicked Gengar
          if (imgElement) {
            imgElement.remove();
          }
          bulb.isClickable = false; // this solved me the problem of 1 img giving points more than once
        });
      }
    }
  }