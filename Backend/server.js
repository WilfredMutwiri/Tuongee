// require dotenv
require('dotenv').config();
// require express
const express=require('express');
// require mongoose
const mongoose=require('mongoose');
// initialize express
const app=express();
const cors=require('cors')
// import routes
const reviewsRoutes=require('./routes/reviewsRouter')
// middleware
app.use(express.json());
app.use(cors())
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
// routes 
app.use('/api/reviews',reviewsRoutes);
// app.use(reviewsRoutes)
// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen to requests
        app.listen(process.env.PORT,()=>{
            console.log("Listening at port",process.env.PORT)
        })
    })
    .catch((error)=>{
        console.log(error)
    })
