//declarativas

function miFuncion(){
    return 3;   
}

miFuncion();

//expresion

var miFuncion = function(a,b){
    return a + b;
}

miFuncion();


//ejemplo

function saludarEstudiante(estudiante) {
    console.log(`hola ${ estudiante}`);
  }

saludarEstudiante("diego");



// ejemplo 2

function sumar(a,b) {
    
    
    var resultado= a + b; 
    return resultado;                                           
}

sumar(1,2);


//ejemplo 3 

var miNombre = "jhonny"; //scope global

function nombre(){
    var miApellido = "cevantes";
    console.log(miNombre + " " + miApellido); //scope local

}

nombre();