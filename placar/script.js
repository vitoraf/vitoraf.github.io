var players = [];
var playerModal = new bootstrap.Modal(document.getElementById('playerModal'));
var modal = document.getElementById('playerModal')
var playerInput = document.getElementById('playerInput');
//var imgAvatar = document.getElementsByClassName("profile-pic")[0].src;
var menu = document.getElementById('menu-container');



function addPlayer() {
    playerModal.hide();
    //console.log(playerInput.value);
    window[playerInput.value] = { nome: playerInput.value, vitorias: 0};
    //window[playerInput.value] = { nome: playerInput.value, vitorias: 0, img: urlImg};
    players.push(window[playerInput.value]);
    playerInput.value = "";
    showPlayers();
}

function showPlayers() {
    var playersArea = document.getElementById('playersArea');
    var elemento = "";
    players.sort((a, b) => b.vitorias - a.vitorias);
    for (let i = 0; i < players.length; i++) {
        elemento += "<div class='row player'>";
        elemento += "<div class='col-md-10 col-8'>" + players[i].nome + "<button type='button' onclick='removePlayer(" + i + ")' class='removePlayerBtn bg-danger' style='display:none;'><i class='fa-solid fa-trash'></i></button></div>";
        //elemento += "<div class='col-md-10 col-8'><img class='avatar' src='"+players[i].img+"'>" + players[i].nome + "<button type='button' onclick='removePlayer(" + i + ")' class='removePlayerBtn bg-danger' style='display:none;'><i class='fa-solid fa-trash'></i></button></div>";
        elemento += "<div class='col-md-2 col-4 d-flex align-items-center justify-contents-center'><button type='button' onclick='removeVitoria(" + i + ")'><i class='fa-solid fa-minus'></i></button><span>" + players[i].vitorias + "</span><button type='button' onclick='addVitoria(" + i + ")'><i class='fa-solid fa-plus'></i></button></div>";
        elemento += "</div>";
        elemento += "</div>";
        console.log(i, players[i].nome);
    }

    playersArea.innerHTML = elemento;
    localStorage.setItem('playerList', JSON.stringify(players));
}

function addVitoria(n) {
    var usuario = players[n];
    console.log(players[n])
    usuario.vitorias++;
    showPlayers();
}

function removeVitoria(n) {
    if (players[n].vitorias > 0) {
        players[n].vitorias--;
    }

    showPlayers();
}

function toggleMenu() {
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
        menu.classList.add('closed');
        console.log('close');
    } else {
        menu.classList.remove('closed');
        menu.classList.add('open');
        console.log('open');
    }
}

function clearScore() {
    for (let i = 0; i < players.length; i++) {
        players[i].vitorias = 0;
    }
    showPlayers();
}

function showRemovePlayer() {
    var btnRemove = document.getElementsByClassName('removePlayerBtn');
    for(let i = 0; i < btnRemove.length;i++){
        btnRemove[i].style.display = "flex";
    }
}

function removePlayer(n){
    console.log(players[n])
    players.splice(n, 1);
    showPlayers();
}

modal.addEventListener('shown.bs.modal', function () {
    playerInput.focus()
})

function check(e) {
    if (e.key === "Enter") {
        addPlayer();
        //modal.modal('hide');
    }
}
var urlImg;

window.onload = function(){
    if(JSON.parse(localStorage.getItem('playerList'))){
        players = JSON.parse(localStorage.getItem('playerList'));
        showPlayers();
    }else{
        console.log('não há itens no storage');
    }
    
}

// $(document).ready(function () {

//     var readURL = function (input) {
//         if (input.files && input.files[0]) {
//             var reader = new FileReader();

//             reader.onload = function (e) {
//                 $('.profile-pic').attr('src', e.target.result);
//                 urlImg = e.target.result;
//             }

//             reader.readAsDataURL(input.files[0]);
//         }
//     }

//     $(".file-upload").on('change', function () {
//         readURL(this);
//     });

//     $(".upload-button").on('click', function () {
//         $(".file-upload").click();
//     });
    
// });