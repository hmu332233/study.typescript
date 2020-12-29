// 상수값을 지정하기 위함이고 타입으로써의 역할도 할 수 있다.

// 숫자형 이넘
// 다른 언어와 마찬가지로 별도의 값을 지정하지 않으면 0부터 시작한다.
enum Shoes {
  Nike,
  Adidas,
}

const myShoes = Shoes.Nike;
console.log(myShoes); // 0

// 문자형 이넘
enum Status {
  Complete = 'COMPLETE',
  Cancel = 'CANCEL',
}

console.log(Status.Complete); // COMPLETE

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}


// 이것처럼 타입으로서 사용할 수 있음
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    // ..
  }

  if (answer === Answer.No) {
    // ..
  }
}