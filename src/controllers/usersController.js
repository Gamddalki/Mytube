import User from "../models/User";

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

export const login = (req, res) => res.render("login");

export const loginPost = (req, res) => res.send("loginPost");

export const logout = (req, res) => res.send("logout");

export const see = (req, res) => res.send("see");

export const edit = (req, res) => res.send("Users Edit");

export const leave = (req, res) => res.send("Users Delete");
