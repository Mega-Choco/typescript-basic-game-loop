"use strict";
let _now;
let _then;
let _delta = 0;
let _accumlatedTime = 0;
let _fps = 60.0;
let _fpsInterval = 0;
function start() {
    console.log('engine started!');
    _then = Date.now();
    _fpsInterval = 1000 / _fps;
    loop();
}
function loop() {
    _now = Date.now();
    var elapsed = _now - _then;
    _then = _now;
    _accumlatedTime += elapsed;
    if (_fpsInterval <= _accumlatedTime) {
        _delta = _accumlatedTime;
        _accumlatedTime = 0;
        update();
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
}
function update() {
    console.log(`this delta is ${_delta / 1000}`);
}
start();
