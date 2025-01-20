import foodData from "../data/foodData.js";
import FoodItem from "./FoodItem.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`Added ${name} `);

  return (
    <>
      <Toaster position="top-center"
        reverseOrder={false}
        toastOptions={{
          // Default options for specific types
          success: {
            duration: 1000,
            iconTheme: {
              primary: 'rgb(249, 115, 22, 1)',
              secondary: 'white',
            },
          },
        }}
      />
      <div className="flex flex-wrap gap-6 my-8 mx-6 lg:justify-normal justify-center">
        {foodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodItem
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;