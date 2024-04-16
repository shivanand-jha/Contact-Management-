const express = require('express');
const app = express();
const User = require("./database");
const port = 3000;

app.set("view engine" , "ejs");
app.use(express.urlencoded({extended:false}))

app.use(express.static(__dirname + '/public'));


app.listen(port , ()=>{
    console.log(`server listening at ${port}`)
});


app.get('/', async(req,res)=>{
    const users = await User.find({});
    res.render("index",{
        title : "CRUD APP",
        users : users
    })
})

app.post('/register',async(req,res)=>{
 const {firstName , lastName , role , tel , email , description } = req.body;
 console.log(req.body);
 const newUser = new User({firstName , lastName , role , tel , email , description });
 const userSave = await newUser.save();
 res.redirect('/');
})

app.get("/register",(req,res)=>{
    res.render("register");
})


app.get("/edit/:id" , async(req,res)=>{
    const {id} = req.params;
    const user = await User.findById({_id:id});
    if(user==null){
        res.redirect('/');
    }else{
        res.render("edit",{
            user:user
        })
    }
})

app.post("/update/:id",async(req,res)=>{
    const {id} = req.params;
    const {firstName , lastName , role , tel , email , description } = req.body;
    const updateUser = await User.findByIdAndUpdate({_id:id},{firstName , lastName , role , tel , email , description },{new:true});
    res.redirect("/");
})

app.get('/delete/:id',async(req,res)=>{
    const {id }  = req.params;
    const deleteUser = await User.findByIdAndDelete({_id:id});
    res.redirect("/");
})