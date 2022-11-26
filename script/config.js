

function openPlayerConfig(ev) {
    editedPlayer = +ev.target.dataset.playerId;// +'1' => 1
   
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display ='block';
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display ='none'; 
    document.querySelector('form').children[0].classList.remove('error');
    errorMessageElement.textContent= '';
    document.getElementById('PlayerName').value ='';


}



