import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSistrix } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import "./SearchBar.css";
import { Link, useNavigate } from "react-router-dom";
import { setShow } from "../../../services/providers/redux/featuresSlice";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState();
  const { allProducts } = useSelector((state) => state.features);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchResult = (e) => {
    setSearch(e.target.value);
    const res = allProducts.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setResult(res);
    console.log(res);
  };

  const handleClick = (item) => {
    dispatch(setShow(item));
    navigate(`/product/${item.id}`);
    setResult();
    setSearch("");
  };

  const handleClose = () => {
    setResult();
    setSearch("");
  };
  const handelShow = () => {};

  return (
    <div id="searchBar">
      <div className="search-box">
        <input
          type="search"
          placeholder="search products"
          onChange={searchResult}
          id="search"
          value={search}
        />
        {result ? (
          <button className="close-btn" onClick={handleClose}>
            <MdClose />
          </button>
        ) : (
          <button className="show-btn">
            <FaSistrix />
          </button>
        )}
      </div>
      {result && (
        <div className="search-result">
          {result.length === 0 ? (
            <div className="nf">
              <h5>not found</h5>
            </div>
          ) : (
            result.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                onClick={() => handleClick(item)}
              >
                {item.title}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
