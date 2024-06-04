import { createServer } from "node:http";

const server = createServer((req, res) => {
    console.log(`request received`);

    res.statusCode = 200

    res.setHeader("Content-Type", "text/html")

    res.end("<html><body><h1>Welcome!</h1></body></html>")
})

const port = 3000

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})