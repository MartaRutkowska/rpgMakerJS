import { fileManager } from './fileManager.js';
import { storyBlock } from './storyBlock.js';
import { Game } from './Game.js'

var fileHelp = new fileManager();

document.getElementById("saveFile").addEventListener('click', saveFile);
document.getElementById("startGame").addEventListener('click', startGame);

function saveFile()
{
    fileHelp.saveFile('i found it');
}

function startGame() {

    let startBlock = new storyBlock(1,"Choose a door to go through",
        [ {choice: "Red door", nextId: 2 }, {choice: "Green door", nextId: 2}]);

    let block = new storyBlock(2, "U see a giant troll.",
        [ {choice: "Run", nextId: 3 }, {choice: "Fight", nextId: 3}]);

    let end = new storyBlock(3, "Troll killed u either way. The End.",
        []);

    let game = new Game([startBlock, block, end]);
    game.prepareGame();
    game.startGame();
}

