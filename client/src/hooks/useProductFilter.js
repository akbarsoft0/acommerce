import React, { useState } from "react";
import { useSelector } from "react-redux";

function useProductFilter() {
  const { allProducts } = useSelector((state) => state.features);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const filterProductsByCategory = (category) => {
    if (category === "all") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  const sortProducts = (sortValue) => {
    const sortFunctions = {
      lth: (a, b) => a.price - b.price,
      htl: (a, b) => b.price - a.price,
      popularity: (a, b) => b.rating.count - a.rating.count,
      ratings: (a, b) => b.rating.rate - a.rating.rate,
    };
    const sorted = [...filteredProducts].sort(
      sortFunctions[sortValue] || ((a, b) => a - b)
    );
    setFilteredProducts(sorted);
  };

  const searchProducts = (searchValue) => {
    const searched = allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        product.description.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(searched);
  };

  return {
    filteredProducts,
    filterProductsByCategory,
    sortProducts,
    searchProducts,
  };
}
