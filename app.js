const express = require('express')
const app = express()

app.get('/fetch-news', (req, res) => res.send('Hello World'))

app.listen(80, () => console.log("Jalan"))