//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

//Tell app to use bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Uses public as a shortcut directory
app.use(express.static(__dirname + '/public'));

//Use Handlebars
var exphbs = require("express-handlebars");

/*
    views
        - layouts
            - main.handlebars
        - index.handlebars
        - home.handlebars

    jade
    pug
    handlebars

*/


app.engine('handlebars', exphbs({ defaultLayout: 'main' })); // default layout
app.set('view engine', 'handlebars');


// app.get('/', function(req, res) {
//     res.render('index', { name: 'Patrick', age: 25, address: '8890 Terrace Club Drive' }); // template engines
// });




// app.get('/burger', function(req, res) {
//     res.render('burger', { data: [ 'Mango', 'Pineapple', 'Orange' ] });
// });




var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});