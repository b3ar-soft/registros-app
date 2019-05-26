const mongoose = require('mongoose');

const registrySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: String
    },
    cum: {
        type: String,
        required: true,
        validate: {
            validator: (text) => {
                if(text.length === 10 || text !== null)
                    return true;

                return false;
            },
            message: 'El cum debe de tener 10 caracteres'
        },
        unique: true
    },
    group: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    checkin: {
        type: Boolean,
        default: false
    },
    folio: {
        type: String,
        default: ''
    }
});

const Registry = mongoose.model('Registry', registrySchema);

module.exports = Registry;