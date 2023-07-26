const yoel = {
  nombre: 'Yoel'
  , edad: 31
  , imprimir () {
    console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
  }
}

const carbajal = {
  nombre: 'Carbajal'
  , edad: 15
  , imprimir () {
    console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
  }
}


function Persona( nombre, edad ) {
  console.log('Se ejecutó la función');

  this.nombre = nombre;
  this.edad = edad;
  
  this.imprimir = function() {
    console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
  }
}

const jonatan = new Persona( 'Jonatan', 31 );
const donovan = new Persona( 'Donovan', 15 );

jonatan.imprimir();
donovan.imprimir();