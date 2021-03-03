import Project from '../models/projectSchema.js';
import asyncHandler from 'express-async-handler';
import formatPath from '../utils/formatPath.js';

// @desc Add a project in project Section
// @route POST /api/projects
// @access Private ADMIN

const addProject = asyncHandler(async(req,res)=>{

    const project = await Project.create({
        title: "Sample Title",
        coverImage:"/src/image/sample.png",
        images:"/src/image/sample.png",
        url:"www.sampleURL.com",
        description:"Sample Description"
    });

    const createdProject = await project.save();
    res.status(201).json(createdProject);
});
// @desc Get Projects for Project section
// @route GET /api/projects
// @access PUBLIC

const getProjects = asyncHandler(async(req,res)=>{


    const projects = await Project.find({});

    if(projects){
        res.json(projects);
    }
    else{
        res.status(400)
        throw new Error('No Projects Yet');
    }
});

// @desc GET a Projet by ID
// @route GET /api/projects/:id
// @access PUBLIC

const getProjectById = asyncHandler(async(req,res)=>{

    const project = await Project.findById(req.params.id).select("-createdAt -updatedAt");

    if(project){
        res.json(project);
    }
    else{
        res.status(400)
        throw new Error('Project not Found');
    }
});


// @desc delete a Project by ID
// @route Delete /api/projects/:id
// @access PUBLIC

const deleteProjectById = asyncHandler(async(req,res)=>{

    const project = await Project.findById(req.params.id);

    if(project){
        await project.remove();
        res.json({message:"Product Removed"});
    }
    else{
        res.status(400)
        throw new Error('Project not Found');
    }
});

// @desc Update a project
// @route PUT /api/projects/:id/edit
// @access Private/admin

const updateProject = asyncHandler(async(req,res) =>{
    const {title,url,description,coverImage,images} = req.body;

    const project = await Project.findById(req.params.id);
    if(project){
        project.title = title;
        project.url = url;
        project.description = description;
        project.images = images;
        project.coverImage = formatPath(coverImage);
       

        const updatedProject = await project.save();
        res.status(201).json(updatedProject);
    }
    else{
        res.status(404)
        throw new Error("Project not found");
    }
   
   
})



export {addProject,getProjects,getProjectById,deleteProjectById,updateProject};