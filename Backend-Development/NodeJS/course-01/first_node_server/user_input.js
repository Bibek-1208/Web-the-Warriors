const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'});

        res.write('<html>');
        res.write('<head><title>IndiaBazar</title></head>');
        res.write('<body><h1>SHOP TODAY</h1></body>');
        res.write('</html>');

    } else {
        res.write('<html>');
        res.write('<head><title>404</title></head>');
        res.write('<body><h1>Page is not found!</h1></body>');
        res.write('</html>');
    }

});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});