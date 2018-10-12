// Load required packages
var Form = require('../models/form');

// Create endpoint /api/beers for POSTS
exports.postForms = function(req, res) {
    // Create a new instance of the Beer model
    var form = new Form();

    // Set the beer properties that came from the POST data
    form.q1= req.body.q1;
    form.a1 = req.body.a1;
    form.q2= req.body.q2;
    form.a2 = req.body.a2
    form.q3= req.body.q3;
    form.a3 = req.body.a3
    form.quantity = req.body.quantity;

    // Save the beer and check for errors
    form.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Form added to the database, could you bring me some beer!', data: form });
    });
};

// Create endpoint /api/beers for GET
exports.getForms= function(req, res) {
    // Use the Beer model to find all beer
    Form.find(function(err, forms) {
        if (err)
            res.send(err);

        res.json(forms);
    });
};

// Create endpoint /api/beers/:beer_id for GET
exports.getForm = function(req, res) {
    // Use the Beer model to find a specific beer
    Form.findById(req.params.form_id, function(err, form) {
        if (err)
            res.send(err);

        res.json(form);
    });
};

// Create endpoint /api/beers/:beer_id for PUT
exports.putForm = function(req, res) {
    // Use the Beer model to find a specific beer
    Beer.findById(req.params.form_id, function(err, form) {
        if (err)
            res.send(err);

        // Update the existing beer quantity
        form.quantity = req.body.quantity;

        // Save the beer and check for errors
        form.save(function(err) {
            if (err)
                res.send(err);

            res.json(form);
        });
    });
};

// Create endpoint /api/beers/:beer_id for DELETE
exports.deleteForm = function(req, res) {
    // Use the form model to find a specific beer and remove it
    Form.findByIdAndRemove(req.params.form_id, function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'Form removed from the database!' });
    });
};
