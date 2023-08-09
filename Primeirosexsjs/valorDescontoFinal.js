import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nDigite preço do produto!!: ');
let npreco = Number(ler());

console.log('\nDigite a porcentagem de desconto!!: ');
let numeroDesconto = Number(ler());

let desconto = (npreco*numeroDesconto)/100;

let precoFinal = npreco - desconto;

console.log(`\nO valor com desconto a ser pago será de |${precoFinal}|!!`);