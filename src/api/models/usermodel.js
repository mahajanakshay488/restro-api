const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    name: String
}, { timestamps: true });

module.exports = mongoose.model('user', userSchema);