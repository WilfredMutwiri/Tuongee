// require dotenv
require('dotenv').config();
// require express
const express=require('express');
// require mongoose
const mongoose=require('mongoose');
// initialize express
const app=express();
// import routes
const reviewsRoutes=require('./routes/reviews')
// middleware
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
// routes
app.use('/api/reviews',reviewsRoutes);
// connect to mongoose
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("Listening at port",process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })
