import Table from "react-bootstrap/Table";

const tableFields = [
  {
    reviewName: "review",
    itemName: "Limitless",
    section: "Movies",
    tags: "sci-fi",
    textReview: "This is a review",
    image: "some image",
    grade: 10,
  },

  {
    reviewName: "review",
    itemName: "Outlast",
    section: "Games",
    tags: "survival horror",
    textReview: "This is a review",
    image: "some image",
    grade: 10,
  },

  {
    reviewName: "review",
    itemName: "Martin Eden",
    section: "Books",
    tags: "inspiring",
    textReview: "This is a review",
    image: "some image",
    grade: 10,
  },
];

function Review() {
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
        {tableFields.map((field) => (
          <tr key={field.field_id}>
            <td>{field.reviewName}</td>
            <td>{field.itemName}</td>
            <td>{field.section}</td>
            <td>{field.tags}</td>
            <td>{field.textReview}</td>
            <td>{field.image}</td>
            <td>{field.grade}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Review;
