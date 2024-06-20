import React from "react";
import "./Dropdown.css";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { ImTruck } from "react-icons/im";
import { Link } from "react-router-dom";
import LoginModal from "../modals/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../../services/providers/redux/featuresSlice";
import { IoExitSharp } from "react-icons/io5";
import userImg from "../../../assets/images/user.png";

function Dropdown() {
  const dispatch = useDispatch();

  const { userInfo, cart, wishlist } = useSelector((e) => e.features);
  if (!userInfo) return <LoginModal />;
  const { name, email } = userInfo[0];

  const logOut = () => {
    dispatch(setUserInfo(null));
  };

  return (
    <>
      <article className="dropdown-btn">
        <img src={userImg} alt="" width={25} />
        <strong>{name}</strong>
        <ul className="my-dropdown">
          <li>
            <Link to="./user" className="drop-link">
              <div>
                <FaUserCircle />
                my profile
              </div>
            </Link>
          </li>
          <li>
            <Link to="./orders" className="drop-link">
              <div>
                <ImTruck />
                orders
              </div>
              {/* {ordered.length > 0 && (
                <span className="badge">{ordered.length}</span>
              )} */}
            </Link>
          </li>
          <li>
            <Link to="./wishlist" className="drop-link">
              <div>
                <IoMdHeart />
                wishlist
              </div>
              {wishlist.length > 0 && (
                <span className="badge">{wishlist.length}</span>
              )}
            </Link>
          </li>
          <li>
            <Link to="./cart" className="drop-link">
              <div>
                <FaCartShopping />
                cart
              </div>
              {cart.length > 0 && <span className="badge">{cart.length}</span>}
            </Link>
          </li>
          <li>
            <Link onClick={logOut} className="drop-link">
              <div>
                <IoExitSharp />
                <span className="red">logout</span>
              </div>
            </Link>
          </li>
        </ul>
      </article>
    </>
  );
}

export default Dropdown;
