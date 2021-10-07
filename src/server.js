import express from "express";
import morgan from "morgan";

const PORT = 6104;

const app = express();
const logger = morgan("dev");
app.use(logger);

const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const usersRouter = express.Router();

const handleUsersEdit = (req, res) => res.send("Users Edit");

usersRouter.get("/edit", handleUsersEdit);

const videosRouter = express.Router();

const handleVideosWatch = (req, res) => res.send("Videos Watch");

videosRouter.get("/watch", handleVideosWatch);

app.use("/", globalRouter);
app.use("/users", usersRouter);
app.use("/videos", videosRouter);

const handlelistening = () =>
  console.log(`Server listening on port http://localhost:${PORT} 😆`);

app.listen(PORT, handlelistening);
