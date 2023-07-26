//Sirve como el coalesce del SQL, para reemplazar undefined o null
console.log( undefined || 'Hola' );
console.log( null || 'Hola' );


const diasEnLetras = {
  0: () => 'domingo'
  , 1: () => 'lunes'
  , 2: () => 'martes'
  , 3: () => 'miércoles'
  , 4: () => 'jueves'
  , 5: () => 'viernes'
  , 6: () => 'sábado'
}

const diasEnLetras2 = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

// () => 'domingo' === () => { return 'domingo' } === function() { return 'domingo' }

console.log( diasEnLetras[1] );
console.log( diasEnLetras[1]() );
console.log( diasEnLetras2[1] );
