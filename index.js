const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/*
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/

app.post('/log', (req, res) => {
    console.log("request headers");
    console.log(JSON.stringify(req.headers));
    console.log("req.body");
    console.log(JSON.stringify(req.body));
    res.send(JSON.stringify(req.headers));
    res.send(JSON.stringify(req.body));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

