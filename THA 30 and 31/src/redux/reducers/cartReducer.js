var item;
if (JSON.parse(localStorage.getItem("cart")) === null) {
  item = [];
} else {
  item = JSON.parse(localStorage.getItem("cart"));
}
const initialState = {
  show: true,
  cart: item,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return { ...state, show: !state.show };
    case "ADD_ITEM":
      console.log("reducers -- ", item);
      localStorage.setItem("cart", JSON.stringify([...item, action.payload]));
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_ITEM":
      console.log(action.payload);
      const list = initialState.cart.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(list));
      console.log(list);
      return {
        ...state,
        cart: list,
      };
    default:
      return state;
  }
};
