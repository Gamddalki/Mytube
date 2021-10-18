import User from "../models/User";

export const join = (req, res) => res.render("join", { pageTitle: "Join" });

export const joinPost = async (req, res) => {
  const { username, password, name, email, location } = req.body;
  await User.create({
    username,
    password,
    name,
    email,
    location,
  });
  return res.redirect("/login");
};

export const login = (req, res) => res.send("login");

export const logout = (req, res) => res.send("logout");

export const see = (req, res) => res.send("see");

export const edit = (req, res) => res.send("Users Edit");

export const leave = (req, res) => res.send("Users Delete");
