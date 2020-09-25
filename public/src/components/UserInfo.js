import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserInfo = (props) => {
  const { user } = useAuth0();
  return (
    <div className="off userinfo">
      <div id="auth0_email">{user.email}</div>
      <div id="auth0_email_verified">{user.email_verified.toString()}</div>
      <div id="auth0_name">{user.name}</div>
      <div id="auth0_nickname">{user.nickname}</div>
      <div id="auth0_picture">{user.picture}</div>
      <div id="auth0_sub">{user.sub}</div>
      <div id="auth0_updated_at">{user.updated_at}</div>
    </div>
  );
};
export default UserInfo;
