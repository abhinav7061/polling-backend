const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();
const ErrorHandling = require("./middlewares/error");

dotenv.config({ path: "config/config.env" });
app.use(express.json()); //middleware to understand json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
const cors = require("cors");
app.use(cors({ credentials: true, origin: 'https://pollsphere.netlify.app/' }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://pollsphere.netlify.app");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, HEAD, OPTIONS, POST, PUT, DELETE"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    next();
});
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

//using error middlewares
app.use(ErrorHandling);

module.exports = app;
