const express = require('express');
require('dotenv').config()

const app = express()


app.get('/', (req, res) => {
  res.send('Hello home')
})

app.get('/store', (req, res) => {
  res.send('Hello store')
})


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})