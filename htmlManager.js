export class htmlManager {
    static generateGameFrame() {
        let frame = document.createElement('div');
        frame.id = 'gameFrame';
        document.getElementsByTagName('body')[0].appendChild(frame);
    }

    static clearGameFrame() {
        const parent = document.getElementById('gameFrame');
        while (parent?.firstChild) {
            parent.firstChild.remove();
        }
    }

    static createTextArea(div, className){
        let textArea = document.createElement('textArea');
        textArea.classList.add(className);
        div.appendChild(textArea);
    }

    static createParagraph(div, text) {
        let plotParagraph = document.createElement('p');
        plotParagraph.textContent = text;
        div.appendChild(plotParagraph);
        div.appendChild(document.createElement('br'));
    }

    static getGameFrame() {
        return document.getElementById('gameFrame');
    }

    static createChoiceButton(div, c, onClickFunc) {
        let choiceButton = document.createElement('button');
        choiceButton.addEventListener('click', onClickFunc);
        choiceButton.textContent = c.choice;
        div.appendChild(choiceButton);
        div.appendChild(document.createElement('br'));
    }

    static remove(elem) {
        document.getElementById(elem)?.remove();
    }

    static displayNone(elem){
        document.getElementById(elem).style.display = 'none';
    }

    static displayBlock(elem){
        document.getElementById(elem).style.display = 'block';
    }

    static createStoryDiv() {
        let storyDiv = document.createElement('div');
        storyDiv.classList.add('storyBlock');
        return storyDiv;
    }
}