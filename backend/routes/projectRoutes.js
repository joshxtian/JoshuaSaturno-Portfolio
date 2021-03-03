import express from 'express';

import { addProject, getProjectById, getProjects, deleteProjectById,updateProject} from '../controllers/projectControllers.js';
import {protect,admin} from '../middleware/authMiddleware.js';


const router = express.Router();

router.route("/").post(protect,admin,addProject).get(getProjects);
router.route("/:id").get(getProjectById).delete(protect,admin,deleteProjectById);
router.route("/:id/edit").put(protect,admin,updateProject);


export default router;