import "./App.css";
import React, { useState } from "react";
import LoginButton from "./components/LoginButton";
import NewReview from "./components/NewReview";
import Review from "./components/Review";
import LogoutButton from "./components/LogoutButton";
import HomePage from "./components/HomePage";

function App() {
  const [token, setToken] = useState(undefined);

  const handleAuth = (newToken) => {
    setToken(newToken);
  };

  return (
    <>
      <HomePage onAuth={handleAuth} />
      <Review />
      <NewReview token={token} />
      <LoginButton />
      <LogoutButton />
    </>
  );
}

export default App;
