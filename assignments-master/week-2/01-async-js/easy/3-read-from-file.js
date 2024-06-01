const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log('data: ', data);
});

let a = 0;
for(let i = 0; i < 100000000000; i++) {
    a++;
}
