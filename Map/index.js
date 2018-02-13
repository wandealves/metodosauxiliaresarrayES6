console.log('### MAP ###');
/** Exemplo 01 */
console.log('### Exemplo 01 ###');
let numeros = [1,2,3,4,5]

let triplo = numeros.map(function(numero){
    return numero * 3;
});

console.log(`O Triplo é: ${triplo}`);//[3,6,9,12,15]