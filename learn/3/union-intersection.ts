// # Union 타입 문법 |
// function logMessage(value: string | number) {
//   console.log(value);
// }

// number 또는 string인 타입을 기대할 때
function logMessage(value: string | number) {
  if (typeof value === 'string') {
    value.toLocaleUpperCase();
  }
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  throw new TypeError('value must be string or number') // ?? 이런게 되는건가
}

logMessage('string');
// logMessage(true)


interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// Developer와 Person에 모두 있는 속성만을 사용하는 것을 기대할 때
function askSomeone(someone: Developer | Person) {
  someone.name; 
  someone.age; // X
}

askSomeone({ name: 'developer', skill: 'skill' });
askSomeone({ name: 'person', age: 123 })

// # Intersection 타입 문법 &
// Developer와 Person이 가지고 있는 모든 속성을 가지는 것을 기대할 때
// function askSomeone(someone: Developer & Person) {
//   someone.name; 
//   someone.age;
// }

// askSomeone({ name: 'developer', skill: 'skill', age: 123 });




// Union 타입과 Intersection 타입의 차이점