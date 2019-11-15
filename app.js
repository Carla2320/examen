// const csv = require('csv-parser');
// const fs = require('fs');
// fs.createReadStream('datos.csv')
//     .pipe(csv())
//     .on('data', (row) => {
//         console.log(row[4]);
//     })
//     .on('end', () => {
//         console.log('CSV file successfully processed');
//     });


let listar = (archivo) => {
    fs.createReadStream('datos.csv')
        .pipe(csv())
        .on('data', (row) => {
            console.log(row);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });
}

let Buscar = (pais) => {
    fs.createReadStream(`${pais}`)
        .pipe(csv())
        .on('data', (row) => {
            if (row == pais) {
                console.log(`DATOS:${ pais.row[3] }`.green);
                console.log(`DATOS:${ pais.row[0] }`.green);

            }
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });

}

let crearArchivo = (base, limite) => {

}

const argv = require('./buscador/yargs').argv;
console.log(argv)
let command = argv._[0];

switch (command) {
    case 'mostrar':
        crearArchivo(argv.base, argv.anio, argv.codigo)
            .then(archivo => console.log(`Archivo: ${ archivo }`))
            .catch(err => {
                console.log(err)
            })
        break;
    case 'guardar':
        listar(argv.base, argv.anio, argv.codigo);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}