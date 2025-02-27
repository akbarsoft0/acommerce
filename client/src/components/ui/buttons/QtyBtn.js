import React from "react";
import "./qty-btn.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  decreaseQuantity,
  increaseQuantity,
} from "../../../services/providers/redux/featuresSlice";
import { useDispatch } from "react-redux";

function QtyBtn({ id, qty, list }) {
  //   console.log(id, list);
  const dispatch = useDispatch();
  const handleDecrease = () => {
    dispatch(decreaseQuantity({ id, list }));
  };
  const handleIncrease = () => {
    dispatch(increaseQuantity({ id, list }));
  };
  return (
    <div className="qty">
      <span onClick={handleDecrease}>
        <AiOutlineMinus />
      </span>
      <strong>{qty}</strong>
      <span onClick={handleIncrease}>
        <AiOutlinePlus />
      </span>
    </div>
  );
}

export default QtyBtn;
