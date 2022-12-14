const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8090;


const bcrypt=require("bcrypt"); 

const bodyparser = require("body-parser");
const mongoose = require("mongoose");
//

// var coll = document.getElementsByClassName("collapsible");



mongoose.connect("mongodb://localhost:27017/period", {
  // mongodb+srv://prajakta:<password>@codered.jloiseq.mongodb.net/?retryWrites=true&w=majority
  // mongoose.connect("mongodb://prajakta1:my@ac-duznv3u-shard-00-00.kxt9nw6.mongodb.net:27017,ac-duznv3u-shard-00-01.kxt9nw6.mongodb.net:27017,ac-duznv3u-shard-00-02.kxt9nw6.mongodb.net:27017/cluster?ssl=true&replicaSet=atlas-jjwf85-shard-0&authSource=admin&retryWrites=true&w=majority", {
    useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify:false
});

// mongoose.connect(process.env.MANGO_URL,()=>{
//   console.log('connect');
// })

const Register=require("./models/registers");
// const coll=require("./models/chat");


////////



////
// const chatbot=require("./models/response");

//////////////////////
/*
var contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  address: String,
  email: String,
  desc: String,
});
var Contact = mongoose.model("contact", contactSchema);
*/

/////////////////

//we make contact module
// app.use(express.static('static',options));

// EXPRESS SPECIFIC STUFF
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/static", express.static("static")); // For serving static files

// PUG SPECIFIC STUFF
app.set("view engine", "pug"); // Set the template engine as pug
app.set("views", path.join(__dirname, "views")); // Set the views directory

// app.get("/", (req, res) => {
//   // const con = ""
//   const params = {};
//   res.status(200).render("index2.pug", params);          /////////////////////////////////////////////////////////////////////// 1st page
// });
app.get("/", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("index.pug", params);          /////////////////////////////////////////////////////////////////////// 1st page
});
// app.get("/calender", (req, res) => {
//   // const con = ""
//   const params = {};
//   res.status(200).render("Calender.pug", params);
// });
app.get("/shopping", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("Shopping.pug", params);
});
app.get("/chat", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("chat.pug", params);
});

app.get("/health", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("health.pug", params);
});
app.get("/firsthealth", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("firsthealth.pug", params);
});
app.get("/secondhealth", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("secondhealth.pug", params);
});
// app.get("/", (req, res) => {
//   // const con = ""
//   const params = {};
//   res.status(200).render("chat_bot.pug", params);
// });
app.get("/home", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("home.pug", params);
});


app.get("/calender", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("Calender.pug", params);
});
app.get("/dietplan", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("dietplan.pug", params);
});

app.get("/firstgroup", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("firstgroup.pug", params);
});
app.get("/secondgroup", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("secondgroup.pug", params);
});
app.get("/thirdgroup", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("thirdgroup.pug", params);
});
app.get("video.mp4", (req, res) => {
  // const con = ""
  const params = {};
  res.status(200).render("video.mp4", params);
});




app.get("/chat",(req,res)=>{
  res.render("chat.js")
});
/*
app.get("/contact", (req, res) => {
  // console.log(req.body)
  const params = {};
  res.status(200).render("", params);
});
app.post("/contact", (req, res) => {
  var myData = new Contact(req.body);
  myData
    .save()
    .then(() => {
      res.send("This item has been saved to the database");
    })
    .catch(() => {
      res.status(400).send("item was not saved to the databse");
    });
  // const params = {'message': 'Your form has been submitted successfully'}
  // res.status(200).render('contact.pug');
});
*/


////////////////////////////////

// app.use(express.static(static_path));//this will check in src folder then views 
// app.set("view engine","hbs");
// app.set("views",template_path);
// hbs.registerPartials(partials_path);
app.get("/index",(req,res)=>{
  res.render("index")
});

app.get("/register",(req,res) =>{
  res.render("register");
});
//goes to post database
app.post("/register", async(req,res) =>{
  try{
    //  console.log(req.body.fullname);
    //  res.send(req.body.fullname);
      const password=req.body.password;
      const cpassword=req.body.confirmpassword;
  if(password===cpassword){
     const registerEmployee=new Register({
         fullname: req.body.fullname,
         username: req.body.username,
         email:req.body.email,
         phoneno:req.body.phoneno,
         password:req.body.password,
         confirmpassword:req.body.confirmpassword,
         age:req.body.age
     })



     //password hash
   
     //
    // const registered=await registerEmployee.save();
    res.status(201).render("index.pug"); //
  }
  else{
    res.send("password is not maching")
  }
  
    }catch(error){
    res.status(400).send(error);
  }
  
});

app.get("/login",(req,res) =>{
  res.render("login");
});
// 
// console.log(path.join(__dirname,"../public"));
app.get("/", (req,res) =>{
    res.send("Helllo from Thapatecho");  //this is by default
});


// login post-check-data can be readed
app.post("/login",async(req,res) =>{
 try{
      const email=req.body.email;
      const password=req.body.password;
      // console.log(`${email} and password is ${password}`)
   const useremail=await Register.findOne({email:email});
//this will in sign in use plaintext of encrypt msg
   const isMatch= await bcrypt.compare(password,useremail.password);

  //  if(useremail.password===password)
  if(isMatch)
   {
    res.status(201).render("home.pug");
   }
   else {
    res.send("Invalid Login Details")
   }
/*
   //This will check email and give whole data
   res.send(useremail.password);
   console.log(useremail);
   */
    }catch (error){
   res.status(400).send("Invalid Login Details")
 }
});



//


//bcrypt

// const bcrypt=require("bcrypt");

// const securePassword=async (password)=>{
//       const passwordHash=await bcrypt.hash(password,10);
//      console.log(passwordHash)

//      const passwordmatch=await bcrypt.compare(password,passwordHash);
//      console.log(passwordmatch)

//     }
// securePassword("123")

//

///////////////////////////////////////

// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});



////////////////////////////
