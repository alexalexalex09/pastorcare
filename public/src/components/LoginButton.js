import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { isAuthenticated, loginWithPopup } = useAuth0();

  if (!isAuthenticated) {
    return (
      <div className="loginButton">
        <button onClick={loginWithPopup}>Log in</button>
      </div>
    );
  } else {
    return null;
  }
}

export default LoginButton;
