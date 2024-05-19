const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("You are a slash");
        res.end();
    }
    else if(req.url==="/more"){
        res.write("You are at more!");
        res.end();
    }
    else{
        res.write("You are not found");
        res.end();
    }
    
});

server.listen(3000);
console.log("I am at 3000!")
