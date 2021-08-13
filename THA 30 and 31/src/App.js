import './App.css';
import Header from './components/Header/Header';
import Product from './components/ProductListing/Product';
import ProductDetail from './components/ProductDetails/ProductDetail';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Carts from './components/Cart/Carts';
import WishList from './components/WishList/WishList';
import WishCard from './components/WishList/WishCard';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux"
import {loadProduct} from "./redux/action/productsAction"
import {loadWishItem} from "./redux/action/wishlistAction"
function App() {
   const dispatch=useDispatch()
  useEffect(async()=>{
    dispatch(loadProduct())
    dispatch(loadWishItem())
},[])
  return (
    <div className="app">
    <Router>
        <Header />
        <Carts />

        <Switch>
          <Route path="/" exact component={Product} />
          <Route path="/wishlist" exact component={WishList} />
          <Route path="/:id" exact component={ProductDetail} />
        </Switch>

       
       
    </Router>

    </div>
  );
}

export default App;
