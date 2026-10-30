const r = require("raylib");

function createCross() {
  const target = r.LoadRenderTexture(80, 80);

  r.BeginTextureMode(target);
  r.ClearBackground(r.BLACK);

  r.DrawLine(20, 20, 60, 60, r.WHITE);
  r.DrawLine(20, 60, 60, 20, r.WHITE);

  r.EndTextureMode();

  return target;
}

function createCircle() {
  const target = r.LoadRenderTexture(80, 80);
  r.BeginTextureMode(target);
  r.ClearBackground(r.BLACK);

  r.DrawCircle(40, 30, 20, r.WHITE);

  r.EndTextureMode();

  return target;
}

function createBlank() {
  const target = r.LoadRenderTexture(80, 80);
  r.BeginTextureMode(target);
  r.ClearBackground(r.BLACK);

  r.EndTextureMode();

  return target;
}

module.exports = {
  createCircle,
  createCross,
  createBlank,
};
