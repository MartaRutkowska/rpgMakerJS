export class Game
{
    constructor(storyBlocks)
    {
        this.storyBlocks = storyBlocks;
    }

    prepareGame()
    {
        let frame = document.createElement("div");
        frame.id = "gameFrame";
        document.getElementsByTagName("body")[0].appendChild(frame);
    }

    startGame()
    {
        if(this.storyBlocks.length == 0) return;

        this.generateStoryBlockHtml(this.storyBlocks[0]);
    }

    generateStoryBlockHtml(storyBlock){
        let storyBlockFrame = document.getElementById("gameFrame");

        let plotParagraph = document.createElement("p");
        plotParagraph.textContent = storyBlock.plot;
        storyBlockFrame.appendChild(plotParagraph);

        storyBlock.choices.forEach(c => {
            let choiceButton = document.createElement("button");
            choiceButton.addEventListener('click', () => this.createNextBlock(c.nextId, choiceButton));
            choiceButton.textContent = c.choice;
            storyBlockFrame.appendChild(choiceButton);
        });
    }

    createNextBlock(nextId, choiceButton)
    {
        choiceButton.disabled = true;
        let storyBlockFrame = document.getElementById("gameFrame");

        if(nextId === undefined)
        {
            let theEndParagraph = document.createElement("button");
            theEndParagraph.textContent = "The end";
            storyBlockFrame.appendChild(theEndParagraph);
            return;
        }
    }
}