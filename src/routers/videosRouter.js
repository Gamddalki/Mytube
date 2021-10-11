import express from "express";

import {
  watch,
  edit,
  editPost,
  remove,
  upload,
} from "../controllers/videosController";

const videosRouter = express.Router();

videosRouter.get("/:id(\\d+)", watch);
videosRouter.route("/:id(\\d+)/edit").get(edit).post(editPost);
videosRouter.get("/:id(\\d+)/delete", remove);
videosRouter.get("/upload", upload);

export default videosRouter;
