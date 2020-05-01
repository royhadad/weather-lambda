const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
const { lowerCase } = require('lower-case');

module.exports = async (search) => {
    if (!search) {
        return {
            ok: false,
            status: 400
        }
    }
    search = lowerCase(search);
    console.log('hello worldddd');

    return {
        ok: true,
        status: 200,
        body: JSON.stringify(Object.keys(process.env))
    }

    let res = await fetch(`api.openweathermap.org/data/2.5/weather?q=${search}&appid=${OPEN_WEATHER_MAP_API_KEY}`);
    let data = await res.json()

    return {
        ok: true,
        status: 200,
        body: JSON.stringify(data)
    };
}