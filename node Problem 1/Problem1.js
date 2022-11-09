const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var url = require('url');

const server = http.createServer((req,res)=>{
    // console.log("runniing")
    let params = url.parse(req.url,true);
    let year = params.query.year;
    let name = params.query.name;
    let month = params.query.month;
    let currentYear = new Date().getFullYear();
    let age = currentYear-year;

   
    
    res.write(`<h4>hello ${name}</h4> You are currently ${age} year and ${month} month old`);
    return res.end()
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
