import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Detail from './pages/details/Detail';
import Cart from './pages/cart/Cart';
import { useState } from 'react';

function App() {
  const [itemdetails, setitemdetails] = useState([])
  const [cart, setcart] = useState([])


  return (
    <div className="App">
      <homepage />
      <Router>
     
        <Switch>
          <Route path="/cart">
           <Cart cart={cart} itemdetails={itemdetails}/>
          </Route>
          <Route path="/detail">
           <Detail itemdetails={itemdetails} setcart={setcart} cart={cart}/>
          </Route>
          <Route path="/">
           <Homepage setitemdetails={setitemdetails}/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
