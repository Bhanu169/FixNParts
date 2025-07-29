import express from "express";
import dotenv from "dotenv"
import fileUpload from "express-fileupload";
import { connect } from "./connection10/connection.js";
import cors from "cors"
import userRouter from "./routes10/userRoutes.js"
import cartRouter from "./routes10/cartRoutes.js";
import orderRoute from "./routes10/orderRoutee.js";
import proRouteee from "./routes10/proRoutes.js";
// import bookingRouter from "./routes10/bookingRoutes.js";

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config()

export const app=express()
const port =process.env.port

connect()
app.use(cors())

app.use(express.json())
app.use(fileUpload())

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use('/image', express.static(path.join(__dirname, 'public/image')));


// app.use('/image', express.static('public/image'));
app.use("/user",userRouter)
app.use("/",proRouteee);
app.use("/",cartRouter)
app.use("/",orderRoute);
// app.use('/', bookingRouter);



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port,()=>{
    console.log(`the server is running on port ${port}`)
})