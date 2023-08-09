import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o número a ser cortado no meio!: ');
let n1 = Number(ler());

let metade = n1/2;

console.log(`A metade de ${n1} é |${metade}|`);