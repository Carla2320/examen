let opts = {
    base: {
        demand: true,
        alias: 'f'

    },
    anio: {
        alias: 'y',
        default: 1960
    },
    codigo: {
        alias: 'c',
        default: 'ECU'
    }
}
const argv = require('yargs')
    .command('listar', 'imprime las tablas de multiplicar', opts)
    .command('guardar', 'Guardar texto ', opts)
    .help()
    .argv;

module.exports = {
    argv
}