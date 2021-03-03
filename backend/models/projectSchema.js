import mongoose from 'mongoose';


const projectSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    coverImage:{
        type:String,
        require:true,
    },
    images:[{
        type:String,
        require:true}],
    url:{
        type:String,
    },
    description:{
        type:String,
        require:true
    }

},{
    timestamps:true,
})

const Project = mongoose.model('Project', projectSchema);
export default Project;