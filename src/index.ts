class Human {
  public name: String;
  public age: Number;
  public gender: String;

  constructor(name: String, age: Number, gender?: String) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
};

const minung = new Human('minung', 28, 'male');

const sayHi = (person: Human): String => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(minung));

export {};