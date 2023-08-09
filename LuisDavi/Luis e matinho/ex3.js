import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o valor em dolar:');
let dolar = Number(ler());

let real = 5.15;

let conversao = real*dolar;

console.log(`\nUS$ ${dolar} é equivalente à R$ ${conversao}`);
