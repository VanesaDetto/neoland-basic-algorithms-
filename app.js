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

//Iteración #4//

//1.1//
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
const nameAvengers = avengers[0];

//1.2//
avengers[0] = "Ironman";
console.log(avengers);

//1.3//
console.log(avengers.length);

//1.4//
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters);

console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

//1.5//
const rickAndMortyCharacters45 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];

rickAndMortyCharacters45.pop();

console.log(rickAndMortyCharacters45.shift());
console.log(rickAndMortyCharacters45.pop());

//1.6//
const rickAndMortyCharacters46 = [
  "Rick",
  "Beth",
  "Jerry",
  "Morty",
  "Summer",
  "Lapiz Lopez",
];
rickAndMortyCharacters46.splice(1, 1);
console.log(rickAndMortyCharacters46);

//Iteracion #5//
const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if (number1 === 10) {
  console.log("number1 es estrictamente igual a 10");
}

if (number2 / number1) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 != number1) {
  console.log("number3 es distinto number1");
}

if (number3 * 5 == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (number3 * 5 == number1 && number1 * 2 == number2) {
  console.log(
    "number3 por 5 es igual a number1 Y number1 por 2 es igual a number2"
  );
}

if (number2 / 2 == number1 || number1 / 5 == number3) {
  console.log(
    "number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3"
  );
}

//Iteracion #6//

//1.1//

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

//1.2//

for (let p = 0; p < 10; p++) {
  if (p % 2 == 0) {
    console.log(p);
  }
}

//1.3//

for (let i = 0; i <= 10; i++) {
  if (i == 10) {
    console.log("Dormido");
  } else {
    console.log(`Contando ovejitas ${i}`);
  }
}
