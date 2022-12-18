const fs = require('fs')
const { register, read } = require('./operaciones.js')

const argumentos = process.argv.slice(2)
const operacion = argumentos[0]

if (operacion === "read") {
    read()
    return
} else if (operacion === "register" & argumentos.length > 1) {
    register(argumentos[1], argumentos[2], argumentos[3], argumentos[4], argumentos[5])
    return
} else {
    console.log("Error favor ingresa los datos correctamente");
    console.log("Ejemplo : node index.js read")
    console.log("Ejemplo : node index.js register Benito '3 años' perro blanco otitis")
    return
}   