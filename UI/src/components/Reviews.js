import React from "react";
import Table from "react-bootstrap/Table";

const Reviews = (props) => {
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
          <th>Author</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody>
        {props.reviews.map((review) => (
          <tr key={review.id}>
            <td>{review.title}</td>
            <td>{review.piece}</td>
            <td>{review.category}</td>
            <td>{review.tags}</td>
            <td>{review.content}</td>
            <td>{review.image}</td>
            <td>{review.grade}</td>
            <td>{review.author}</td>
            <td>{review.created}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Reviews;
