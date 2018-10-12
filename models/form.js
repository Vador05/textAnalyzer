// Load required packages
var mongoose = require('mongoose');

// Define our form schema
var FormSchema   = new mongoose.Schema({
    q1: String,
    a1: String,
    q2: String,
    a2: String,
    q3: String,
    a3: String,
    review:String,
    quantity: Number
});

// Export the Mongoose model
module.exports = mongoose.model('Form', FormSchema)