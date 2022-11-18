//=== Controlling the Event Loop with Promises ==== //

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



// PAYTM INSIDER QUESTION //

const delayedMessage1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("this is the first message"));
    }, 1000);
  });
  
  delayedMessage1.then(() => console.log("Anything"));
  