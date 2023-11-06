import express from "express";
import dbConnection from "./Database/dbConnection.js";
import adminRouter from "./src/modules/admin/admin.router.js";
import roleRouter from "./src/modules/role/role.router.js";
import signinRouter from "./src/modules/auth/auth.router.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import { config } from "dotenv";

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/admins", adminRouter);
app.use("/roles", roleRouter);
app.use("/auth", signinRouter);

app.use(errorMiddleware);

dbConnection();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
