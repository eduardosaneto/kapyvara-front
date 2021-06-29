import {BrowserRouter, Switch, Route } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';

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
            </Switch>
        </BrowserRouter>
    )
}