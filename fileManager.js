export class fileManager {

    constructor(fileName)
    {
        if(fileName === undefined){
            this.fileName = 'default'.txt;
        }
        this.fileName = fileName;
    }

    setFileName(fileName)
    {
        this.fileName = fileName;
    }

    saveFile(data) {

        const file = new Blob([data], {type: 'text/plain'});

        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = this.fileName;
        link.click();
        URL.revokeObjectURL(link.href);
    }
}