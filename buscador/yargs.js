let opts = {
    base: {
        demand: true,
        alias: 'f'

    },
    limite: {
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
    .command('buscar', 'crea una nueva tabla', opts)
    .command('buscar_cod', 'Código del país que se requiere información', opts)
    .help()
    .argv;

module.exports = {
    argv
}