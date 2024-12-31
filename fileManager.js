export class fileManager {

    saveFile(data) {
        let serialized = JSON.stringify(data);
        const file = new Blob([serialized], {type: 'text/plain'});

        const link = document.createElement('a');
        link.href = URL.createObjectURL(file);
        link.download = "game.txt";
        link.click();
        URL.revokeObjectURL(link.href);
    }

    loadFile()
    {
        let file = document.getElementById("loadFile").files[0];
        if(file)
        {
            let reader = new FileReader();
            reader.readAsText(file, "UTF-8");

            return new Promise((resolve, reject) => {

                reader.onload = function (ev) {
                    resolve(ev.target);
                };
                reader.onerror = () => {
                    reject(console.log("file upload error"));
                }
            });
        }
    }
}