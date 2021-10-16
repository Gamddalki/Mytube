import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  res.send("Videos Search");
};
export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  return res.render("watch", { pageTitle: `Watch | ${video.title}`, video });
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

export const uploadPost = async (req, res) => {
  const { title, description, hashtag } = req.body;
  try {
    await Video.create({
      title,
      description,
      hashtag: hashtag
        .split(" ")
        .map((word) =>
          !word.trim().startsWith("#") ? `#${word.trim()}` : word.trim()
        ),
    });
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload",
      errorMessage: error._message,
    });
  }
};
