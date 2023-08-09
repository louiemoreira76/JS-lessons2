export function palidromo (x){
    let texto = ''
    for(let cont = 0; cont < x.length; cont++){
        texto = x.charAt(cont);
        
        if(texto == x){
            return 'é palídromo'
        }
        else('não é palídromo')
    }
}

