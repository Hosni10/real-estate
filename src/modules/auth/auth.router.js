import express from "express";

import { signin } from "./auth.controller.js";

const signinRouter = express.Router();

signinRouter.post("/login", signin);

export default signinRouter;
