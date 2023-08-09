import prompt from 'prompt-sync'
const ler = prompt()

let vetor = []
var soma  = 0 

console.log('Digite a quantidade de números que você que deseja para o cálculo')
var qtd = Number(ler())

for(let cont = 0; cont < qtd; cont++){
    console.log('DIGITE A NOTA ' + (cont+1) + '°')
    vetor[cont] = Number(ler())
}

console.log('')
console.log('Notas digitadas:')
console.log(vetor.join(' - '))
console.log('')             

for(let item of vetor){
    soma = soma + item
}

const media = soma / qtd
const Maior = Math.max.apply(null, vetor)
const Menor = Math.min.apply(null, vetor)

console.log(`A média das notas digitadas é ${media}, a maior nota é ${Maior}, a menor é ${Menor}`)