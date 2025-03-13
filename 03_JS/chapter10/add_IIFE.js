// IIFE, Immediately-Invoked Function Expression : 즉시실행함수

const a = 8;
function multiply() {
  console.log(a * 2);
}
multiply();

(function () {
  console.log(a * 2);
})();

// (function () {
//     console.log(a * 2);
//   }());
