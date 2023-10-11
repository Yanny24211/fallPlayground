const fruits = ['Banana', 'Orange', 'Apple', 'Mango']; 

let size = fruits.length; 
console.log(fruits.toString())//returns the array as a string seperated by commas
console.log(fruits.join('*'))//returns the array as a string seperated by the arg in join()

fruits.push("Starfruit");
fruits.push("Dragonfruit");
console.log(fruits); 
fruits.pop()//pops the last element off

console.log(fruits.shift())//removes and returns first element and slides the rest down by one index
console.log(fruits)
fruits.unshift("Banana"); //does the exact opposite of shift

fruits[0] = "Kiwi"; 

