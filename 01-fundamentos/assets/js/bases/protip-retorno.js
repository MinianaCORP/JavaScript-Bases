function crearPersona( nombre, apellido ) {
  return {
    nombre: nombre
    , apellido: apellido
  }
}
const persona = crearPersona( 'Yoel', 'Carbajal' );
console.log( persona );



//Cuando la key del objeto es igual que el argumento de la función se puede utilzas así.
function crearPersona2( nombre, apellido ) {
  return {
    nombre
    , apellido
  }
}
const persona2 = crearPersona2( 'Yoel', 'Carbajal' );
console.log( persona2 );



//Si queremos hacer lo mismo con lambda simplificado se debe colocar un paréntesis antes para evitar errores
const crearPersona3 = ( nombre, apellido ) => ({ nombre, apellido });
console.log( crearPersona3( 'Yoel', 'Carbajal' ) );




//Para asignar valores de retorno a un esquema personalizado hacer lo siguiente
const imprimeArgumentos = ( aparte, ...args ) => {
  console.log( aparte );
  return args;
}


const [ nombre, apellido, edad, vivo ] = imprimeArgumentos( 'Hola aparte', 'Yoel', 'Carbajal', 31, true );
console.log({ nombre, apellido, edad, vivo });


const { apellido: nuevoApellido } = crearPersona2( 'Yoel', 'Carbajal' );
console.log({ nuevoApellido });





let personaje = {
  nombre: 'Tony Stark'
  , codeName: 'IronMan'
  , vivo: false
  , edad: 40
};

//DESESTRUCTURACIÓN DE ARGUMENTOS
//Los argumentos tienen el mismo nombre que los atributos del objeto
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 18 }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
}

//En el caso el objeto pasado no tiene un atributo, el argumento tiene un valor por default
imprimePropiedades( personaje );

