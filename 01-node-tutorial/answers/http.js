const http = require('http');

const server = http.createServer((req, res) => {
    //res.write('Hello there, Welcome to my homepage')
    if(req.url === '/') {
        res.end('Hello there, Welcome to my homepage')
    } else if(req.url === '/about') {
        res.end('Here is all about us')
    } else {
        res.end(`
        <h1>Oh no!</h1>
        <p>We can't seem to find the page you're looking for</p>
        <a href="/">back home</a>
        `)
    }
})

server.listen(3000)