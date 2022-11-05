const express = require('express')
const axios = require('axios')

const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.json('hello world')
})

app.listen(port, () =>
  console.log(`server running on PORT http://localhost:${port}`)
)
