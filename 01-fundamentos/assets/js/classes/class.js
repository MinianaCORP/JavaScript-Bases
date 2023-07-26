class Persona {

  static _conteo = 0;
  static get getConteo() {
    return `${ Persona._conteo } instancias`;
  }
  static mensaje() {
    console.log( this.nombre ); //undefined porque no trabaja con instancias (this)
    console.log( `Hola a todos, soy un método estático` );
  }

  nombre = '';
  codigo = '';
  frase = '';
  comida = '';

  constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    //No es con this, va directo, no con la instancia
    Persona._conteo++;
  }

  set setComidaFavorita( comida ) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
  }

  quienSoy() {
    //Puede haber funciones dentro
    // function nuevo() { }
    // const otra = () => { }
    // const ultima = function() { }
    console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
  }

  miFrase() {
    this.quienSoy();
    console.log(`${ this.frase }`);
  }
}


//Se pueden hacer metodos estáticos fuera de la clase


const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino' );
const ironman = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );


// spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';

console.log( spiderman.getComidaFavorita );

// Persona._conteo = 2;
console.log( 'Conteo estático', Persona._conteo );
console.log( Persona.getConteo );
Persona.mensaje();


//Creando propiedad estática externa.
Persona.propiedadExterna = 'Hola Mundo';
console.log( Persona.propiedadExterna );
console.log( Persona );