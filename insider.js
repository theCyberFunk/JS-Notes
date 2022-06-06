const delayedMessage = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("this is the first message"));
  }, 1000);
});

delayedMessage.then(() => console.log("Anything"));
