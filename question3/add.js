let fs = require('fs');

if(!fs.existsSync("Logs")) {
    fs.mkdirSync("Logs");
}

process.chdir("Logs");


for(let x = 0; x < 10; x++) {

    let fileName = `log${x}.txt`;

    fs.writeFile(fileName, 'some text', (err) => {

        if (err) {

            throw err;
        }
    });

    console.log(fileName);
}
