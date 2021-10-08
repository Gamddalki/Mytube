import express from "express";

import { watch, edit, remove } from "../controllers/videosController";

const videosRouter = express.Router();

videosRouter.get("/watch", watch);
videosRouter.get("/edit", edit);
videosRouter.get("/delete", remove);

export default videosRouter;
