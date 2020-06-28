import React, { FC } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./providers/Auth";
import PageHome from "./components/pages/PageHome";
import PageMemos from "./components/pages/PageMemos";
import PageMemo from "./components/pages/PageMemos/PageMemo";
import PageNotfound from "./components/pages/PageNotfound";
import PageSettings from "./components/pages/PageSettings";
import PageSignin from "./components/pages/PageSignin";
import PageSignup from "./components/pages/PageSignup";

const App: FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={PageHome} />
          <Route path="/memos/:memoId" component={PageMemo} />
          <Route path="/memos" component={PageMemos} />
          <Route path="/settings" component={PageSettings} />
          <Route path="/signin" component={PageSignin} />
          <Route path="/signup" component={PageSignup} />
          <Route path="*" component={PageNotfound} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
