import express from "express";

import { edit } from "../controllers/usersController";
import { leave } from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.get("/edit", edit);
usersRouter.get("/leave", leave);

export default usersRouter;
