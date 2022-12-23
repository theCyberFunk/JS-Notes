//=== Controlling the Event Loop with Promises ==== //

import { readFile } from "fs";

const file = new Promise((resolve, reject) => {
  readFile("text.md", "utf8", (err, data) => {
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




//  WEDNESDAY.IS QUESTION //

async function main(str) {
  //    reverse(capiatlize(str)).then(res => console.log(res));
  let reversed = await reverse(str);
  let capitalized = capitalize(reversed);
  console.log(capitalized);
}

function capitalize(str) {
  return str.toUpperCase();
}

async function reverse(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str.split("").reverse().join(""));
    }, 2000);
  });
}

main("aditya");
