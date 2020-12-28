// https://www.typescriptlang.org/docs/handbook/advanced-types.html
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#nullable-types

// #1
// function sum(a: number, b:number) {
//   return a + b;
// }

// 타입 별칭
// 타입이나 인터페이스를 다른 이름으로 사용할 수 있음
type SumParameter = number;

function sum(a: SumParameter, b: SumParameter) {
  return a + b;
}


// ----

interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string,
//   age: number,
// };

// 타입과 인터페이스의 가장 큰 차이는 상속 가능 여부
const user: Person = {};

function getPerson(): Person {
  // ...
}



type Invoice = { id: number, amount: number, userId: string };
function getInvoice(index: number): Invoice {
  const invoice: Invoice = {};
  return invoice;
}