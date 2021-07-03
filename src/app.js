require('dotenv').config()
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const path = require('path')
const express = require('express')
const request = require('postman-request')
const hbs = require('hbs')

// Create express server
const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static dir to server
app.use(express.static(publicDirectoryPath))


// Specify routes/handlers
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Sunny Baudelaire'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Sunny Baudelaire'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpMsg: 'Please help yourself to the cake.',
        name: 'Sunny Baudelaire'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address.'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, placeName }) => {
        if (error) {
            return res.send({
                error
            })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({
                    error
                })
            }

            // This code only runs if everything went well (happy path)
            res.send({
                inputAddress: req.query.address,
                geocodeMatchedLocation: placeName,
                forecast: forecastData
            })
        })
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        name: 'Sunny Baudelaire',
        errorMessage: 'Help article not found.',
        title: 404
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        name: 'Sunny Baudelaire',
        errorMessage: 'Page not found.',
        title: '404'
    })
})

// Start express server
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})