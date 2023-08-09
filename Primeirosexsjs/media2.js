import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nInforme a primeira nota!!:');
let nota1 = Number(ler()); 

console.log('\nInforme a segunda nota!!:');
let nota2 = Number(ler());

console.log('\nInforme a terceira nota!!:');
let nota3 = Number(ler());

console.log('\nInforme a quarta nota!!:');
let nota4 = Number(ler());

console.log('\nInforme a quinta nota!!:');
let nota5 = Number(ler());

let media = (nota1+nota2+nota3+nota4+nota5) / 5;

console.log(`\nA média das notas ${nota1}, ${nota2}, ${nota3}, ${nota4} mais ${nota5} é de |${media}|`);