const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
const mongoUri = 'mongodb://127.0.0.1/pastry';

mongoose.connect(mongoUri).then(()=>{ 
    console.log ('database is connected')
})
.catch((err)=>{console.log(err)})

let database;

module.exports ={ 
  database
};