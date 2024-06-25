import React, { useState } from "react";
import "./home.css";
import HomeCard from "./HomeCard";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAllProducts } from "../../../services/providers/redux/featuresSlice";
import MyCarousel from "../../../components/carousel/MyCarousel";

function Home() {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      const url = "https://dummyjson.com/products";

      const res = await fetch(url);
      const data = await res.json();
      const newData = data.products.map((e) => ({ ...e, qty: 1 }));

      dispatch(setAllProducts(newData));
    } catch (error) {
      console.log("your are getting this =>", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const { allProducts, userInfo } = useSelector((state) => state.features);

  const [products, setProducts] = useState();
  const category = [...new Set(allProducts.map((e) => e.category))];

  // handleFilter for categories
  const handleFilter = (e) => {
    let products = allProducts.filter(
      (elm) => elm.category.toLowerCase() === e.target.innerText.toLowerCase()
    );
    setProducts(products);
  };

  // storing filter products or all products in data
  const data = products || allProducts;

  // handleSort for select
  const handleSort = (e) => {
    const sortValue = e.target.value;
    let sortedValue = [...data];
    const sortFunctions = {
      lth: (a, b) => a.price - b.price,
      htl: (a, b) => b.price - a.price,
      popularity: (a, b) => b.rating - a.rating,
      ratings: (a, b) => b.stock - a.stock,
      // ratings: (a, b) => b.rating.rate - a.rating.rate,
    };

    sortedValue.sort(sortFunctions[sortValue] || ((a, b) => a - b));
    setProducts(sortedValue);
  };

  // handleSearch for search
  const handleSearch = (e) => {
    let searchValue = e.target.value.toLowerCase();
    let searched = allProducts.filter((p) =>
      [p.title, p.description].some((i) =>
        i.toLowerCase().includes(searchValue)
      )
    );
    setProducts(searched);
  };

  //if all products not loaded
  if (!allProducts && !category) return <>loading..</>;

  return (
    <section className="container">
      <MyCarousel />
      <div id="home">
        <Sidebar
          category={category}
          handleFilter={handleFilter}
          handleSearch={handleSearch}
          handleSort={handleSort}
          allProducts={allProducts}
          setProducts={setProducts}
        />

        <HomeCard data={data} />
      </div>
    </section>
  );
}
export default Home;
