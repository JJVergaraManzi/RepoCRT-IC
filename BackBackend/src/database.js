const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost/CRTICapp';

mongoose.connect(URI, {
    useNewUrlParser: true, 

    useUnifiedTopology: true 
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
    });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});