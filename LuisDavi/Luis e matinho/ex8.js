import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite o valor do capital:');
let capital = Number(ler());

console.log('Digite a portangem da taxa:');
let taxa = Number(ler());

console.log('Digite a quantidade de tempo (em meses):');
let meses = Number(ler());

let calcJuros = (capital*taxa*meses) /100;

let valoMontante = capital + calcJuros;

console.log(`O montante a ser pago pelo empréstimo no valor de R$${capital} é de R$${valoMontante}`);






