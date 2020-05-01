const { APIKey } = require('./config.js');
module.exports = async (search) => {
    if (!search) {
        return {
            ok: false,
            status: 400
        }
    }

    let res = await fetch(`api.openweathermap.org/data/2.5/weather?q=${search}&appid=${APIKey}`);
    let data = await res.json()

    return {
        ok: true,
        status: 200,
        body: JSON.stringify(data)
    };
}