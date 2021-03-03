import Skill from '../models/skillSchema.js';
import asyncHandler from 'express-async-handler';

// @desc Add a Skill in Skill Section
// @route POST /api/skills
// @access Private ADMIN

const addSkill = asyncHandler(async(req,res)=>{

    const {name, image} = req.body;

    const nameExists = await Skill.findOne({name});

    if(nameExists){
        res.status(400)
        throw new Error('Skill Already exists');
    }

    const skill = await Skill.create({
        name,
        image,
    });

    if(skill){
        res.status(201).json({
            _id: skill._id,
            name:skill.name,
            image:skill.image,
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid Skill Data');
    }
});
// @desc list all skills in skill Section
// @route GET /api/skills
// @access public

const listSkill = asyncHandler(async(req,res)=>{
    const skills = await Skill.find({});
    res.json(skills);
});



export {addSkill, listSkill};