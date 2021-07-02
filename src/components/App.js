import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Cart from "./Cart/Cart";
import CheckOut from "./Checkout/Checkout";

import QuantityContext from "../Contexts/QuantityContext";
import CartContext from "../Contexts/CartContext";
import DeliveryContext from "../Contexts/DeliveryContext";

export default function App() {
  const userStorage = localStorage.getItem("userSaved");
  const [user, setUser] = useState(JSON.parse(userStorage));

  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [delivery, setDelivery] = useState("");

  return (
    <QuantityContext.Provider value={{ quantity, setQuantity }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <DeliveryContext.Provider value={{ delivery, setDelivery }}>
          <Router>
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
              <Route path="/cart" exact>
                <Cart user={user} />
              </Route>
              <Route path="/checkout" exact>
                <CheckOut user={user} />
              </Route>
            </Switch>
          </Router>
        </DeliveryContext.Provider>
      </CartContext.Provider>
    </QuantityContext.Provider>
  );
}
