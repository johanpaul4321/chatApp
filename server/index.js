const express = require("express")
const cors=require("cors")
const { default: mongoose } = require("mongoose")
const userRoute =require("./Routes/userRoute");

const app=express()
// const mongoose=require(mongoose);
require("dotenv").config()

app.use(express.json())
app.use(cors())
app.use("/api/users", userRoute);


const port= process.env.PORT || 5000;
const uri= process.env.ATLAS_URI;

app.listen(port, (req, res)=>{
    console.log(`Server running on port: ${port}`);
});
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>console.log("successful conection")).catch((error)=>console.log("failed: ",error.message));



