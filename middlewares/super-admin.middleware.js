import jwt from "jsonwebtoken";
import roleModel from "../models/role.model.js";
import { config } from "dotenv";

config();

export default (req, res, next) => {
  const auth = req.headers["authorization"];

  const token = auth.split(" ");

  jwt.verify(token[1], process.env.SECRET_KEY, async function (err, decoded) {
    let role = await roleModel.findById(decoded.roleId);
    if (role && role.name == "super admin") {
      next();
    } else {
      res.status(403).json({ message: "not authorized" });
    }
  });
};
