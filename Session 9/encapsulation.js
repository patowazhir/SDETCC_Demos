class Person {
  _age;

  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  ageOneYear() {
    this._age += 1;
  }

  getAge() {
    return this._age;
  }
}

class AgeVerifier {
  verifyAge(person) {
    const personAge = person.getAge();
    if (personAge < 18) {
      console.log(
        `Person ${person.name}, who is ${person.getAge()} years old is a minor`
      );
    } else {
      console.log(
        `Person ${person.name}, who is ${person.getAge()} years old is an adult`
      );
    }
  }
}

const pablito = new Person("Pablo", 22);
const andy = new Person("Andy", 17);

const ageVerifier = new AgeVerifier();

//ageVerifier.verifyAge(pablito);
//ageVerifier.verifyAge(andy)

//andy.ageOneYear()

//ageVerifier.verifyAge(andy)
