import express from "express";

import { edit, leave } from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.get("/edit", edit);
usersRouter.get("/leave", leave);

export default usersRouter;
