const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema =new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        enum:[1 , -1] //1 active , -1 deleted
    }
} , {timestamps: true})

const User = mongoose.model('User', userSchema);
module.exports = User;