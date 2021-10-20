import User from "../models/User";
import bcrypt from "bcrypt";

export const join = (req, res) => res.render("join", { pageTitle: "Join" });

export const joinPost = async (req, res) => {
  const { username, password, password2, name, email, location } = req.body;
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "Password confirmation does not match.",
    });
  }
  const userExists = await User.exists({ $or: [{ username }, { email }] });
  if (userExists) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: "This username/email is already taken.",
    });
  }
  try {
    await User.create({
      username,
      password,
      name,
      email,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: error._message,
    });
  }
};

export const login = (req, res) => res.render("login", { pageTitle: "Login" });

export const githubLoginStart = (req, res) => {
  const baseUrl = "http://github.com/login/oauth/authorize";
  const config = {
    client_id: "42ddbda13dce63393048",
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const githubLoginFinish = (req, res) => {};

export const loginPost = async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.findOne({ username });
  if (!exists) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "This username doesn't exist.",
    });
  }
  const okay = await bcrypt.compare(password, exists.password);
  if (!okay) {
    return res.status(400).render("login", {
      pageTitle: "Login",
      errorMessage: "Wrong password.",
    });
  }
  req.session.loggedIn = true;
  req.session.user = exists;
  return res.redirect("/");
};

export const logout = (req, res) => res.send("logout");

export const see = (req, res) => res.send("see");

export const edit = (req, res) => res.send("Users Edit");

export const leave = (req, res) => res.send("Users Delete");
