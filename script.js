// Create an array of bands (strings) named myBands, or use the one supplied (use all lowercase letters).
let myBands = ["capstan", "blink-182", "hot mulligan", "taking back sunday", "janelle monae", "willow smith", "lizzo", "mom jeans", "modern baseball", "knuckle puck", "neck Deep", "bob dylan", "microwave", "jimmy eat world", "leonard cohen", "the beatles", "jimmy hendrix", "prince", "the eagles", "lil nas x", "kick puncher"];

// Create a prompt to get the user's favorite band and store it in a variable called userChoice.
let userChoice = prompt("Favorite band?");

// Converts the user's answer to lowercase.
let userChoiceLower = userChoice.toLowerCase();

// Now check the myBands array to see if it contains the user's answer.
// If the user's band is not in the array, alert "Never heard of them!"
// HINT: you'll need to use indexOf and find out what it returns if the item isn't found in the array.


// If it is in the array, alert "OMG! I love them too!"


// Bonus: instead of alerting - add an html element with an id and use innerText to print the message to the HTML