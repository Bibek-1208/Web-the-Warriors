// server.js
const http = require('http');
const querystring = require('querystring');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Home page: show the form
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    res.write('<!DOCTYPE html>');
    res.write('<html><head><title>User Input</title>');
    res.write('<meta name="viewport" content="width=device-width,initial-scale=1">');
    res.write(`
      <style>
        body{font-family:system-ui,Arial,sans-serif;margin:2rem;background:#0f172a;color:#e2e8f0}
        .card{max-width:520px;margin:auto;background:#111827;border-radius:16px;padding:24px;box-shadow:0 10px 30px rgba(0,0,0,.35)}
        h1{margin:0 0 16px;font-size:1.5rem}
        label{display:block;margin:.5rem 0 .25rem}
        input,select,textarea{width:100%;padding:.6rem;border-radius:.6rem;border:1px solid #374151;background:#0b1020;color:#e5e7eb}
        .row{display:flex;gap:12px;align-items:center;flex-wrap:wrap}
        .row > label{margin:0}
        .btn{margin-top:1rem;padding:.7rem 1rem;border:0;border-radius:.7rem;cursor:pointer;background:#22c55e}
        .btn:hover{filter:brightness(0.95)}
        .muted{color:#9ca3af;font-size:.9rem}
      </style>
    `);
    res.write('</head><body>');
    res.write('<div class="card">');
    res.write('<h1>Welcome to Home page</h1>');
    res.write('<p class="muted">Fill the form and submit to see the captured values.</p>');

    res.write('<form action="/submit-details" method="POST">');

    // Name
    res.write('<label for="name">Name</label>');
    res.write('<input type="text" id="name" name="name" placeholder="Enter your name" required>');

    // Email
    res.write('<label for="email">Email</label>');
    res.write('<input type="email" id="email" name="email" placeholder="you@example.com" required>');

    // Gender radios
    res.write('<label>Gender</label>');
    res.write('<div class="row">');
    res.write('<input type="radio" id="male"   name="gender" value="male" required>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="other"  name="gender" value="other">');
    res.write('<label for="other">Other</label>');
    res.write('</div>');

    // Age
    res.write('<label for="age">Age</label>');
    res.write('<input type="number" id="age" name="age" min="1" max="120" placeholder="18">');

    // State (select)
    res.write('<label for="state">State/UT</label>');
    res.write('<select id="state" name="state" required>');
    res.write('<option value="">-- Select --</option>');
    ['Andhra Pradesh','Bihar','Delhi','Gujarat','Karnataka','Maharashtra','Odisha','Tamil Nadu','Uttar Pradesh','West Bengal']
      .forEach(s => res.write(`<option value="${s}">${s}</option>`));
    res.write('</select>');

    // Interests (checkboxes)
    res.write('<label>Interests</label>');
    ['Coding','Music','Sports','Travel'].forEach((it, i) => {
      const id = `int${i}`;
      res.write('<div class="row">');
      res.write(`<input type="checkbox" id="${id}" name="interests" value="${it}">`);
      res.write(`<label for="${id}">${it}</label>`);
      res.write('</div>');
    });

    // About (textarea)
    res.write('<label for="about">About you</label>');
    res.write('<textarea id="about" name="about" rows="3" placeholder="A few lines about you..."></textarea>');

    // Submit
    res.write('<button class="btn" type="submit">Submit</button>');
    res.write('</form>');
    res.write('</div>');

    res.write('</body></html>');
    return res.end();
  }

  // Handle form submit
  if (req.method === 'POST' && req.url.toLowerCase() === '/submit-details') {
    // fs.writeFileSync('user.txt','Rajkishore');
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end', () => {
      const data = querystring.parse(body);

      // Ensure interests is always an array
      if (data.interests && !Array.isArray(data.interests)) {
        data.interests = [data.interests];
      }

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.write('<!DOCTYPE html><html><head><title>Submitted</title></head><body>');
      res.write('<div class="card">');
      res.write('<h1>Form Submitted ✅</h1>');
      res.write('<pre style="white-space:pre-wrap;background:#0b1020;color:#e5e7eb;padding:12px;border-radius:12px;">');
      res.write(JSON.stringify(data, null, 2));
      res.write('</pre>');
      res.write('<a href="/" style="display:inline-block;margin-top:12px">← Back</a>');
      res.write('</div>');
      res.write('</body></html>');
      return res.end();
    });
    return;
  }

  // 404
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
