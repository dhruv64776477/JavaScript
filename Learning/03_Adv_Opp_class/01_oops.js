/* # javascript and classes

## OOP

## Object
- collection of properties and methods or variables and functions.
- toLowerCase

## why use OOP

## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism */

// Define the user object with properties and a method
const user = {
  username: "Dhruv",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// Invoke methods and access properties of the user object
console.log(user.username);
user.getUserDetails();

// Define the User constructor function
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
}

// Create instances of User
const userOne = new User("Dhruv", 12, true);
const userTwo = new User("sagawalk", 11, false);

// Invoke methods and access properties of the instances
console.log(userOne);
userOne.greeting();

console.log(userTwo);
userTwo.greeting();
