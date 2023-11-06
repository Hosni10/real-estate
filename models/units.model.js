import mongoose from "mongoose";

const unitSchema = {
  type: String,
  area: Number,
  price: String,
  description: String
};

let unitModel = mongoose.model("unit", unitSchema) 
export default unitModel;
