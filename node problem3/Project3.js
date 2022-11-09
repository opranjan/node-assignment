const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
var url = require('url');

const server = http.createServer((req, res) => {
   
    let params = url.parse(req.url, true);
    let object = params.query.object;
    let metric = params.query.metric;
    let radius = params.query.radius;

    const areaVolume = (object, metric, radius) => {
        let value;
        if (object == "circle") {
            (value = 3.14 * Math.pow(radius, 2)).toFixed(2);
        }
        else if (object == "sphere" && metric == "volume") {
            value = (4 / 3 * 3.14 * Math.pow(radius, 3)).toFixed(2);
        }
        else {
            (value = 4 * 3.14 * Math.pow(radius, 2)).toFixed(2);
        }
        return value;
    }
    res.json({message:`<P>${metric} of the ${object} is ${areaVolume(object, metric, radius)}</P>` });

   



    return res.end()
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});