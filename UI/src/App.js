import "./App.css";
import React, { useState } from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import PersonalPage from "./components/PersonalPage";
import NoPage from "./components/NoPage";
import Layout from "./components/Layout";

function App() {
  const [token, setToken] = useState(undefined);

  const handleAuth = (newToken) => {
    setToken(newToken);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout onAuth={handleAuth} />}>
          <Route index element={<HomePage onAuth={handleAuth} />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="personal" element={<PersonalPage token={token} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
