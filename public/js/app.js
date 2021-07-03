console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // Build URL taking into account user input (encode for special chars including spaces)
    const location = search.value
    url = 'http://localhost:3000/weather?address=' + encodeURIComponent(location)

    // Setup loading message
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    // Fetch data from URL
    fetch(url).then((response) => {    
        response.json().then(({ error, geocodeMatchedLocation, forecast }) => {
            if (error) {
                return messageOne.textContent = error
            }
            messageOne.textContent = geocodeMatchedLocation
            messageTwo.textContent = forecast
    })
})
})