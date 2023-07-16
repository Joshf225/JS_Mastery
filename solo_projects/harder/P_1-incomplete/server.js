const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortURL");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const path = require("path");

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "others")));

app.get("/", async (req, res) => {
  const shortURLs = await ShortUrl.find();
  res.render("index", { shortURLs: shortURLs });
});

app.post("/shortURL", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullURL });
  res.redirect("/");
});

app.get("/:shortURL", async (req, res) => {
  const shortURL = await ShortUrl.findOne({ short: req.params.shortURL });
  if (shortURL === null) return res.sendStatus(404);

  shortURL.clicks++;
  shortURL.save();

  res.redirect(shortURL.full);
});

app.listen(process.env.PORT || 5000);
