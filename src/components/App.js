import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function App() {
  const userStorage = localStorage.getItem("userSaved");
  const [user, setUser] = useState(JSON.parse(userStorage));

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
