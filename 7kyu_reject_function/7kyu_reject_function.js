// Implement a function which filters out array values which satisfy the given predicate.

// reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]


function reject(array, predicate) {
    console.log(predicate);
    let arr = [];
      for(let i = 0; i < array.length; i++){ 
      if(predicate(array[i]) % 2 === 0){arr.push(array[i]);}
      }
      return arr;
    }