let _now: number;
let _then: number;
let _delta: number = 0;
let _accumlatedTime: number = 0;
const _fps: number = 60.0;
let _fpsInterval: number = 0;

function start(): void {
  _then = Date.now();
  _fpsInterval = 1000 / _fps;
  loop();
}

function loop(): void {
  _now = Date.now();
  let elapsed = _now - _then;
  _then = _now;

  _accumlatedTime += elapsed;
  if (_fpsInterval <= _accumlatedTime) {
    _delta = _accumlatedTime/1000;
    _accumlatedTime = 0;
    update();
    requestAnimationFrame(loop);
    return;
  }

  requestAnimationFrame(loop);
}

function update(): void {
  console.log(`updated! now delta is ${_delta}`);
}

start();
