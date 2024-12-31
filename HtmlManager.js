export class HtmlManager
{
    static generateGameFrame(){
        let frame = document.createElement("div");
        frame.id = "gameFrame";
        document.getElementsByTagName("body")[0].appendChild(frame);
    }

    static clearGameFrame(){
        const parent = document.getElementById("gameFrame")
        while (parent?.firstChild) {
            parent.firstChild.remove()
        }
    }

    static createParagraph(div, text){
        let plotParagraph = document.createElement("p");
        plotParagraph.textContent = text;
        div.appendChild(plotParagraph);
    }
}