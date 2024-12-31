import {htmlManager} from './htmlManager.js'

export class Game {
    constructor(storyBlocks) {
        this.storyBlocks = storyBlocks;
    }

    startGame() {
        if (this.storyBlocks.length == 0) return;

        this.#clearGame();
        this.#prepareGame();

        this.#generateStoryBlock(this.storyBlocks[0]);
    }

    #prepareGame() {
        htmlManager.hideStart();
        htmlManager.removeEnd();
        htmlManager.generateGameFrame();
    }

    #clearGame() {
        htmlManager.clearGameFrame();
    }

    #generateStoryBlock(storyBlock) {

        if (storyBlock.choices.length == 0) {
            this.#endGame(storyBlock);
            return;
        }

        let storyDiv = htmlManager.createStoryDiv();
        htmlManager.createParagraph(storyDiv, storyBlock.plot);

        storyBlock.choices.forEach(c => {
            htmlManager.createChoiceButton(storyDiv, c,
                () => this.#createNextBlock(c.nextId, storyDiv));
        });

        htmlManager.getGameFrame().appendChild(storyDiv);
    }

    #createNextBlock(nextId, storyDiv) {
        storyDiv.remove();
        let nextStoryBlock = this.storyBlocks.filter(s => s.id === nextId);
        if (nextStoryBlock === undefined || nextStoryBlock.length != 1) console.log("I shat myself, sorry");
        this.#generateStoryBlock(nextStoryBlock[0]);
    }

    #endGame(storyBlock) {
        let storyDiv = htmlManager.createStoryDiv();
        storyDiv.id = "end";

        htmlManager.createParagraph(storyDiv, storyBlock.plot);
        htmlManager.getGameFrame().appendChild(storyDiv);
        htmlManager.showRestart();
    }
}