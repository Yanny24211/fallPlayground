//JS Functions
//by assigning values to the parameters, the function will use those as default values is no argument is passed in 
function adder(x = 0, y = 0){
    console.log(`The Result is ${x+y}`)
}

adder(18, 6);
adder(2, 4); 
adder(); 

//Functions can also be made anonymous(useful when you have to pass a function as a parameter into another function or in arrow functions)
(function (){
    console.log("I have no name")
})

const arr = [1, 7, 2, 9, 12]

const doubledArr = arr.map(element => element*2); 
console.log(doubledArr)

//TOP excercises
function add7(number){
    return number+7; 
}

function multiply(a, b){
    return a*b; 
}

let lastLetter = phrase => phrase.slice(-1); 
console.log(lastLetter('klfdwkj'));

let capitalize = word => word[0].toUpperCase() + word.slice(1).toLowerCase(); 

console.log(capitalize('racecAr')); 
