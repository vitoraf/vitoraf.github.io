var players = [];
var playerModal = new bootstrap.Modal(document.getElementById('playerModal'));
var modal = document.getElementById('playerModal')
 var playerInput = document.getElementById('playerInput');
//var imgAvatar = document.getElementsByClassName("profile-pic")[0].src;


function addPlayer(){
    playerModal.hide(); 
    //console.log(playerInput.value);
    window[playerInput.value] = {nome: playerInput.value, vitorias: 0};
    players.push(window[playerInput.value]);
    playerInput.value = "";
    showPlayers();
    //console.log(imgAvatar)
}



function showPlayers(){
    var playersArea = document.getElementById('playersArea');
    var elemento = "";
    players.sort((a,b) => b.vitorias - a.vitorias);
    for(let i = 0; i < players.length; i++){
        elemento += "<div class='row player'>";
        elemento += "<div class='col-8'>" +  players[i].nome + "</div>";
        elemento += "<div class='col-4 d-flex align-items-center justify-contents-center'><button type='button' onclick='removeVitoria("+ i +")'><i class='fa-solid fa-minus'></i></button><span>" +  players[i].vitorias + "</span><button type='button' onclick='addVitoria("+i+")'><i class='fa-solid fa-plus'></i></button></div>";
        elemento += "</div>";
        elemento += "</div>";
        console.log(i, players[i].nome);
    }
    
    playersArea.innerHTML = elemento;
}

function addVitoria(n){
    var usuario = players[n];
    console.log(players[n])
    usuario.vitorias++;
    showPlayers();
}

function removeVitoria(n){
    if(players[n].vitorias > 0){
       players[n].vitorias--; 
    }
    
    showPlayers();
}


modal.addEventListener('shown.bs.modal', function () {
    playerInput.focus()
  })

function check(e) {
    if(e.key === "Enter") {
        addPlayer();
        //modal.modal('hide');
    }
} 

$(document).ready(function() {
	
    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.profile-pic').attr('src', e.target.result);
            }
    
            reader.readAsDataURL(input.files[0]);
        }
    }
   
    $(".file-upload").on('change', function(){
        readURL(this);
    });
    
    $(".upload-button").on('click', function() {
       $(".file-upload").click();
    });
});