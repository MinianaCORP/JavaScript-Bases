let personaje = {
  nombre: 'Tony Stark'
  , codeName: 'IronMan'
  , vivo: false
  , edad: 40
  , coords: {
    lat: 34.034
    , lng: -118.78
  }
  , trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ]
  , direccion: {
    zip: '10880, 90265'
    , ubicacion: 'Malibu, California'
  }
  , ultimaPelicula: 'Infinity War'
};

console.log( personaje );
console.log( 'Nombre', personaje.nombre );
console.log( 'Nombre', personaje['nombre'] );
console.log( 'Edad', personaje.edad );

console.log( 'Coors', personaje.coords );
console.log( 'Lat', personaje.coords.lat );

console.log( 'No. Trajes', personaje.trajes.length );


// Mas detalles
delete personaje.edad;


console.log(personaje.edad);


const entriesPares = Object.entries( personaje );
console.log( entriesPares );

//Si cambiamos un objeto a constante, las propiedades se pueden cambiar, para que no se cambie nada, se utiliza freeze.
Object.freeze( personaje );


//Ojo, el freeze solo evita que se cambie el primer nivel de las propiedades, si algun atributo, tiene un objeto o array, estos si podrán cambiarse.
Object.freeze( personaje.coords );


const propiedades = Object.getOwnPropertyNames( personaje );
console.log( propiedades );

const valores = Object.values( personaje );
console.log( valores );