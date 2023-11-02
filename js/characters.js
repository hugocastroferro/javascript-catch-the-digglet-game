class Characters {
  constructor(imageSrc, points) {
    this.imageSrc = imageSrc;
    this.characterElm = null;
    this.points = points;
    this.createInstance();
  }

  createInstance() {
    const currGrid = document.getElementById(this.randomSquare().toString());
    const imgElement = currGrid.querySelector("img");

    if (!imgElement) {
      this.characterElm = document.createElement("img");
      this.characterElm.src = this.imageSrc;
      this.characterElm.isClickable = true;

      currGrid.appendChild(this.characterElm);

      setTimeout(() => {
        const imgElementToRemove = currGrid.querySelector("img");
        if (imgElementToRemove) {
          imgElementToRemove.remove();
        }
      }, 1500);

      this.attachClickEvent();
    }
  }

  randomSquare() {
    return Math.floor(Math.random() * 25);
  }
}

class Pikachu extends Characters {
  constructor() {
    super("./img/pikachu.png", 10);
    this.createInstance();
   
  }

  attachClickEvent() {
    this.characterElm.addEventListener("click", () => {
      if (this.characterElm.isClickable) {
        game.increasePoints(this.points); // Increase points using the game instance
        this.characterElm.remove();
      }

      this.characterElm.isClickable = false;
    });
  }
}

class Gengar extends Characters {
  constructor() {
    super("./img/gengar.png", 30);
    this.createInstance();
  }

  attachClickEvent() {
    this.characterElm.addEventListener("click", () => {
      if (this.characterElm.isClickable) {
        game.decreasePoints(this.points); // Decrease points using the game instance
        this.characterElm.remove();
      }

      this.characterElm.isClickable = false;
    });
  }
}

class Grimer extends Characters {
  constructor() {
    super("./img/grimer.png", 10);
    this.createInstance();
  }

  attachClickEvent() {
    this.characterElm.addEventListener("click", () => {
      if (this.characterElm.isClickable) {
        game.decreasePoints(this.points); // Decrease points using the game instance
        this.characterElm.remove();
      }

      this.characterElm.isClickable = false;
    });
  }
}

class Ash extends Characters {
  constructor() {
    super("./img/ash.png", 100);
  }

  attachClickEvent() {
    this.characterElm.addEventListener("click", () => {
      if (this.characterElm.isClickable) {
        game.decreasePoints(this.points); // Decrease points using the game instance
        this.characterElm.remove();
      }

      this.characterElm.isClickable = false;
    });
  }
}

class Bulb extends Characters {
  constructor() {
    super("./img/bulba.png", 20);
    this.createInstance();
  }

  attachClickEvent() {
    this.characterElm.addEventListener("click", () => {
      if (this.characterElm.isClickable) {
        game.decreasePoints(this.points); // Decrease points using the game instance
        this.characterElm.remove();
      }

      this.characterElm.isClickable = false;
    });
  }
}

class James extends Characters {
  constructor() {
    super("./img/james.png", 100);
    this.createInstance();
  }

  attachClickEvent() {
    this.characterElm.addEventListener("click", () => {
      if (this.characterElm.isClickable) {
        game.increasePoints(this.points); // Increase points using the game instance
        this.characterElm.remove();
      }

      this.characterElm.isClickable = false;
    });
  }
}

class Pikadont extends Characters {
  constructor() {
    super("./img/Pikadont.png", 50);
    this.createInstance();
  }

  attachClickEvent() {
    this.characterElm.addEventListener("click", () => {
      if (this.characterElm.isClickable) {
        game.decreasePoints(this.points); // Decrease points using the game instance
        this.characterElm.remove();
      }

      this.characterElm.isClickable = false;
    });
  }
}

class Psy extends Characters {
  constructor() {
    super("./img/Psy.png", 10);
    this.createInstance();
  }

  attachClickEvent() {
    this.characterElm.addEventListener("click", () => {
      if (this.characterElm.isClickable) {
        game.decreasePoints(this.points); // Decrease points using the game instance
        this.characterElm.remove();
      }

      this.characterElm.isClickable = false;
    });
  }
}

class Snorlax extends Characters {
  constructor() {
    super("./img/snorlax.png", 30);
    this.createInstance();
  }

  attachClickEvent() {
    this.characterElm.addEventListener("click", () => {
      if (this.characterElm.isClickable) {
        game.decreasePoints(this.points); // Decrease points using the game instance
        this.characterElm.remove();
      }

      this.characterElm.isClickable = false;
    });
  }
}

class Squad extends Characters {
  constructor() {
    super("./img/squad.png", 20);
    this.createInstance();
  }

  attachClickEvent() {
    this.characterElm.addEventListener("click", () => {
      if (this.characterElm.isClickable) {
        game.decreasePoints(this.points); // Decrease points using the game instance
        this.characterElm.remove();
      }

      this.characterElm.isClickable = false;
    });
  }
}
