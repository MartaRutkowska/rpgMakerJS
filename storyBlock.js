export class storyBlock
{
    constructor(plot, choices)
    {
        this.plot = plot;
        this.choices = choices;
    }

    generateStoryBlockHtml(){
        let frame = document.createElement("div");
        frame.id = "frame";
        document.getElementsByTagName("body")[0].appendChild(frame);

        let storyBlockFrame = document.getElementById("frame");

        let plotParagraph = document.createElement("p");
        plotParagraph.textContent = this.plot;
        storyBlockFrame.appendChild(plotParagraph);

        this.choices.forEach(c => {
            let choiceParagraph = document.createElement("p");
            choiceParagraph.textContent = c;
            storyBlockFrame.appendChild(choiceParagraph);
        });
    }
}