import express, { Request, Response, Express } from "express"
import routes from "./routes/index";
import dotenv from 'dotenv'
dotenv.config() //load environment variables from .env file
//or import express from 'express'                                              

const app: Express = express()
app.use(express.json());       //middleware


app.get('/', (req: Request, res: Response) => {
    res.send("Hello, Backend world!") }      

)
app.use(routes)


app.listen(process.env.PORT, () => {
    console.log(`server running on http://localhost:${process.env.PORT}`)

})


