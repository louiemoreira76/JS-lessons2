import prompt from 'prompt-sync'
import { palidromo } from './palidromo.js'
const ler = prompt()

console.log('Digite uma palavra para ver se ela é um palídromo:')
var palavra = ler()

let r = palidromo(palavra)

console.log('E essa palavra ' + r)
