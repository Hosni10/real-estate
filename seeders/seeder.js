import dbConnection from "../Database/dbConnection.js";
import roleModel from "../models/role.model.js";
import adminModel from "../models/admin.model.js";
import bcrypt from "bcrypt";

dbConnection();

let superAdmin = await roleModel.create({ name: "super admin" });

adminModel.create({
  name: "user super admin",
  password: bcrypt.hashSync("123456", 8),
  email: "superadmin@gmail.com",
  roleId: superAdmin._id,
});

