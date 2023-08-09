import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nInforme a primeira nota!!:');
let nota1 = Number(ler()); 

console.log('\nInforme a segunda nota!!:');
let nota2 = Number(ler());

console.log('\nInforme a terceira nota!!:');
let nota3 = Number(ler());

let media = (nota1+nota2+nota3) / 3;

console.log(`\nA média de ${nota1} com ${nota2} mais ${nota3} é de |${media}|`);
