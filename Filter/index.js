console.log('### FILTER ###');
/** Exemplo 01 */
console.log('### Exemplo 01 ###');

let profissionais = [
    {nome:'João', profissao: 'Engenheiro da Computação', sigla: 'ENGCOMP', experienciaEmAnos:1},
    {nome:'Joaquim', profissao: 'Engenheiro Ambiental', sigla: 'ENGAMB', experienciaEmAnos:3},
    {nome:'Maria', profissao: 'Engenheiro da Computação', sigla: 'ENGCOMP', experienciaEmAnos:2},
    {nome:'Rafael', profissao: 'Físico', sigla: 'FISICO', experienciaEmAnos:5},
    {nome:'Larissa', profissao: 'Engenheiro da Computação', sigla: 'ENGCOMP', experienciaEmAnos:4}
];

let proffisionaisEngenhariaComputacao = profissionais.filter(function(profisional){
    return profisional.sigla === 'ENGCOMP';
});

console.log(proffisionaisEngenhariaComputacao);