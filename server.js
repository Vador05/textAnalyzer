// Load required packages
var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var formController = require('./controllers/form');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');

// Connect to the beerlocker MongoDB
mongoose.connect('mongodb://localhost:27017/textAnalyzer');

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
    extended: true
}));


// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
var router = express.Router();


// Create endpoint handlers for /beers
router.route('/forms')
    .post(formController.postForms)
    .get(formController.getForms)

// Create endpoint handlers for /beormers/:beer_id
router.route('/forms/:form_id')
    .get(formController.getForm)
    .put(formController.putForm)
    .delete(formController.deleteForm);

router.route('/users')
    .post(userController.postUsers)
    .get(userController.getUsers);

router.route('/login')
    .get(userController.getLogin);
// Register all our routes with /
app.use('/', router);

app.get('*', function(req, res) {
    res.sendfile('./public/Login_v14/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});
// Start the server
app.listen(3000);
