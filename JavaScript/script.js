function calcular(){
    let numero = document.querySelector("#numero1").value;
        let numeroEscolhido = Number(numero);

    let numero2 = document.querySelector("#numero2").value;
        let numeroEscolhido2 = Number(numero2);

    let resultado; 

    let operacao = document.querySelector("#operacao");
    let meuOperador = operacao.value; 
        if(meuOperador == 'soma'){
             resultado = numeroEscolhido + numeroEscolhido2;
        }
        if(meuOperador == 'sub'){
            resultado = numeroEscolhido - numero2;
        }
        if(meuOperador == 'divisao'){
            resultado = numeroEscolhido / numeroEscolhido2;
        }
        if(meuOperador == "multiplicacao"){
            resultado = numeroEscolhido * numeroEscolhido2;
        }

    let imprimirResultado = document.querySelector("#resultadoDaConta");
        imprimirResultado.innerHTML = `<em>O resultado da conta é ${resultado}</em>`;
} 