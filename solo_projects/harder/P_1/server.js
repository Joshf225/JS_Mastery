const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortURL");
const shortURL = require("./models/shortURL");
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

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shortURLs = await ShortUrl.find();
  if (shortURLs) {
    console.log(res.json(shortURLs));
  } else {
    console.log("hello");
  }
  res.render("index", { shortURLs: shortURLs });
});

app.post("/:shortUrls", async (req, res) => {
  await ShortUrl.create({ full: req.body.fullURL });
  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl === null) return res.sendStatus(404);
  shortUrl.save();

  res.redirect(shortUrl.full);
});

app.listen(process.env.PORT || 5000);
