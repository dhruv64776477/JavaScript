// ES6

class User {
   constructor(username, email, password) {
     this.username = username;
     this.email = email;
     this.password = password;
   }
 
   encryptPassword() {
     return `${this.password}abc`;
   }
   changeUsername() {
     return `${this.username.toUpperCase()}`;
   }
 }
 
 const Sagawalk = new User("Sagawalk", "Sagawalk@gmail.com", "123");
 
 console.log(Sagawalk.encryptPassword());
 console.log(Sagawalk.changeUsername());
 
 // behind the scene
 
 // function User(username, email, password){
 //     this.username = username;
 //     this.email = email;
 //     this.password = password
 // }
 
 // User.prototype.encryptPassword = function(){
 //     return `${this.password}abc`
 // }
 // User.prototype.changeUsername = function(){
 //     return `${this.username.toUpperCase()}`
 // }
 
 // const tea = new User("tea", "tea@gmail.com", "123")
 
 // console.log(tea.encryptPassword());
 // console.log(tea.changeUsername());
 

 /****************************************inherentece************************************************ */


 class User2 {
   constructor(username) {
     this.username = username;
   }
 
   logMe() {
     console.log(`USERNAME is ${this.username}`);
   }
 }
 
 class Teacher extends User2 {
   constructor(username, email, password) {
     super(username);
     this.email = email;
     this.password = password;
   }
 
   addCourse() {
     console.log(`A new course was added by ${this.username}`);
   }
 }
 
 const SagaWalk = new Teacher("SagaWalk", "SagaWalk@teacher.com", "123");
 SagaWalk.addCourse();
 SagaWalk.logMe();
 const masalaSagaWalk = new User2("masalaSagaWalk");
 
 masalaSagaWalk.logMe();
 console.log(SagaWalk == User2)
 console.log(SagaWalk instanceof User2);



 /************************************Static properties************************************ */


 class User3 {
  constructor(Username){
      this.Username = Username
  }

  logMe(){
      console.log(`User3name: ${this.Username}`);
  }

  static createId(){
      return `123`
  }
}

const hitesh = new User3("hitesh")
// console.log(hitesh.createId())

class Teacher2 extends User3 {
  constructor(Username, email){
      super(Username)
      this.email = email
  }
}

const iphone = new Teacher2("iphone", "i@phone.com")


//console.log(iphone.createId());
// In this version, createId is correctly called on the User3 class, not on the iphone instance.
// The output will be 123. If you still want to use createId within the Teacher2 context, you should still call it on Teacher2 or User3 like this:

