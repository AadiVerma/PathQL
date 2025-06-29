import express from 'express';
const app = express();

app.get("/",(req,res)=>{
    res.send("HELLO SQL");
})
app.listen(4000,()=>{
    console.log("Server is running on PORT 4000")
})