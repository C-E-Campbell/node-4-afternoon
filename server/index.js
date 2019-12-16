const express = require("express");
const session = require("express-session");
require("dotenv").config();
const checkForSession = require("./middlewares/checkForSession");
const swagCtrl = require("./controllers/swagController");
const app = express();

app.use(express.json());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true
	})
);
app.use(checkForSession);

app.get("/api/swag", swagCtrl.read);
app.listen(process.env.PORT, () => {
	console.log(`server running on ${process.env.PORT}`);
});
