import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nDigite o valor da base do Triângulo: ');
let base = Number(ler());

console.log('\nDigite o valor da altura do Triângulo: ');
let altura = Number(ler());

let area = (base*altura)/2;

console.log(`\nA área do triângulo é de |${area}|`);