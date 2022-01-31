// server.js
const http = require('http')
const PORT = process.env.PORT || 9000
http.createServer((req, res) => {
  console.log('New connection')
 // res.end('Hello Cloud Run v2 my name suprobhat and pintu ganguly' + new Date() )
  res.end('Good Morning subham and joy suprobhat')
}).listen(PORT, () => console.log('Listening on', PORT))
