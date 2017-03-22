const request = require('request');
const keys = require('../keys')

let getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${keys.weather.access_token_secret}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      })
    } else {
      callback('Unable to get the weather');
    }
  });
};

module.exports.getWeather = getWeather;