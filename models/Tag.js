const mongoose = require('mongoose')

const Tag = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Tag', Tag)