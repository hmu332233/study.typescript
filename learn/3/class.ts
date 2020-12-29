// ES5
function Person1(name, age) {
  this.name = name;
  this.age = age;
}
const person = new Person('test', 33);

// ES6 + 타입스크립트
class Person2 {
  // 타입스크립트에서는 클래스에서 멤버 변수를 미리 지정을 해놔야한다.
  name: string;
  age: number;

  // 변수의 접근 범위도 지정 가능
  public name2: string;
  private age2: number;
  readonly skill: string; // 읽기 전용 속성

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const capt = new Person('Steve', 100);
