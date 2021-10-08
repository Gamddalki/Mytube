import express from "express";

import { watch, edit, remove, upload } from "../controllers/videosController";

const videosRouter = express.Router();

videosRouter.get("/:id(\\d+)", watch);
videosRouter.get("/:id(\\d+)/edit", edit);
videosRouter.get("/:id(\\d+)/delete", remove);
videosRouter.get("/upload", upload);

export default videosRouter;
