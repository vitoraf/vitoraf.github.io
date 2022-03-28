var players = [];
var playerModal = new bootstrap.Modal(document.getElementById('playerModal'));
var modal = document.getElementById('playerModal')
var playerInput = document.getElementById('playerInput');
//var imgAvatar = document.getElementsByClassName("profile-pic")[0].src;
var menu = document.getElementById('menu-container');
var remove = false;
var avatars = ['../img/avatars/female_main.svg','../img/avatars/female_secondary.svg','../img/avatars/female_highlight.svg','../img/avatars/male_main.svg','../img/avatars/male_secondary.svg','../img/avatars/male_highlight.svg']
var imgURL;
function addPlayer() {
    
    //console.log(imgURL)
    playerModal.hide();
    //console.log(playerInput.value);
    window[playerInput.value] = { nome: playerInput.value, vitorias: 0};
    window[playerInput.value] = { nome: playerInput.value, vitorias: 0, img: avatars[imgURL]};
    players.push(window[playerInput.value]);
    playerInput.value = "";
    showPlayers();
    //console.log(players)
}

function showPlayers() {
    var playersArea = document.getElementById('playersArea');
    var elemento = "";
    players.sort((a, b) => b.vitorias - a.vitorias);
    for (let i = 0; i < players.length; i++) {
        elemento += "<div class='row player'>";
        //elemento += "<div class='col-md-10 col-8'>" + players[i].nome + "<button type='button' onclick='removePlayer(" + i + ")' class='removePlayerBtn bg-danger' style='display:none;'><i class='fa-solid fa-trash'></i></button></div>";
        elemento += "<div class='col-md-10 col-8'><img class='avatar' src='"+players[i].img+"'>" + players[i].nome + "<button type='button' onclick='removePlayer(" + i + ")' class='removePlayerBtn bg-danger' style='display:none;'><i class='fa-solid fa-trash'></i></button></div>";
        elemento += "<div class='col-md-2 col-4 d-flex align-items-center justify-contents-center'><button type='button' onclick='removeVitoria(" + i + ")'><i class='fa-solid fa-minus'></i></button><span>" + players[i].vitorias + "</span><button type='button' onclick='addVitoria(" + i + ")'><i class='fa-solid fa-plus'></i></button></div>";
        elemento += "</div>";
        elemento += "</div>";
        //console.log(i, players[i].nome);
    }

    playersArea.innerHTML = elemento;
    localStorage.setItem('playerList', JSON.stringify(players));
    remove = false;
}

function addVitoria(n) {
    var usuario = players[n];
    //console.log(players[n])
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
        //console.log('close');
    } else {
        menu.classList.remove('closed');
        menu.classList.add('open');
        //console.log('open');
    }
}

function clearScore() {
    for (let i = 0; i < players.length; i++) {
        players[i].vitorias = 0;
    }
    showPlayers();
    toggleMenu();
}

function showRemovePlayer() {
    var btnRemove = document.getElementsByClassName('removePlayerBtn');
    
    if (remove == false){
        for(let i = 0; i < btnRemove.length;i++){
            btnRemove[i].style.display = "flex";
             remove = true;
        }
        //console.log('remove on')
    }else{
        for(let i = 0; i < btnRemove.length;i++){
            btnRemove[i].style.display = "none"; 
             remove = false;
        }
        //console.log('remove off')
    }
   toggleMenu();
}

function removePlayer(n){
    console.log(players[n])
    players.splice(n, 1);
    showPlayers();
}

function setAvatar(n){
    var avatarList = document.getElementsByClassName('avatarListItem');
    console.log(avatarList[n])
    for(let i =0;i<avatarList.length;i++){
        if(avatarList[i].classList.contains('selected')){
            avatarList[i].classList.remove('selected');
        }
    }
    avatarList[n].classList.add('selected');
    imgURL = n;
}

modal.addEventListener('shown.bs.modal', function () {
    playerInput.focus();

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
        //console.log('não há itens no storage');
    }

    var avatarDiv = document.getElementById("avatars");
    var el = "<span>Escolha um avatar</span><br>";
    for (let i = 0; i < avatars.length; i++) {
        el += "<img src='"+ avatars[i] + "' class='avatarListItem' onclick='setAvatar("+i+")'>";
        
    }
    avatarDiv.innerHTML = el;
    //console.log(avatarDiv)
}