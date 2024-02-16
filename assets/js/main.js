// EXERCISE 1
//     - Declare variable identify NUMBER with value 100
//     - Print in console

const number = 100; //Number
console.log(number);

// EXERCISE 2
//     - Declare constant identify as PI with value 3.14
//     - Print in console

const PI = 3.14; //number
console.log(PI);

// EXERCISE 2 / B
//      - Assigne to PI value 3.1416.
//      - What happen ?

//"you can't change the value of a constant because that would be an error"
    //const PI = 3.1416; //Number
    //console.log(PI);
// Console message: Uncaught SyntaxError: Identifier 'PI' has already been declared (at main.js:20:7)//

//  EXERCISE 2 / C
//      - Declare variable identify RADIUS with value 8
//      - Declare variable identify CIRCLE as result of RADIUS * 2 * PI
//      - Print variable CIRCLE in console

const radius = 8; //Number
const circle = radius * 2 * PI ;
console.log(circle);

// EXERCISE 3
//     - Declare variable identify NAME with value as CARLO
//     - Print in console
//     - Declare variable NAME as MARCO
//     - Pint in console

let name = "Carlo";// String
console.log(name); 

name = "Marco"; //String
console.log(name);

// EXERCISE 4
// Dichiara una variabile chiamata temperature e assegnale il valore 22.5. Successivamente, aumenta il suo valore di 5 e stampa il nuovo valore in console.

//     - Declare variable identify TEMPERATURE with value 22.5 
//     - Print in console
//     - Increase by 5 TEMPERATURE 
//     - Print in console

let temperature= 22.5; // number
console.log(temperature);

// temperature += 5;  // number
// console.log(temperature);

// temperature += 5;  // number
// console.log(temperature);

// Increas only with 5 decimal

let decimal = 0.5;  // number

temperature += decimal;
console.log(temperature);



// EXERCISE 5: Number
//What's the difference about number 3.14 and number 100? 
//Are they different? 
// Why?
//Which data type is one and which is the other?

// ANSWER

// In math 100 is a rational and dividible natural real number,
// while 3.14 (as PI) is an irrational number wich means that cannot be expressed as a ratio of two integers
// and its decimal expansion has an infinite number of digits after the decimal point, with no infinitely repeating pattern.
// In JS 100 is a integer number while 3.14 is a floating-point number and the maximum number of decimals is 17.


