function digitize(n) {
    //this converts our array into a string and then a number
      const arrayOfDigits = Array.from(String(n), Number);   // Here we take our Array, convert to string from N and make it a number
      
      
      console.log(arrayOfDigits);
      return arrayOfDigits.reverse();  //here we returned it reversed
    }
     
    
    digitize();