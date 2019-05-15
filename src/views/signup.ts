export class Signup {
  firstName = 'Homer';
  lastName = 'Simpson';
  email = 'homer@simpson.com';
  password = 'secret';

  signup(e) {
    console.log(`Trying to sign up ${this.email}`);
  }
}
