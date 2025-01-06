function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; // This will cause a bug when both a and b are 0
  } else {
    return a / b; 
  }
}

console.log(foo(0, 0)); // Output: 0 (Incorrect)
console.log(foo(10, 2)); // Output: 5 (Correct)