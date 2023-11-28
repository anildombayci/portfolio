module.exports = async function () {
var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/dino', function (req, res) {
    res.render('dino');
})
app.get('*', function (req, res) {
    res.render('index');
});
app.listen(3000)
console.log('[🔌] Listening on Port 3000');
}
