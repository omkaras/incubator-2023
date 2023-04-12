const express = require('express')
const app = express()
const port = 8080

var fs = require('fs');
var path = process.cwd();
var buffer = fs.readFileSync(path + "/data.txt");

app.get('/', (req, res) => {
  res.send('----> Hello World :)')
})

app.get('/data', (req, res) => {
  console.log("entered /data api");
  res.send(buffer.toString());
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
