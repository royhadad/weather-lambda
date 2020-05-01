require('dotenv').config({ path: __dirname + '/.env' });
const getWeather = require('./getWeather');
const getSearchHistory = require('./getSearchHistory');
const postWeather = require('./postWeather');

const testGetWeather = async (search) => {
    const res = await getWeather(search);
    if (res.body !== undefined) {
        res.body = JSON.parse(res.body);
    }
    console.log(res);
}
const testGetSearchHistory = async () => {
    console.log(await getSearchHistory());
}
const testPostWeather = async (cityName, weatherDescription) => {
    console.log(await postWeather(cityName, weatherDescription));
}

//WRITE YOUR TEST
testGetWeather(`zur Yigal`);