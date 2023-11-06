import express from "express";
import {
  addRole,
  deleteRole,
  getAllRoles,
  updateRole,
} from "./role.controller.js";

const roleRouter = express.Router();

roleRouter.get("/getAllRoles", getAllRoles);
roleRouter.put("/updateRole/:Id", updateRole);
roleRouter.delete("/deleteRole", deleteRole);
roleRouter.post("/addRole", addRole);


export default roleRouter