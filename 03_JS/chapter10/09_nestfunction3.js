function outer() {
  var outvalue = 5678;
  function inner() {
    var invalue = 1234;
    // 내부 함수에서 외부 함수의 변수 사용 가능
    console.log('outvalue = ' + outvalue);
  }
  inner();
  // 외부 함수에서 내부 함수의 변수는 사용 불가
  console.log('invalue = ' + invalue);
}
outer();
