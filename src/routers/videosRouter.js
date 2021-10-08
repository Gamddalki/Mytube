import express from "express";

import { watch, edit, remove, upload } from "../controllers/videosController";

const videosRouter = express.Router();

videosRouter.get("/upload", upload);
videosRouter.get("/:id", watch);
videosRouter.get("/:id/edit", edit);
videosRouter.get("/:id/delete", remove);

export default videosRouter;
