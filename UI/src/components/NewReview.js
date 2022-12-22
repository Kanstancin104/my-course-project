import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Container from "react-bootstrap/Container";
// import { useNavigate } from "react-router-dom";

export default function NewReview(props) {
  //   const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [review, setReview] = useState({
    title: "",
    piece: "",
    category: "",
    tags: "",
    content: "",
    image: "",
    grade: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    console.log(review);

    axios
      .post("http://localhost:5000/api/reviews/", review)
      .then(function (response) {
        // navigate("/Users");
      })
      .catch(function (error) {
        console.log(error);
        alert("Error occurred");
      });
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div>
          <Form.Group className="mt-3">
            <Form.Label>Review Name</Form.Label>
            <Form.Control
              required
              onChange={(e) => setReview({ ...review, title: e.target.value })}
              value={review.title}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              required
              onChange={(e) => setReview({ ...review, piece: e.target.value })}
              value={review.piece}
              type="text"
              className="mt-1"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Section</Form.Label>
            <Form.Control
              value={review.category}
              required
              onChange={(e) =>
                setReview({ ...review, category: e.target.value })
              }
              type="text"
              className="mt-1"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Tags</Form.Label>
            <Form.Control
              value={review.tags}
              required
              onChange={(e) => setReview({ ...review, tags: e.target.value })}
              type="text"
              className="mt-1"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Review text</Form.Label>
            <Form.Control
              value={review.content}
              required
              onChange={(e) =>
                setReview({ ...review, content: e.target.value })
              }
              type="text"
              className="mt-1"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              value={review.image}
              required
              onChange={(e) => setReview({ ...review, image: e.target.value })}
              type="image"
              className="mt-1"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Grade</Form.Label>
            <Form.Control
              value={review.grade}
              required
              onChange={(e) => setReview({ ...review, grade: e.target.value })}
              type="number"
              className="mt-1"
            />
          </Form.Group>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Add review
            </button>
          </div>
        </div>
      </Form>
    </Container>
  );
}
