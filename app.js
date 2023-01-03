require("dotenv").config();
const express = require("express");
const path = require("path");
const reviewHandlers = require("./reviewHandler");
const cors = require("cors");
const port = process.env.PORT ?? 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./UI/build")));

const { validateReview } = require("./validators.js");

app.post("/api/reviews", validateReview, reviewHandlers.postReview);
app.get("/api/reviews", reviewHandlers.getReviews);
app.put("/api/reviews/:id", reviewHandlers.updateReview);
app.delete("/api/reviews/:id", reviewHandlers.deleteReview);

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "./UI/build/index.html"));
});

app.listen(port, (err) => {
  if (err) {
    console.error("Zdarylasia niesta kiepskaje");
  } else {
    console.log(`Siervier sluchaje ${port}`);
  }
});
