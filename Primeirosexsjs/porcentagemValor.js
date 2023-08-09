import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nDigite um número:');
let n1 = Number(ler());

console.log('\nQual porcentagem deseja saber??:');
let porcentagemLer = Number(ler());

let resultPorcent = (n1/100) * porcentagemLer;

console.log(`\n${porcentagemLer}% de ${n1} é |${resultPorcent}|`);