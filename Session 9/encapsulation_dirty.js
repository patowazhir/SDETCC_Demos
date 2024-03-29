// CREDIT: https://blog.alexdevero.com/principles-of-object-oriented-programming/

class User {
  // Create private class properties/fields
  // NOTE: Private fields was added to JavaScript in ES2015
  _username;
  _email;

  // Create getter method
  // to get username property
  getUsername() {
    return this._username;
  }

  // Create setter method
  // to set, or change, username property
  setUsername(newUsername) {
    if (newUsername.length === 0) {
      throw new Error("username must contain more than 0 characters.");
    }

    this._username = newUsername;
  }

  // Create getter method
  // to get email property
  getEmail() {
    return this._email;
  }

  // Create setter method
  // to set, or change, email property
  setEmail(newEmail) {
    if (newEmail.length === 0) {
      throw new Error("email must contain more than 0 characters.");
    } else if (!newEmail.includes("@") || !newEmail.includes(".com")) {
      throw new Error("email must have proper format (no @ or .com found!");
    }
    this._email = newEmail;
  }
}

// Create new instance of User class
let bob = new User();

// Set username
// This invokes username setter method
bob.setUsername("bobby");

// Set email
// This invokes email setter method
bob.setEmail("bobby@email.com");

// Access username
// This invokes username getter method
console.log(bob.getUsername());
// 'bobby'

// Access username
// This invokes email getter method
console.log(bob.getEmail());
// 'bobby@email.com'
