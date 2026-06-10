import { useReducer } from "react";

export const ReducerComp = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "INCREAMENT":
        return state + 1;
      case "DECREAMENT":
        return state - 1;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>
        <span>{count}</span>
        <button
          onClick={() => {
            dispatch({ type: "INCREAMENT" });
          }}
        >
          increament
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREAMENT" });
          }}
        >
          decreament
        </button>
      </div>
      <h2>hello redecer</h2>
    </>
  );
};
