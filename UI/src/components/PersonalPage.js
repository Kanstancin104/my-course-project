import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import NewReview from "./NewReview";

function PersonalPage(props) {
  return (
    <>
      <div>Personal Page</div>
      <NewReview token={props.token} />
    </>
  );
}

export default withAuthenticationRequired(PersonalPage, {
  onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
