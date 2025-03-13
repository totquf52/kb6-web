function add(a, b) {
  return a + b;
}

function sum(n) {
  var s = 0;
  for (var i = 0; i <= n; i++) {
    s = add(s, i);
  }
  return s;
}

console.log('1~100 = ' + sum(100));
