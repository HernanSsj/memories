import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/post.js"

const app = express()


app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors());
app.use("/posts", postRoutes)

const CONECCTION_URL = "mongodb+srv://hernan:hernan1234@cluster0.cghrb.mongodb.net/<dbname>?retryWrites=true&w=majority"
const PORT = process.env.port || 5000

mongoose.connect(CONECCTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( app.listen(PORT, console.log(`Servidor escuchando en el puerto: ${PORT}`)))
    .catch( (error) => console.log(error.message))

mongoose.set("useFindAndModify", false)