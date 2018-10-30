let express = require('express')
let app = express()
app.get('/foobar', function (req, res) {
    res.send("hello world version 2")
})

app.listen(3030, function() {console.log("server started on port 3030") })