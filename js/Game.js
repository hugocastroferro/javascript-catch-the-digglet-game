class Game {
  constructor() {
    this.points = 0;
    this.appearanceTimes = {
      // Defining appearance times for other characters
      Pikachu: 1000,
      Gengar: 1000,
      Grimer: 1000,
      Ash: 1000,
      Bulb: 1000,
      James: 1000,
      Pikadont: 1000,
      Psy: 1000,
      Snorlax: 1000,
      Squad: 1000,
    };

    this.timer = 10;
    this.timerInterval = setInterval(() => this.decreaseTimer(), 1000);
    this.level = 1;
    this.levelUpCondition = false;
    this.audio = new Audio("./soundtrack/OpeningThem.mp3");
    this.audio.volume = 0;
    this.audio.play();
    this.audio.loop = true;

    this.highesScoreStart();
  }

  highesScoreStart() {
    const highestScore = localStorage.getItem("highestScore") || 0;

    const highestScoreDisplay = document.getElementById(
      "highest-score-display"
    );
    if (highestScoreDisplay) {
      highestScoreDisplay.textContent = `Highest Score: ${highestScore}`;
    }
  }

  increasePoints(amount) {
    this.points += amount;
    this.updatePointsDisplay();
  }

  decreasePoints(amount) {
    this.points -= amount;
    if (this.points < 0) {
      this.points = 0;
    }

    this.updatePointsDisplay();
  }

  updatePointsDisplay() {
    const pointsDisplay = document.getElementById("score-display");
    if (pointsDisplay) {
      pointsDisplay.textContent = `Points: ${this.points}`;
    }

    if (this.points === 0) {
      this.game0ver();
    }

    const highestScore = localStorage.getItem("highestScore");
    if (this.points > highestScore) {
      localStorage.setItem("highestScore", this.points);
    }
  }

  game0ver() {
    location.href = "./gameover.html";
  }

  

  createGameGrid() {
    for (let i = 0; i < 25; i++) {
      let cell = document.createElement("div");
      cell.id = i.toString();
      document.getElementById("board").appendChild(cell);
    }
    // Defining character appearances
    setInterval(() => {
      const newPikachu = new Pikachu();
    }, this.appearanceTimes.Pikachu);

    setInterval(() => {
      const newGengar = new Gengar();
    }, this.appearanceTimes.Gengar);

    setInterval(() => {
      const newGrimer = new Grimer();
    }, this.appearanceTimes.Grimer);

    setInterval(() => {
      const newPsy = new Psy();
    }, this.appearanceTimes.Psy);

    setInterval(() => {
      const newSnorlax = new Snorlax();
    }, this.appearanceTimes.Snorlax);

    setInterval(() => {
      const newBulb = new Bulb();
    }, this.appearanceTimes.Bulb);

    setInterval(() => {
      const newJames = new James();
    }, this.appearanceTimes.James);

    setInterval(() => {
      const newPikadont = new Pikadont();
    }, this.appearanceTimes.Pikadont);

    setInterval(() => {
      const newAsh = new Ash();
    }, this.appearanceTimes.Ash);

    setInterval(() => {
      const newSquad = new Squad();
    }, this.appearanceTimes.Squad);
  }

  // Update timerDisp, levelDisp
  updateTimerDisplay() {
    const timerDisplay = document.getElementById("timer-display");
    if (timerDisplay) {
      timerDisplay.textContent = `Timer: ${this.timer}`;
    }
  }

  updateLevelDisplay() {
    const levelDisplay = document.getElementById("level-display");
    if (levelDisplay) {
      levelDisplay.textContent = `Level: ${this.level}`;
    }
  }

  // Decreasing my timer when timer hits 0 and updating lvl. Timer value reseting
  decreaseTimer = () => {
    this.timer--;
    this.updateTimerDisplay();
    if (this.timer <= 0) {
      this.levelUp();
      this.updateLevelDisplay();
      this.timer = 10;
      this.changeAppearanceTime();
    }
  };

  changeAppearanceTime() {
    // Update appearance times for each character when im lvling up
  }

  levelUp() {
    this.level++;
    this.changeAppearanceTime();
    this.updateLevelDisplay();
  }
}

const game = new Game();
game.createGameGrid();
