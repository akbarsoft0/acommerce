import React from "react";
import "./sidebar.css";

function Sidebar({
  category,
  setProducts,
  allProducts,
  handleFilter,
  handleSearch,
  handleSort,
}) {
  return (
    <section>
      <div id="sidebar">
        <input
          type="search"
          placeholder="search products"
          onChange={(e) => handleSearch(e)}
          id="search"
        />
        <select name="sort" id="sort" onChange={(e) => handleSort(e)}>
          <optgroup>
            <option value="lth">normal</option>
            <option value="lth">low to hight</option>
            <option value="htl">hight to low</option>
            <option value="popularity">popularity</option>
            <option value="ratings">ratings</option>
          </optgroup>
        </select>
        <div className="category">
          <button onClick={(e) => setProducts(allProducts)}>all</button>
          {category.map((e) => {
            return (
              <button onClick={(e) => handleFilter(e)} key={e}>
                {e}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Sidebar;
