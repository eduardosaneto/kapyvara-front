import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from './Home';

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
        <Route path="/home" exact>
            <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
