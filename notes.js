// === Controlling the Event Loop with Promises ==== //

const fs = require("fs");

const file = new Promise((resolve, reject) => {
  fs.readFile("text.md", "utf8", (err, data) => {
    if (err) reject(err);
    resolve(data);
  });
});

file
  .then((res) => console.log(res, "\nPrinted afterwards"))
  .catch((err) => console.log(err));

console.log("Printed before");
// ==================================== //
const delayedMessage = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("this is the first message"));
  }, 1000);
});

delayedMessage.then(() => console.log("Anything"));

// === Controlling the Event Loop with Promises ==== //

// === Factorial through recursion === //

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

// === Factorial through recursion === //

// === Making custom array method === //

Array.prototype.remove = function (value) {
  for (var i = this.length; i--; ) {
    if (this[i] === value) {
      this.splice(i, 1);
    }
  }
};

const arr = [1, 3, 5, 3, 7];
const value = 3;

arr.remove(value);
console.log(arr); // Output: [ 1, 5, 7 ]

// === Making custom array method === //

// === Array sort === //
let toSort = [1, 3, 5, 2, 6, 8];

// INSERTION SORT
// for (j = 2; j < arr.length; j++) {
//   let i = j - 1,
//     key = arr[j];

//   while (i > 0 && arr[i] > key) {
//     arr[i + 1] = arr[i];
//     i = i - 1;
//     arr[i + 1] = /*arr[j]*/ key;
//   }
// }

// JS NATIVE SORT
toSort.sort(function (a, b) {
  return a - b;
});
// === Array sort === //
