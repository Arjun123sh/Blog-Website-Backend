const express=require("express");
const app=express()

require("dotenv").config()
const PORT=process.env.PORT||4000

app.use(express.json())



const routers=require("./routes/blog")
app.use("/api/v1",routers)

app.listen(PORT,()=>{
    console.log(`Server is Successfully running at ${PORT}`)
})

const dbConnect = require("./config/database");
dbConnect();


app.get("/", (req,res) => {
    res.send(`<h1> This is my homepage</h1>`);
})