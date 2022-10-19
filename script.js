var bgContainer = document.getElementById('inicio');
var bgImg = ['img/bg01', 'img/bg02', 'img/bg03']

window.onload = function () {
    changeBG();
}


function changeBG() {
    var c = 1;
    setInterval(function () {
        if (c < 3) {
            let imgUrl = "url('" + bgImg[c] + ".jpg')"
            bgContainer.style.backgroundImage = imgUrl;
            c++;
        } else {
            c = 0;
            let imgUrl = "url('" + bgImg[c] + ".jpg')"
            bgContainer.style.backgroundImage = imgUrl;
            c++;
        }
    }, 7500)

};

// var controller = new ScrollMagic.Controller();
// var bar = document.getElementsByClassName('bar');
// var scene1 = new ScrollMagic.Scene({
//     triggerElement: "#habilidades",
//     tweenChanges: true,
// })
//     .on("enter", function () {
//         // trigger animation by changing inline style.
//         bar[0].style = "width: 95%";
//         bar[1].style = "width: 75%";
//         bar[2].style = "width: 50%";
//         bar[3].style = "width: 60%";
//         bar[4].style = "width: 70%";
//         bar[5].style = "width: 50%";
//         bar[6].style = "width: 60%";
//         bar[7].style = "width: 40%";
//         bar[8].style = "width: 80%";
//         bar[9].style = "width: 90%";
//         bar[10].style = "width: 80%";
//         bar[11].style = "width: 75%";
//         bar[12].style = "width: 30%";
//     })
//     .on("leave", function () {
//         // trigger animation by changing inline style.
//         bar[0].style = "width: 0";
//         bar[1].style = "width: 0";
//         bar[2].style = "width: 0";
//         bar[3].style = "width: 0";
//         bar[4].style = "width: 0";
//         bar[5].style = "width: 0";
//         bar[6].style = "width: 0";
//         bar[7].style = "width: 0";
//         bar[8].style = "width: 0";
//         bar[9].style = "width: 0";
//         bar[10].style = "width: 0";
//         bar[11].style = "width: 0";
//         bar[12].style = "width: 0";
//     })
//     .setClassToggle("#habilidades", "onscreen")
//     .addTo(controller);
// var expRows = $('#experiencia').children('.row');
// var scene2 = new ScrollMagic.Scene({
//     triggerElement: "#experiencia"
// })
//     .setClassToggle("#experiencia", "onscreen")
//     .addTo(controller);

// var scene3 = new ScrollMagic.Scene({
//     triggerElement: "#formacao"
// })
//     .setClassToggle("#formacao", "onscreen")
//     .addTo(controller);

// var scene4 = new ScrollMagic.Scene({
//     triggerElement: "#projetos"
// })
//     .setClassToggle("#projetos", "onscreen")
//     .addTo(controller);

// // var scene5 = new ScrollMagic.Scene({
// //     triggerElement: "#contato"
// // })
// //     .setClassToggle("#contato", "onscreen")
// //     .addTo(controller);