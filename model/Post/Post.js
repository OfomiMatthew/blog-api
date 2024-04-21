const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Post Title is required'],
        trim:true // to avoid white spaces
    },
    description:{
        type:String,
        required:[true,"Post description ins required"]
    },
    category:{
        type:mongoose.Schema.ObjectId,
        ref:"Category",
        required:[true,"Post category is required"]
    },
    numViews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    disLikes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:[true,"Please Author is required"]
    },
    Photo:{
        type:String,
        required:[true,"Post image is required"]
    }
},{timestamps:true})

const postModel = mongoose.model('Post',postSchema)

module.exports = postModel