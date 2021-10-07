import express from "express";

import { home } from "../controllers/videosController";
import { join } from "../controllers/usersController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);

export default globalRouter;
