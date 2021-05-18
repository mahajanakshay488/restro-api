const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_CONNECTION_URL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('database connected!'))
.catch(err => console.log(err));