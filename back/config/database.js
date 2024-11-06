const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1/tasksManagment"
);

const db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connextion error'))
db.once('open' , ()=>{
    console.log(" connected to mongoDB")
})

module.exports = mongoose