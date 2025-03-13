function outer() {
  var value = 1234;
  function inner() {
    console.log('value = ' + value);
  }
  // value를 참조하고 있는 내부 함수를 리턴
  return inner;
}
// 받아온 내부함수를 다시 호출했으므로 정상 동작
var outin = outer();
outin();
