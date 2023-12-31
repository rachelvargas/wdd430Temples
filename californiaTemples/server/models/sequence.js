const mongoose = require('mongoose');

const sequenceSchema = mongoose.Schema({
    maxDocumentId: { type: String, required: true },
    maxTempleId: { type: String, required: true }
});

module.exports = mongoose.model('Sequence', sequenceSchema);