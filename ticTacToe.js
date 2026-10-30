const r = require("raylib");
const k = require("./keys");
const t = require("./textures");

function running() {
  return !r.WindowShouldClose();
}

function setup() {
  const width = 300;
  const height = 300;
  const array = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  const gameElements = {
    count: 0,
    player: 0,
  };

  const cell = {
    width: 0,
    height: 0,
  };

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(width, height, "ticTacToe");
  r.SetTargetFPS(60);

  return {width, height, cell, gameElements};
}

function update(w) {
  k.IsKeyPressed(w);
}

function prepareSetUp() {
  r.DrawLine(100, 0, 100, 300, r.WHITE);
  r.DrawLine(200, 0, 200, 300, r.WHITE);
  r.DrawLine(0, 100, 300, 100, r.WHITE);
  r.DrawLine(0, 200, 300, 200, r.WHITE);
}

function draw(w, target) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  prepareSetUp();

  r.DrawTexture(
    target[w.gameElements.player].texture,
    w.cell.width,
    w.cell.height,
    r.WHITE,
  );

  r.EndDrawing();
}

function loop(w) {
  const target = {
    0: t.createBlank(),
    1: t.createCircle(),
    2: t.createCross(),
  };

  while (running()) {
    update(w);
    draw(w, target);
  }
}

function teardown() {
  r.CloseWindow();
}

function main() {
  const w = setup();
  loop(w);
  teardown();
}
main();
