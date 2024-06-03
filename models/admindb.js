const mongoose=require('mongoose');



const Logsch=new mongoose.Schema({


name:{
    type:String,require:true
},
password:{
    type:String,
    require:true
},
phoneno:{
    type:Number
},
address:{
    type:String
}


})

const Login=mongoose.model("Login", Logsch);

module.exports=Login;