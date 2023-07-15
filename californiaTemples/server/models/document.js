const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
    id: { type: String, required: true },    
    name: { type: String, required: true },
    oficialUrl: { type: String, required: true },
    url: { type: String, required: true },
    description: { type: String, required: true },
    dedicated: { type: String, reuired: false}
});

module.exports = mongoose.model('Document', documentSchema);


