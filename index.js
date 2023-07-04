const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3030;

const app = express();

//enable body parser
app.use(express.json());
app.use(express.urlencoded({extended: false }));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(port, () => console.log(`server started on port ${port}`));