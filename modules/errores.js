const { Z_ASCII } = require("zlib");

function otherFunction() {
    Breaks()
}

function Breaks() {
    return 3 + z
}

function breaksAsync() {
    setTimeout(function (cb) {
        try {
            return 3 + z
        } catch (err) {
            cb
            console.log(err.message)
        }
        
    },3000)
}

try {
    //otherFunction()
    breaksAsync(function () {
        console.log('Hay error')
    })
} catch (error) {
    console.error('Se rompio')
    console.error(error.message)
}

console.log('Esto esta al final')