import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/post.js"
import morgan from 'morgan'
import dotenv from "dotenv"
const app = express()
dotenv.config()

app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors());

app.use("/posts", postRoutes)

app.get("/", (req, res) =>{
    res.send("Recuerdos API")
})
const CONECCTION_URL = process.env.CONECCTION_URL
const PORT = process.env.port || 5000

mongoose.connect(CONECCTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( app.listen(PORT, "0.0.0.0" ,console.log(`Servidor escuchando en el puerto: ${PORT}`)))
    .catch( (error) => console.log(error.message))

mongoose.set("useFindAndModify", false)