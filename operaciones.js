const fs = require('fs')

const register = (nombre, edad = "no informado", animal = "no informado", color = "no informado", diagnostico = "no informado") => {
    const citas = JSON.parse(fs.readFileSync("citas.json", "utf8"))
    citas.push({ nombre, edad, animal, color, diagnostico })
    fs.writeFileSync("citas.json", JSON.stringify(citas))

    console.log("Cita Registrada")
}

const read = () => {
    const citas = fs.readFileSync(`citas.json`, 'utf8')
    console.log(citas);
}

module.exports = { register, read }