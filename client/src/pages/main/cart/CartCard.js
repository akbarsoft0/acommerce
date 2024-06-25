import React from "react";
import FormattedPrice from "../../../utils/FormattedPrice";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  setShow,
} from "../../../services/providers/redux/featuresSlice";
import QtyBtn from "../../../components/ui/buttons/QtyBtn";
import { Link, useNavigate } from "react-router-dom";

function CartCard({ item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setShow(item));
    navigate(`/product/${item.id}`);
  };
  const {
    id,
    availabilityStatus,
    brand,
    category,
    description,
    discountPercentage,
    minimumOrderQuantity,
    price,
    qty,
    rating,
    returnPolicy,
    reviews,
    shippingInformation,
    sku,
    stock,
    tags,
    thumbnail,
    title,
    warrantyInformation,
    weigh,
  } = item;
  // Calculate discounted price and amount directly
  const discountedAmount = (price * discountPercentage) / 100;
  const newPrice = price - discountedAmount;

  if (!id) return;
  return (
    <article className="cart-card" key={id}>
      <div className="flex" onClick={(item) => handleClick(item)}>
        <img src={thumbnail} alt="cart-item" width={300} />
        <div className="text-box">
          <h3 className="title">{title}</h3>
          <p>{description}</p>
          <h6>{category}</h6>
          <h6 className="unit-price">
            <strong>unit price : </strong>
            <FormattedPrice amount={price} />
          </h6>
        </div>
      </div>
      <div className="between">
        <div className="price">
          <h4>
            <FormattedPrice amount={price * qty} />
          </h4>
        </div>
        <figure className="buttons">
          <QtyBtn id={id} qty={qty} list="cart" />
          <button
            className="remove"
            onClick={() => dispatch(removeFromCart(id))}
          >
            remove
          </button>
        </figure>
      </div>
    </article>
  );
}

export default CartCard;
