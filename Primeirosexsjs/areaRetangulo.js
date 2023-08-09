import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o valor da base do retângulo: ');
let base = Number(ler());

console.log('Digite a altura do retângulo: ');
let altura = Number(ler());

let area = base*altura;

console.log(`A área do retângulo é de |${area}|`);