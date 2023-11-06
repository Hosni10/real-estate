import mongoose from "mongoose";

const adminSchema = {
  name: String,
  password: String,
  email: String,
  roleId: mongoose.Types.ObjectId,
};

let adminModel = mongoose.model("admin", adminSchema) 
export default adminModel;
