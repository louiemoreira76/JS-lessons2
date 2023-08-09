import prompt from "prompt-sync";
let ler = prompt();

console.log('Digite 10 valores em graus Fahrenheit:')
let grausFahrenheit1 = Number(ler());
let grausFahrenheit2 = Number(ler());
let grausFahrenheit3 = Number(ler());
let grausFahrenheit4 = Number(ler());
let grausFahrenheit5 = Number(ler());
let grausFahrenheit6 = Number(ler());
let grausFahrenheit7 = Number(ler());
let grausFahrenheit8 = Number(ler());
let grausFahrenheit9 = Number(ler());
let grausFahrenheit10 = Number(ler());


let grausCelsius1 = ((grausFahrenheit1-32) * 5) /9;
let grausCelsius2 = ((grausFahrenheit2-32) * 5) /9;
let grausCelsius3= ((grausFahrenheit3-32) * 5) /9;
let grausCelsius4 = ((grausFahrenheit4-32) * 5) /9;
let grausCelsius5 = ((grausFahrenheit5-32) * 5) /9;
let grausCelsius6 = ((grausFahrenheit6-32) * 5) /9;
let grausCelsius7 = ((grausFahrenheit7-32) * 5) /9;
let grausCelsius8 = ((grausFahrenheit8-32) * 5) /9;
let grausCelsius9 = ((grausFahrenheit9-32) * 5) /9;
let grausCelsius10 = ((grausFahrenheit10-32) * 5) /9;


console.log (`${grausFahrenheit1} Fahrenheit equivale a ${grausCelsius1} Graus celsius!!`)

console.log (`${grausFahrenheit2} Fahrenheit equivale a ${grausCelsius2} Graus celsius!!`)

console.log (`${grausFahrenheit3} Fahrenheit equivale a ${grausCelsius3} Graus celsius!!`)

console.log (`${grausFahrenheit4} Fahrenheit equivale a ${grausCelsius4} Graus celsius!!`)

console.log (`${grausFahrenheit5} Fahrenheit equivale a ${grausCelsius5} Graus celsius!!`)

console.log (`${grausFahrenheit6} Fahrenheit equivale a ${grausCelsius6} Graus celsius!!`)

console.log (`${grausFahrenheit7} Fahrenheit equivale a ${grausCelsius7} Graus celsius!!`)

console.log (`${grausFahrenheit8} Fahrenheit equivale a ${grausCelsius8} Graus celsius!!`)

console.log (`${grausFahrenheit9} Fahrenheit equivale a ${grausCelsius9} Graus celsius!!`)

console.log (`${grausFahrenheit10} Fahrenheit equivale a ${grausCelsius10} Graus celsius!!`)
