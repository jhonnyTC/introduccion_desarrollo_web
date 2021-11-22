// Switch es una forma diferente de validar, está depende del caso que sea verdad. 

var numero = 1; 
var resultado; 

/* Switch compara con un === por esa razón los elementos tiene que ser idénticos */ 

switch (numero) {
    case 1: 
        resultado = "Sí es uno";
        break;
    case 10: 
        resultado = "Sí es diez";
        break;
    case 100:
        resultado = "Sí es cien";
        break;
    default:   
        resultado = "No match"; 
}

console.log(resultado); 




// reto

var tijera = "tijera";
var piedra = "piedra";
var papel = "papel";

var juego = function Game(Usuario,Maquina) {
    switch(true){
        //Usuario con tijera
        case (Usuario===tijera && Maquina===tijera):
            console.log("Empate");
            break;
        case (Usuario===tijera && Maquina===piedra):
            console.log("Perdiste");
            break;
        case (Usuario===tijera && Maquina===papel):
            console.log("Ganaste");
            break;

        //Usuario con piedra
        case (Usuario===piedra && Maquina===piedra):
            console.log("Empate");
            break;
        case (Usuario===piedra && Maquina===papel):
            console.log("Perdiste");
            break;
        case (Usuario===piedra && Maquina===tijera):
            console.log("Ganaste");
            break

        //Usuario con papel
        case (Usuario===papel && Maquina===papel):
            console.log("Empate");
            break;
        case (Usuario===papel && Maquina===tijera):
            console.log("Perdiste");
            break;
        default:
            console.log("Ganaste");
        
    }   
    
    
}



juego(papel,piedra,tijera)