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
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watch | ${video.title}`, video });
};

export const edit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Edit | ${video.title}`, video });
};

export const editPost = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const remove = (req, res) => res.send("Videos Remove");

export const upload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload" });
};

export const uploadPost = (req, res) => {
  const newVideo = {
    title: req.body.title,
    likes: 0,
    comments: 0,
    createdAt: "0 minutes ago",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};
