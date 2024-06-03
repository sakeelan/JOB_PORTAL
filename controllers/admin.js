

const Login=require('../models/admindb');





const log=async(req,res)=>{
    try {
        const check=await Login.findOne({name:req.body.name});
   
        if (check.password===req.body.password) {
            res.redirect("adminlog")
        }
    
    } catch (error) {
        res.status(404).json()
    }
    
    
    }

const sign=async(req,res)=>{

    var data={
        name:req.body.name,
        password:req.body.password,
        phoneno:req.body.phone,
        address:req.body.address
    }
    
    
    await Login.insertMany([data]);
    res.render("adminlog")
     
    }


    module.exports={log,sign};