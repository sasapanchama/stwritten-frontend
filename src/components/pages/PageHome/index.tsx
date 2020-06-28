import React, { FC, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../providers/Auth";
import firebaseApp from "../../../services/firebase";

const PageHome: FC = () => {
  const currentUser: any = useContext(AuthContext);
  return !!currentUser ? <div>PageHome</div> : <Redirect to="/signin" />;
};

export default PageHome;
