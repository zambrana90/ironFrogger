window.addEventListener("load", () => {
  const game = new Game("game-canvas");

  //document.addEventListener("keypress", () => {
  game.start();

  document.addEventListener("keydown", () => {
    game.onKeyEvent(event);
  });

  document.addEventListener("keyup", () => {
    game.onKeyEvent(event);
  });
});
