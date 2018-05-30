require('./startup/db_init');
require('./models/user');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;


// app.get('/', (req, res) => {
//     res.send({ text: 'Testing' });
// })

//console.log(User.find({ 'Name':'Yous'}));

app.post('/', function (req, res, next) {

    User.create(req.body, (err,data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }
    });
});

app.listen(PORT);

