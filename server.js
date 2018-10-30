let express = require('express')
let app = express()
app.get('/foobar', function (req, res) {
    res.send("hello world")
})

app.listen(3040, function() {console.log("server started on port 3040") })