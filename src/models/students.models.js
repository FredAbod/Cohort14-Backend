const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
    },
    waec: {
        type: Boolean,
    },
    className: {
        type: String,
        enum: ['100level', '200level', '300level', '400level', '500level'],
        default: '100level',
    }
},
{
    versionKey: false,
});

const Students = mongoose.model('Student', studentsSchema);

module.exports = Students;