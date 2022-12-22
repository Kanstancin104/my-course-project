const validateReview = (req, res, next) => {
  const { title, piece, category, tags, content, grade } = req.body;

  const errors = [];

  if (title == null) {
    errors.push({
      field: "title",
      message: "This field is required",
    });
  } else if (title.length >= 255) {
    errors.push({
      field: "title",
      message: "Should contain less than 255 characters",
    });
  }
  if (piece == null) {
    errors.push({ field: "piece", message: "This field is required" });
  } else if (piece.length >= 255) {
    errors.push({
      field: "piece",
      message: "Should contain less than 255 characters",
    });
  }
  if (category == null) {
    errors.push({ field: "category", message: "This field is required" });
  } else if (category.length >= 255) {
    errors.push({
      field: "category",
      message: "Should contain less than 255 characters",
    });
  }
  if (tags == null) {
    errors.push({ field: "tags", message: "This field is required" });
  } else if (tags.length >= 255) {
    errors.push({
      field: "tags",
      message: "Should contain less than 255 characters",
    });
  }
  if (content == null) {
    errors.push({ field: "content", message: "This field is required" });
  } else if (content.length >= 255) {
    errors.push({
      field: "content",
      message: "Should contain less than 255 characters",
    });
  }
  if (grade == null) {
    errors.push({ field: "grade", message: "This field is required" });
  }

  if (errors.length) {
    res.status(422).json({ validationErrors: errors });
  } else {
    next();
  }
};

module.exports = {
  validateReview,
};
