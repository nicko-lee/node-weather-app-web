console.log('Client side javascript file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // Build URL taking into account user input (encode for special chars including spaces)
    const location = search.value
    url = 'http://localhost:3000/weather?address=' + encodeURIComponent(location)

    // Fetch data from URL
    fetch(url).then((response) => {    
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
            }
            console.log(data)
    })
})
})