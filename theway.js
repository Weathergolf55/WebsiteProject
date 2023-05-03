console.log("Joseph");
console.log(1 + 2 + 3 + 4 + 5 + 2);
////////// 1
console.log(6 - 3); console.log(6 * 3); console.log(6/3); console.log(6 +3);
//////// 2
console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");
//////3
const name = ("Enter your first name and last name:");
console.log(`Hello, ${name}`);
///////4
let a = 2;
a -= 1;
a++;
// a = 2
let b = 8;
b += 2;
// b = 10
const c = a + b * b;
// c = 102
const d = a * b + b;
// d = 30
const e = a * (b + b);
// e = 40
const f = a * b / a;
// f = 10
const g = b / a * a;
// g = 10
console.log(a, b, c, d, e, f, g)
//////5
const Price = ("enter raw value price")
console.log("Vat Price", Price * 1.206);
////////6
const C = (100)
console.log("Fahrenheit is", C * 9 / 5 + 32)
/////////7
let num1 = 5;
let num2 = 3;
num1 -= 2
num2 += 2
console.log(num1); // Should show 3
console.log(num2); // Should show 5
//////////8
const Dayname = ("Sunday");
if (Dayname === "Sunday" || "sunday") {
console.log("Tommorrow is Monday")
} else if (Dayname === "Monday" || "monday") {
console.log("Tommorrow is Tuesday.");
} else if (Dayname === "Tuesday" || "tuesday") {
console.log("Tommorrow is Wednesday");
} else if (Dayname === "Wednesday" || "wednesday") {
console.log("Tommorrow is Thursday");
} else if (Dayname === "Thursday" || "thursday") {
console.log("Tommorrow is Friday.");
} else if (Dayname === "Friday" || "friday") {
console.log("Tommorrow is Saterday");
} else if (Dayname === "Saterday" || "saterday") {
console.log("Tommorrow is Sunday");
} else {
console.log("Not a valid Day name");
}
////////9
const X = 1
const Y = 2
if (X > Y) {console.log ("number 1 is bigger than number 2");
} else if (Y > X) {console.log("Number 2 is bigger than number 1");
} else if (Y = X) {console.log("Number 1 equals number 2");
} else {console.log("not valid number")}
///////10
let nb1 = Number(("2"));
let nb2 = Number(("4"));
let nb3 = Number(("0"));
if (nb1 > nb2) {
nb1 = nb3 * 2;
} else {
nb1++;
if (nb2 > nb3) {
nb1 += nb3 * 3;
} else {
nb1 = 0;
nb3 = nb3 * 2 + nb2;
}
}
console.log(nb1, nb2, nb3);
///////11
Monthnumber = (13)
switch (Monthnumber) {
case 1:
console.log(31)
break;
case 2:
console.log(28)
break;
case 3:
console.log(31)
break;
case 4:
console.log(30)
break;
case 5:
console.log(31)
break;
case 6:
console.log(30)
break;
case 7:
console.log(31)
break;
case 8:
console.log(31)
break;
case 9:
console.log(30)
break;
case 10: 
console.log(31) 
break;
case 11: 
console.log(30)
break;
case 12:
console.log(31)
break;
default:
console.log("Not a valid month number")
}
///////////12
function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
    }
    const NAME = ("enter first and last name")
    console.log(sayHello(NAME))
////////////13
function square1(X) {
    return X * X
    }
console.log(square1(17777))
const square2 = x =>  x * x;
console.log(square2(55))

for (let X = 0; X < 11; X++) {
    console.log(square1(X));
}
for (let X = 0; X < 11; X++) {
     console.log(square2(X));
}
///////////////14
function mins(num1, num2) {
    if (num1 > num2)  {return (num2);
} else if (num2 > num1) {return (num1);
} else if (num1 = num2) {return (num1);}
}
console.log(mins(3,4))
//////15
const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25,
    xp: 0,
    // Return the character description
    describe() {
    return `${this.name} has ${this.health} health points ${this
    .strength} as strength and ${this.xp} as xp`;
    }
    };
    aurora.health -= 20;
// Aurora equips a strength necklace
aurora.strength += 10;
// Aurora learn a new skill
aurora.xp += 15;
console.log(aurora.describe())
////////16
const dog = {
    name: "fang",
    species: "boarhound",
    size: 75,
    bark: "Grr! Grr!"
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark}`);
////////17
const r = Number(("30"));
const circle = {
    circumference: (r * 2 * Math.PI),
    area: (r * r * Math.PI),
    
    
}
console.log(`Its circumference is ${circle.circumference}`);
console.log(`Its area is ${circle.area}`)
///18

const account = {
name: "Alex",
balance: 0,
credit: 0,
describe() {
return `owner: ${this.name}, has balance ${this.balance + this.credit}  `
}
};
console.log(account.describe())
account.credit += 250
account.credit -= 70
console.log(account.describe())
////////////////19
    class Dog {
        constructor(name, species, size,) {
        this.name = name;
        this.species = species;
        this.size = size;
    
}
bark() {
    if(this.size > 60){
         return "Grr! Grr!"
    } else {
        console.log("Woof! Woof!")
    }
}
}
    const fang = new Dog("Fang", "boarhound", 75);
    console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
    console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);
    const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`)
//////20
let number = 0;
while (number < 100) {
number++;
if (number % 15 === 0) {
    console.log("Fizzbuzz")
} else if (number % 5 === 0) {
    console.log("Buzz")
} else if (number % 3 === 0) {
    console.log("Fizz")
} else {
    console.log(number)
}
////////21
}
class Account{ 
    constructor(name, balance, credit) {
    this.name = name;
    this.credit = credit 
    this.balance = balance 
    }
    describe() {
        return `owner: ${this.name}, balance: ${this.balance + this.credit}  `
        }
}
    const sean = new Account("sean", 0, 0)
    const brad = new Account("brad", 0, 0)
    const George = new Account("George", 0, 0)
    Account.credit += 1000
    console.log(sean.describe())
    console.log(brad.describe())
    console.log(George.describe())
//22