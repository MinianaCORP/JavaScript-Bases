//En JS todos los datos primitivos se pasan por valor
let a = 10;
let b = 10;

a = 30;

console.log({ a, b });

let juan = { nombre: 'Juan' };
let ana = juan;

ana.nombre = 'Ana';

//En JS todos los objetos son pasados por referencia
console.log({ juan, ana });


const cambiaNombre = ( persona ) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );

console.log( peter, tony );









//Para evitar el pase por referencia de los objetos cuando queremos hacer un mirror de un objeto a otra variabla, se hace lo siguiente
//los "..." dentro de una función por argumento, se llama parámetro REST, une todos los argumentos y lo transforma en una variable
//cuando se utiliza fuera de un argumento de función se llama operador spread, para que rompa la referencia de otro objeto.

let juan2 = { nombre: 'Juan' };
let ana2 = { ...juan };

ana2.nombre = 'Ana';

console.log({ juan2, ana2 });



//Para que en una función no sea parámetro REST se colocan llaves antes del argumento

const cambiaNombre2 = ({ ...persona }) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter2 = { nombre: 'Peter' };
let tony2 = cambiaNombre2( peter );

console.log( peter2, tony2 );





//PARA ARREGLOS, Operador SPREAD y parámetro REST.
const frutas = [ 'Manzana', 'Pera', 'Piña' ];
const otrasFrutas = frutas;

otrasFrutas.push( 'Mango' );

console.table({ frutas, otrasFrutas });


//Con Operador Spread
const frutas2 = [ 'Manzana', 'Pera', 'Piña' ];
const otrasFrutas2 = [...frutas2];
//Tambien se puede hacer con slice(), sería << const otrasFrutas2 = frutas2.slice(); >>






otrasFrutas2.push( 'Mango' );

console.table({ frutas2, otrasFrutas2 });




//Para calcular el tiempo entre líneas de código es:
console.time('clave');
console.log('Hola');
console.timeEnd('clave');