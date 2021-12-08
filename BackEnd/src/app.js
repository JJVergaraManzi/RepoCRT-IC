const express = require('express');
const app = express();
const cors = require('cors');


//Settings
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/ActivitiesForm', require('./routes/ActivitiesForm'))
app.use('/api/ReunionForm', require('./routes/ReunionForm'))

module.exports= app;