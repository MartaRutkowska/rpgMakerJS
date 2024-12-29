import { fileManager } from './fileManager.js';

var fileHelp = new fileManager();

document.getElementById("saveFile").addEventListener('click', saveFile);

function saveFile()
{
    let fileName = document.getElementById('fileName').value;
    fileHelp.setFileName(fileName);
    fileHelp.saveFile('i found it');
}
