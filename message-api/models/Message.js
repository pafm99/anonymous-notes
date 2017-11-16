const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({

    message: {
        type: String, 
        required: [true, 'The message is required']
    },
    created_date: {
        type: Date,
        default: Date.now

    }

});

module.exports = mongoose.model("Message", MessageSchema);