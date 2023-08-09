import prompt from 'prompt-sync';
let ler = prompt();

console.log ('Digite o total da compra:');
let totalCompra = Number(ler());

console.log ('Digite a quantidade de parcelas:');
let qtdParcelas = Number(ler());

let valorParcelas = totalCompra / qtdParcelas;

console.log (`Sua compra de R$${totalCompra} parcelada em ${qtdParcelas}x de R$${valorParcelas} foi finalizada!!`);


