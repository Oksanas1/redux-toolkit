import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { increment, decrement, reset, incrementByAmount, incrementAsync } from "../redux/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch<AppDispatch>();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="counter">
      <h2 className="counter__title">Redux Toolkit Counter</h2>
      <p className="counter__value" onClick={() => dispatch(reset())}>{count}</p>
      <div className="counter__action">
        <button className="counter__btn" onClick={() => dispatch(decrement())}>Decrement (-1)</button>
        <button className="counter__btn" onClick={() => dispatch(increment())}>Increment (+1)</button>
        <button className="counter__btn" onClick={()=> dispatch(incrementByAmount(100))}>Increment by amount (+100)</button>
        <button className="counter__btn" onClick={()=> dispatch(incrementAsync(10))}>Async increment (+10)</button>
      </div>
    </div>
  );
};

export default Counter;