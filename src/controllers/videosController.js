const videos = [
  {
    title: "First Video",
    likes: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second Video",
    likes: 10,
    comments: 4,
    createdAt: "49 minutes ago",
    views: 67,
    id: 2,
  },
  {
    title: "Third Video",
    likes: 456,
    comments: 57,
    createdAt: "6 hours ago",
    views: 789,
    id: 3,
  },
];

export const home = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
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
  return res.redirect(`/videos/${id}`);
};

export const remove = (req, res) => res.send("Videos Remove");
export const upload = (req, res) => res.send("Videos Upload");
