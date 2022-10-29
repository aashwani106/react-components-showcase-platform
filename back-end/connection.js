const mongoose = require('mongoose');

const databaseName = "julmttf200";
const url = `mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

// connect to database
// async function - returns a promise
mongoose.connect(url)
    .then((result) => {
        // console.log(result);
        console.log('connected to database');
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = mongoose;

