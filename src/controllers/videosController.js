import Video from "../models/Video";

export const home = async (req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
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

export const uploadPost = async (req, res) => {
  const { title, description, hashtag } = req.body;
  try {
    const video = await Video.create({
      title,
      description,
      hashtag: hashtag
        .split(" ")
        .map((word) =>
          !word.trim().startsWith("#") ? `#${word.trim()}` : word.trim()
        ),
    });
    console.log(video);
    return res.redirect("/");
  } catch (error) {
    return res.render("upload", {
      pageTitle: "Upload",
      errorMessage: error._message,
    });
  }
};
