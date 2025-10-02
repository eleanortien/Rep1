const http = require('http');

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end('Hello World, this is lnr speakiong, from Docker!')
})

const PORT = 5000
app.listen(PORT)
console.log(`Web server running on port ${PORT}`)