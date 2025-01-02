import {htmlManager} from './htmlManager.js';
import {storyBlock} from './storyBlock.js';

export class gameBuilder {

    constructor(){
        this.questionsTextAreas = [];
        this.choicesTextAreas = [];
        this.counter = 0;
    }

    createBuildingArea() {
        htmlManager.generateGameFrame();
    }

    addBlock() {
        let questionArea = htmlManager.createTextAreaWithClass(document.getElementById('gameFrame'), `${this.counter}`);
        this.questionsTextAreas.push(questionArea);

        let createChoice = document.createElement('button');
        htmlManager.getGameFrame().appendChild(document.createElement('br'));
        createChoice.textContent = "Add choice";
        createChoice.addEventListener('click', () => this.#createChoiceTextArea(questionArea.className));
        htmlManager.getGameFrame().appendChild(createChoice);
        htmlManager.getGameFrame().appendChild(document.createElement('br'));

        this.counter++;
    }

    #createChoiceTextArea(counter){
        let choice = htmlManager.createTextAreaWithClass(document.getElementById('gameFrame'), `${counter}`);
        this.choicesTextAreas.push(choice);
        htmlManager.getGameFrame().appendChild(document.createElement('br'));
    }

    //TO DO add nexId logic to choices
    saveGame(){

        let blocks = [];
        this.questionsTextAreas.forEach( q => {
            let choices = [];
            let matchingChoices = this.choicesTextAreas.filter(c => c.className == q.className);
            matchingChoices.forEach(x => {
               choices.push({choice: x.value, nextId: 1});
            });
            blocks.push(new storyBlock(q.className, q.value, choices ));
        });
        let game = new Game(blocks);
    }
}