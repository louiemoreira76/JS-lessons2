import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nDigite o valor do lado do octógono: ');
let nlado = Number(ler());

let perimetro = nlado*8;

console.log(`\nO perímetro do octógono é de |${perimetro}|`);