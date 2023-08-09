import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o número a ser dobrado: ');
let n1 = Number(ler());

let dobro = n1*2;

console.log(`O dobro de ${n1} é |${dobro}|`);
