const http = require("http");

const appImport = require('./user_handler');

const server = http.createServer(appImport);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});