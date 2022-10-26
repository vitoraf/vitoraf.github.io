window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const chuteElemento = document.getElementById('chute')
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    var chute = e.results[0][0].transcript
    mostrarChute(chute)
    verificaValidade(chute)
}

function mostrarChute(chute) {
    chuteElemento.innerHTML = `
    <p>Você disse:</p>
    <span class="box">${chute}</span>

    `
}

recognition.addEventListener('end', () => recognition.start())