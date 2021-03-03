import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import path from 'path';
import bodyParser from 'body-parser';
import connectDB from './config/db.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
import adminRoutes from './routes/adminRoutes.js';
import skillRoutes from './routes/skillRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import mailRoutes from './routes/mailRoutes.js';
import morgan from 'morgan';
dotenv.config();






connectDB();
const app = express();
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use("/api/admin",adminRoutes);
app.use("/api/skills",skillRoutes);
app.use("/api/projects",projectRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/mail',mailRoutes);

const __dirname = path.resolve();

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get("*", (req,res)=>res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html")));
}
else{
    app.get("/", (req,res)=>{
        res.send("api is runnning");
    })
}

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`.yellow));