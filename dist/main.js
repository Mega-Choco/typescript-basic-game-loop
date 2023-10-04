"use strict";
let _now;
let _then;
let _delta = 0;
let _accumlatedTime = 0;
const _fps = 60.0;
let _fpsInterval = 0;
function start() {
    _then = Date.now();
    _fpsInterval = 1000 / _fps;
    loop();
}
function loop() {
    _now = Date.now();
    let elapsed = _now - _then;
    _then = _now;
    _accumlatedTime += elapsed;
    if (_fpsInterval <= _accumlatedTime) {
        _delta = _accumlatedTime / 1000;
        _accumlatedTime = 0;
        update();
        requestAnimationFrame(loop);
        return;
    }
    requestAnimationFrame(loop);
}
function update() {
    console.log(`updated! now delta is ${_delta}`);
}
start();
