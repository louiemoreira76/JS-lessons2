import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite um número:');
let n1 = Number(ler());

n1++;

console.log(`O sucessor é |${n1}|`);