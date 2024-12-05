import React from "react";
import AddToBasketButton from "./AddToBasketButton"; // Import reusable button

const CourseCard = ({ id, image, title, description, price }) => {
  // Clean and parse the price to ensure it's a number
  const sanitizedPrice = parseInt(price.replace(/\D/g, ""), 10) || 0;

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <p className="text-blue-600 font-bold">{sanitizedPrice} сом</p>
        <AddToBasketButton
          id={id}
          image={image}
          title={title}
          price={sanitizedPrice}
        />
      </div>
    </div>
  );
};

export default CourseCard;






