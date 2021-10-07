import express from "express";

const usersRouter = express.Router();
const handleUsersEdit = (req, res) => res.send("Users Edit");

usersRouter.get("/edit", handleUsersEdit);

export default usersRouter;
