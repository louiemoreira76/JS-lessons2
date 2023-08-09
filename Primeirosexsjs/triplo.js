import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o número a ser triplicado: ');
let n1 = Number(ler());

let triplo = n1*3;

console.log(`O triplo de ${n1} é |${triplo}|`);