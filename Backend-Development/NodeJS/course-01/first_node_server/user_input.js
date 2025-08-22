const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/'){
        res.writeHead(200, {'content-type':'text/html'});

        res.write('<html>');
        res.write('<head><title>BazarIndian</title></head>');
        res.write('<body>');

        // Myntra Navigation Bar
        res.write('<nav style="background-color:#f8f8f8; padding:10px; font-family:Arial, sans-serif;">');
        res.write('<a href="/" style="margin-right:20px; text-decoration:none; color:#333;"><b>BazarIndian</b></a>');
        res.write('<a href="/men" style="margin-right:20px; text-decoration:none; color:#333;">Men</a>');
        res.write('<a href="/women" style="margin-right:20px; text-decoration:none; color:#333;">Women</a>');
        res.write('<a href="/kids" style="margin-right:20px; text-decoration:none; color:#333;">Kids</a>');
        res.write('<a href="/cart" style="text-decoration:none; color:#333;">Cart</a>');
        res.write('</nav>');

        res.write('</body>');
        res.write('</html>');

        return res.end();

    } else if (req.url.toLowerCase() === '/men') {
        res.writeHead(200, {'content-type':'text/html'});
        // res.statusCode = 302;
        // res.setHeader('Location', '/men');

        res.write('<html>');
        res.write('<head><title>Men</title></head>');
        res.write('<body><h1>Wellcome to mens section</h1></body>');
        res.write('</html>');

    } else if (req.url.toLowerCase() === '/women') {

        // res.setHeader('Location', '/women');

        res.write('<html>');
        res.write('<head><title>Women</title></head>');
        res.write('<body><h1>Wellcome to women section</h1></body>');
        res.write('</html>');

        return res.end();

    } else if (req.url.toLowerCase() === '/kids') {

        // res.setHeader('Location', '/kids');

        res.write('<html>');
        res.write('<head><title>Kids</title></head>');
        res.write('<body><h1>Wellcome to kids section</h1></body>');
        res.write('</html>');

    } else if (req.url.toLowerCase() === '/cart') {

        // res.setHeader('Location', '/cart');
        res.write('<html>');
        res.write('<head><title>Cart</title></head>');
        res.write('<body><h1>Wellcome to cart section</h1></body>');
        res.write('</html>');

    } else if (req.url.toLowerCase() === '/form') {
        res.write('<html>');
        res.write('<head><title>Form</title>');
        res.write('<style>');
        res.write('body { font-family: Arial, sans-serif; background-color: #ffccdd; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }');
        res.write('.form-container { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); width: 380px; }');
        res.write('.form-container h1 { text-align: center; margin-bottom: 20px; color: #333; }');
        res.write('.form-container label { display: block; margin-bottom: 8px; font-weight: bold; color: #555; }');
        res.write('.form-container input, .form-container textarea, .form-container select { width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ddd; border-radius: 8px; }');
        res.write('.form-container button { width: 100%; padding: 12px; background: #ff6699; border: none; border-radius: 8px; color: white; font-size: 16px; cursor: pointer; }');
        res.write('.form-container button:hover { background: #ff3366; }');
        res.write('</style>');
        res.write('</head>');

        res.write('<body>');
        res.write('<div class="form-container">');
        res.write('<h1>Shop Updates</h1>');
        res.write('<form method="POST" action="/submit">');

        res.write('<label for="email">Email Address</label>');
        res.write('<input type="email" id="email" name="email" placeholder="Enter your email" required>');

        res.write('<label for="type">Update Type</label>');
        res.write('<select id="type" name="type" required>');
        res.write('<option value="" disabled selected>Select type</option>');
        res.write('<option value="new">New Collection</option>');
        res.write('<option value="offer">Special Offer</option>');
        res.write('<option value="limited">Limited Edition</option>');
        res.write('</select>');

        res.write('<label for="audience">Who is this for?</label>');
        res.write('<select id="audience" name="audience" required>');
        res.write('<option value="" disabled selected>Select one</option>');
        res.write('<option value="male">Male</option>');
        res.write('<option value="female">Female</option>');
        res.write('<option value="kids">Kids</option>');
        res.write('</select>');


        res.write('<label for="title">Update Title (e.g., "Summer Sale 2025")</label>');
        res.write('<input type="text" id="title" name="title" placeholder="Enter the update headline" required>');

        res.write('<label for="details">Details</label>');
        res.write('<textarea id="details" name="details" rows="4" placeholder="Enter full details of the update" required></textarea>');

        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</div>');
        res.write('</body>');
        res.write('</html>');

        return res.end();

    } else if(req.url === '/submit' && req.method == 'POST') {

        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);

            const params = new URLSearchParams(fullBody);

            // const bodyObject = {};
            // for (const [key, val] of params.entries()) {
            //     bodyObject[key] = val;
            // }

            const bodyObject = Object.fromEntries(params);
            console.log(bodyObject);
        });

        fs.writeFileSync('user.txt', 'Rajkishore');
        res.statusCode = 302;
        res.setHeader('Location', '/');

        return res.end();
        // res.setHeader('Content-Type', 'text/html');
        // res.write('<html>');
        // res.write('<head><title>Sumbit</title></head>');
        // res.write('<body><h1>Submit sucessful</h1></body>');
        // res.write('</html>');
    } else {
        res.write('<html>');
        res.write('<head><title>404</title></head>');
        res.write('<body><h1>Page is not found!</h1></body>');
        res.write('</html>');

        return res.end();
    }
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});