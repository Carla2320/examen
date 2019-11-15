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

const argv = require('./config/yarg').argv;

const colors = require('colors');

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
    fs.createReadStream('datos.csv')
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