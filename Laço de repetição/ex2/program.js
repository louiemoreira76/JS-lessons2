//fatorial dos numeros 
import prompt from 'prompt-sync'
import { fatorial } from './fatorial.js'
const ler = prompt()

console.log("Olá vamos fatorar o número que você digitar:")
var n = Number(ler())

let r = fatorial(n)

console.log(`O fatorial do número digitado é ${r}`)

