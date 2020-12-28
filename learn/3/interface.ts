// 인터페이스
interface User {
  name: string;
  age: number;
}

// 변수에 사용하는 경우
const user: User = { name: 'hi', age: 30 };

// 함수의 매개변수에 사용하는 경우
function getUser(user: User) {
  console.log(user);
}
getUser(user);

// 함수의 스펙(구조)에 사용하는 경우
interface SumFunction {
  (a: number, b: number): number;
}
let sum: SumFunction;
sum = function (num1: number, num2: number): number {
  return num1 + num2;
};

// 배열의 인덱싱에 사용하는 경우
interface StringArray {
  [index: number]: string;
}
let stringArray: StringArray = ['q', 'w', 'e', 'r', 't', 'y'];
stringArray[0] = 'hi';
// stringArray[1] = 10;

// 인터페이스 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const object1: StringRegexDictionary = {
  // something: /^test/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// 인터페이스 딕셔너리를 사용할 경우 이런 값들도 추론 가능
Object.keys(object1).forEach((key) => {})

// 인터페이스 상속
interface Person {
  name: string;
  age: number;
}

// 인터페이스끼리 상속 가능
interface Developer extends Person {
  language: string;
  option?: boolean; // 옵셔널 선택자 ? 동일하게 적용 가능
}
const developer1: Developer = { name: 'test', age: 20, language: 'ts' };
