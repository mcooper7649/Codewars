// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] --> 42 (i.e. sum of 23 and 19)
// [99, 2, 2, 23, 19]  --> 122 (i.e. sum of 99 and 23)

function largestPairSum(numbers)
{
  //TODO: Write your Code here
  
  numbers.sort(function(a, b){return a-b})
  
  numbers.reverse()
  
  let total = numbers[0] + numbers[1];
  let newSum = "Sum should be " + total
  
  console.log(newSum)
  
  return newSum
  
  }