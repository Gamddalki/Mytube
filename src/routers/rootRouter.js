import express from "express";

import { home, search } from "../controllers/videosController";
import {
  join,
  joinPost,
  login,
  loginPost,
} from "../controllers/usersController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(join).post(joinPost);
rootRouter.route("/login").get(login).post(loginPost);
rootRouter.get("/search", search);

export default rootRouter;
