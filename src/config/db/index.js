const mongoose = require('mongoose')

async function connect(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database: Connected')
    }catch(e){
        console.log('Database: Error')
        console.log(e)
    }
}

module.exports = { connect }
