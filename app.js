require("dotenv").config();
const express = require("express");
const reviewHandlers = require("./reviewHandler");
const cors = require("cors");
const port = process.env.APP_PORT ?? 5000;
const app = express();

app.use(cors());
app.use(express.json());

const { validateReview } = require("./validators.js");

app.post("/api/reviews", validateReview, reviewHandlers.postReview);
app.get("/api/reviews", reviewHandlers.getReviews);
app.put("/api/reviews/:id", reviewHandlers.updateReview);
app.delete("/api/reviews/:id", reviewHandlers.deleteReview);

app.listen(port, (err) => {
  if (err) {
    console.error("Zdarylasia niesta kiepskaje");
  } else {
    console.log(`Siervier sluchaje ${port}`);
  }
});
