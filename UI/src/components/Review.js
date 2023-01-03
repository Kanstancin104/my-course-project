import Table from "react-bootstrap/Table";
import axios from "axios";
import { apiUrl } from "../const";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

function Review() {
  const [reviews, setReviews] = useState([]);
  // const navigate = useNavigate();

  const getReviews = () => {
    axios
      .get(`${apiUrl}/api/reviews/`)
      .then((result) => {
        setReviews(result.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          // navigate("/");
        } else {
          console.log(err.response.status);
          alert("Error occurred");
        }
      });
  };

  useEffect(getReviews, []);

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Review Name</th>
          <th>Item Name</th>
          <th>Section</th>
          <th>Tags</th>
          <th>Review text</th>
          <th>Image</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map((review) => (
          <tr key={review.id}>
            <td>{review.title}</td>
            <td>{review.piece}</td>
            <td>{review.category}</td>
            <td>{review.tags}</td>
            <td>{review.content}</td>
            <td>{review.image}</td>
            <td>{review.grade}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Review;
