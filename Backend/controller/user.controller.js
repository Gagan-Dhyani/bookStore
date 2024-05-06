import user from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signup=async(req,res)=>{
    try {
        const {_id,fullname,email,password}=req.body;
        const User=await user.findOne({email})
        if(User){
            res.status(400).json({message:"User Already Exists"})
        }
        else{
            
            const hashPassword=await bcryptjs.hash(password,10)
            const createdUser= new user({
                id:_id,
                fullname:fullname,
                email:email,
                password:hashPassword
            })
            await createdUser.save()
            res.status(201).json({message:"User created Successfully",user:createdUser})
        }
    } catch (error) {
        console.log("ERR :"+error.message);
        res.status(500).json({message:"Internal server Error"})
        
    }
}

export const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const User=await user.findOne({email})
        const isMatch=await bcryptjs.compare(password,User.password)
        if(!User||!isMatch){
            res.status(400).json({message:"Invalid username or password"})
        }
        else{
            res.status(200).json({message:"Login Successful",User:{
                id:User._id,
                fullname:User.fullname,
                email:User.email
            }})
        }
    } catch (error) {
        console.log("ERR:"+error);
        res.status(400).json({message:"Internal server error"})
        
    }
}