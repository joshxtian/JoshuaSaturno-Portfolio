import express from 'express';
import { sendMail, getMails,deleteMailById } from '../controllers/mailControllers.js';
import {protect,admin} from '../middleware/authMiddleware.js';

const router = express.Router();
router.route("/").get(protect,admin,getMails).post(sendMail);
router.route("/:id").delete(protect,admin,deleteMailById);


export default router;