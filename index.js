const express=require('express');
const app=express();
const mongoose=require('mongoose')

const cors = require('cors');
const path=require('path')
const {appliedjob, deleteprofile, viewprofile}=require('./controllers/appliedjob')
const {log,sign}=require('./controllers/admin')
const {findjob, jobopen}=require('./controllers/addjob')
const applyjob=require('./models/applydb');
const addjob=require('./models/addjobdb');
const Login = require('./models/admindb');

app.use(cors({
    Origin: 'http://127.0.0.1:5000',
    Credentials: true,
    Methods: 'GET,PUT,POST,DELETE,OPTIONS',
    Headers: 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
}));



app.use(express.json());

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:false}))

// new================================




// ================================

app.get('/',async(req,res)=>{

const job=await addjob.find({}).sort({createdAt:+1});
    res.render("main",{job:job})
})


app.get("/main" ,(req,res)=>{

    res.redirect("/")

})

// ================================
//
/////////admin log=======================================

app.get("/apply" ,(req,res)=>{

    res.render("apply")
})
app.get("/adminlog" ,async(req,res)=>{
    const user= await applyjob.find({});
    res.render("admin",{user:user})

})

app.post("/adminsign", sign)


app.post("/adminlog", log);

app.get("/adminlog",(req,res)=>{
    res.render("adminlog")
    })

    app.get("/adminsign",async(req,res)=>{
      
        res.render("adminsign");
        })



    app.get("/adminid",(req,res)=>{
        res.render("adminlog")
        })
    



        ////contact route========================


        app.get("/contact",(req,res)=>{
            res.render("contact")
        })
        app.get("/blogs",(req,res)=>{
            res.render("blogs")
        })

        app.get("/about",(req,res)=>{
            res.render("about")
        })



////anchor tag==================================

app.get("/main",(req,res)=>{
    res.render("main")
})

app.get("/addopenings",(req,res)=>{
    res.render("addopenings")
})

////addjob openings=================================================

app.post('/addopenings',jobopen )

    ///////select all job and apply=====================================

    app.get('/apply/:id',findjob)

    app.get('/details/:id',async(req,res)=>{
        const{id}=req.params;
                try {
                    const job=await addjob.findById({_id:id});
                    if (job==null) {
                        res.redirect('/')
                    }else{
                        res.render('details',{job:job});
                    }
                    
                } catch (error) {
                console.log("not find")
                }
            }
)


    ///////////apply profile////////////

app.post("/success",appliedjob)

app.get('/viewprofile/:id',viewprofile)

app.get("/admindelete/:id",deleteprofile)




const dbs="mongodb://localhost:27017/job";

mongoose.connect(dbs) 
  .then((result) =>{ console.log("Database connected");
  app.listen(5000, ()=>{
    console.log("server run in 5000");
})})



