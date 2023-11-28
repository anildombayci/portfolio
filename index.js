// Get all required modules
var express = require('express');
var app = express();
// Define the view engine to EJS
app.set('view engine', 'ejs');
// Define the static directory
app.use(express.static('public'));
// Render the pages
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/dino', function (req, res) {
    res.render('dino');
})
app.get('*', function (req, res) {
    res.render('index');
});
// Log and listen to port
app.listen(3000)
console.log('[🔌] Listening on Port 3000');