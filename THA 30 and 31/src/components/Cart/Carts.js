import React, { useEffect } from "react";
import "./Carts.css";
import CloseIcon from "@material-ui/icons/Close";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../redux/action/cartAction";
function Carts() {
  const dispatch = useDispatch();
  const val = useSelector((state) => state.cartReducer.show);
  const items = useSelector((state) => state.cartReducer.cart);

  return (
    <div className={`carts ${val && "active"}`}>
      <div className="topPart">
        <h1>Your items</h1>
        <CloseIcon className="xicon" onClick={() => dispatch(toggleCart())} />
      </div>
      <div className="cartItem">
        {items.length > 0 ? (
          items.map((item) => {
            return (
              <Cart
                key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                id={item.id}
              />
            );
          })
        ) : (
          <h1>Your Cart Empty</h1>
        )}
      </div>
    </div>
  );
}

export default Carts;
