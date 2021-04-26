const http = require('http');

function router(req, res) {
    console.log('Nueva peticion');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            res.write('Hola que tal');
            res.end()
            break;
    
        default:
            res.write('Error 404: not found')
            res.end();;
            break;
    }

/*     res.writeHead(201, { 'Content-Type': 'text/plain' })
    res.write('I\'ve learned how to use HTTP in NodeJs')


    res.end(); */
}

http.createServer(router).listen(3000);

console.log('Listen in the prot 3000');