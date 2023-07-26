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

class Heroe extends Persona {
  clan;

  constructor( nombre, codigo, frase ) {
    super( nombre, codigo, frase ); //siempre en la primera linea del constructor, por buenas prácticas

    this.clan = 'Los avengers';
  }

  quienSoy() {
    console.log(`Soy ${ this.nombre }, ${ this.clan }`);
    super.quienSoy();
  }
}

// const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino' );
const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino');

console.log({ spiderman });

spiderman.quienSoy();