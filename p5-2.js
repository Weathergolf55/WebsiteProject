/// <reference path="lib/p5.global.d.ts"/>

var setup = function () {
  createCanvas(600, 420);
  angleMode(DEGREES);
  frameRate(500);
};
let pacman = {
  x: 50,
  y: 50,
  start: 90,
  stop: 360,
  vx: 0.7,
  vy: 0.5,
  vstart: 1,
  vstop: -1,
  draw: function () {
    fill("yellow");
    arc(
      (this.x += this.vx),
      (this.y += this.vy),
      80,
      80,
      (this.start -= this.vstart),
      (this.stop -= this.vstop)
    );
    if (this.x - 50 < 0 || this.x + 50 > 600) {
      this.vx = -this.vx && this.start + 90;
    }
    if (this.y - 50 < 0 || this.y + 50 > 349) {
      this.vy = -this.vy && this.start + 90;
    }
    if (this.start > 90 || this.start < 65) {
      this.vstart = -this.vstart;
    }
    if (this.stop > 385 || this.stop < 360) {
      this.vstop = -this.vstop;
    }
  },
};

let ghost = {
  draw: function () {
    fill("orange");
    rect(400, 355, 7, 56);
    rect(407, 334, 7, 70);
    rect(414, 327, 7, 70);
    rect(421, 362, 7, 42);
    rect(421, 320, 7, 21);
    rect(428, 320, 7, 14);
    rect(435, 313, 7, 21);
    rect(442, 313, 7, 28);
    rect(456, 320, 7, 21);
    rect(463, 320, 7, 14);
    rect(470, 327, 7, 7);
    rect(477, 334, 7, 7);
    rect(428, 369, 7, 42);
    rect(435, 369, 7, 28);
    rect(442, 362, 7, 35);
    rect(449, 313, 7, 98);
    rect(456, 362, 7, 49);
    rect(463, 369, 7, 35);
    rect(470, 369, 7, 28);
    rect(477, 362, 7, 42);
    rect(484, 341, 7, 70);
    fill("white");
    rect(421, 355, 7, 7);
    rect(428, 355, 7, 14);
    rect(435, 334, 7, 35);
    rect(442, 341, 7, 21);
    rect(428, 334, 7, 7);
    rect(455, 355, 7, 7);
    rect(462, 355, 7, 14);
    rect(469, 334, 7, 35);
    rect(476, 341, 7, 21);
    rect(462, 334, 7, 7);
    fill("blue");
    square(421, 341, 14);
    square(455, 341, 14);
  },
};

var draw = function () {
  background("black");
  ghost.draw();
  pacman.draw();
};
