const User = require('../models/usermodel');
const {
    HomepageService, 
    SignupService,
    SigninService
} = require('../services/userservices');

exports.HomepageController = (req, res, next) =>{
    HomepageService
    .then(response => {
        res.status(200).json({message: response});
    });
}

exports.SignupController = (req, res, next) =>{
    SignupService(req.body)
    .then(user => res.status(201).json({message: user}))
    .catch(err => res.status(501).json({message: err}));

}

exports.SigninController = (req, res, next) =>{
    SigninService(req, req.body)
    .then(user => res.status(200).json({message: user}))
    .catch(err => res.status(501).json({message: err}));
}