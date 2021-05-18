const User = require('../models/usermodel');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.HomepageService = new Promise ((resolve, reject) => {
    resolve('This is Homepage.');
});

exports.SignupService = (body) => {

    const { name, email, username, password } = body;
    const newUser = new User({ name, email, username, password });
    
    return new Promise ((resolve, reject) => {
        User.findOne({username})
        .then(  user =>{
            
            if(user) return resolve('user already exist.');

            bcrypt.genSalt(10, (err, salt) =>{
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    newUser.password = hash;
                    newUser.save()
                    .then( userCreated => resolve(userCreated))
                    .catch(err => reject(err));
                })
            });     
        })
        .catch(err => reject(err));
    });
}

exports.SigninService = (req, body) => {
    
    const { username, password } = body;

    return new Promise( (resolve, reject) =>{
        User.findOne({username})
        .then(user =>{
            if(!user) return reject('User not found.');

            bcrypt.compare(password, user.password)
            .then( isMatch =>{
                
                if(!isMatch) return reject('Incorrect password.')

                const token = jwt.sign({user}, process.env.SECRET_KEY_JWT, {expiresIn: 60 * 60});
                req.header('auth-token', token);
                resolve(token);
            });
        })
        .catch(err => reject(err));
    });
}