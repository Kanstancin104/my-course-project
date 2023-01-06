import React, { useState, useCallback } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { apiUrl } from "../const";
import Container from "react-bootstrap/Container";
import { useDropzone } from "react-dropzone";
// import { useNavigate } from "react-router-dom";

export default function NewReview(props) {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles.length);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  if (props.token) {
    axios.defaults.headers.common = { Authorization: `Bearer ${props.token}` };
  }

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
      .post(`${apiUrl}/api/reviews/`, review)
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
            <Form.Label>Image (Optional)</Form.Label>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
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
