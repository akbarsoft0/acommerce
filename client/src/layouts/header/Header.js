import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import Dropdown from "../../components/ui/dropdown/Dropdown";

function Header() {
  const { userInfo, cart } = useSelector((state) => state.features);

  return (
    <header className="header">
      <div className="container">
        <div className="between">
          <div className="flex flex-full">
            <h1>
              <Link to="/">logo</Link>
            </h1>
            <div className="search">
              <input
                type="search"
                placeholder="search products"
                // onChange={(e) => handleSearch(e)}
                id="search"
              />
              <button className="search-btn">
                <FaSistrix />
              </button>
            </div>
          </div>
          <div className="flex flip">
            <Dropdown />
            <Link to="./cart" className="home-cart">
              {cart.length ? (
                <span className="badge-cart">{cart.length}</span>
              ) : null}
              <FaCartShopping />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
