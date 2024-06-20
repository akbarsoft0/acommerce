import React, { useEffect, useState } from "react";

function useApi() {
  const [allData, setAllData] = useState();
  const getData = async () => {
    try {
      const api = "https://fakestoreapi.com/products";
      const res = await fetch(api);
      const data = await res.json();
      setAllData(data);
    } catch (error) {
      console.log("your are getting this =>", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(allData);
  return [allData];
}

export default useApi;
