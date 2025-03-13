// 함수선언식만 위로 호이스팅된다
console.log('2 + 3 = ' + add1(2, 3));
console.log('4 + 5 = ' + add2(4, 5));

// 함수선언식
function add1(a, b) {
  return a + b;
}

// 함수표현식
var add2 = function (a, b) {
  return a + b;
};
