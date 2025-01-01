import {fileManager} from './fileManager.js';
import {storyBlock} from './storyBlock.js';
import {Game} from './Game.js'
import {htmlManager} from './htmlManager.js'
import {gameBuilder} from './gameBuilder.js'

document.getElementById('saveFile').addEventListener('click', saveFile);
document.getElementById('loadFile').addEventListener('change', loadFile);
document.getElementById('startGame').addEventListener('click', startGame);
document.getElementById('buildMode').addEventListener('click', buildMode);
document.getElementById('storyMode').addEventListener('click', storyMode);
document.getElementById('addStoryBlock').addEventListener('click', addStoryBlock);

var fileHelp = new fileManager();
var gameInstance = undefined;

function saveFile() {
    fileHelp.saveFile(gameInstance);
}

function loadFile() {
    var loadFilePromise = fileHelp.loadFile();
    loadFilePromise.then((file) => {
        try {
            let deserializedGame = JSON.parse(file.result);
            gameInstance = new Game(deserializedGame.storyBlocks);
            startGame();
        } catch {
            alert('faulty game file');
        }
    })
}

function startGame() {

    if (gameInstance === undefined) {
        alert("load game file!");
        let startBlock = new storyBlock(1, 'Choose a door to go through',
            [{choice: 'Red door', nextId: 2}, {choice: 'Green door', nextId: 2}]);

        let block = new storyBlock(2, 'U see a giant troll.',
            [{choice: 'Run', nextId: 3}, {choice: 'Fight', nextId: 3}]);

        let end = new storyBlock(3, 'Troll killed u either way. The End.',
            []);

        gameInstance = new Game([startBlock, block, end]);
    }
    gameInstance.startGame();
}

function buildMode(){
    htmlManager.clearGameFrame();
    htmlManager.displayNone('startGame');
    htmlManager.displayNone('buildMode');
    htmlManager.displayBlock('storyMode');
    htmlManager.displayBlock('addStoryBlock');
}

function storyMode(){
    htmlManager.displayBlock('startGame');
    htmlManager.displayNone('storyMode');
    htmlManager.displayBlock('buildMode');
    htmlManager.displayNone('addStoryBlock');
}

function addStoryBlock(){
    gameBuilder.createBuildingArea();
    gameBuilder.addBlock();
}

