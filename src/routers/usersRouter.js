import express from "express";

import {
  see,
  githubLoginStart,
  githubLoginFinish,
  logout,
  edit,
  editPost,
  leave,
  changePassword,
  changePasswordPost,
} from "../controllers/usersController";

import { protectorMiddleware, uploadFiles } from "../middlewares";
import { publicOnlyMiddleware } from "../middlewares";

const usersRouter = express.Router();

usersRouter.get("/:id(\\d+)", see);
usersRouter.get("/github/start", publicOnlyMiddleware, githubLoginStart);
usersRouter.get("/github/finish", publicOnlyMiddleware, githubLoginFinish);
usersRouter.get("/logout", protectorMiddleware, logout);
usersRouter
  .route("/edit")
  .all(protectorMiddleware)
  .get(edit)
  .post(uploadFiles.single("avatar"), editPost);
usersRouter
  .route("/change-password")
  .all(protectorMiddleware)
  .get(changePassword)
  .post(changePasswordPost);
usersRouter.get("/delete", protectorMiddleware, leave);

export default usersRouter;
