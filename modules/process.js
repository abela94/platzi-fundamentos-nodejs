//const process = require('process')

process.on('beforeExit', () => {
    console.log('El proceso va a terminar')
})

process.on('exit', () => {
    console.log('El proceso acabo')
    setTimeout(() => {
        () => {
            console.log('No me vere')
        }
    }, 0);
})

process.on('uncaughtException',(err, origin) => {
    console.log('Se te olvido capturar un error')
    console.err(err)
})

//unese()