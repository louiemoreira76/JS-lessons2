//números naturais de 1 até 5
import prompt from 'prompt-sync'
import { somas } from './naturais.js';
const ler = prompt();

console.log('Insira um número e veja a soma dele com os anteriores')
var n = Number(ler())

let r = somas(n)

console.log(`A soma dos números naturais desse número ${n} até 1 é ${r}`)






