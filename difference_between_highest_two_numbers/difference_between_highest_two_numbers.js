// #Difference between biggest 2 numbers

// You have an array of integers. You need to calcurate the difference between 1st biggest number and 2nd biggest number of an array.

//     diffBig2([10, 5, 2]);
// In this case, 1st biggest number is 10 and 2nd biggest number is 5. So, this function return 5, the result of 10 - 5.

// You can assume that the input array must have 2 or more elements.

// The input array has the sort() method disabled, so you will have to solve it in another way.

// function diffBig2(arr) {
//     arr.sort((a, b) => a - b)
//     let x = arr[arr.length - 1];
//     let y = arr[arr.length - 2];
//     let z = x - y;
//     return z;
// }   

//^^^^ Answer when sort is available


function diffBig2(arr) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < arr.length; i += 1) {
        if (arr[i - 1] > arr[i]) {
          done = false;
          var tmp = arr[i - 1];
          arr[i - 1] = arr[i];
          arr[i] = tmp;
        }
      }
    }
  
    let x = arr[arr.length - 1];
    let y = arr[arr.length - 2];
    let z = x - y;
    return z;
  }
  
  