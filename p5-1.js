/// <reference path="lib/p5.global.d.ts"/>

var setup = function () {
  createCanvas(600, 420);
  frameRate(5);
  angleMode(DEGREES);
};
var draw = function () {
  background("blue");
  arc(50, 50, 80, 80, 135, 45);
  fill("white");
  square(40, 100, 30);
  square(40, 200, 30);
  square(40, 300, 30);
  square(40, 370, 30);
  square(120, 370, 30);
  square(190, 370, 30);
  square(260, 360, 50);
  square(340, 370, 30);
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

  fill("yellow");
};
