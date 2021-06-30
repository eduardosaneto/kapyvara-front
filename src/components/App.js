import {BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

export default function App(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <SignIn />
                </Route>
                <Route path="/sign-up" exact>
                    <SignUp />
                </Route>
                <Route path="/home" exact>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}