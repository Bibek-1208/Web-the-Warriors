const fs = require("fs");

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`
        <html>
            <head>
                <title>Home</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background: #f4f4f9;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                    }
                    .container {
                        background: #fff;
                        padding: 40px;
                        border-radius: 12px;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                        text-align: center;
                    }
                    h1 {
                        color: #333;
                        margin-bottom: 20px;
                    }
                    a {
                        display: inline-block;
                        text-decoration: none;
                        color: white;
                        background: #4CAF50;
                        padding: 12px 24px;
                        border-radius: 6px;
                        font-size: 16px;
                        transition: background 0.3s;
                    }
                    a:hover {
                        background: #45a049;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Welcome to Home</h1>
                    <a href="/calculator">Go to Calculator</a>
                </div>
            </body>
        </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`
            <html>
                <head>
                    <title>Calculator</title>
                </head>
                <body style="font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f4f4f9;">

                    <div style="background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: center; width: 300px;">
                    <h2 style="margin-bottom: 20px; color: #333;">Sum Calculator</h2>

                    <form method="POST" action="/submit">
                        <input id="num1" name="num1" type="number" placeholder="First number" 
                        style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 6px; font-size: 16px;">
    
                        <input id="num2" name="num2" type="number" placeholder="Second number" 
                        style="width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; border-radius: 6px; font-size: 16px;">
    
                        <button Onclick="submit"
                        style="width: 100%; padding: 12px; background: #4CAF50; border: none; border-radius: 6px; color: white; font-size: 16px; cursor: pointer; transition: 0.3s;">
                        Calculate Sum
                        </button>
                    </form>

                        <p id="result" style="margin-top: 20px; font-size: 18px; font-weight: bold; color: #222;"></p>
                    </div>
                </body>
            </html>
        `);

    return res.end();
  } else if (req.url.toLowerCase() === "/submit" && req.method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      const num1 = parseFloat(params.get("num1"));
      const num2 = parseFloat(params.get("num2"));

      const calculateSum = (a, b) => a + b;
      const result = calculateSum(num1, num2);

      console.log(calculateSum(num1, num2));

      res.writeHead(200, { "content-type": "text/html" });
      res.write(`
            <html>
                <head>
                    <title>Result</title>
                </head>
                <body style="font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f4f4f9;">
                    <div style="background: #fff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); text-align: center; width: 300px;">
                        <h2>The result is:</h2>
                        <p style="font-size: 22px; font-weight: bold; color: #4CAF50;">${result}</p>
                        <a href="/calculator" style="display:inline-block; margin-top:20px; text-decoration:none; color:white; background:#4CAF50; padding:10px 20px; border-radius:6px;">Back</a>
                    </div>
                </body>
            </html>
        `);
      return res.end();
    });
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`
        <html>
            <head>
                <title>404</title>
            </head>
            <body>
                <h1>Page Not Found!</h1>
            </body>
        </html>
    `);
    return res.end();
  }
};

module.exports = requestHandler;
