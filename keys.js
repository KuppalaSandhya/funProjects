const r = require("raylib");

function IsKeyPressed(w) {
  if (r.IsKeyPressed(r.KEY_ONE)) {
    w.gameElements.player = w.gameElements.count % 2;
    w.cell.width = 0;
    w.cell.height = 0;
    w.gameElements.count += 1;
  }

  if (r.IsKeyPressed(r.KEY_TWO)) {
    w.gameElements.player = w.gameElements.count % 2;
    w.cell.width = 100;
    w.cell.height = 0;
    w.gameElements.count += 1;
  }

  if (r.IsKeyPressed(r.KEY_THREE)) {
    w.gameElements.player = w.gameElements.count % 2;
    w.cell.width = 200;
    w.cell.height = 0;
    w.gameElements.count += 1;
  }

  if (r.IsKeyPressed(r.KEY_FOUR)) {
    w.gameElements.player = w.gameElements.count % 2;
    w.cell.width = 0;
    w.cell.height = 100;
    w.gameElements.count += 1;
  }

  if (r.IsKeyPressed(r.KEY_FIVE)) {
    w.gameElements.player = w.gameElements.count % 2;
    w.cell.width = 100;
    w.cell.height = 100;
    w.gameElements.count += 1;
  }

  if (r.IsKeyPressed(r.KEY_SIX)) {
    w.gameElements.player = w.gameElements.count % 2;
    w.cell.width = 200;
    w.cell.height = 100;
    w.gameElements.count += 1;
  }

  if (r.IsKeyPressed(r.KEY_SEVEN)) {
    w.gameElements.player = w.gameElements.count % 2;
    w.cell.width = 0;
    w.cell.height = 200;
    w.gameElements.count += 1;
  }

  if (r.IsKeyPressed(r.KEY_EIGHT)) {
    w.gameElements.player = w.gameElements.count % 2;
    w.cell.width = 100;
    w.cell.height = 200;
    w.gameElements.count += 1;
  }
  if (r.IsKeyPressed(r.KEY_NINE)) {
    w.gameElements.player = w.gameElements.count % 2;
    w.cell.width = 200;
    w.cell.height = 200;
    w.gameElements.count += 1;
  }
}

module.exports = {
  IsKeyPressed,
};
