console.log('### EVERY ###');
/** Exemplo 01 */
console.log('### Exemplo 01 ###');
let alunos = [
    {nome:'João', idade:21},
    {nome:'Maria', idade:18},
    {nome:'Joaquim', idade:20},
    {nome:'Larissa', idade:25}
];

let maioreDeIdade = alunos.every(function(aluno){
return aluno.idade >= 18;
});

console.log(maioreDeIdade);