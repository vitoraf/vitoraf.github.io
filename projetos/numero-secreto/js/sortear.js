const menorValor = 0
const maiorValor = 100
var number = sortearValor();
const menorValorCampo = document.getElementById('menorValor')
const maiorValorCampo = document.getElementById('maiorValor')

menorValorCampo.innerText = menorValor;
maiorValorCampo.innerText = maiorValor;

function sortearValor() {
    return parseInt(Math.random() * maiorValor + 1)

}

