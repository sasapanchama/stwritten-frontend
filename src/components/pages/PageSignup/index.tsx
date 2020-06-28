import React, { FC, useContext } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { AuthContext } from "../../../providers/Auth";
import firebaseApp from "../../../services/firebase";

const PageSignup: FC = () => {
  const currentUser = useContext(AuthContext);
  return !!currentUser ? <Redirect to="/" /> : <div>PageSignup</div>;
};

export default PageSignup;
