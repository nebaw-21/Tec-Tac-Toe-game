function resetGameStatus(){
    activePlayer=0;
    currentRound=1;
    gameIsOver=false;
    gameOverElement.firstElementChild.innerHTML ='You won, <span id="winner-name">PlayerName</span>!';
    gameOverElement.style.display ='none';
    
    let x = 0;
    for(let i=0; i<3; i++)
    {
       
        for(let j=0; j<3; j++)
        {
            gameData[i][j] = 0;
    let gameBoardItemElement = gameBoardElement.children[x];
    gameBoardItemElement.textContent ='';
    gameBoardItemElement.classList.remove('disabled');

x++;
        }
    }
}


function openGameBoard()
{

if(player[0].name ==='' || player[1].name === '')
{
    alert("please inset valid players' name!!");
    return;
}

resetGameStatus();

activePlayerNameElement.textContent = player[activePlayer].name
    displayGameBoard.style.display = 'block';
}



function savePlayerName(ev){
    ev.preventDefault();
    const formData = document.getElementById('PlayerName').value.trim();
    if(!formData){
        document.querySelector('form').children[0].classList.add('error');
        return;
    }
    
    const updatedPlayerDataElement = document.getElementById('player-'+ editedPlayer +'-data');
    
    updatedPlayerDataElement.children[1].textContent = formData;
    
    player[editedPlayer-1].name = formData;
    closePlayerConfig();
    
    }

    
function switchPlayer(){

    if(activePlayer ===0)
    {
      
    activePlayer =1;
    }
    
    else{
        activePlayer =0;
  
    }
    activePlayerNameElement.textContent = player[activePlayer].name;
}

function selectGameField(ev){

    if (ev.target.tagName !== "LI" || gameIsOver===true)
    {
        return;
    }
    const selectedColumn = ev.target.dataset.col-1;
    const selectedRow = ev.target.dataset.row-1;

    if(gameData[selectedRow][selectedColumn] >0)
    {
        alert("please press other button!!");
        return;
    }
ev.target.textContent = player[activePlayer].symbol;
ev.target.classList.add('disabled');


gameData[selectedRow][selectedColumn]= activePlayer+1;

let winnerId = checkForGameOver();


if (winnerId !== 0)
{
    endGame(winnerId);
    gameIsOver=true;
}

currentRound++;

switchPlayer();

}  

function checkForGameOver(){

    //checking for rows!

    for (let i=0; i<3; i++){

        if(gameData[i][0] >0 &&  gameData[i][0] === gameData[i][1]&& gameData[i][1] === gameData[i][2] )
        {
            return gameData[i][0];
        }

    }

    //checking for Columns!

    for(let j=0 ; j<3; j++)
    {
        if(gameData[0][j] >0 && gameData[0][j] === gameData[1][j]&& gameData[1][j] === gameData[2][j] )
{
    return gameData[0][j];
}


    }

//checking for top left to bottom right.

if(gameData[0][0] >0 && gameData[0][0] === gameData[1][1]&& gameData[1][1] === gameData[2][2] )
{
    return gameData[0][0];
}


//checking for bottom left to top right.

if(gameData[2][0] >0 && gameData[2][0] === gameData[2][1]&& gameData[2][1] === gameData[2][2] )
{
    return gameData[2][0];
}

if(currentRound===9)
{
    return -1;
}

return 0;
}

function endGame(winnerId)
{
    gameOverElement.style.display ='block';

    if(winnerId > 0)
    {

        const winnerName = player[winnerId-1].name;
        gameOverElement.firstElementChild.firstElementChild.textContent =winnerName;
    }

    else{
        gameOverElement.firstElementChild.textContent="It's a draw!";
    }
}

