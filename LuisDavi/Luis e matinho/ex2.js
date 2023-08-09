import prompt from 'prompt-sync';
let ler = prompt();


console.log('Digite o valor em reais:');
let reais = Number(ler());

let dolar = 5.15;

let conversao = reais/dolar;

console.log(`\nR$${reais} é equivalente à US$${conversao} `);



