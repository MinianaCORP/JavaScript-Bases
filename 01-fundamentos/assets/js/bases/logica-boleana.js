const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

//El "&&" en asignación pregunta cada valor, si retorna verdadero todos, muestra el último
//Si alguno es false, regresa falso, es como un "IF" y su resultado //if (primero && segundo && tercero)
const a1 = true && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;

//asignarle un valor a una variable da como resultado true, si es undefined o null, da como resultado false.
//false, undefined, null => false
//true, cualquier asignación
const a3 = soyFalso || 'Algun valor';
//En el caso de "||" con que encuentre un resultado true, retorna el true
const a4 = soyFalso || soyUndefined || soyNull || 'Algun otro valor' || true;

console.log({ a1, a2, a3, a4 });