// 일반 함수
function sum(a: number, b: number): number {
  return a + b;
}

sum(1, 2);

// 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {
  return a + b + c;
}

log('test')
log('test', 'test2')
log('test', 'test2', 'test3')