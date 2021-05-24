window.addEventListener("load", () => {
  document.getElementById("start-button").onclick = () => {
    goFullScreen();
    startGame();
  };
  function startGame() {
    const game = new Game("game-canvas");
    game.start();

    document.addEventListener("keydown", () => {
      game.onKeyEvent(event);
    });

    document.addEventListener("keyup", () => {
      game.onKeyEvent(event);
    });

    const start = document.querySelector(".game-intro");
    start.classList.add("inactive");

    const score = document.getElementById("score-game");
    score.classList.remove("inactive");
  }
  function goFullScreen() {
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }
});
