export function pontencicao (x,y){
    if(y == 0){
        return 1
    }

    if(x < 0 || y < 0){
        return 'Cálculo invalido'
    }


    let result = 1
    for(let cont = 1; cont <= y; cont++){
        result = result * x
    }
    return result
}