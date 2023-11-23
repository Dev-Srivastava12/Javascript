//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

//console.log(typeof anotherId);

//console.log(typeof myFunction)

// https://262.ecma-international.org/5.1/#sec-11.4.3


//Stack(Primitive)   Heap(Non-Primitive)

let val = "Xyz"

let val1 = val;
val1 = "abc"

console.log(val);
console.log(val1);    //in stack there is a copy of variable so changes are made in copy.

let val2 = {
    name : "vvv"
}

let val3 = val2;

val3.name = "jjj" // in heap the reference is of actual value so changes are made in actual values

console.log(val3.name);
console.log(val2.name)