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
        let previousEnd = document.getElementById("end")?.remove();

        this.generateStoryBlockHtml(this.storyBlocks[0]);
        document.getElementById("startGame").style.visibility = 'hidden';
    }

    generateStoryBlockHtml(storyBlock){
        let storyBlockFrame = document.getElementById("gameFrame");

        let blockDiv = document.createElement("div");
        blockDiv.classList.add("storyBlock")

        let plotParagraph = document.createElement("p");
        plotParagraph.textContent = storyBlock.plot;
        blockDiv.appendChild(plotParagraph);

        if(storyBlock.choices.length == 0){
            this.endGame(storyBlock);
            return;
        }

        storyBlock.choices.forEach(c => {
            let choiceButton = document.createElement("button");
            choiceButton.addEventListener('click', () => this.createNextBlock(c.nextId, blockDiv));
            choiceButton.textContent = c.choice;
            blockDiv.appendChild(choiceButton);
            blockDiv.appendChild(document.createElement("br"));
        });

        storyBlockFrame.appendChild(blockDiv);
    }

    createNextBlock(nextId, blockDiv)
    {
        blockDiv.remove();
        let storyBlockFrame = document.getElementById("gameFrame");

        let nextStoryBlock = this.storyBlocks.filter(s => s.id === nextId);
        if(nextStoryBlock === undefined || nextStoryBlock.length != 1) console.log("I shat myself, sorry");
        this.generateStoryBlockHtml(nextStoryBlock[0]);
    }

    endGame(storyBlock){
        let storyBlockFrame = document.getElementById("gameFrame");
        let blockDiv = document.createElement("div");
        blockDiv.classList.add("storyBlock")
        blockDiv.id = "end";

        let end = document.createElement("p");
        end.textContent = storyBlock.plot;
        blockDiv.appendChild(end);
        blockDiv.appendChild(document.createElement("br"));
        storyBlockFrame.appendChild(blockDiv);

        let restart = document.getElementById("startGame");
        restart.textContent = 'Restart game';
        restart.style.visibility = 'visible';
    }
}