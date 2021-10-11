import express from "express";

import {
  watch,
  edit,
  editPost,
  remove,
  upload,
  uploadPost,
} from "../controllers/videosController";

const videosRouter = express.Router();

videosRouter.get("/:id(\\d+)", watch);
videosRouter.route("/:id(\\d+)/edit").get(edit).post(editPost);
videosRouter.get("/:id(\\d+)/delete", remove);
videosRouter.route("/upload").get(upload).post(uploadPost);

export default videosRouter;
