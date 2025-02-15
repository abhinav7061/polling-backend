const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const ErrorHandling = require("./middlewares/error");

dotenv.config({ path: "config/config.env" });
app.use(express.json()); //middleware to understand json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const cors = require("cors");
app.use(cors({ credentials: true, origin: process.env.FRONTEND_URL }));

// //importing routes
const user = require("./Router/userRoutes");
const poll = require("./Router/pollRoutes");
const vote = require("./Router/voteRoutes");
const comment = require("./Router/commentRoutes");
const followerFollowing = require("./Router/followerFollowingRoutes");
const savePoll = require("./Router/savePollRoutes")

// //using routes
app.use("/api/v1/user", user);
app.use("/api/v1/poll", poll);
app.use("/api/v1/vote", vote);
app.use("/api/v1/comment", comment);
app.use("/api/v1/followers_followings", followerFollowing);
app.use("/api/v1/save-poll", savePoll);
app.use(express.static(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

//using error middlewares
app.use(ErrorHandling);

module.exports = app;
