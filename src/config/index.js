require('dotenv').config();
const express = require('express');
const app = express();

// Databse Configuration
require('./database');

// bodyParser Configuration
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes
app.use('/user', require('../api/routes/userroutes'));
app.use('/recipe', require('../api/routes/recipesroutes'));

app.listen(process.env.PORT, console.log(`Server running on port ${process.env.PORT}`));