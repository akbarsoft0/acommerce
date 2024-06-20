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

function HomeCard({ data }) {
  const dispatch = useDispatch();

  // const clcPrice = (price, discountPercentage) => {
  //   const discountedAmount = (price * discountPercentage) / 100;
  //   const newPrice = price - discountedAmount;
  //   return { discountedAmount, newPrice };
  // };

  return (
    <>
      {data && data.length > 0 ? (
        <section className="home-box">
          {data.map((e) => {
            // Calculate discounted price and amount directly
            const discountedAmount = (e.price * e.discountPercentage) / 100;
            const oldPrice = e.price + discountedAmount;
            return (
              <article
                className="home-card"
                key={e.id}
                onClick={() => dispatch(setShow(e))}
              >
                <div className="img-box">
                  <span className="like">
                    <FaRegHeart />
                  </span>
                  <Link to={`product/${e.id}`}>
                    <img
                      priority="true"
                      src={e.thumbnail}
                      alt={e.title}
                      className="img-fluid"
                    />
                  </Link>
                  <div className="rating">
                    <AiFillStar />
                    <strong className="rate">{e.rating}</strong>
                    <span className="count">({e.stock})</span>
                  </div>
                  <span className="save">
                    !save upto{" "}
                    <span className="yellow">
                      <FormattedPrice amount={discountedAmount} />
                    </span>
                  </span>
                  <span className="brand">{e.brand}</span>
                  {/* <h6>{e.discountPercentage}%</h6> */}
                </div>
                <div className="text-box">
                  <h5 className="title">{e.title}</h5>
                  <span className="category">{e.category}</span>
                  <div className="prices">
                    <h6 className="new-price">
                      <FormattedPrice amount={e.price} />
                    </h6>
                    <del className="old-price">
                      <FormattedPrice amount={oldPrice} />
                    </del>
                  </div>
                  <p className="description">{e.description}</p>
                </div>
                <button className="cart" onClick={() => dispatch(addToCart(e))}>
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
