import Mail from '../models/mailSchema.js';
import nodemailer from 'nodemailer';
import validator from 'validator';
import emailExistence from 'email-existence';
import asyncHandler from 'express-async-handler';
import dotenv from 'dotenv';

dotenv.config();



// @desc Send Mail To Admin
// @route POST /api/send
// @access Public

const sendMail = asyncHandler(async(req,res)=>{

    let {name,email,message} = req.body;
    var validateEmail = validator.isEmail(email);
    if(validateEmail){

        emailExistence.check(email, (err, result)=>{
            if(result){
              
                const mail = Mail.create({
                    name:name,
                    email:email,
                    message: message,
                });
                    
                const output = `
                <div style="background-color:#78c4d4;padding:50px 50px;display:grid;place-items:center">
                  <div>
                    <h1 style="color:#8f4f4f;font-size:30px;font-weight:700;">From: ${name}</h1>
                    <h1 style="color:#8f4f4f;font-size:30px;font-weight:700;">Email: ${email}</h1>
                    <p style="color:#b7657b;font-size:20px;">${message}</p>
                  </div>
                </div>
                `;
                
                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port:465,
                    secure: true,
                    auth:{
                        user:process.env.MAIL_USER,
                        pass:process.env.MAIL_PASSWORD
                    },
                    tls:{
                        rejectUnauthorized:false,
                    }
                });
            
                let mailOptions = transporter.sendMail({
                    from:`"Message from my portfolio"<${process.env.MAIL_USER}>`,
                    to: process.env.MAIL_SEND_TO,
                    subject:`Message from ${name}`,
                    text:`${message}`,
                    html:output,
                });
            
                transporter.sendMail(mailOptions,()=>{
                });
        
                if(mail){
                    res.status(201).json(mail);
                }
                else{
                    res.status(400)
                    throw new Error("Error");
                }
            }
            else{
                res.status(404).json({message:"Email Doesn't Exists"})
            }
        });

    }
    else{
        res.status(400)
        throw new Error("Email is Invalid");
    } 
});

// @desc Get all Mails
// @route GET /api/mail
// @access PRIVATE

const getMails = asyncHandler(async(req,res)=>{
    const mails = await Mail.find({});
    if(mails){
        res.json(mails);
    }
    else{
        res.status(400)
        throw new Error("There are no mails");
    }

});

// @desc Delete Mail By Id
// @route DELETE /api/mail/:id
// @access PRIVATE

const deleteMailById = asyncHandler(async(req,res)=>{
    const mail = await Mail.findById(req.params.id);
    if(mail){
        await mail.remove();
        res.json({message:"Message Removed!"});
    }
    else{
        res.status(400)
        throw new Error("Project Not Found");
    }

});
export {sendMail, getMails,deleteMailById}
