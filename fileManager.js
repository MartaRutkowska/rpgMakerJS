export class fileManager {

    saveFile(data) {

        const file = new Blob([data], {type: 'text/plain'});

        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = "game.txt";
        link.click();
        URL.revokeObjectURL(link.href);
    }
}