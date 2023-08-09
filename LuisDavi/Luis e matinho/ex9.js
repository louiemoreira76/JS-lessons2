import prompt from "prompt-sync";
let ler = prompt();

console.log ('Informe o total de eleitores:');
let totalEleitores = Number(ler());

console.log ('Informe os votos brancos:');
let votosBrancos = Number(ler());

console.log ('Informe os votos nulos:');
let votosNulos = Number(ler());

console.log ('Informe os votos válidos:');
let votosValidos = Number(ler());


let porcentBrancos = parseInt((votosBrancos * 100) / totalEleitores);

let porcentNulos = parseInt((votosNulos * 100) / totalEleitores);

let porcentValidos = parseInt((votosValidos * 100) / totalEleitores);

console.log (`\nVotos Brancos ${porcentBrancos}%`);

console.log (`Votos Nulos ${porcentNulos}%`);

console.log (`Votos Válidos ${porcentValidos}%`);