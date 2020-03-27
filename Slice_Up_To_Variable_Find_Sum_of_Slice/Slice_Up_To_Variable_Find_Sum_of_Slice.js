function houseNumbersSum(inputArray) {
    //coding and coding..
      for (i = 0; i < inputArray.length; i++){
        if (inputArray[i] === 0){
         let newArr = inputArray.slice(0, i)      //Here we create a new Array and with a slice of the original starting at 0 index and ending on i.
         console.log(newArr);
         var sum = newArr.reduce(function(a, b) { return a + b;        }, 0);   //Reduce Method lets us Add Array Elements Together
         return sum;
         break;
         }
      }
        
    }
  
  houseNumbersSum([5, 1, 2, 3, 0, 5, 0, 2]);