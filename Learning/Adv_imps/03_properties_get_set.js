// how the getter and setter work.

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return this._password.toUpperCase();
    },
    set: function (value) {
      this._password = value;
    },
  });
}


// another example of getter and setter.


const Sagawalk = new User("Sagawalk@Sagawalk.com", "Sagawalk");

console.log(Sagawalk.email);

const User1 = {
  _email: "h@hc.com",
  _password: "abc",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const Rythmiq = Object.create(User1);
console.log(Rythmiq.email);
