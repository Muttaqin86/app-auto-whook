const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send(`
    <h1>CI/CD WEBHOOK SUCCESS 🚀</h1>
    <h2>Auto Deploy Jenkins Working 🚀</h2>
    <h3>Update 🚀</h3>
  `)
})

app.listen(4040, '0.0.0.0', () => {
  console.log('App running on port 4040')
})