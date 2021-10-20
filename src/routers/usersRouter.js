import express from "express";

import {
  see,
  githubLoginStart,
  githubLoginFinish,
  logout,
  edit,
  leave,
} from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.get("/:id(\\d+)", see);
usersRouter.get("/github/start", githubLoginStart);
usersRouter.get("/github/finish", githubLoginFinish);
usersRouter.get("/logout", logout);
usersRouter.get("/edit", edit);
usersRouter.get("/delete", leave);

export default usersRouter;
