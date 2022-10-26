function verificaValidade(chute) {
    const numero = +chute

    if (!verificaNumero(numero)) {
        console.log('Valor válido')
        if (verificaIntervalo(numero)) {
            chuteElemento.innerHTML += `<p>O valor precisa estar no intervalo entre ${menorValor} e ${maiorValor}</p>`
        } else {
            if (numero === number) {
                document.getElementById('container').innerHTML =
                    `
                <h2>Você acertou!</h2>
                <h3>O número secreto é ${number}</h3>
                `
            } else if (numero < number) {
                chuteElemento.innerHTML += `<p>O número secreto é maior <i class="fa-solid fa-circle-up"></i></p>`
            } else {
                chuteElemento.innerHTML += `<p>O número secreto é menor <i class="fa-solid fa-circle-down"></i></p>`
            }
        }
    } else {
        chuteElemento.innerHTML += `<p>Valor inválido</p>`
    }
}

function verificaNumero(numero) {
    return Number.isNaN(numero)
}

function verificaIntervalo(numero) {
    return numero > maiorValor || numero < menorValor
} 