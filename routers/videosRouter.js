import express from "express";

const videosRouter = express.Router();
const handleVideosWatch = (req, res) => res.send("Videos Watch");

videosRouter.get("/watch", handleVideosWatch);

export default videosRouter;
