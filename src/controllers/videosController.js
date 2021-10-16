import Video from "../models/Video";

export const home = (req, res) => {
  Video.find({}, (error, videos) => {});
  return res.render("home", { pageTitle: "Home" });
};

export const search = (req, res) => {
  res.send("Videos Search");
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watch | ` });
};

export const edit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Edit | ` });
};

export const editPost = (req, res) => {
  const { id } = req.params;
  return res.redirect(`/videos/${id}`);
};

export const remove = (req, res) => res.send("Videos Remove");

export const upload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

export const uploadPost = (req, res) => {
  return res.redirect("/");
};
