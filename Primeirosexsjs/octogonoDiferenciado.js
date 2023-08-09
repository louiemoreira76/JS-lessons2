import prompt from 'prompt-sync';
let ler = prompt();

console.log('\nOs lados do octógono são iguais? Sim ou não');
let lerIf = ler();


    if (lerIf == 'sim') {
        console.log('\nDigite o valor do lado:');
        let nlado = Number(ler());

        let perimetro = nlado*8;

    } else if (lerIf == 'não') {
        console.log('\nDigite o valor de cada lado:');

        console.log('\nlado 1:');
        let nlado1 = Number(ler());

        console.log('\nlado 2:');
        let nlado2 = Number(ler());

        console.log('\nlado 3:');
        let nlado3 = Number(ler());

        console.log('\nlado 4:');
        let nlado4 = Number(ler());

        console.log('\nlado 5:');
        let nlado5 = Number(ler());

        console.log('\nlado 6:');
        let nlado6 = Number(ler());

        console.log('\nlado 7:');
        let nlado7 = Number(ler());

        console.log('\nlado 8:');
        let nlado8 = Number(ler());

        let perimetro = nlado*8;

    }


console.log(`\nO perímetro do octógono é de |${perimetro}|`);