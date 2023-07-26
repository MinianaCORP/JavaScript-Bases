let a = 10
  , b = 20
  , c = 'Hola '
  , d = 'Spiderman'
  , x = a + b;

const saludo = c + d;

c = 'Hola de nuevo';

// Cuando se coloca llave en el console log, es para que se muestre el resultado como un objeto.
// Dicho de otra manera, si coloco "console.log(a)" -> muestra el valor de la variable "a"
// Si coloco "console.log({ a })" -> muestra "a: el valor de a"
// console.table({ a, b, c, x });