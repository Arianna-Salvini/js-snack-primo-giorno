// EXERCICE 1
//     - Declare variable identify NUMBER with value 100
//     - Print in console

const number = 100; //Number
console.log(number);

// EXERCICE 2
//     - Declare constant identify as PI with value 3.14
//     - Print in console

const PI = 3.14; //number
console.log(PI);

// EXERCICE 2 / B
//      - Assigne to PI value 3.1416.
//      - What happen ?

//"you can't change the value of a constant because that would be an error"
    //const PI = 3.1416; //Number
    //console.log(PI);
// Console message: Uncaught SyntaxError: Identifier 'PI' has already been declared (at main.js:20:7)//

//  EXERCICE 2 / C
//      - Declare variable identify RADIUS with value 8
//      - Declare variable identify CIRCLE as result of RADIUS * 2 * PI
//      - Print variable CIRCLE in console

const radius = 8; //Number
const circle = radius * 2 * PI ;
console.log(circle);

// EXERCICE 3
//     - Declare variable identify NAME with value as CARLO
//     - Print in console
//     - Declare variable NAME as MARCO
//     - Pint in console

let name = "Carlo";// String
console.log(name); 

name = "Marco"; //String
console.log(name);

// ESERCIZIO 4
// Dichiara una variabile chiamata temperature e assegnale il valore 22.5. Successivamente, aumenta il suo valore di 5 e stampa il nuovo valore in console.

//     - Declare variable identify TEMPERATURE with value 22.5 
//     - Print in console
//     - Increase by 5 TEMPERATURE 
//     - Print in console

let temperature= 22.5;
console.log(temperature);

temperature += 5;
console.log(temperature);

temperature += 5;
console.log(temperature);

