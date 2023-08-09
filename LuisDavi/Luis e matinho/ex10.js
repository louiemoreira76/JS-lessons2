import prompt from "prompt-sync";
let ler = prompt();

console.log('Digite os graus em Fahrenheit:')
let grausFahrenheit = Number(ler());

let grausCelsius = ((grausFahrenheit-32) * 5) /9;

console.log (`${grausFahrenheit} Fahrenheit equivale a ${grausCelsius} Graus celsius!!`)