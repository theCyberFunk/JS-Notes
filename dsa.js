// === Array sort === //
let arr = [1, 3, 5, 2, 6, 8];

// INSERTION SORT
for (j = 2; j < arr.length; j++) {
  let i = j - 1,
    key = arr[j];

  while (i > 0 && arr[i] > key) {
    arr[i + 1] = arr[i];
    i = i - 1;
    arr[i + 1] = /*arr[j]*/ key;
  }
}

console.log(arr)

// JS NATIVE SORT

toSort.sort(function (a, b) {
  return a - b;
});
// === Array sort === //




// === Factorial through RECURSION === //
function factorial(x) {
  // if number is 0
  if (x == 0) {
    return 1;
  }

  // if number is positive
  else {
    console.log(x);
    return x * factorial(x - 1);
  }
}

console.log(factorial(4));
// === Factorial through RECURSION === //