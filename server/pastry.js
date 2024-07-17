// const mongoose=require('mongoose')

// mongoose.connect('mongodb://localhost:27017/PASTRY')
// .then(()=>{
//     console.log('database connected succesfully')
// })
// .catch((err)=>{
//     console.error(err)
// })
// const pastrySchema={

// name: String,
// catarter: String,
// price: Number,
// description: String,
// image: String
// }
// const pastry =mongoose.model("pastry",pastrySchema)
// module.exports={
//      pastry
// }



const mongoose = require("mongoose");
const database= require("../server/database/sequelize/index.js")
let pastrySchema=({
    imageUrl: String,
     name: String,
    caracter: String,
    price: Number,
    description: String
   
});

let pastry= mongoose.model("pastry", pastrySchema);
module.exports = {
    pastry
}
