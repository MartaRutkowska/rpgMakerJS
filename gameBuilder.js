import {htmlManager} from './htmlManager.js'

export class gameBuilder {

    static createBuildingArea() {
        htmlManager.generateGameFrame();
    }

    static addBlock() {
        htmlManager.createTextArea(document.getElementById('gameFrame'));

        let createChoice = document.createElement('button');
        createChoice.textContent = "Add choice";
        createChoice.addEventListener('click', this.#createChoiceTextArea);
        htmlManager.getGameFrame().appendChild(createChoice);
        htmlManager.getGameFrame().appendChild(document.createElement('br'));

    }

    static #createChoiceTextArea(){
        htmlManager.createTextArea(document.getElementById('gameFrame'));
    }
}