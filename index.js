import { fileManager } from './fileManager.js';
import { storyBlock } from './storyBlock.js';

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
    let startBlock = new storyBlock("This is a start to the story",
        ["choice 1", "choice 2"]);
    startBlock.generateStoryBlockHtml();
}