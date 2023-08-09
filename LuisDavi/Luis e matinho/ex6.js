import prompt from 'prompt-sync';
let ler = prompt();


console.log ('Quantidade de acaí(s) pequeno(s):');
let qtdAcaiP = Number(ler());

console.log ('\nQuantidade de acaí(s) médio(s):');
let qtdAcaiM = Number(ler());

console.log ('\nQuantidade de acaí(s) grande(s):');
let qtdAcaiG = Number(ler());

let valorAcaiP = 13.50 * qtdAcaiP;

let valorAcaiM = 15 * qtdAcaiM;

let valorAcaiG = 17.50 * qtdAcaiG;

let valorTotal = valorAcaiP + valorAcaiM + valorAcaiG;

console.log (`\nO total da sua compra é de R$${valorTotal}!!`);