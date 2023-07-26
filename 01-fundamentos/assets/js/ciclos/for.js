const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];

console.warn('For in');
//Cuidado con los for anidados, la variable interna del for puede replicarse
for ( let index in heroes ) {
  console.log( heroes[index] );
}

// console.warn('For off');
// for ( let item of heroes ) {
//   console.log( item );
// }