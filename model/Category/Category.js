const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    title:{
        type:String,
        required:true
     
        
    }
},{timestamps:true})

const categoryModel = mongoose.model("Category",categorySchema)
module.exports = categoryModel;