import express from "express";

import { watch } from "../controllers/videosController";
import { edit } from "../controllers/videosController";
import { remove } from "../controllers/videosController";

const videosRouter = express.Router();

videosRouter.get("/watch", watch);
videosRouter.get("/edit", edit);
videosRouter.get("/delete", remove);

export default videosRouter;
