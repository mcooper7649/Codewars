function take(arr, n) {
    // Your code here
      let newArr = arr.slice(0, n)
      console.log(newArr);
      return newArr;
  }
  
  
  take([2,3,2,4,1,3], 3);