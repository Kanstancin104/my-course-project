import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Container from "react-bootstrap/Container";
// import { useNavigate } from "react-router-dom";

export default function NewReview(props) {
  //   const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [review, setReview] = useState({
    reviewName: "",
    itemName: "",
    section: "",
    tags: "",
    textReview: "",
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
    // axios
    //   .post("/api/users/", {
    //     user_name: name,
    //     email: email,
    //     user_password: password,
    //   })
    //   .then(function (response) {
    //     props.onAuth(response.data.token);
    //     navigate("/Users");
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //     alert("Error occurred");
    //   });
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div>
          <Form.Group className="mt-3">
            <Form.Label>Review Name</Form.Label>
            <Form.Control
              required
              onChange={(e) =>
                setReview({ ...review, reviewName: e.target.value })
              }
              value={review.reviewName}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              required
              onChange={(e) =>
                setReview({ ...review, itemName: e.target.value })
              }
              value={review.itemName}
              type="text"
              className="mt-1"
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Section</Form.Label>
            <Form.Control
              value={review.section}
              required
              onChange={(e) =>
                setReview({ ...review, section: e.target.value })
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
              value={review.textReview}
              required
              onChange={(e) =>
                setReview({ ...review, textReview: e.target.value })
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
