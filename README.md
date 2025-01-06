# Uncommon JavaScript Bug: Zero Division Handling

This repository demonstrates an uncommon bug in JavaScript related to zero division handling. The function `foo` incorrectly returns 0 when both input parameters are 0, instead of raising an error or returning `NaN`. 

## Bug Description

The function `foo` is designed to divide `a` by `b`. It contains a conditional check to handle cases where either `a` or `b` is 0, returning 0 in such scenarios.  The bug lies in the fact that this condition does not properly handle the case where *both* `a` and `b` are simultaneously zero, which leads to an incorrect output.  The function should appropriately handle division by zero, ideally returning `NaN` or throwing an error.

## How to Reproduce

1. Clone the repository.
2. Open `bug.js`.
3. Run the JavaScript code.  You'll observe that `foo(0,0)` returns 0.

## Solution

The `bugSolution.js` file provides a corrected version of the `foo` function that correctly handles the case where both input parameters are 0.