console.log('### REDUCE ###');
/** Exemplo 01 */
console.log('### Exemplo 01 ###');

let idades = [15,20,18,25];

let soma = 0;

soma = idades.reduce(function(soma,idade){
return soma + idade;
});

console.log(soma);