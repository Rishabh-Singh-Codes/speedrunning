const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data) {
    let trimmedData = data.trim().split(" ");

    let sentence = "";
    trimmedData.forEach((word, idx) => {
        if(word !== " ") {
            sentence += word;
        }

        if(trimmedData[idx+1]) {
            sentence += " ";
        }

    })

    fs.writeFile("a.txt", sentence, function(err) {
        err && console.log(err);
    });
});

