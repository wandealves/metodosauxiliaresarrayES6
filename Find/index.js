console.log('### FIND ###');

/** Exemplo 01 */
console.log('### Exemplo 01 ###');
let carros = ['Ferrari', 'Fusca', 'Palio','Palio','Opala','Ladra'];

let carro = carros.find(function(car){
    return car === 'Ferrari';
});

console.log(carro);