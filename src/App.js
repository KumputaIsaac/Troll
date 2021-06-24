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

function App() {
  return (
    <div className="App">
      <homepage />
      <Router>
     
        <Switch>
          <Route path="/cart">
           <Cart />
          </Route>
          <Route path="/detail">
           <Detail />
          </Route>
          <Route path="/">
           <Homepage/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
