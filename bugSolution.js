function foo(a, b) {
  if (a === 0 && b === 0) { 
    return NaN; // Handle case when both a and b are 0
  } else if (b === 0) {
    return Infinity; // Handle division by zero
  } else {
    return a / b; 
  }
}

console.log(foo(0, 0)); // Output: NaN
console.log(foo(10, 2)); // Output: 5
console.log(foo(10, 0)); // Output: Infinity