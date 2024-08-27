// js is a prototype based ineritance language.


"use strict"; // treat all Js code as newer version
let name = "dhruv";
let age = 18;
let isLog = false;
// Primitive(use stack memory)
// 7 types: String, Number, Boolearn, null, undefined, Symbol, BigInt

// Reference (Non primitive)(use heap memory)
// Array, Objects, Functions

//number
//bigint
//string => ""
//boolean => true,true
//null => it is object(stand alone value)
//undifin => it is not defined
//symble => unque

// Arithmetic: +, -, *, /, %, **, ++, --
// Assignment: =, +=, -=, *=, /=, %=, **=
// Comparison: ==, ===, !=, !==, >, <, >=, <=
// Logical: &&, ||, !
// Bitwise: &, |, ^, ~, <<, >>, >>>
// String: + (concatenation)
// Ternary: condition ? expr1 : expr2
// Type: typeof, instanceof
// Unary: +, -, ++, --, !, typeof, delete, void
// Relational: in, instanceof
// Comma: , (evaluates multiple expressions)

let score = "33";
//console.log(typeof score);
let value = Number(score);
//console.log(value);
score = "33A";
value = Number(score);
//console.log(value);
score = null;
//console.log(typeof score);
value = Number(score);
//console.log(value);
score = undefined;
//console.log(typeof score);
value = Number(score);
//console.log(value);

//console.log(Boolean(1));
//console.log(Boolean(0));

score = 23;
//console.log(-score);

//console.log(1 + 2 + "2");
//console.log(+true);
//console.log(+"");

//console.log('2'>1);
//console.log('2'<1);

//console.log(null>0);
//console.log(null==0);
//console.log(null>=0);

//console.log("2" == 2);
//console.log("2" === 2);


//stack
// let a = 10;
// let b = a;
// b = 10;
// console.log(a);
// console.log(b);


//heap
// let userA = {
//   a: 10,
// };
// let userB = userA;
// userB.a = 20;
// console.log(userA.a);
// console.log(userB.a);
