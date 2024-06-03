
const mongoose=require('mongoose')


const applysch= new mongoose.Schema({

role:{
    type:String
},
location:{
    type:String
},
name:{
    type:String
},
email:{
    type:String
},
contact:{
    type:String
},
exp:{
    type:String
},
salary:{
    type:String
},
resume:{
    type:String
}


})


const applyjob=mongoose.model('apply',applysch)
module.exports=applyjob;
