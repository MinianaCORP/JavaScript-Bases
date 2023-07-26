class Singleton {
  static instancia; //undefined
  nombre = '';

  constructor( nombre = '' ) {
    //La doble negación convierte a FALSE un undefined;
    if ( !!Singleton.instancia ) {
      return Singleton.instancia;
    }
    
    Singleton.instancia = this;
    this.nombre = nombre;
  }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');


//Por mas referencia que tenga instancia, siempre toma los valores de la primera;
console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia1 es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia1 es: ${ instancia3.nombre }`);