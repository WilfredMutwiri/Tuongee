
;// require dotenv
require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const reviewsRoutes=require('./routes/reviewsRouter')

app.use(cors({
    origin:"http://localhost:5173",
    methods:"GET.POST,PUT,DELETE",
    allowedHeaders:"Content-Type,Authorization"
}));

app.use(reviewsRoutes);
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})
// routes 
app.use('/api/reviews/',reviewsRoutes);
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
