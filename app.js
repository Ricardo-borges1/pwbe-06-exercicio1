const readline = require('readline');
const { CalcularIMC, ClassificarIMC } = require('./modulos/calcularIMC');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite seu peso em quilogramas: ', (peso) => {
    rl.question('Digite sua altura em centimetros: ', (altura) => {

        const pesoNum = Number(peso);
        const alturaNum = Number(altura);

        if (!isNaN(pesoNum) && !isNaN(alturaNum) && pesoNum > 0 && alturaNum > 0) {
            const imc = CalcularIMC(pesoNum, alturaNum); 
            const classificacao = ClassificarIMC(imc);
            console.log(`Seu IMC é ${imc.toFixed(2)}, o que indica que seu peso é: ${classificacao}`);
        } else {
            console.log('ERRO: Valores inválidos. Certifique-se de inserir valores numéricos válidos.');
        }

        rl.close();
    });
});