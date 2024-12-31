import { fileManager } from './fileManager.js';
import { storyBlock } from './storyBlock.js';
import { Game } from './Game.js'

document.getElementById("saveFile").addEventListener('click', saveFile);
document.getElementById("loadFile").addEventListener('change', loadFile);
document.getElementById("startGame").addEventListener('click', startGame);

var fileHelp = new fileManager();
var gameInstance = undefined;

function saveFile()
{
    fileHelp.saveFile(gameInstance);
}

function loadFile()
{
    var loadFilePromise = fileHelp.loadFile();
    loadFilePromise.then((file) => {
        try{
            let deserializedGame = JSON.parse(file.result);
            gameInstance = new Game(deserializedGame.storyBlocks);
            startGame();
        }
        catch{
            alert("faulty game file");
        }
    })
}

function startGame() {

    if(gameInstance === undefined)
    {
        let startBlock = new storyBlock(1,"Choose a door to go through",
            [ {choice: "Red door", nextId: 2 }, {choice: "Green door", nextId: 2}]);

        let block = new storyBlock(2, "U see a giant troll.",
            [ {choice: "Run", nextId: 3 }, {choice: "Fight", nextId: 3}]);

        let end = new storyBlock(3, "Troll killed u either way. The End.",
            []);

        gameInstance = new Game([startBlock, block, end]);
    }
    gameInstance.startGame();
}

