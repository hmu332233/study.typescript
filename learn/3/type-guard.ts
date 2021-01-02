interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'test', age: 33, skill: 'javascript' };
}

const user = introduce();
console.log(user.skill);

// 타입 단언을 사용했기 때문에 skill 사용 가능
if ((user as Developer).skill) {
  const skill = (user as Developer).skill;
  console.log(skill);
}

// 하지만 가독성이 매우 떨어짐

// is 문법이 타입 가드
function isDeveloper(target: Developer | Person): target is Developer  {
  return (target as Developer).skill !== undefined;
}

// 타입 가드 조건 밑으로 들어가면 타입 단언을 사용하지 않아도 해당 필드 값들을 사용 가능
// 실제로 많이 사용되는 패턴이기 때문에 기억해두기
if (isDeveloper(user)) {
  console.log(user.skill);
} else {
  console.log(user.age);
}
