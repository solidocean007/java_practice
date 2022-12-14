class Person {
  constructor(name, hobby) {
    this.name = name;
    this.hobby = hobby;
  }
  greeting() {
    console.log(`Hello my name is ${this.name}`);
  }
  myHobby() {
    console.log(`My fav hobby is ${this.hobby}`);
  }
  
  static saySomething() {
    console.log('Coding is so cool!');
  }
};

const person1 = new Person('Jack', 'Coding');
const person2 = new Person('Jill', 'Skydiving');