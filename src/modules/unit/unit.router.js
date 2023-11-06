import express from "express";
import {
  addUnit,
  deleteUnit,
  getAllUnits,
  getUnit,
  updateUnit,
} from "./unit.controller.js";
import unitsAdmin from "../../../middlewares/unit.middleware.js";

let unitRouter = express.Router();

unitRouter.get("/:id", unitsAdmin, getUnit);
unitRouter.put("/:id", unitsAdmin, updateUnit);
unitRouter.delete("/:id", unitsAdmin, deleteUnit);
unitRouter.get("/getAllUnits", unitsAdmin, getAllUnits);
unitRouter.post("/addUnit", unitsAdmin, addUnit);

export default unitRouter;
