import React from "react";
import "./homeCard.css";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setShow } from "../../../services/providers/redux/featuresSlice";
import NotFound from "../../loading/NotFound";
import FormattedPrice from "../../../utils/FormattedPrice";
import { FaRegHeart } from "react-icons/fa6";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../../services/providers/redux/featuresSlice";
import { toast } from "react-toastify";

function HomeCard({ data }) {
  const dispatch = useDispatch();

  const addProduct = (item) => {
    console.log(item);
    const add = dispatch(addToCart(item));
    try {
      if (!add.length === 0) {
        toast.error("product did not add to cart");
      }
      toast.success(
        `${item?.title
          .split(" ")
          .slice(0, 2)
          .join(" ")} has been added to the cart`
      );
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  // const clcPrice = (price, discountPercentage) => {
  //   const discountedAmount = (price * discountPercentage) / 100;
  //   const newPrice = price - discountedAmount;
  //   return { discountedAmount, newPrice };
  // };

  return (
    <>
      {data && data.length > 0 ? (
        <section className="home-box">
          {data.map((item) => {
            // Calculate discounted price and amount directly
            const discountedAmount =
              (item.price * item.discountPercentage) / 100;
            const oldPrice = item.price + discountedAmount;
            return (
              <article
                className="home-card"
                key={item.id}
                onClick={() => dispatch(setShow(item))}
              >
                <div className="img-box">
                  <span className="like">
                    <FaRegHeart />
                  </span>
                  <Link to={`product/${item.id}`}>
                    <img
                      priority="true"
                      src={item.thumbnail}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </Link>
                  <div className="rating">
                    <AiFillStar />
                    <strong className="rate">{item.rating}</strong>
                    <span className="count">({item.stock})</span>
                  </div>
                  <span className="save">
                    !save upto{" "}
                    <span className="yellow">
                      <FormattedPrice amount={discountedAmount} />
                    </span>
                  </span>
                  <span className="brand">{item.brand}</span>
                  {/* <h6>{item.discountPercentage}%</h6> */}
                </div>
                <div className="text-box">
                  <h5 className="title">{item.title}</h5>
                  <span className="category">{item.category}</span>
                  <div className="prices">
                    <h6 className="new-price">
                      <FormattedPrice amount={item.price} />
                    </h6>
                    <del className="old-price">
                      <FormattedPrice amount={oldPrice} />
                    </del>
                  </div>
                  <p className="description">{item.description}</p>
                </div>
                <button className="cart" onClick={() => addProduct(item)}>
                  add to cart
                </button>
              </article>
            );
          })}
        </section>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default HomeCard;
