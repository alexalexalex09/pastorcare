import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (document.querySelector(".loginButton")) {
      document.querySelector(".loginButton").style.opacity = 1;
    }
    console.log("useEffect");
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="loginButton">
        <button onClick={loginWithRedirect}>Log in</button>
      </div>
    );
  } else {
    return null;
  }
}

export default LoginButton;
