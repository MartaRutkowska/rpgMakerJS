import { fileManager } from './fileManager.js';
import { storyBlock } from './storyBlock.js';
import { Game } from './Game.js'

var fileHelp = new fileManager();

document.getElementById("saveFile").addEventListener('click', saveFile);
document.getElementById("startGame").addEventListener('click', startGame);

function saveFile()
{
    let fileName = document.getElementById('fileName').value;
    fileHelp.setFileName(fileName);
    fileHelp.saveFile('i found it');
}

function startGame() {

    let startBlock = new storyBlock(1,"This is a start to the story",
        [ {choice: "choice 1", next: undefined }, {choice: "choice 2", nextId: 2}]);

    let block = new storyBlock(2, "This is a second part",
        [ {choice: "choice 1", next: undefined }, {choice: "choice 2", nextId: undefined}]);

    let game = new Game([startBlock, block]);
    game.prepareGame();
    game.startGame();
}

