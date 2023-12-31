//if n is added at the end of a large number, it signifies that it's a BigInt
const num = 1348897893728947893447289347234234n; 
let str = "Hello";
let str2 = ' World!'; 
let phrase = `My program said ${str+str2}` //must use backticks to do this embed ` `
console.log(phrase); 
//bools are simple shown as true or false
let bool = 4 < 5;
console.log(bool)
//variables can also be set to null or undefined(if the variable is only initialized and not given a value)
console.log(typeof str2); //used to check datatype ( primitive or advanced like Objects)
let number = 5; 
let strnum = "135";

number = String(number); //converts to string
strnum = Number(strnum); //converts to number
let nums = '1, 5, 78, 9, 23, 12';
let myArray = nums.split(","); 
console.log(myArray);  //turned a string into an array by using split and specifying the delimitor

//Javascript cannot tell the difference between '', 0, and false if the == operator is used to compare them, === must be used since == will use type conversions
//1 = true, 0 = false, integers count as truthy values 
if (strnum < 200){
    console.log("This is a conditional statement");
}
else if(strnum > 200){
    console.log("This is a big number"); 
}
else{
    console.log("This isn't gonna get printed out"); 
}
//JS uses the following logical operators ==> AND = &&, OR = ||, NOT = !
let age = 5
if (age >= 14 && age <= 90){
    console.log("You are getting older :(");
}
else if (age <= 14 || age >= 90){
    console.log("You are not between 14 and 90");
}

//The following is the syntax for a ternary operator (shorthand if statement) ==> condition ? run this code : run this code instead
age == 5
    ? console.log("Yay you're 5 years old")
    : console.log("Noo ");

//Now multiple ternary operators will be used
let personAge = 200; 
let access; 

access =    (personAge < 10) ? "Child Access":
            (personAge >= 10 && personAge <=18)? "Teen Access":
            (personAge > 18 && personAge <=100)? "Adult Access":
            'You is dead'; 

console.log(access);

let result; 
let a = 1;
let b = 4; 

result = (a + b < 4)? 'Below':'over';

console.log(result)

let message; 
let login = "Employee"; 

message =   (login == "Employee")? 'Hello':
            (login == "Director")? 'Greetings':
            (login == '')? 'Invalid Login': '';

console.log(message);

let n = 9

switch(n){
    case 7: 
        console.log("7 was chosen"); 
        break; 
    
    case 8: 
        console.log("8 was chosen"); 
        break; 
    
    case 9: 
        console.log("9 was chosen");
        
    default: 
        console.log("Some other number was chosen"); 
}
//For the switch case statements, the break function should be used and a default case shouls also be used
//Also the cases wont work unless the data being compared is of the same TYPE and VALUE


