import prompt from 'prompt-sync';
let ler = prompt();

console.log('Digite a quantidade de açaís comprados:');
let qtdAcai = Number(ler());

let valorAcai = 13.50; 

let total = qtdAcai * valorAcai;

console.log(`\nComprando ${qtdAcai} açaí(s) o total da sua compra será de R$${total}`);