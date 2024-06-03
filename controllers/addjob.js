const addjob=require('../models/addjobdb')




const jobopen=async(req,res)=>{
    try {
        console.log("sumbit job");
    const{role,location,exp,salary,skills,des}=req.body;

    const addj= new addjob({role,location,exp,salary,skills,des});
    await addj.save();
    res.render('addopenings')
}
     catch (error) {
        res.status(500).json({message:"addjob error"})
        
    }}



    const findjob=async(req,res)=>{
        const{id}=req.params;
                try {
                    const job=await addjob.findById({_id:id});
                    if (job==null) {
                        res.redirect('/')
                    }else{
                        res.render('apply',{job:job});
                    }
                    
                } catch (error) {
                console.log("not find")
                }
            }



            module.exports={jobopen,findjob};