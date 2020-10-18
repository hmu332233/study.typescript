interface Human {
  name: String,
  age: Number,
  gender: String
};

const person = {
  name: 'minung',
  age: 28,
  gender: 'male',
};

const sayHi = (person: Human): String => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}

console.log(sayHi(person));

export {};