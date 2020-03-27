var array = [],
three = [];

function solution(array) {
for (i = 0, len = array.length; i < len; i++) {
     
    if(array[i] % 3 == 0){
        three.push(array[i]);    //Here we add our dividends of 3 to our array
      
     }
    if(array[i] % 5 == 0){
        three.push(array[i]);   //Here we add our dividends of 5 to our array
      }
    
    if(array[i] % 3 == 0 && array[i] % 5 == 0){  //Here I removed one of the entries if its a duplicate
      three.pop([i])
    }
        
    
     
   }
  console.log(three);
  var sum = three.reduce(function(a, b) { return a + b; }, 0);      //Here we find the sum of all array elements using reduce
  console.log(sum);
  return(sum);
  
  
 }

solution([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])