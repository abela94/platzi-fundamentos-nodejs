function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`Hola ${nombre}`)
            resolve(nombre)
            reject('Hay un error')
        }, 1500)
    })
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('bla bla bla')
            resolve(nombre)
        }, 1000)
    })
}

function adios(nombre, otroCallback){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log(`Adios ${nombre}`)
            resolve()
        }, 1000)
    })
}

// ...

console.log('Iniciando el proceso')

hola('Abelardo')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso')
    })
    .catch((error) => {
        console.error(error)
    })