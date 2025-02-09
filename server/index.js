import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import AuthRoute from './routes/AuthRoute.js';
import UserRoute from './routes/UserRoute.js';
import PostRoute from './routes/PostRoute.js';


const app = express();
app.use(express.json());


//Middleware
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

//DB connection
dotenv.config()
mongoose.connect(process.env.MONGO_DB)
.then(() => 
    app.listen(process.env.PORT, () => 
        console.log(`Listening at ${process.env.PORT}`)))
.catch((err) => console.log(err));

//Routes
app.use('/auth', AuthRoute);
app.use('/user', UserRoute);
app.use('/post', PostRoute);

