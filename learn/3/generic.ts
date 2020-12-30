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


// 제네릭 기본 문법 - 인터페이스
interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

const stringItems: DropdownItem<string>[] = [
  { value: 'test', selected: true }
];

// 제네릭 타입 제한
// 제네릭 타입 제한 - 정의된 타입 이용하기
function logTextLength<T>(text: T): T {
  // 어떤 타입이 들어올지 알 수 없으므로 length라는 함수가 있을지 보장이 안됨
  return text.length;
}

interface LengthType {
  length: number;
}

// LengthType에서 정의된 문법을 가지고 있는 타입만을 사용하겠다고 제한을 걸 수 있도록 해주는게 extends

// length 속성을 가지고 있을 경우에만 제너릭 타입으로 사용할 수 있다
function logTextLength2<T extends LengthType>(text: T): number {
  return text.length;
}

logTextLength2('test');
logTextLength2({ length: 1, value: 2 });
logTextLength2(10)


// 제네릭 타입 제한 - keyof 이용하기
// 인터페이스에 정의된 속성 중에 하나만 받겠다고 제한을 걸 수 있도록 해주는게 keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// ShoppingItem에 정의된 key값들만 제너릭으로 사용 가능하다는 의미
// 예시 기준으로 name, price, stock만 넣을 수 있다는 의미이다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T  {
  return itemOption;
}

getShoppingItemOption('name');

// function getAllowedOptions<T extends keyof ShoppingItems>(option: T): T {
//   if (option === 'name' || option === 'address') {
//     console.log('option type is string');
//     return option;
//   }
//   if (option === 'price' || option === 'stock') {
//     console.log('option type is number');
//     return option;
//   }
// }
// getAllowedOptions('nothing');
// // const a = getAllowedOptions('name');
// // a.toUpperCase(); // Name