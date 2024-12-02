const mongoose = require('mongoose');
const { Schema } = mongoose;
var bcrypt = require('bcryptjs');

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


userSchema.pre('save', async function (next) {
   
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next();
  });

  userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  
  }

const User = mongoose.model('User', userSchema);
module.exports = User;