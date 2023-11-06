import mongoose from "mongoose";


export default function dbConnection() {mongoose.connect('mongodb://127.0.0.1:27017/Lark').then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log("Error in Database");
})} 

