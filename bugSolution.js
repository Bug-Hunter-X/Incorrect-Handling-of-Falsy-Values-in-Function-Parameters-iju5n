function foo(a, b) {
  //Using loose comparison
  if (!a || !b) {
    return 0; // Handle falsy values
  }
  return a + b;
}

//Alternative solution:
function foo(a, b) {
    if (a === 0 || a === false || a == null || a === '' || b === 0 || b === false || b == null || b === '') {
      return 0; // Handle falsy values
    }
    return a + b;
  }

console.log(foo(0, 1)); // 0
console.log(foo(1, 0)); // 0
console.log(foo(false, 1)); // 0
console.log(foo(1, false)); // 0
console.log(foo('',1)); // 0