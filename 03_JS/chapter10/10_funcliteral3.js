// 함수선언식만 위로 호이스팅된다
console.log(
  '2 + 3 = ' +
    (function (a, b) {
      return a + b;
    })(2, 3)
);
