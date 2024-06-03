const { timeStamp } = require('console')
const mongoose=require('mongoose')


const jobsch= new mongoose.Schema({

role:{
    type:String,required:true
},
location:{
    type:String,required:true
},
exp:{
    type:String,required:true
},
salary:{
    type:String,required:true
},
skills:{
    type:String,required:true
},
des:{
    type:String,required:true
}



})

const addjob=mongoose.model('addjob',jobsch)
module.exports=addjob;
