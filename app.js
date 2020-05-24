const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad donde se desea ver el clima',
        demand: true
    }
}).argv;

//argv.direccion
// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {


    try {
        const resp = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(resp.lat, resp.lng);
        return `El clima de ${resp.direction} es de ${temp}`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);