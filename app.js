const express= require("express");
const app= express();
const mongoose= require("mongoose");
const path= require("path");
const ejsMate= require("ejs-mate");

const MONGO_URL ="mongodb://127.0.0.1:27017/Vitalize"

main().then(()=>{
    console.log("connected to db")
}).catch((err)=>{
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

//home route
app.get("/",(req,res)=>{
    res.render("UI/index.ejs")
});

//consult route
app.get("/consult",(req,res)=>{
    res.render("UI/consult.ejs");
});

//pediatrics
app.get("/pediatrics",(req,res)=>{
    res.render("UI/pediatrics.ejs");
});

//orthopedics
app.get("/orthopedics",(req,res)=>{
    res.render("UI/orthopedics.ejs");
});

//dental
app.get("/dental",(req,res)=>{
    res.render("UI/dental.ejs");
});

//Neurology
app.get("/neurology",(req,res)=>{
    res.render("UI/neurology.ejs");
});

//cardiologist route
app.get("/cardiology",(req,res)=>{
    res.render("UI/cardio.ejs");
});

//patient route
app.get("/patient_Naveen_Kant",(req,res)=>{
    res.render("UI/patient.ejs");
});

app.listen(8080, ()=>{
    console.log("server is listening to port : 8080")
});
