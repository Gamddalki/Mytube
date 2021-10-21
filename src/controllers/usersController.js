import User from "../models/User";
import fetch from "node-fetch";
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

export const loginPost = async (req, res) => {
  const { username, password } = req.body;
  const exists = await User.findOne({ username, socialOnly: false });
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

export const githubLoginStart = (req, res) => {
  const baseUrl = "http://github.com/login/oauth/authorize";
  const config = {
    client_id: process.env.GH_CLIENT,
    scope: "read:user user:email",
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(finalUrl);
};

export const githubLoginFinish = async (req, res) => {
  const baseUrl = "http://github.com/login/oauth/access_token";
  const config = {
    client_id: process.env.GH_CLIENT,
    client_secret: process.env.GH_SECRET,
    code: req.query.code,
  };
  const params = new URLSearchParams(config).toString();
  const finalUrl = `${baseUrl}?${params}`;
  const tokenRequest = await (
    await fetch(finalUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })
  ).json();
  if ("access_token" in tokenRequest) {
    const { access_token } = tokenRequest;
    const apiUrl = "https://api.github.com";
    const userData = await (
      await fetch(`${apiUrl}/user`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailData = await (
      await fetch(`${apiUrl}/user/emails`, {
        headers: {
          Authorization: `token ${access_token}`,
        },
      })
    ).json();
    const emailObj = emailData.find(
      (email) => email.primary === true && email.verified === true
    );
    if (!emailObj) {
      return res.redirect("/login");
    }
    let user = await User.findOne({ email: emailObj.email });
    if (!user) {
      const user = await User.create({
        username: userData.login,
        password: "",
        name: userData.name ? userData.name : userData.login,
        email: emailObj.email,
        socialOnly: true,
        avatarUrl: userData.avatar_url,
        location: userData.location,
      });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
  } else {
    return res.redirect("/login");
  }
};

export const logout = (req, res) => {
  req.session.destroy();
  return res.redirect("/");
};

export const see = (req, res) => res.send("see");

export const edit = (req, res) => {
  return res.render("edit-profile", { pageTitle: "Edit Profile" });
};

export const editPost = (req, res) => {
  return res.render("edit-profile", { pageTitle: "Edit Profile" });
};

export const leave = (req, res) => res.send("Users Delete");
