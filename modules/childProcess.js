const { exec, spawn } = require('child_process');
const { stdout, stderr } = require('process');

/* exec('node modules/console.js', (err, stdout, stderr) => {
    if (err) {
        console.error(err)
        return false
    }
    console.log(stdout)
}) */

let processo = spawn('ls',['-la'])
console.log(processo.connected)

processo.stdout.on('data', function (dato) {
    console.log(processo.killed)
    console.log(dato.toString())
})

processo.on('exit', function () {
    console.log('El proceso termino')
})