const express = require('express')

const app = express()

const puerto = 8080

app.get('/', (req, res) => {
    res.send('Hola mundo!')
})

app.get('/personas', (req, res) => {
    res.json({name: "Stefi" ,edad: 24})
})


app.listen(puerto, () => {
    console.log('the server is up and running')
})
