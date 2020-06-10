// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"


var greet = function(name) {
    let newName = name.toLowerCase()
    let rename = newName[0].toUpperCase() 
    newName = newName.substring(1)
    return "Hello " + rename + newName + "!"
    };
    