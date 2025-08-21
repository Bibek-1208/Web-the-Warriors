const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Wellcome to index page</h1></body>');
        res.write('</html>');
        return res.end();

    } else if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome to the Home Page</h1></body>');
        res.write('</html>');
        return res.end();

    } else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html>');
        res.write('<head><title>About Page</title></head>');
        res.write('<body><h1>About Us</h1></body>');
        res.write('</html>');
        return res.end();
        
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html>');
        res.write('<head><title>404</title></head>');
        res.write('<body><h1>Page not found!</h1></body>');
        res.write('</html>');
        return res.end();
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});