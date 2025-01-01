import {htmlManager} from './htmlManager.js'

export class gameBuilder {

    static createBuildingArea() {
        htmlManager.generateGameFrame();
    }

    static addBlock() {
        htmlManager.createTextArea(document.getElementById('gameFrame'), 'question');

        let createChoice = document.createElement('button');
        htmlManager.getGameFrame().appendChild(document.createElement('br'));
        createChoice.textContent = "Add choice";
        createChoice.addEventListener('click', this.#createChoiceTextArea);
        htmlManager.getGameFrame().appendChild(createChoice);
        htmlManager.getGameFrame().appendChild(document.createElement('br'));

    }

    static #createChoiceTextArea(){
        htmlManager.createTextArea(document.getElementById('gameFrame'), 'choice');
        htmlManager.getGameFrame().appendChild(document.createElement('br'));
    }
}