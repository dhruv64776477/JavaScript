/* Used for fine grain control
work on properties of constructors */

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}Dhruv`;
  }

  set password(value) {
    this._password = value;
  }
}

const Dhruv = new User("harem@Dhruv.ai", "abc");
console.log(Dhruv.email)
console.log(Dhruv.password);
