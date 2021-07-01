import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

import QuantityContext from '../Contexts/QuantityContext';

export default function App(){

    const [quantity, setQuantity] = useState(0);

    return (
        <QuantityContext.Provider value={{quantity, setQuantity}}>
            <Router>
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
            </Router>
        </QuantityContext.Provider>
    )
}