import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import { increment, decrement, reset, incrementByAmount, incrementAsync } from "../state/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <h2 onClick={() => dispatch(reset())}>{count}</h2>
      <div>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(incrementByAmount(10))}>+10</button>
        <button onClick={()=> dispatch(incrementAsync(5))}>+5</button>
      </div>
    </div>
  );
};

export default Counter;