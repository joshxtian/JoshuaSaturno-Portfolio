import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';

const mailSchema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    message:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    }

},{
    timestamps:true,
})

const Mail = mongoose.model('Mail', mailSchema);
export default Mail;