import './App.css';
import Home from "./components/home"
import NotFound from "./components/notFound"
import Products from "./components/products"
import { Switch, Route } from 'react-router-dom';
import Footer from './components/footer';
import Cart from './components/cart';
import Navbar from './components/navbar';



function App() {


  return (<div className="main-container">
    <Navbar />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" exact component={Products} />
      <Route path="/cart" exact component={Cart} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
  );
}

export default App;
