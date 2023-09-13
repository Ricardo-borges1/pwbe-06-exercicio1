/********************************************************************
 * Objetivo: Calcular o imc de uma pessoa
 * Data: 13/09/2023
 * Autor Ricardo Borges
 * Versão: 1.0
 ********************************************************************/

function CalcularIMC (peso,altura){
    altura=altura/100
    return peso / (altura * altura);
}

function ClassificarIMC (imc){
    if (imc < 18.5){
        return "Abaixo do peso";
    }else if (imc >= 18.5 && imc <25) {
        return "peso normal";
    }else if (imc >= 25 && imc <30){
        return "Acima do peso";
    }else if (imc >= 30 && imc <35){
        return "Obesidade I"
    }else if (imc >= 35 && imc <40) {
        return "Obesidade II"
    } else {
        return "Obesidade III"
    }
}

module.exports = {
    CalcularIMC,
    ClassificarIMC
};

