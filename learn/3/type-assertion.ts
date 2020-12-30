let a;
a = 20;
a = 'test';
let b = a as string;
// 타입스크립트보다 개발자가 스스로 타입을 잘 알고 있을때?
// 이 때 타입은 이거다 라고 개발자가 지정을 해줄 수 있음

// 주로 DOM API 사용시에 자주 사용하게 됨
// 아래와 같이 div라는게 이 코드를 실행할때는 무조건 있을 것이다 라고 확신할 수 있을 때
// 타입 단언을 이용해서 이게 null이 아니라 HTMLDivElement라고 단언을 해줄 수 있음
const div = document.querySelector('div') as HTMLDivElement;