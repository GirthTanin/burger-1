var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json()) //do i need this here?

// require('./app/routing/apiRoutes.js')(app);
// require('./app/routing/htmlRoutes.js')(app);

var routes = require('/controllers/burgers_controllers.js');

app.engine('handlebars' , exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(PORT, function () {
  console.log("App is listening on PORT: " + PORT)
});