import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { connect } from "./connect/connect.js"
import User from "./model/user.js"
import { getUser } from "./controller/user.js"

const port = 8000
const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.send("hello")
})


app.get("/get-users",getUser)



const start = async()=>{
    try{
        await connect()
        app.listen(port,()=>{
            console.log(`i am available at ${port}`)
        })
    }catch(err){
        console.log(err)
    }
}

start()
