const express = require('express')

const app = express()

app.use(express.static('static'))

// app.get('/', function (req, res) {
//     res.send('Hello World!')
// })

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Example app listening on port', port)
})
