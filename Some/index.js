console.log('### SOME ###');
/** Exemplo 01 */
console.log('### Exemplo 01 ###');
let alunos = [
    {nome:'João', idade:15},
    {nome:'Maria', idade:17},
    {nome:'Joaquim', idade:20},
    {nome:'Larissa', idade:25}
];

let maioreDeIdade = alunos.some(function(aluno){
return aluno.idade >= 18;
});

console.log(maioreDeIdade);