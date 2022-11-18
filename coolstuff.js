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
  