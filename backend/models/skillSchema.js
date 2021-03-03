import mongoose from 'mongoose';


const skillSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
   
},{
    timestamps:true,
})

const Skill = mongoose.model('Skill', skillSchema)
export default Skill;