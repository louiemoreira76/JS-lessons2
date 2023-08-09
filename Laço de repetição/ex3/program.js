//Faça um progrom com os n´meros e expoente 
import prompt from 'prompt-sync'
import { pontencicao } from './pontenciaoN.js'
const ler = prompt()

console.log("Digite um número para um cálculo:")
var num = Number(ler())

console.log('Digite o expoente para o cálculo:')
var ex = Number(ler())

let r = pontencicao(num,ex)

console.log('O resultado da exponeciação é ' + r)

