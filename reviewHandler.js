const database = require("./database");

const getReviews = (req, res) => {
  database
    .query("select * from review order by created desc")
    .then(([reviews]) => {
      res.json(reviews);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .send("Pamylka pry sprobie atrymac dadzienyja z bazy dadzienych");
    });
};

const getReviewsById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from review where id = ?", [id])
    .then(([reviews]) => {
      if (reviews[0] != null) {
        res.json(reviews[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getReviewsByAuthor = (req, res) => {
  const author = req.params.author;

  database
    .query("select * from review where author = ?", [author])
    .then(([reviews]) => {
      res.json(reviews);
    })
    .catch((err) => {
      console.error(err);
      res
        .status(500)
        .send("Pamylka pry sprobie atrymac dadzienyja z bazy dadzienych");
    });
};

const postReview = (req, res) => {
  const { title, piece, category, tags, content, image, grade, author } =
    req.body;

  database
    .query(
      "INSERT INTO review(title, piece, category, tags, content, image, grade, author) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [title, piece, category, tags, content, image, grade, author]
    )
    .then(([result]) => {
      res.location(`/api/reviews/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Pamylka");
    });
};

const updateReview = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, piece, category, tags, content, image, grade } = req.body;

  database
    .query(
      "update review set title = ?, piece = ?, category = ?, tags = ?, content = ?, image = ?, grade = ? where id = ?",
      [title, piece, category, tags, content, image, grade]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Pamylka");
    });
};

const deleteReview = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("delete from review where id = ?", [id])
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(404).send("Not Found");
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting the review");
    });
};

module.exports = {
  getReviews,
  getReviewsById,
  postReview,
  updateReview,
  deleteReview,
  getReviewsByAuthor,
};
