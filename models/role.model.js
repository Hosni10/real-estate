import mongoose from "mongoose";

const roleSchema = {
    name:String,
}

let roleModel = mongoose.model('role', roleSchema )
export default roleModel