import * as fs from "node:fs";

const message = "ciao a tutti"

fs.writeFile("file.txt", message, "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return  
    } 
    console.log('The file has been changed!')
} )