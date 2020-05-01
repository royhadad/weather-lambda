const getWeather = require('./getWeather');
const getSearchHistory = require('./getSearchHistory');
const postWeather = require('./postWeather');

exports.handler = async (event) => {
    const defaultResponse = {
        ok: false,
        status: 500
    };
    let response;
    switch (event.method) {
        case 'getWeather':
            response = await getWeather(event.search);
            break;
        case 'getSearchHistory':
            response = await getSearchHistory();
            break;
        case 'postWeather':
            response = await postWeather(event.cityName, event.weatherDescription);
            break;
        default:
            response = {
                ok: false,
                status: 404
            }
    }
    if (!response) {
        return defaultResponse;
    } else {
        return response;
    }
};