const fs = require("fs");

let content = "";

fs.readFile("a.txt", "utf-8", function(err, data) {
    content = data;
    console.log('content', content);

    content += " and I live in Bangalore."

    fs.writeFile("a.txt", content, function(err) {
        console.log(err);
    });

    fs.readFile("a.txt", "utf-8", function(err, data) {
        console.log("final data", data);
    })
});
