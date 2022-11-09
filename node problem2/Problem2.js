const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const jsonData = require("./vegetables.json");


const server = http.createServer((req, res)=>{
   

    fs.readFile("vegetables.json", function(err, data) {
        

        if (err) return response.send(500);
        res.writeHead(200, {'Content-Type': 'vegetables.json'});
        res.write(data)
        return res.end();
    
    
    });


   
})
server.listen(port, hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
