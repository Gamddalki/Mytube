import express from "express";

import { see, logout, edit, leave } from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.get("/:id(\\d+)", see);
usersRouter.get("/logout", logout);
usersRouter.get("/edit", edit);
usersRouter.get("/delete", leave);

export default usersRouter;
