const fs = require("fs");

const creatingRead = fs.createReadStream(`${__dirname}/bigdata.txt`)
const creatingWrite = fs.createWriteStream(`${__dirname}/output.txt`)

creatingRead.on('data',(chunk)=>{
    creatingWrite.write(chunk);
})