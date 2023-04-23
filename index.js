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

// const user1 = new User({
//     name: 'ALex',
//     location: 'delhi',
//     verified: true,
//   });
  
//   const user2 = new User({
//     name: 'Sam Curran',
//     location: 'Mumbai',
//     verified: true,
//   });

  
//   Promise.all([user1.save(), user2.save()])
//     .then(() => console.log('Temporary users added'))
//     .catch(err => console.error('Could not add temporary users', err));
  


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