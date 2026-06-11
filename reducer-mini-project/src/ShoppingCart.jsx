import { useReducer } from "react";

const initialState = {
  items: [],
  total: 0,
};
const products = [
  { id: 1, name: "socks", price: 100 },
  { id: 2, name: "shirt", price: 30000 },
  { id: 3, name: "cap", price: 200 },
  { id: 4, name: "shoe", price: 1250 },
];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const exists = state.items.some((item) => item.id === action.payload.id);

      if (exists) {
        return state;
      }

      return {
        items: [...state.items, action.payload],
        total: state.total + action.payload.price,
      };
    }
    // case "REMOVE":
    //     const itemToRemove = state.items.find(item => item.id === action.payload),
    //     return{
    //         items:
    //     }
    default:
      return state;
  }
}
export default function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <>
      <div>
        {products.map((item) => {
          return (
            <div key={item.id}>
              <h2>Name: {item.name}</h2>
              <p>Price: {item.price} </p>
              <button
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: item.id,
                      name: item.name,
                      price: item.price,
                    },
                  })
                }
              >
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
      <h1>Cart Items Here.. </h1>
      <div>
        {state.items.map((item) => {
          return (
            <div key={item.id}>
              <h2>Name: {item.name}</h2>
              <p>Price: {item.price} </p>
              <button>Remove </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
