//FODA-SE
import prompt from 'prompt-sync'
import { separar } from './separar.js'
const ler = prompt()

console.log('Digite o que quiser pra sr seprarado pelo hífen')
var letters = ler()

let r = separar(letters)

console.log(r)