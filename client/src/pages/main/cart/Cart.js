import React, { useEffect, useState } from "react";
import "./cart.css";
import Card from "./CartCard";
import { useSelector } from "react-redux";
import NotFound from "../../loading/NotFound";
import FormattedPrice from "../../../utils/FormattedPrice";
import LoginModal from "../../../components/ui/modals/LoginModal";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import AddressModal from "../../../components/ui/modals/AddressModal";

function Cart() {
  const { userInfo, cart, location } = useSelector((state) => state.features);
  console.log(location);
  const [tPrice, setTPrice] = useState();
  useEffect(() => {
    let amt = 0;
    cart.map((item) => {
      amt += item.price * item.qty;
      return;
    });
    setTPrice(amt);
  }, [cart]);

  let discount = (tPrice * 10) / 100;
  let charges = (tPrice * 20) / 100;
  let total = tPrice + charges - discount;

  useEffect(() => {
    console.log("runnig");
  }, [userInfo, cart, location]);

  if (!cart.length) return <NotFound />;
  return (
    <section id="cart">
      <div className="container">
        <div className="cart-container">
          <div className="card-box">
            <article className="address">
              {location ? location.full_address : <h6>from saved address</h6>}

              <AddressModal />
            </article>
            {cart.map((item, index) => (
              <Card item={item} key={index} />
            ))}
            <article>
              <Link className="add-more" to="/">
                add more
                <FiPlus />
              </Link>
            </article>
          </div>
          <div>
            <article className="price-box">
              <h4>Product Details</h4>
              <div className="cal">
                <div className="between">
                  <h6>Price:</h6>
                  <strong>
                    <FormattedPrice amount={tPrice} />
                  </strong>
                </div>
                <div className="between">
                  <h6>discount:</h6>
                  <strong className="dis">
                    -
                    <FormattedPrice amount={discount} />
                  </strong>
                </div>
                <div className="between">
                  <h6> Delivery Charges:</h6>
                  <strong className="red">
                    +
                    <FormattedPrice amount={charges} />
                  </strong>
                </div>
              </div>
              <div className="total between">
                <h5>total Amount</h5>
                <h5>
                  <FormattedPrice amount={total} />
                </h5>
              </div>
              <div className="savings">
                <h6>
                  You will save{" "}
                  <strong className="dis">
                    <FormattedPrice amount={discount} />
                  </strong>{" "}
                  on this order
                </h6>
              </div>
              <div className="checkout">
                {!userInfo ? <LoginModal /> : <button>proceed to pay</button>}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
