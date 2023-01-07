import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import { apiUrl } from "../const";
import { useEffect } from "react";
import Reviews from "./Reviews";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NewReview from "./NewReview";

function PersonalPage(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useAuth0();
  const [reviews, setReviews] = useState([]);
  const getReviews = () => {
    axios
      .get(`${apiUrl}/api/reviews/${user.email}`)
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

  useEffect(getReviews, [user]);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create new review
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewReview />
        </Modal.Body>
      </Modal>
      <Reviews reviews={reviews} />;
    </>
  );
}

export default withAuthenticationRequired(PersonalPage, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
