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

videosRouter.get("/:id([0-9a-f]{24})", watch);
videosRouter.route("/:id([0-9a-f]{24})/edit").get(edit).post(editPost);
videosRouter.get("/:id([0-9a-f]{24})/delete", remove);
videosRouter.route("/upload").get(upload).post(uploadPost);

export default videosRouter;
