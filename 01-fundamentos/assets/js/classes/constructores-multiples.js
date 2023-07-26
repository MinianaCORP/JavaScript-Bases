class Persona {

  // Segundo constructor con artilugio de método estático y desestructuración de objetos
  static porObjeto ({ nombre, apellido, pais }) {
    return new Persona( nombre, apellido, pais );
  }
  
  constructor( nombre, apellido, pais ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
  }
}

const nombre1 = 'Yoel'
      , apellido1 = 'Carbajal'
      , pais1 = 'Perú';

const jonatan = {
  nombre: 'Jonatan'
  , apellido: 'Carbajal'
  , pais: 'Perú'
}

const persona1 = new Persona( nombre1, apellido1, pais1 )
const persona2 = Persona.porObjeto( jonatan );

persona1.getInfo();
persona2.getInfo();