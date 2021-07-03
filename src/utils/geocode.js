const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + process.env.MAPBOX_TOKEN + '&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const data = {
                placeName: body.features[0].place_name,
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0]
            }
            callback(undefined, data)
        }
    })
}

module.exports = geocode


// ARCHIVED
// const mapBoxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/12pig.json?access_token=pk.eyJ1IjoiZnJhbmtwb29sZSIsImEiOiJja3FicHBlN2cwY292MnVvZXdmc3l1d243In0.4v-hLWQGX2ScbuaFJbPrUQ&limit=1'

// request( { url: mapBoxUrl, json: true }, (error, response, body) => {
//     if (error) { // Low level OS error
//         console.log('Unable to connect to location services!')
//     } else if (response.statusCode !== 200) { // HTTP errors defined by MapBox
//         console.log(response.statusCode)
//         console.log(body)
//         console.log('Unable to find location')
//     } else if (body.features.length === 0) { // Valid user input but with no results so check for empty array
//         console.log(body)
//         console.log('Unable to find location. Please enter another search term')
//     } else {
//         console.log('I am in else')
//         console.log(response.statusCode)
//         console.log(body.features[0].center)
//     }   
// })