var a= 4+"7"; // esto es 47

var b = 4 * "7"; // esto es 28



//ejemplo 2  b = string

var a = 20;

var b = a + ""; 



// más ejemplos

var a = [1,2];
var b = [3,4]; 

a + b // En este ejemplo, por la concatenación, ambos arrays son obligados a convertirse en strings, y luego se juntan.

// === Explicit coercion ===

var a = 20;

var b = a + ""; 

var c = String( a );

console.log(c); // esto es igual a  convericion 20 string


var d = Number( c ); // esto es igual a  convercion 20 numero

// Otro ejemplo

var a = 30; 
var b = a.toString();

var c = "100"; 
var d = +c; // Unary operator '+' de forma explícita convierte a número

// más ejemplos

var num1 = "3.14"; 
var num2 = 5 + +num1; 

/*  
Number + Number = Number
Number + String = String
String + Number = String
String + String = String
*/


// Todos las propiedades de valor, son strings 