let express = require('express');   // import express module
let app = express();    // name of this app
console.log("Hello World"); // assignment 1/12

let port = 3000;    // port number

// assignment 2/12
app.get("/", (req, res) => {
    res.send("Hello Express");
});

let listener = app.listen(port,() => {
    console.log('Your app is listening on port ' + listener.address().port);
})
































 module.exports = app;
