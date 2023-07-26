let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];

console.log('Largo:', juegos.length);

juegos.forEach( (elemento, index, arr) => {
  console.log({ elemento, index, arr });
});

let nuevaLongitud = juegos.push( 'F-Zero' ); //Agregar al final

console.log( nuevaLongitud, juegos );

nuevaLongitud = juegos.unshift( 'Fire Emblem' ); //Agregar al inicio

console.log( nuevaLongitud, juegos );

let juegoBorrado = juegos.pop(); //Borrar último

console.log( juegoBorrado, juegos );





let juegosBorrados = juegos.splice( 1, 2 ); //Borra el indice hasta la cantidad del sgte argumento
console.log({ juegosBorrados, juegos });


let metroidIndex = juegos.indexOf( 'Metroid' ) //Ubicar el índica buscando por contenido, es Case Sensitive -> Mayúsculas y Minúsculas

console.log({ metroidIndex });