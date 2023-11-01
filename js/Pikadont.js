class Pikadont {
    constructor() {
      let currGrid;
      let pikadont = document.createElement("img");
      pikadont.src = "./img/Pikadont.png";
      pikadont.isClickable = true; // solved the points problem
  
      let num = new randomSquare().square();
      currGrid = document.getElementById(num);
  
      const imgElement = currGrid.querySelector("img");
      if (!imgElement) {
        currGrid.appendChild(pikadont);
  
        setTimeout(() => {
          const imgElementToRemove = currGrid.querySelector("img");
          if (imgElementToRemove) {
            imgElementToRemove.remove();
          }
        }, 900); // Go down in this value to make it desappear faster
  
        // click event
        pikadont.addEventListener("click", () => {
          if (pikadont.isClickable) {
            // this solved me the problem of 1 img giving points more than once
            decreasePoints(50);
          }
          // Remove the clicked img
          if (imgElement) {
            imgElement.remove();
          }
          pikadont.isClickable = false; // this solved me the problem of 1 img giving points more than once
        });
      }
    }
  }