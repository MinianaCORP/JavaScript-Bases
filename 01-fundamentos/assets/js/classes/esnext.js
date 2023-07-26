class Rectangulo {
  #area = 0;

  constructor( base = 0, altura = 0 ) {
    this.base = base;
    this.altura = altura;

    this.#area = base * altura;    

    this.#nuevoMetodo();
  }

  //Método privado
  #nuevoMetodo() {
    console.log( this.#area * 2);
  }
}

const rectangulo = new Rectangulo(10, 15);

// rectangulo.#area = 10;

console.log( rectangulo );
