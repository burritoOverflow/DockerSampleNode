let express = require('express'),
  app = express(),
  port = process.env.PORT || 8080;
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModels'), //created model loading here
  bodyParser = require('body-parser');
  
let routes = require('./api/routes/todoListRoutes');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found.'})
  });


routes(app); 
app.listen(port);

console.log('Server running on port: ' + port);