import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//Configurations and middlewares
app.use(express.json({
    limit: '16kb'
}))  // limit for json response

app.use(express.urlencoded({extended: true, limit: '16kb'})) // URL encoder

app.use(express.static("public")) // static files

export { app }