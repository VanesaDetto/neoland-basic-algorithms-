//iteración #1//

let myFavoriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;

//Iteración #2//

//1.1//
const character = { name: "Jack Sparrow", age: 10 };
console.log(character);
character.age = 25;
console.log(character);

//1.2//
let firstName = "Jon";
let lastName = "Snow";
let age = 24;

console.log(
  "Soy " +
    firstName +
    "" +
    lastName +
    ",tengo " +
    age +
    " años y me gustan los lobos."
);

//1.3//
const toy1 = { name: "Buss myYear", price: 19 };
const toy2 = { name: "Rallo mcKing", price: 29 };

console.log("TotalPrice", toy1.price + toy2.price);

//1.4//

let globalBasePrice = 10000;
const car1 = { name: "BMW m&m", basePrice: 50000, finalPrice: 60000 };
const car2 = { name: "Chevrolet Corbina", basePrice: 70000, finalPrice: 80000 };

globalBasePrice = 25000;

car1.finalprice = car1.basePrice + globalBasePrice;
console.log("Modificado", car1);
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log("Modificado", car2);

//Iteración #3//

//1.1//
let multiplicacion = 10 * 5;
console.log(multiplicacion);

//1.2//
let division = 10 / 2;
console.log(division);

//1.3//
let resto = 15 % 9;
console.log(resto);

//1.4//
let p = 10;
let j = 5;
let o = p + j;

//1.5//
let c = 10;
let m = 5;
let i = c * m;
