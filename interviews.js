// === Factorial through RECURSION === //

function factorial(x) {
    // if number is 0
    if (x == 0) {
      return 1;
    }
  
    // if number is positive
    else {
      return x * factorial(x - 1);
    }
  }

  // === Factorial through RECURSION === //
