const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);
    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '673dfdb7dfmshf0ba7d11c302434p1585fejsn5578b2669ce6' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const direction = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direction,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}