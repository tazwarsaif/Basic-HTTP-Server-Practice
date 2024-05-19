const fs = require("fs");
const http = require("http");
const server = http.createServer((req,res)=>{
    const readata = fs.createReadStream(`${__dirname}/bigdata.txt`,"utf8")
    readata.pipe(res);
    
});

server.listen(3000);
console.log("I am at 3000!")
