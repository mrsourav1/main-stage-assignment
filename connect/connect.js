import mongoose from "mongoose";

const uri = "mongodb+srv://sourav:sourav@cluster0.cfk35vg.mongodb.net/?retryWrites=true&w=majority";

export const connect = ()=>{
    mongoose.set('strictQuery',false)
    
    return mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("Db is Connected")
    })
}

