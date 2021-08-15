class Person {
  constructor() {
    this.name = '';
    this.age = '';
    this.fullName = '';
  }
}

class PersonBuilder {
  constructor() {
    this.instance = new Person();
  }

  withName(name) {
    this.instance.name = name;

    return this;
  }

  withAge(age) {
    this.instance.age = age;

    return this;
  }

  build() {
    return this.instance;
  }
}

new PersonBuilder().withName('Jon Doe').withAge(10).build();
