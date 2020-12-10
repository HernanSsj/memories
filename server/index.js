import express from "express";
import bodyParser from "body-parser";
import mongoose from "moongoose";
import cors from "cors";

const app = express()

app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors());

const CONECCTION_URL = "mongodb+srv://hernan:hernan1234@cluster0.cghrb.mongodb.net/<dbname>?retryWrites=true&w=majority"
const PORT = process.env.port || 5000