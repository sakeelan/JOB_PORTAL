const applyjob=require('../models/applydb');


const appliedjob=async(req,res)=>{
    const{role,location,name,email,contact,exp,salary,resume}=req.body;
   const applied= new applyjob({role,location,name,email,contact,exp,salary,resume})
  await applied.save()
  res.render("success")
}






const deleteprofile=async(req,res)=>{


    const {id}=req.params;
const deleteuser=await applyjob.findByIdAndDelete({_id:id});
if(!deleteuser){
    res.status(200).json({message:"user not found"})
}else{
     
    res.redirect('/adminlog' )
}


res.render("success")
}
 const viewprofile=async(req,res)=>{
    const{id}=req.params;
            try {
                const user=await applyjob.findById({_id:id});
                if (user==null) {
                    res.redirect('/')
                }else{
                    res.render('view',{user:user});
                }
                
            } catch (error) {
            console.log("not find")
            }
        }



module.exports={appliedjob, deleteprofile, viewprofile};


