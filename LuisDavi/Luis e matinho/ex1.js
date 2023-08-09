import prompt from 'prompt-sync';
let ler = prompt();

console.log ('Digite a quantidade de KG!:')
let KG = Number(ler());

let conversao = KG*1000;

console.log (`\n${KG}kg equivale a ${conversao} gramas!`)

