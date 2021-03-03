import User from '../models/userSchema.js';
import generateToken from '../utils/generateToken.js';
import asyncHandler from 'express-async-handler';


// @desc Register Admin
// @route POST /api/admin/register
// @access Private

const registerAdmin = asyncHandler(async(req,res)=>{

    const {username, password} = req.body;

    const usernameExists = await User.findOne({username});
    if(usernameExists){
        res.status(400)
        throw new Error("Username Already Taken");
    }

    const user = await User.create({
        username,
        password,
    });

    if(user){
        res.status(201).json({
            _id: user._id,
            username:user.username,
            isAdmin:user.isAdmin,
            token:generateToken(user._id),
        })
    }
    else{
        res.status(400)
        throw new Error('Invalid user data');
    }
});
// @desc Login Admin
// @route POST /api/admin/login
// @access Private

const loginAdmin = asyncHandler(async(req,res)=>{

    const {username,password} = req.body;
    
    const user = await User.findOne({username});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    }
    else{
        res.status(401)
        throw new Error("Invalid email and password")
    }
});

export {registerAdmin, loginAdmin};