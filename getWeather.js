const fetch = require('node-fetch');
const { lowerCase } = require('lower-case');
const OPEN_WEATHER_MAP_API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;

module.exports = async (search) => {
    try {
        if (!search) {
            return {
                ok: false,
                status: 400
            }
        }
        search = lowerCase(search);

        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${OPEN_WEATHER_MAP_API_KEY}`);
        if (res.status !== 200) {
            throw new Error('not found');
        }
        let data = await res.json()
        data = {
            place: `${data.name}, ${data.sys.country}`,
            description: data.weather[0].description
        };

        return {
            ok: true,
            status: 200,
            body: JSON.stringify(data)
        };
    } catch (e) {
        return {
            ok: false,
            status: 404
        }
    }
}