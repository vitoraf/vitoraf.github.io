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

