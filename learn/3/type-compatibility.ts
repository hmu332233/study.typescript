interface Developer2 {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
}

let developer: Developer2;
let person: Person2;

// typescript는 구조적 관점에서 인터페이스와 타입을 바라보므로
// 구조적으로 포함이 된다면 호환이 될 수 있다
developer = person; // 구조적으로 포함되지 않으므로 호환 불가능
person = developer; // 구조적으로 포함되므로 호환 가능


// 함수
let add = (a: number) => {
  // ..
};

let sum = (a: number, b: number) => {
  // ..
};

// 구조적으로 sum이 add를 포함할 수 있는 관계가 됨
sum = add;
add = sum;


// 제네릭
interface Empty<T> {

}

// 구조적으로 인터페이느 내부가 비어있으므로 이 두개는 동일하다
let empty1: Empty<string>
let empty2: Empty<number>

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
 data: T;
}

// 제네릭에 따라서도 서로 다른 구조로 인식함
let notEmpty1: NotEmpty<string>
let notEmpty2: NotEmpty<number>

notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;
