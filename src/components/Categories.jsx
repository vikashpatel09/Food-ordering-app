import React, { useEffect, useState } from "react";
import foodData from "../data/foodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../store/categorySlice";

const Categories = () => {
  // State for the categories
  const [categories, setCategories] = useState([]);

  // Extract unique categories from the array
  const listCategories = () => {
    const uniqueCategories = [
      ...new Set(foodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mx-6 mt-8">
      <h3 className="text-xl font-bold mb-2">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth md:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out ${selectedCategory === "All" && "bg-orange-500 text-white"
            }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all duration-300 ease-in-out ${selectedCategory === category && "bg-orange-500 text-white"
                } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;