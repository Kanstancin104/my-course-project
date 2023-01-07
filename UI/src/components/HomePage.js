import axios from "axios";
import { apiUrl } from "../const";
import React, { useState, useEffect } from "react";
import Reviews from "./Reviews";

export default function HomePage() {
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

  return <Reviews reviews={reviews} />;
}
