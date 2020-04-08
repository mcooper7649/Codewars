// Welcome to the Codewars Bar!
// Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

// Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.

// Example parties:
// Input 0:
// "1 beer"

// Output 0:
// "1 glass of water"

// Explaination 0:
// You drank one standard drink

// Input 1:
// "1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"

// Output 1:
// "10 glasses of water"

// Explaination 1:
// You drank ten standard drinks


function hydrate(s) {
    // your code here
    let count = 0;
    let res = 0;
  
    let newArr = s.split(" ")
    newArr.forEach(element => {
    res = element.charAt(0)
    let nes = Number(res)
    if (nes > 0){
    count += nes
    console.log(nes)
    
    
  }});
  
  if ( count == 1 ){
  return count + " glass of water"
  }else{
  return count + " glasses of water"
  }
    
  }