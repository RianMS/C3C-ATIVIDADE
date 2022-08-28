/*Questão 01 - Tipos de Triângulo
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: */

function triangulos() {

    const campo3 = document.querySelector('#campo3')
    const campo4 = document.querySelector('#campo4')
    const campo5 = document.querySelector('#campo5')
    let x = campo3.value;
    let z = campo4.value;
    let y = campo5.value;
    let retorno3 = document.querySelector('#retorno3')

    if (x == z && z == y) {

        console.log("Forma um triângulo equilátero");
        retorno3.innerHTML = "Forma um triângulo equilátero"
    } else if (x == z || z == y || y == x) {
        console.log("Forma um triângulo isósceles");
        retorno3.innerHTML = "Forma um triângulo isósceles"
    } else {
        console.log("Forma um triângulo escaleno");
        retorno3.innerHTML = "Forma um triângulo escaleno"
    }
}

/*Questão 02 - Bhaskara
        Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore
        um método em JS cujo objetivo é resolver a fórmula de Bhaskara.*/

        function calcBhaskara(){

            const campo6 = document.querySelector('#campo6')
            const campo7 = document.querySelector('#campo7')
            const campo8 = document.querySelector('#campo8')
        
            let a = campo6.value;
            let b = campo7.value;
            let c = campo8.value;
        
            console.log(a+' '+b+' '+c)
        
        
            let retorno4 = document.querySelector('#retorno4')
        
            let doubleB = b * b;
            let delta = doubleB -4 * a * c;
            if (delta < 0) {
                return retorno4.innerHTML= "Delta é negativo"
                
            }
            let notB = b * (-1); 
            console.log(delta)
        
            let rDelta = Math.sqrt(delta); 
        
            let divisor = 2 * a;
        
        
            let xLinha1 = (notB + rDelta) / divisor; 
        
            let xLinha2 = (notB - rDelta) / divisor;
            
           return retorno4.innerHTML= [xLinha1, xLinha2]
        }


/*Questão 03 - Sistema de Notas
Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação: */

function calcMedia() {
    let campo = document.querySelector("#campo");
    let valor = campo.value;
    const nota = document.querySelector('#nota');
    if (valor > 37) {
        for (let i = valor; i < valor + 6; i++) {
            if (i % 5 === 0) {
                console.log(valor)
                if (i - valor < 3) {
                    valor = i;
                }
                nota.innerHTML = valor;
                break;
            }
        }

    } else {
        nota.innerHTML = 'Reprovado'
    }
}


/*Questão 04 - LuidyMoura
Criar um método que irá receber um valor inteiro como argumento e retornar um array com uma contagem até o argumento como limite.*/



function calcLuidyMoura() {

    const campo = document.querySelector('#campo2')
    let N1 = campo.value;
    let retorno = document.querySelector('#retorno')
    let arrayy = [];

    for (let i = 1; i <= N1; i++) {
        if (i % 5 === 0 && i % 9 === 0) {
            arrayy.push("LuidyMoura”")
        } else if (i % 5 === 0) {
            arrayy.push("luidy")
        } else if (i % 9 === 0) {
            arrayy.push("moura")
        } else {
            arrayy.push(i)
        }
    }
    retorno.innerHTML = arrayy
}