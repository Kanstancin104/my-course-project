import React from "react";
import Profile from "./Profile";

export default function HomePage(props) {
  return <Profile onAuth={props.onAuth} />;
}
