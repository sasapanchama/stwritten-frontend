import React, { FC, useCallback, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../../providers/Auth";
import firebaseApp from "../../../services/firebase";
import { History } from "history";

type Props = {
  history: History;
};

const PageSignin: FC<Props> = ({ history }) => {
  const currentUser = useContext(AuthContext);
  // const handleClick = useCallback(async event => {
  //   event.preventDefault()
  //   try {
  //     await firebaseApp.auth().createUserWithEmailAndPassword('a', 'a')
  //     history.push('/')
  //   } catch (err) {
  //     alert(err)
  //   }
  // }, [])
  return !!currentUser ? <Redirect to="/" /> : <div>PageSignin</div>;
};

export default PageSignin;
