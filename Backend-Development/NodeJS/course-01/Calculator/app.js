const http = require('http');

const appImport = require('./main');

const server = http.createServer(appImport);

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});