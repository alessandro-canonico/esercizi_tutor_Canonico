import { createServer } from "node:http";

const server = createServer((req, res) => {
    console.log(`request received`);

    res.statusCode = 200

    res.setHeader("Content-Type", "application/json")

    const jsonResBody = JSON.stringify({ location: "Mars"})

    res.end(jsonResBody)
})

const port = 3000

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})


// the value of the Content-Length response header is 19