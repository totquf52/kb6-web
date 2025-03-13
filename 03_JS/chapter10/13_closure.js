function outer() {
  var value = 1234;
  function inner() {
    console.log('value = ' + value);
  }
  // 내부 함수에서 value값을 가져오기 때문에 정상 동작
  inner();
}
outer();
