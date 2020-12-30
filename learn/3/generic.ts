// function logText(text) {
//   console.log(text);
//   return Text;
// }

// logText(10);
// logText('test');
// logText(true);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}


logText<string>('test');
logText<number>('test'); // 정의한 타입에 맞지 않아서 에러가 남

logText<string>('test').split(''); // string임이 명확하므로 관련 함수도 문제 없이 사용 가능
logText<number>(10).toFixed(2) // number임이 명확하므로 관련 함수도 문제 없이 사용 가능



function getNumber(value: number) {
  return value;
}

function getArray(value: string[]) {
  return value;
}

// 제네릭 기본 문법 - 함수
function getValue<T>(value: T): T {
  return value;
}
getValue('hi').toLocaleUpperCase();
getValue(100).toLocaleString();

// 제네릭 기본 문법 - 인터페이스
interface Developer<T> {
  name: string;
  age: T;
}
const tony: Developer<number> = { name: 'tony', age: 100 };

// 제네릭 타입 제한 - 구체적인 타입
function getNumberAndArray<T>(value: T): T {
  value.length; // X
  return value;
}

function getNumberAndArray<T>(value: T[]): T[] {
  value.length; // O
  return value;
}

// 제네릭 타입 제한 - keyof
interface ShoppingItems {
  name: string;
  price: number;
  address: string;
  stock: number;
}
function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
  if (option === 'name' || option === 'address') {
    console.log('option type is string');
    return option;
  }
  if (option === 'price' || option === 'stock') {
    console.log('option type is number');
    return option;
  }
}
getAllowedOptions('nothing');
// const a = getAllowedOptions('name');
// a.toUpperCase(); // Name