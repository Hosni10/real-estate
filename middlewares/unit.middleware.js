import jwt from "jsonwebtoken";
import roleModel from "../models/role.model.js";
import { config } from "dotenv";

config();

const unitsAdmin = (req, res, next) => {
  let auth = req.header["authorization"];
  let token = auth.split(" ");

  jwt.verify(token[1], process.env.SECRET_KEY, async (err, decoded) => {
    let role = await roleModel.findOne({ _id: decoded.roleId });
    if (role && role.name == "units admin") {
      next();
    }
    res.json({ message: "not authorized" });
  });
};

export default unitsAdmin;
