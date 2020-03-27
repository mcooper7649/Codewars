function positiveSum(arr) {
  let num = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
      num += arr[i];
    }
  }
//change return to console.log
  console.log(num);
}


positiveSum([1,-2,3,4,5]);
