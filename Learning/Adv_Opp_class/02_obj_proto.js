function multipleBy5(num){

   return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
   this.username = username
   this.score = score
}

createUser.prototype.increment = function(){
   this.score++
}
createUser.prototype.printMe = function(){
   console.log(`price is ${this.score}`);
}

const Sagawalk = new createUser("Sagawalk", 25)
const phymech = createUser("phymech", 250)

Sagawalk.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. 
This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. 
If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, 
if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


// let myName = "Dhruv     "
// let mychannel = "Sagawalk     "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sring",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.Dhruv = function () {
  console.log(`Dhruv is present in all objects`);
};

Array.prototype.heyDhruv = function () {
  console.log(`Dhruv says hello`);
};

// heroPower.Dhruv();
// myHeros.Dhruv();
// myHeros.heyDhruv()
// heroPower.heyDhruv()

// inheritance

const User = {
  name: "Sagawalk",
  email: "Sagawalk@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
console.log(TASupport.isAvailable);
console.log(TeachingSupport.makeVideo);

let anotherUsername = "Sagawalk    ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
"Dhruv".trueLength();
"Phymech".trueLength();
