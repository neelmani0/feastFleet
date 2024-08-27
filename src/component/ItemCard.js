import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 text-lg ">
              <span>{item?.name}</span>
              <span>
                - ₹{" "}
                {item?.price
                  ? item?.price / 100
                  : item?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item?.category}</p>
          </div>
          <div className="w-3/12 p-4">
            
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +{" "}
              </button>
           
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
