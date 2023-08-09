export function fatorial (x){

    let fatoracao = 1
    for(let cont = 1; cont <= x; cont--){
        fatoracao = cont * fatoracao
    }
    return fatoracao
}