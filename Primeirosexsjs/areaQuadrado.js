import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o valor do lado do quadrado: ');
let l1 = Number(ler());

let area = l1**2;

console.log(`A área do quadrado é igual é  |${area}|`);