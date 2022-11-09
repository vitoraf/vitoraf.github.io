var andares = 13;
var elv = document.getElementsByClassName("elv")
var paradas = [];
for (let i = 0; i < elv.length; i++) {

    for (let j = 0; j <= andares; j++) {
        elv[i].innerHTML +=
            "<li class='floor'><button type='button' onclick='chamarElevador(" +
            j +
            "," +
            i +
            ")'>•</button>" +
            j +
            "</li>";
    }
    window['andarOrigem' + i] = parseInt(Math.random() * andares);
    elv[i].children[window['andarOrigem' + i]].classList.add("current");
}

function chamarElevador(andarDestino, elv) {

    var floor = document.getElementById('elv' + elv).children; 
    window['andarAtual' + elv] = $(".floor.current").index();
    if(andarDestino != window['andarAtual' + elv]){
        paradas.push(andarDestino);
    }
    console.log(paradas);
    for(let i = 0; i< paradas.length; i ++){
        console.log(floor[paradas[i]])
        if(!floor[paradas[i]].classList.contains('call')){
            floor[paradas[i]].classList.add('call')
        };
        
    }

    
    // console.log(window['andarAtual' + elv])
    // console.log(window['andarAtual' + elv], andarDestino)
    // if (window['andarAtual' + elv] < andarDestino) {
       
    //     let loop = setInterval(function () {
    //         floor[window['andarAtual' + elv]].classList.remove("current");
    //         console.log(window['andarAtual' + elv], andarDestino);
    //         window['andarAtual' + elv]++;
    //         floor[window['andarAtual' + elv]].classList.add("current");
    //         if ((window['andarAtual' + elv] == andarDestino)) {
    //             clearInterval(loop);
    //         }
    //     }, 1000);
    // } else if (window['andarAtual' + elv] > andarDestino) {
        

    //     let loop = setInterval(function () {
    //         floor[window['andarAtual' + elv]].classList.remove("current");
    //         window['andarAtual' + elv]--;
    //         floor[window['andarAtual' + elv]].classList.add("current");
    //         if ((window['andarAtual' + elv] == andarDestino)) {
    //             clearInterval(loop);
    //         }
    //     }, 1000);
    // }
}

// for (let i =  window['andarAtual'+elv]; i <= andarDestino; i++) {
//   for (let j = 0; j < floor.length; j++) {
//     floor[j].classList.remove("current");
//   }
//   console.log(i);
//   floor[i].classList.add("current");
// }
