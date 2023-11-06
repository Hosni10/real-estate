import express from "express";
import {
  addAdmin,
  deleteAdmin,
  getAllAdmins,
  getSingleAdmin,
  updateAdmin,
} from "./admin.controller.js";
import superAdminMiddleware from "../../../middlewares/super-admin.middleware.js";

const adminRouter = express.Router();

adminRouter.get("/getAllAdmins", superAdminMiddleware, getAllAdmins);
adminRouter.get("/getSingleAdmin/:Id", getSingleAdmin);
adminRouter.put("/updateAdmin/:Id", updateAdmin);
adminRouter.delete("/deleteAdmin/:Id", deleteAdmin);
adminRouter.post("/addAdmin", addAdmin);

export default adminRouter;
