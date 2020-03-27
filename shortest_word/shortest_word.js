function findShort(s){
    var spl = s.split(" ");
    var shortest = 20;
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length < shortest) {
        shortest = spl[i].length;
        console.log(shortest);
      }
    }
    return shortest;
  }
      
  
  findShort("bitcoin take over the world maybe who knows perhaps testtest");