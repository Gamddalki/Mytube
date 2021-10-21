import express from "express";

import {
  see,
  githubLoginStart,
  githubLoginFinish,
  logout,
  edit,
  editPost,
  leave,
} from "../controllers/usersController";

const usersRouter = express.Router();

usersRouter.get("/:id(\\d+)", see);
usersRouter.get("/github/start", githubLoginStart);
usersRouter.get("/github/finish", githubLoginFinish);
usersRouter.get("/logout", logout);
usersRouter.route("/edit").get(edit).post(editPost);
usersRouter.get("/delete", leave);

export default usersRouter;
