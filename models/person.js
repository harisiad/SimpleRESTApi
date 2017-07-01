var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PersonSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    },
    alive: {
        type: Boolean,
        default: true
    }
});

var Person = mongoose.model('person', PersonSchema);

module.exports = Person;