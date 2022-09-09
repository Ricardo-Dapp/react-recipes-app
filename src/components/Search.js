import React from "react";
import { useState, useEffect } from "react";

const Search = () => {
  const [foodSearch, setFoodSearch] = useState("");
  const [foodData, SetFoodData] = useState([]);

  const handleChange = (event) => {
    setFoodSearch(event.target.value);
  };

  const searchData = () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a628d50938msh222c8877954209fp19a154jsn2a3d1df8c826",
        "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
      },
    };

    fetch(
      `https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${foodSearch}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        SetFoodData(response);
        console.log("list:", foodData);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchData();
    setFoodSearch("");
  };
  return (
    <div>
      <h1>Search For A Food</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Food Item"
          onChange={handleChange}
          value={foodSearch}
        />
        <button>Search</button>
      </form>
      {foodData.length > 0 &&
        foodData.map((foodItem, index) => `<p>${foodItem}</p>`)}
    </div>
  );
};

export default Search;
