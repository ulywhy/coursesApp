const express = require('express')
const cors = require('cors')
const ftp = require('./ftp')
const upload = require('./upload')

const server = express()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}


server.use(cors(corsOptions))

server.listen(8000, () => {
  console.log('Server started!')
})

server.get('/', (req, res) => {
  res.send('<h2>cidi server is running</h2>')
})
server.get('/ftp', ftp)
server.post('/upload', upload)
