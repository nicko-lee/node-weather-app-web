const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    // Build request URL
    const url = 'http://api.weatherstack.com/current?access_key=' + process.env.WEATHERSTACK_TOKEN + '&query=' + latitude + ',' + longitude
    
    // Make request
    request( { url, json: true }, (error, { body } ) => {
        if (error) { // Check if error argument contains a value (indicates a lower level OS error) 
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) { // If this prop exists we know something has gone wrong 
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}: It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    }) 
}

module.exports = forecast


