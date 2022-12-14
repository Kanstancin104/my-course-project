import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

const Profile = (props) => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const { onAuth } = props;
  useEffect(() => {
    const getToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();

        onAuth(accessToken);
      } catch (e) {
        console.log(e.message);
      }
    };

    getToken();
  }, [getAccessTokenSilently, user?.sub, onAuth]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <p>{user.email}</p>
        <LogoutButton />
      </div>
    );
  } else {
    return <LoginButton />;
  }
};

export default Profile;
