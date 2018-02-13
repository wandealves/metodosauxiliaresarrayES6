console.log('### FOREACH ###');

/** Exemplo 01 */
console.log('### Exemplo 01 ###');

let nomes = ['Maria','João','Joaquim','Larissa'];

nomes.forEach(function(nome){
console.log(`O nome da pessoa  é: ${nome}`);
});

/** Exemplo 02 */
console.log('### Exemplo 02 ###');
function imprimirLogArray(nome){
    console.log(`O nome ${nome} foi definido em uma função não anônima`);
}
nomes.forEach(imprimirLogArray);
/** Exemplo 03 */
console.log('### Exemplo 03 ###');
nomes.forEach((nome) => console.log(`O nome da pessoa  é: ${nome}`));