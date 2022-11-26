let editedPlayer = 0;
let activePlayer = 0;
let currentRound =1;
let gameIsOver = false;

const player = [

{
    name:'',
    symbol:'X'
},

{
    name:'',
    symbol:'O'
}

];


const gameData =[
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];


const playerConfigOverlayElement = document.getElementById('config-overlay');    
const backdropElement = document.getElementById('backdrop');
const cancelElement = document.getElementById('cancel-btn');
const gameOverElement = document.getElementById('game-over');

const editPlayerButtonOne = document.getElementById('edit-player-one-btn');
const editPlayerButtonTwo = document.getElementById('edit-player-two-btn');

const formElement = document.querySelector('form');

const errorMessageElement = document.getElementById('error-config');

const displayGameBoardButton= document.getElementById('start-game');
const displayGameBoard = document.getElementById('active-game');

const gameFieldElements = document.querySelectorAll('#game-board');
const gameBoardElement = document.getElementById('game-board');
const activePlayerNameElement = document.getElementById('active-player-name');


editPlayerButtonOne.addEventListener('click' , openPlayerConfig);
editPlayerButtonTwo.addEventListener('click', openPlayerConfig);

cancelElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit',savePlayerName);

displayGameBoardButton.addEventListener('click' , openGameBoard);

for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener('click' , selectGameField )
} 

 