function saludar() {
  console.log( arguments );
  console.log( 'Hola Mundo' );
}
// saludar( 'Yoel', 40, true, 'Costa Rica' );



// Utilizar constantes para funciones anonimas ayuda a evitar errores al declarar variables del mismo nombre que una funcion
const saludar2 = function( nombre ) {
  console.log( arguments );
  console.log( 'Hola ' + nombre );
};
// saludar2( 'Yoel', 40, true, 'Costa Rica' );



const sumaFlecha = ( a, b ) => {
  return a + b;
}
console.log( sumaFlecha(1, 2) );


//Solo cuando es de una línea
const sumaFlechaSimplificada = ( a, b ) => a + b;
console.log( sumaFlechaSimplificada(3, 4) );


//cuando solo hay un argumento no es necesario el paréntesis     const saludarFlecha = nombre => { ... }
//no funcionan los argumentos dentro de las funciones flecha o arrowFunctions o lambdaFunctions, excepto si se hace con un artilugio
const saludarFlecha = ( aparte, ...cualquierCosa ) => {
  console.log( 'Hola Flecha' );
  console.log({ aparte, cualquierCosa });
}
saludarFlecha( 'esto es adicional', 40, true, 'Costa Rica' );