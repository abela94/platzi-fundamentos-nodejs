console.time('todo')

let sum = 0

console.time('bucle')
for (let i = 0; i < 1000000000; i++) {
    sum ++;
}
console.timeEnd('bucle')

let sum2 = 0

console.time('bucle2')
for (let j = 0; j < 1000000000; j++) {
    sum ++;
}
console.timeEnd('bucle2')

console.time('asincrona')
asincrona()
    .then(() => {
        console.timeEnd('asincrona')
    })


console.timeEnd('todo')

function asincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Proceso asincrono')
            resolve()
        },0)
    })
}