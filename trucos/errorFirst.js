function asincrona(callback) {
    setTimeout(function () {
        try {
            let a = 3 + z
            callback(null, a)
        } catch (error) {
            callback(error, null)
        }
    }, 1000)
}

    asincrona(function (err, dato) {
        if (err) {
            console.error('tenemos un error')
            console.error(err)
            return false
            // throw err No funciona
        }
        console.log('Todo ha ido bien mi data es ', dato)
    })