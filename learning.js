console.log("Hello " + "World!");
let name = "Joseph";
console.log(name + " Balakrishnan");
console.log("A " + "b");
console.log("843-998-3070");
console.log(843 - 998 - 3070);
let y = 1;
y = 2;
{
  let y = 3;
  console.log(y);
}
let cl = console.log;
for (let index = 0; index < 10; index++) {
  if (index > 5) {
    cl(index * 10);
  }
}
let str = "";

for (let index = 0; index < 7; index++) {
  if (index < 7) {
    str = str + "#";
  }

  cl(str);
}

cl("#");
let myName = "Joseph";
for (let index = 0; index < myName.length; index++) {
  const letter = myName[index];
  cl(letter);
}
let greet = function (name) {
  return "Hello " + name;
};
let greeting = greet("bob");
cl(greeting);
let b = function () {};

for (let index = 0; index < 101; index++) {
  if (index % 15 === 0) {
    cl("fizzbuzz");
  } else if (index % 5 === 0) {
    cl("buzz");
  } else if (index % 3 === 0) {
    cl("fizz");
  } else {
    cl(index);
  }
}

let add = function (num1, num2) {
  return num1 + num2;
};
console.log("Adding");
console.log(add(5, 10));
console.log(add(3000, 210));
let multi = function (num1, num2) {
  return num1 * num2;
};
cl("multiply");
cl(multi(5, 10));
let sub = function (num1, num2) {
  return num1 - num2;
};
cl("subtraction");
cl(sub(1, 2));
let div = function (num1, num2) {
  return num1 / num2;
};
cl("divide");
cl(div(5, 2));
let a = [1, 2, 3, 4];
for (let index = 0; index < a.length; index++) {
  const element = a[index];
  console.log(element);
}
let o = {};
o.name = "Joseph";
o.age = "17";
cl(o);
cl(Math.floor(Math.random() * 5));
let d = new Date();
cl(new Date());
cl(Math.round(Math.random() * 1000));
let t = ["apples", "bananas", "cherries"];
cl(t[Math.floor(Math.random() * 3)]);
let w = ["rock", "paper", "scissors"];

let choicesuit = function () {
  let suit = ["spade", "hearts", "diamond", "clubs"];
  let number = Math.floor(Math.random() * suit.length);
  return suit[number];
};
let choicecolor = function () {
  let color = ["red", "black"];
  let colornumber = Math.floor(Math.random() * color.length);
  return color[colornumber];
};
let choicenumber = function () {
  let cardnumber = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  let cardpick = Math.floor(Math.random() * cardnumber.length);
  return cardnumber[cardpick];
};
let card = {
  suit: choicesuit(),
  color: choicecolor(),
  number: choicenumber(),
};
console.table(card);
