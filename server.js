const express = require('express')
const app = express()


// app.use(express.static(__dirname + '/public'))



app.get('/', (req, res) => {
    let hours = new Date().getHours()
    if (hours > 8 && hours < 17) {
        res.sendFile(__dirname + '/public/index.html')
    } else {
        res.sendFile(__dirname + '/public/notOpen.html')
    }

})
app.get('/contact', (req, res) => {
    let hours = new Date().getHours()
    if (hours > 8 && hours < 17) {
        res.sendFile(__dirname + '/public/contact.html')
    } else {
        res.sendFile(__dirname + '/public/notOpen.html')
    }

})
app.get('/ourservices', (req, res) => {
    let hours = new Date().getHours()
    if (hours > 8 && hours < 17) {
        res.sendFile(__dirname + '/public/ourservices.html')
    } else {
        res.sendFile(__dirname + '/public/notOpen.html')
    }

})


app.listen(3000, (err) => {
    if (err) console.log("serveur is not running")
    else console.log("serveur is running on port 3000")
})
