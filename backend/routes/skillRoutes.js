import express from 'express';
import { addSkill, listSkill } from '../controllers/skillControllers.js';

import {protect,admin} from '../middleware/authMiddleware.js';


const router = express.Router();

router.route("/").post(protect,admin,addSkill).get(listSkill);



export default router;