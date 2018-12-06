const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();



app.use(express.static(path.join(__dirname, 'build')));
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/build');





app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.render('index.html');
});

app.listen(process.env.PORT || 80);
