let numeroGerado = parseInt(Math.random() * 100);
console.log(numeroGerado);
let tentativas = [];

numero.onchange = () => {
    let numeroDigitado = Number(numero.value);
    if(tentativas.length < 10){
        if(tentativas.length > 0){
            for(let i = 0; i < tentativas.length; i++){
                if(tentativas[i] == numeroDigitado){
                    alert("Este número ja foi digitado");
                    numero.value = '';
                    return;
                }
            }
        }
        tentativas.push(numeroDigitado);
        if(numeroDigitado > numeroGerado){
            alert('Bia esta pensando em numero menor')
        }else if(numeroDigitado < numeroGerado){
            alert('Bia esta pensando em numero maior')
        }else{
            mensagem.innerHTML = `Parabéns o número é: ${numeroGerado}`;
            resultado.style.display = 'block';
            numero.disabled = true;
            bia.src = "bia-sorrindo.png";
            reiniciar.innerText = 'Jogar novamente';
            reiniciar.style.display = 'block';
        }
        numero.value = '';
        palpites.innerHTML = tentativas.join('-');
    } else {
        bia.src = "bia-chorando.png";
        mensagem.innerHTML = `Você não acertou o número era: ${numeroGerado}`;
        resultado.style.display = 'block';
        reiniciar.style.display = 'block';
    }
}


reiniciar.onclick = () => {
    window.location.reload();
}










// while(tentativas <= 10){
//     //verifica se é um numero válido
//     if(!/[0-9]/.test(Number(numero.value))){
//         alert("Escreva um número válido!");
//         numero.value = '';
//     } else {
//         tentativas++;
//     }
// }

